import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'

import Home from './pages/Home/Home'
import Layout from './components/Layout';
import { HoverContextProvider } from './context/Hover';
import Projects from './pages/Projects/Projects';

function App() {

  return (
    <BrowserRouter>
      <HoverContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projetos' element={<Projects />} />
            <Route path='/contato' />
          </Routes>
        </Layout>
      </HoverContextProvider>
    </BrowserRouter>
  )
}

export default App
