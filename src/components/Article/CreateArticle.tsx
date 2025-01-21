import React, { useState } from "react";
import { createArticle } from "../../services/Article.service";

const CreateArticle = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState<string|null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        try{
            const success = await createArticle({title, content});

            if(success){
                setMessage('Articlé créé');
                setTitle('');
                setContent('');
            }else{
                setMessage('Erreur lors de la création de l\'article');
            }
        }catch(err){
            setMessage('Une erreur est survenue')
        }
    };

    return (
        <div>
            <h2>Créer un article</h2>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Titre :</label>
                    <input id="title" type="text" value={title} 
                    onChange={(e)  => setTitle(e.target.value)}
                    required />
                </div>
                <div>
                    <label htmlFor="content">Contenu :</label>
                    <textarea id="content" value={content} 
                    onChange={(e)  => setContent(e.target.value)}
                    required></textarea>
                </div>
                
                <button type="submit">Créer l'article</button>
            </form>
            
        </div>
    );
};

export default CreateArticle;