import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ProductsDetail(){

    const  { id }  = useParams();
    let articleId = parseInt(id);
    const [articles, setArticles] = useState([]);
    let articleInfo = articles.find(article => article.id === articleId);
    
    function fetchArticles(){
        console.log('🏗️ Products component rendering...');
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            setArticles(data)
        })
    };
    
    useEffect(fetchArticles, []);
    
    console.log('Id of the page: ' + articleId);
    console.log('Total articles: ' + articles.length);

    if(articleInfo){
        console.log('Product id: ' + articleInfo.id);
        console.log('Product name: ' + articleInfo.title);
    }

    return(
        
        <div className='mt-5 container'>
            { articleInfo ? (
                <section className="row g-5 mt-1">

                    <div className='col col-12 col-md-6 d-flex justify-content-center align-items-center my-5'>
                        <img src={articleInfo.image} className='w-50 mx-auto' />
                    </div>

                    <div className="col col-12 col-md-6 m-auto">
                        
                        <h3>{articleInfo.title}</h3>

                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <p className="text-success fs-2">{articleInfo.price} €</p>
                            </div>

                            <div className='d-flex justify-content-start align-items-center'>
                                <p className="card-text text-warning mb-0">
                                    {articleInfo.rating.rate} / 5 <span></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star pb-1 me-4" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                    </svg></p>
                                <p className="card-text text-black-50" style={{fontSize: "14px"}}>{articleInfo.rating.count} Reviews</p>
                            </div>
                        </div>

                        <p style={{fontSize: "14px"}}>Categoria: {articleInfo.category}</p>

                        <p className="card-text text-black-50 mt-2" style={{fontSize: "12px"}}>{articleInfo.description}</p>
                    
                    </div>

                </section>
            ) : (
                <p>Loading...</p>
            )}

            <div 
            className={articleId > 1 && articleId < articles.length ? 'd-flex mx-auto justify-content-between align-items-center my-5' : 'd-flex mx-auto justify-content-center align-items-center MY-5'}>
                
                <Link 
                to={`/products/${articleId - 1}`} 
                className={articleId == 1 ? 'd-none' : 'd-block'}>
                    <button className='btn btn-primary'>Prodotto Precedente</button>
                </Link>
                
                <Link to={`/products/${articleId + 1}`} 
                className={articleId == articles.length ? 'd-none' : 'd-block'}>
                    <button className='btn btn-primary'>Prodotto Successivo</button>
                </Link>
            
            </div>
        </div>
    )
}