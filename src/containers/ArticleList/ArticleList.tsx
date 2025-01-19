import { useEffect, useState } from 'react';
import { fetchArticle } from '../../services/Article.service';
import { ArticleResponseWP } from '../../types/Article';
import Article from '../../components/Article/Article';
import ArticleSkeleton from '../../components/Article/ArticleSkeleton';
import style from './ArticleList.module.scss';

const nbArticlePerRequest = 2;

const ArticleList = () => {

    const [articles, setArticles] = useState<ArticleResponseWP[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [moreArticle, setMoreArticle] = useState(true);

    useEffect(() => {
        let ignore = false;
        fetchArticle(nbArticlePerRequest, page)
            .then((result) => {
                if (ignore) { return; }

                setArticles(articles => [...articles, ...result]);
                setLoading(false);

                if (result.length < nbArticlePerRequest) {
                    setMoreArticle(false);
                }
            });

        return () => {
            // Stop state update on clean effect 
            ignore = true;
        };
    }, [page]);

    const handleLoadMore = () => {
        if (isLoading) { return; }

        setLoading(true);
        setPage(page => page + 1);
    };

    return (
        <div className={style.articleList}>
            {articles.map(article => (
                <Article key={article.id}
                    title={article.title.rendered}
                    resume={article.excerpt.rendered}
                    date={new Date(article.date)}
                />
            ))}
            {isLoading && (
                <ArticleSkeleton />
            )}
            {moreArticle ? (
                <button className={style.btnLoad}
                    onClick={handleLoadMore}
                    disabled={isLoading}>
                    Voir plus
                </button>
            ) : (
                <p className={style.allLoaded}>
                    Tout les articles ont été chargé
                </p>
            )}
        </div>
    );
};

export default ArticleList;