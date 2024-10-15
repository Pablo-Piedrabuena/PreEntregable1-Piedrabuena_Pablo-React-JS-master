import './NavBarCategoria.css'
const NavBarCategoria =({})=>{
    return (
        <>
            <section className="section-filtro">
                <nav>
                    <ul className="navproductos">
                        <li className="navproductos__item"><a href="/productos">Todos</a></li>
                        <li className="navproductos__item"><a href="/productos/queso">Quesos</a></li>
                        <li className="navproductos__item"><a href="/productos/crema" id="filtroCremaLeche">Crema de Leche</a></li>
                        <li className="navproductos__item"><a href="/productos/manteca" id="filtroManteca">Manteca</a></li>
                        <li className="navproductos__item"><a href="/productos/leche" id="filtroLeche">Leche</a></li>       
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default NavBarCategoria