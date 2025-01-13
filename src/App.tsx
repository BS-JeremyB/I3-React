import Article from './components/Article/Article';
import ArticleSkeleton from './components/Article/ArticleSkeleton';

function App() {

  return (
    <>
      <h1>WP React</h1>
      <Article 
        title='Article de 2020'
        resume='Une veille article de 2020...'
        date={new Date(2020, 11, 30)}
        />
        <br />

      <Article 
        title='Essai'
        resume='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quos praesentium eos. Quas quos eligendi hic velit minus atque, minima tenetur beatae praesentium suscipit error quaerat mollitia! Repudiandae, maxime voluptatum?'
        date={new Date(2025, 0, 2)}
        />
        <br />

      <Article 
        title='Tout nouveau'
        resume={'Cette article a été créé aujourd\'hui !'}
        date={new Date(2025, 0, 13)}
        />
      <br />
      
      <ArticleSkeleton />
    </>
  )
}

export default App
