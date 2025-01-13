import style from './Article.module.scss';

const ArticleSkeleton = () => {

    return (
        <div className={`${style.article} ${style.articleSkeleton}`}>
            <div></div>
            <div></div>
            <div className={style.content}></div>
        </div>
    );
};

export default ArticleSkeleton;