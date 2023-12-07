import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'

import Home from './pages/Home/Home'
import Layout from './components/Layout';
import { HoverContextProvider } from './context/Hover';

function App() {

  return (
    <BrowserRouter>
      <HoverContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projetos' />
            <Route path='/contato' />
          </Routes>
        </Layout>
      </HoverContextProvider>
    </BrowserRouter>
  )
}

export default App
