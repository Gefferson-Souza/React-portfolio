import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'

import Home from './pages/Home/Home'
import Layout from './components/Layout';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projetos' />
          <Route path='/contato' />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
