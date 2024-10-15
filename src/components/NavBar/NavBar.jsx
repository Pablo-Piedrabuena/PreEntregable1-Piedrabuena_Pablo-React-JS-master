
import './NavBar.css'
import CartWidget from "./CartWidget"

const NavBar =({ logo, links })=>{
    return (
        <>
            <nav className="nav-ecomerce">
                <div className="nav-ecomerce__contenedor-logo">
                    <a href="index" tabIndex={-1}>
                        <img src={logo} alt="Logo"/>
                    </a>
                    <div className="contenedor-logo__relleno"></div>
                </div>
                <ul className='nav-ecomerce__enlaces'>
                    {links.map((link, index) => (
                        <li key={index} className='nav-ecomerce__enlaces'>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
                {/* <div className='carrito__nav-ecomerce'>
                    <img src="src/components/NavBar/carrito.svg" alt="carrito" />
                    <span>1500</span>
                </div> */}
                <CartWidget/>
                <button className='nav-ecomerce__btn-menu'><img src="src/components/NavBar/assets/menu.svg" alt="icono menu" /></button>
            </nav>
        </>
    )
}

export default NavBar