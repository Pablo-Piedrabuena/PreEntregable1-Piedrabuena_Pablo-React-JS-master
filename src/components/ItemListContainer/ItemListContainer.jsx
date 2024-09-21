import './ItemListContainer.css'

const ItemListContainer =({titulo})=>{
    return (
        <>
            <h1 className='titulo-principal'>{titulo}</h1>
            <section class="galeria__productos" data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
            </section>
        </>
    )
}

export default ItemListContainer