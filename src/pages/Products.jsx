import { useState, useEffect } from 'react'
import ProductsCard from '../components/ProductsCard';

import { useContext } from 'react'
import ListContext from '../../Context/ListContext'

export default function Products(){

    // const [articles, setArticles] = useState([]);
    
    // function fetchArticles(){
    //     console.log('🏗️ Products component rendering...');
    //     fetch('https://fakestoreapi.com/products')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log('Total articles: ' + data.length);
    //         setArticles(data)
    //     })
    // };

    // useEffect(fetchArticles, []);

    const {articlesList: articles} = useContext(ListContext);

    return(
        <main className='bg-primary-subtle'>
            <div className="container my-4 py-5">

                {articles ? (
                    <ul className="row list-unstyled">
                                
                        {articles.map((item) => (

                            <li key={item.id} className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">            
                                <ProductsCard value={item} />
                            </li>
                                
                        ))}
                            
                    </ul> ) : (<p>Loading...</p>)
                }
   
            </div>
        </main>
    )
}