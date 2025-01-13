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
        <div>
            <h3>{title}</h3>
            <p>{isToday ? 'Aujourd\'hui' : renderDate}</p>
            <p>{resume}</p>
        </div>
    );
};

export default Article;