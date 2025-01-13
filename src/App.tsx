import Article from './components/Article/Article';

function App() {

  return (
    <>
      <h1>WP React</h1>
      <Article 
        title='Article de 2020'
        resume='Une veille article de 2020...'
        date={new Date(2020, 11, 30)}
        />

      <Article 
        title='Essai'
        resume='Ceci est un test !!!'
        date={new Date(2025, 0, 2)}
        />

      <Article 
        title='Tout nouveau'
        resume={'Cette article a été créer aujou\'hui !'}
        date={new Date(2025, 0, 13)}
        />
    </>
  )
}

export default App
