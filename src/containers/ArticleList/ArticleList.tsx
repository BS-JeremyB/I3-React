import { useEffect, useState } from 'react';
import { fetchArticle } from '../../services/Article.service';
import { ArticleResponseWP } from '../../types/Article';
import Article from '../../components/Article/Article';
import ArticleSkeleton from '../../components/Article/ArticleSkeleton';

const nbArticlePerRequest = 2;

const ArticleList = () => {

    const [articles, setArticles] = useState<ArticleResponseWP[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticle(nbArticlePerRequest, 1)
            .then((result) => {
                setArticles(articles => [...articles, ...result]);
                setLoading(false);
            })
    }, []);

    return (
        <div>
            {articles.map(article => (
                <Article key={article.id}
                    title={article.title.rendered}
                    resume={article.excerpt.rendered}
                    date={new Date(article.date)}
                    />
            ))}
            { isLoading && (
                <ArticleSkeleton />
            )}
            {/* TODO Ajouter les boutons "Voir plus" */}
        </div>
    );
}

export default ArticleList;