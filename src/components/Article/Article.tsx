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

    //! Le contenu de la requete WP contient du HTML : 
    //! Deux solutions : 
    //! - Modifier la réponse que retirer les balises HTML
    //! - Utiliser l'attibut "dangerouslySetInnerHTML" pour afficher les balises html.
    //!   Attention, celui-ci permet d'injecter du code !!!

    return (
        <div className={style.article}>
            <h3>{title}</h3>
            <p>{isToday ? 'Aujourd\'hui' : renderDate}</p>
            <div className={style.content}
                dangerouslySetInnerHTML={{
                    __html: resume
                }}>
            </div>
        </div>
    );
};

export default Article;