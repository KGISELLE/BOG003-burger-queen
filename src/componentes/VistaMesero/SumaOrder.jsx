import React from 'react';
import deleteImg from '../../assets/img/delete.png';

const OrderProduct = ({item, handleQuantity, handleRemove}) => {

    return(
        <section>
            <div className="row">
                <div className="col-4 border border-white">
                    <p className="text-menu">{item.name}</p>
                </div>
                <div className="count-container col-5 border border-white">
                    <button type="button" class="btn btn-warning" onClick={(e) => {
                        e.preventDefault()
                        handleQuantity(item.id, "-")
                    }}>-</button>

                    <p>{item.amount}</p>

                    <button type="button" class="btn btn-warning" onClick={(e) => {
                        e.preventDefault()
                        handleQuantity(item.id, "+")
                    }}>+</button>

                    <button type="button" className="btn btn-danger">
                        <img height="20px"
                            src={deleteImg} alt="" onClick={(e) => {
                                e.preventDefault()
                                handleRemove(item.id)
                            }}
                        />
                    </button>
                </div>
                <div className="col-3 border border-white">
                    <p className="productValue">${ item.price * item.amount } </p>
                </div>

            </div>
        </section>
    )
}

export default OrderProduct;