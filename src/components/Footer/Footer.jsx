import './Footer.css'

const Footer =()=>{
    return (
        <>
            <footer className="contenedor-footer">
        <div className="contenedor-footer__columna">
            <h3>Oficinas</h3>
            <p>Alem y Boulevar Sarmiento</p>
            <p>Nogoyá, Entre Ríos (CP 3150)</p>
            <p>Tel.:(03435) 421124</p>
        </div>
        <div className="contenedor-footer__columna">
            <h3>Planta</h3>
            <p>Nogoyá, Entre Ríos (CP 3150)</p>
            <p>Tel.:(03435) 425058</p>
        </div>
        <div className="contenedor-footer__columna email">
            <h3>Email:</h3>
            <a className="email" href="mailto:ventas@lacteosnogolac.com">ventas@lacteosnogolac.com</a>
            <a className="email" href="mailto:lacteosnogolac@hotmail.com">lacteosnogolac@hotmail.com</a>
        </div>
        <div className="contenedor-footer__columna">
            <h3>Seguinos</h3>
            <a href="https://www.facebook.com/L%C3%A1cteos-Nogolac-105397054165370/" target="_blank"
                rel="noopener"><img src="/src/components/Footer/assets/facebook.png" alt="Icono facebook  con enlace"/></a>
            <a href="https://www.instagram.com/lacteosnogolac/" target="_blank" rel="noopener"><img
                    src="/src/components/Footer/assets/instagram.png" alt="icono instagram con enlace"/></a>
            <a href="https://www.twitter.com/lacteosnogolac/" target="_blank" rel="noopener"><img
                    src="/src/components/Footer/assets/x.png" alt="icono x con enlace"/></a>
            <a href="https://www.google.com.ar/maps/place/Nogolac/@-32.3938333,-59.8002694,12z/data=!4m8!1m2!2m1!1slacteos+nogolac!3m4!1s0x95b135e079e3198b:0x9a4e43d439446c0d!8m2!3d-32.395391!4d-59.7948416"
            target="_blank" rel="noopener"><img src="/src/components/Footer/assets/google.png" alt="icono google con enlace"/></a>
        </div>
        <div className="columna__parrafo">
            <p className="">© Pablo P - Pagina hecha solo a fines educativos.</p>
        </div>
    </footer>
        </>
    )
}

export default Footer