import React, {} from 'react'
import timerkitchen from '../../assets/img/kitchen_timer.gif'


const ChefChangeOrder = ({ order, foodList }) => {



  console.log(order)

  return (
    <>
    {
      (order.status === 'OrderPending') ?
      <aside className="card col-3 m-2">
          <div className="container-card-text">
            <img className='timer-kitchen' src={timerkitchen} alt='timer-kitchen' width="50px" />
            <p class="card-text m-2">{order.timeInit}</p> 
          </div>
          <h4 class="card-title mt-2">Mesa #{order.table}</h4>
          <p class="card-text mt-3 mx-2">CLIENTE:{order.customer}</p>

          <table class="table">
              <>
                <thead>
                  <tr>
                    <th className="text-center" scope="col">CANT.</th>
                    <th className="text-center" scope="col">PRODUCTOS</th>
                  </tr>
                </thead>

                <tbody>
                    {order.products ?
                      order.products.map((product) => (
                      <tr>
                        <th className="text-center" scope="col">{product.amount}</th>
                        <th className="text-center" scope="col">{product.name}</th>
                      </tr>
                    ))
                    : null}
                
                </tbody>
            </>
          </table>
  
        <button className="btn btn-warning m-2"onClick={()=> foodList(order)}>👌🍔🍲 Orden lista</button>
      </aside>
      : null
    }
    </>
  )
}

export default ChefChangeOrder;


