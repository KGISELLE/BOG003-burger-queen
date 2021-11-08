import React from 'react';

const Product = ({state, handleQuantity,selectProduct, product}) => {

    const addProducts = (id) => {
        const findProduct = state.products.find(item => item.id === id)
        if(findProduct){
            return handleQuantity(id, "+")
        }else{
            return selectProduct({...product, amount: 1});
        }
    }

    
    return(
        <div className="container-fluid">
            <div className="row border-bottom border-primary">
                <div className="container-img col-4">
                    <img src={product.img} alt=""/>
                </div>
            
                <p className="text-menu col-3">{product.name}</p>
           
                <p className="text-menu col-3">$ {product.price}</p>

                <div className="text-menu col-2">
                    <button type="button" class="btn btn-warning" onClick={() => addProducts(product.id)}>Agregar</button>
                </div>
            </div>
        </div>
    )

}

export default Product;
