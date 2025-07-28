import { NavLink } from 'react-router-dom'

export default function Header(){
    return(
        <header className='pb-5'>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid py-3">
                    
                    <NavLink to="/" className="navbar-brand">Grosseto's Top Shop</NavLink>
                        
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                        
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Grosseto's Top Shop</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link active" aria-current="page">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/products' className="nav-link">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/about_us' className="nav-link">About Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </header>
    )
}