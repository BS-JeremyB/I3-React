import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleList from './containers/ArticleList/ArticleList';
import Login from './components/Auth/Login';
import CreateArticle from './components/Article/CreateArticle';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/login/" element={<Login />} />
      <Route path="/create/" element={<CreateArticle />} />
    </Routes>
  </Router>
)
  



// function App() {

//   return (
//     <>
//       <h1>WP React</h1>
//       <ArticleList />
//     </>
//   )
// }

export default App
