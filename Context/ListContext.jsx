import { createContext, useState, useEffect } from "react"

const ListContext = createContext();

export function ListProvider({children}){

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
        <ListContext.Provider value={{ articlesList }}>
            {children}
        </ListContext.Provider>
    );
}

export default ListContext;