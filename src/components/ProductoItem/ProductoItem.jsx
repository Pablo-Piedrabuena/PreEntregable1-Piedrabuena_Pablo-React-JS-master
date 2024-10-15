import './ProductoItem.css'
import { useNavigate } from 'react-router-dom'
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { useEffect, useState } from 'react'

const ProductoItem =({datosProducto})=>{
    const navigate = useNavigate()
    const handleClick= (event) => {
        let ruta = datosProducto.categoria + "/" + datosProducto.id
        navigate(ruta)
        return (
                
                <ItemDetailContainer productoinfo={[datosProducto]}></ItemDetailContainer>
        )
    }

    return (
        <>
        <article className="productos__item" id={datosProducto.id}>
                <figure>
                    <img src={datosProducto.img}/>
                    <figcaption><strong>{datosProducto.nombre}</strong></figcaption>
                </figure>
                <div className="item-infoProducto">
                    <p className="infoProducto-descripcion">{datosProducto.descripción}</p>
                    <p className="infoProducto-stock">Stock Disponible: {datosProducto.stock}</p>
                    <p className="infoProducto-precio">${datosProducto.precio.toFixed(2)}</p>
                    <p className="infoProducto-id">{datosProducto.id}</p>
                    <button type="boton" className="comprar" onClick={handleClick}>Comprar</button>
                   {/*  <input type="hidden" id="stockInput" value={datosProducto.stock}/> */}
                </div>
                {/* <div className="sin-stock" id="">
                    <p>Sin stock</p>
                </div> */}
            </article>
        </>
    )
}

export default ProductoItem