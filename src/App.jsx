import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import ListContext from '../Context/ListContext'

import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import ProductsDetail from './pages/ProductsDetail'
import DefaultLayout from './layout/DefaultLayout'

function App() {
  
  const [articlesList, setArticlesList] = useState([]);
      
  function fetchArticles(){
  console.log('🏗️ Products component rendering...');
  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
      console.log('Total articles: ' + data.length);
      setArticlesList(data)
    })
  };
  
  useEffect(fetchArticles, []);

  return (
    <ListContext.Provider value={{articles:{articlesList}}}>
      
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
    
    </ListContext.Provider>
  )
}

export default App


// Consegna 
// Sfruttiamo le Context API per rendere disponibile la lista 
// dei prodotti in tutta la nostra app. 

// Partiamo col definire la lista dei prodotti all’interno di App.jsx 

// Se non lo abbiamo già fatto in precedenza, 
// creiamo un componente ProductsPage.jsx che 
// conterrà al suo interno un titolo e 
// un componente ProductsList.jsx che mostra 
// la lista di tutti i nostri post. ✅

// Creiamo un file per definire il nostro Context ed esportiamolo ✅

// Importiamo il Provider in App.jsx e wrappiamoci 
// la nostra applicazione - ✅
// Facciamo in modo che il componente ProductsList.jsx recuperi 
// i prodotti consumando il Context e crei dunque una card 
// per ciascuno di essi.

// La struttura dell’App deve essere
// App.jsx > ProductsPage.jsx > ProductsList.jsx > ProductCard.jsx
// Mio caso: 
// App.jsx > ProductsPage.jsx > ProductsList.jsx > ProductCard.jsx

// Bonus
// Implementare un componente Alert gestito tramite Context