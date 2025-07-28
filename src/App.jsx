import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import ProductsDetail from './pages/ProductsDetail'
import DefaultLayout from './layout/DefaultLayout'

function App() {

  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index Component={Home} />
          <Route path='/products' Component={Products} />
          <Route path='/products/:id' Component={ProductsDetail} />
          <Route path='/about_us' Component={AboutUs} />
          <Route path='/*' element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App