import type { ArticleResponseWP, ArticleRequestWP } from '../types/Article';

// localhost:8080/wp/v2/post

const { VITE_URL_WP } = import.meta.env;

export async function fetchArticle(nbElement : number, page = 1)  {

    const response = await fetch(VITE_URL_WP + `wp-json/wp/v2/posts?page=${page}&per_page=${nbElement}`);
    

    //! Le type réaliser ici est valable uniquement pour le dev
    //! C'est un type statique pour vous aider dans la création du code
    //! IL NE VERIFIE PAS que le typage soit respecté à l'execution
    const total = parseInt(response.headers.get('x-wp-total') || '0');
    const data : ArticleResponseWP[] = await response.json();

    //! [ONLY FOR DEV] Add latence on request
    await (new Promise(resolve => setTimeout(resolve, 500)));

    return {total, data};


    //? Equivalent avec Axios
    // axios.get('/wp/v2/post', {
    //     baseURL: VITE_URL_WP,
    //     params: { page, per_page: nbElement}
    // })
}

export async function createArticle(article:ArticleRequestWP): Promise<boolean> {

    try{
        const wpApiSettings = (window as any).wpApiSettings;
        const nonce = wpApiSettings?.nonce;

        if(!nonce){
            console.error('Nonce non trouvé')
            return false;
        }

        const response = await fetch(VITE_URL_WP + 'wp-json/wp/v2/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': nonce
            },
            body: JSON.stringify({
                title : article.title,
                content : article.content,
                status: 'publish'
            }),
            credentials: 'include'
        });

        return response.ok
    }catch(err){
        console.error('Erreur lors de la création de l\'article :', err)
        return false;
    }
    
}