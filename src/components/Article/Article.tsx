import style from './Article.module.scss';

type ArticleProps = {
    title: string;
    date: Date;
    resume: string;
};

const Article = ({ title, date, resume }: ArticleProps) => {

    const isToday = date.toDateString() === new Date().toDateString();

    const renderDate = date.toLocaleDateString('fr-be', {
        day: 'numeric',
        month: 'long',
        year: (new Date().getFullYear() !== date.getFullYear()) ? 'numeric' : undefined
    });

    return (
        <div className={style.article}>
            <h3>{title}</h3>
            <p>{isToday ? 'Aujourd\'hui' : renderDate}</p>
            <div className={style.content}>
                {resume}
            </div>
        </div>
    );
};

export default Article;