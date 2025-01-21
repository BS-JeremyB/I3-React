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
    const [totalArticles, setTotalArticles] = useState(0);

    useEffect(() => {
        let ignore = false;
        fetchArticle(nbArticlePerRequest, page)
            .then((result) => {
                if (ignore) { return; }

                if (result.data.length < nbArticlePerRequest) {
                    setMoreArticle(false);
                }

                setArticles(articles => [...articles, ...result.data]);
                setLoading(false);
                setTotalArticles(result.total);
            });

        return () => {
            ignore = true;
        };
    }, [page]);

    const handleLoadMore = () => {
        if (isLoading) { return; }
        setLoading(true);

        const totalPages = Math.ceil(totalArticles / nbArticlePerRequest);

        if((page+1) > totalPages){
            setMoreArticle(false);
            setLoading(false);
            return;
        }
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
                    Tous les articles ont été chargés
                </p>
            )}
        </div>
    );
};

export default ArticleList;