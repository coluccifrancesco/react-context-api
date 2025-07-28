import { NavLink } from 'react-router-dom'

export default function Header(){
    return(
        <footer>
            <div className="container my-5">
                <div className="row align-items-center justify-content-between">
                        
                    <div className="col col-12 col-sm-4 d-flex d-sm-block align-items-center flex-column p-3 mb-4">
                            
                        <h5 className="mb-3 text-primary">Privacy e Legali</h5>
                            
                        <ul className="list-group list-group-flush mx-auto">
                            <li className="list-group-item bg-transparent border-0 px-0">
                                <NavLink to='/' className=" text-decoration-none">Privacy Policy</NavLink>
                            </li>
                            <li className="list-group-item bg-transparent border-0  px-0">
                                <NavLink to='/' className=" text-decoration-none">Termini di Servizio</NavLink>
                            </li>
                            <li className="list-group-item bg-transparent border-0  px-0">
                                <NavLink to='/' className=" text-decoration-none">Cookie Policy</NavLink>
                            </li>
                            <li className="list-group-item bg-transparent border-0  px-0">
                                <NavLink to='/' className=" text-decoration-none">Diritto di Recesso</NavLink>
                            </li>
                            <li className="list-group-item bg-transparent border-0  px-0">
                                <NavLink to='/' className=" text-decoration-none">Note Legali</NavLink>
                            </li>
                        </ul>
                            
                    </div>

                    <div className="col col-12 col-sm-4 d-flex d-sm-block align-items-center flex-column p-3 mb-4">
                            
                        <h5 className="mb-3 text-primary">Guide e Articoli</h5>
                            
                        <ul className="list-group list-group-flush d-flex justify-content-center align-items-start flex-column">
                            <li className="list-group-item bg-transparent border-0  px-0">
                                <NavLink to='/products' className=" text-decoration-none">Metodi di Pagamento</NavLink>
                            </li>
                            <li className="list-group-item bg-transparent border-0  px-0">
                                <NavLink to='/products' className=" text-decoration-none">Spedizioni e Consegne</NavLink>
                            </li>
                            <li className="list-group-item bg-transparent border-0  px-0">
                                <NavLink to='/products' className=" text-decoration-none">FAQ Clienti</NavLink>
                            </li>
                            <li className="list-group-item bg-transparent border-0  px-0">
                                <NavLink to='/products' className=" text-decoration-none">Blog e News</NavLink>
                            </li>
                        </ul>
                        
                    </div>

                    <div className="col col-12 col-sm-4 d-flex d-sm-block align-items-center flex-column p-3 mb-4">
                        
                        <h5 className="mb-3 text-primary">Chi Siamo</h5>
                            
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent border-0  px-0">
                                <NavLink to='/about_us' className=" text-decoration-none">La Nostra Storia</NavLink>
                            </li>
                            <li className="list-group-item bg-transparent border-0  px-0">
                                <NavLink to='/about_us' className=" text-decoration-none">Mission e Valori</NavLink>
                            </li>
                            <li className="list-group-item bg-transparent border-0  px-0">
                                <NavLink to='/about_us' className=" text-decoration-none">Il Nostro Team</NavLink>
                            </li>
                            <li className="list-group-item bg-transparent border-0  px-0">
                                <NavLink to='/about_us' className=" text-decoration-none">Careers</NavLink>
                            </li>
                            <li className="list-group-item bg-transparent border-0  px-0">
                                <NavLink to='/about_us' className=" text-decoration-none">Contattaci</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}