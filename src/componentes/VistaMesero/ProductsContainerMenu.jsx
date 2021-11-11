//Importamos todo lo que se require para la construcción del componente
import React, {useState} from 'react';
import dataJson from '../../data/menu.json';
import Product from './ProductMenu.jsx';


const ProductsContainer = ({selectProduct, state, handleQuantity }) => {
    const data = dataJson.products;

    const mainView = data.filter((element) => element.type === "Desayuno");
    const [products, setproducts] = useState(mainView);
    
    const productsType = (option) => {
        const products = data.filter((element) => element.type === option);
        setproducts(products);
    };

    return(
        <section className="container-fluid">
            <div className="row">

            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={() => productsType("Desayuno")}>Desayuno</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={() => productsType("Hamburguesas")}>Hamburguesas</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => productsType("Acompañamientos")}>Acompañamientos</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => productsType("Bebidas")}>Bebidas</button>
                </li>
            </ul>
            <ul>
            </ul>
 
            </div>
            
            <ul className="contenerdorMenu">
                {products.map((product) => (
                    <Product
                        product={product}
                        selectProduct={selectProduct}
                        key={product.id}
                        state={state}
                        handleQuantity={handleQuantity} />
                ))}
            </ul>
        </section>
    )
}

export default ProductsContainer;

