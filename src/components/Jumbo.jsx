import { NavLink } from 'react-router-dom'

export default function Jumbo() {
    return (
        <div className='mt-5'>
            <div className="row align-items-md-stretch">
                <div className="col">
                    <div className="h-100 p-5 text-black bg-transparent">
                        <h2>Stile Toscano - Moda che Parla di Te</h2>
                        <p>Scopri il tuo look unico nel cuore di Grosseto! Abbigliamento di tendenza, qualità artigianale e stile senza tempo per uomo e donna. Vieni a vivere la moda che racconta chi sei!</p>
                        <div className='d-flex align-items-center justify-content-start'>
                            <NavLink to='/products' className="nav-link"><button className="btn btn-primary" type="button">
                                Scopri gli articoli
                            </button></NavLink>
                            <NavLink to='/about_us' className="nav-link"><button className="btn btn-warning ms-5 " type="button">
                                La nostra storia
                            </button></NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            className='d-block w-100'
                            src="https://picsum.photos/600"
                            srcSet="
                                https://picsum.photos/300 300w,
                                https://picsum.photos/600 600w,
                                https://picsum.photos/900 900w
                            "
                            sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 900px"
                            alt="Immagine Lorem Picsum"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className='d-block w-100'
                            src="https://picsum.photos/600"
                            srcSet="
                                https://picsum.photos/300 300w,
                                https://picsum.photos/600 600w,
                                https://picsum.photos/900 900w
                            "
                            sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 900px"
                            alt="Immagine Lorem Picsum"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className='d-block w-100'
                            src="https://picsum.photos/600"
                            srcSet="
                                https://picsum.photos/300 300w,
                                https://picsum.photos/600 600w,
                                https://picsum.photos/900 900w
                            "
                            sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 900px"
                            alt="Immagine Lorem Picsum"
                        />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}