
import './ItemDetailContainer.css'
/* import ProductoItem from "../ProductoItem/ProductoItem" */
/* import NavBarCategoria from "../NavBarCategoria/NavBarCategoria" */
/* import {Routes, Route} from 'react-router-dom' */
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const ItemDetailContainer =({productoinfo})=>{
    const params = useParams() 
    console.log(params.id)
   /*  console.log(productos.filter(producto => producto.categoria == parseInt(productoinfo))) */

    return (
        <>
            <section className="itemDetailContainer">
                <div className="agregarProducto-Carrito__ConetenedorImagen ">
                    <img src={productoinfo.img} alt="" className="agregarProducto-Carrito__item" />
                </div>
                <form className="agregarProducto-Carrito__Conetenedorform">
                    {/* <button className="Conetenedorform__boton-salir">X</button> */}
                    <h3 className="agregarProducto-Carrito__item" >Crema de leche en Balde</h3>
                    <p className="agregarProducto-Carrito__item precio">$5.245.28</p>
                    <p className="agregarProducto-Carrito__item">Precio por Balde de 5 Lts.</p>
                    <div className="cantidad-disponible">
                        <p className="agregarProducto-Carrito__item cantidad-disponible">Cantidad Disponible:</p>
                        <p className="agregarProducto-Carrito__item">100.</p>
                    </div>
                    <div className="cantidad-comprar">
                        <label htmlFor="cantidad" className="agregarProducto-Carrito__item">Cantidad:</label>
                        {/* <input type="number" id="cantidad" className="agregarProducto-Carrito__item" min="1" value="1"/> */}
                    </div>
                    <button className="Conetenedorform__agregar-carrito">Agregar al carrito</button>
                </form>
            </section>
        </>
    )
}

export default ItemDetailContainer

