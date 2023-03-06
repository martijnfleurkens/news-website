import { Routes, Route, Navigate } from 'react-router-dom'
import HomeView from './views/homeView/HomeView'
import ArticleView from './views/articleView/ArticleView'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/article/:id" element={<ArticleView />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
