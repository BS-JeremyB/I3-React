import type { ArticleResponseWP } from '../types/Article';

// localhost:8080/wp/v2/post

const { VITE_URL_WP } = import.meta.env;

export async function fetchArticle(nbElement : number, page = 1) : Promise<ArticleResponseWP[]> {

    const response = await fetch(VITE_URL_WP + `/wp/v2/post?page=${page}&per_page=${nbElement}`);

    //! Le type réaliser ici est valable uniquement pour le dev
    //! C'est un type statique pour vous aider dans la création du code
    //! IL NE VERIFIE PAS que le typage soit respecté à l'execution
    const result : ArticleResponseWP[] = await response.json();

    return result;


    //? Equivalent avec Axios
    // axios.get('/wp/v2/post', {
    //     baseURL: VITE_URL_WP,
    //     params: { page, per_page: nbElement}
    // })
}