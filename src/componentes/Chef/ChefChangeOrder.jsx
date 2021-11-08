import React, {} from 'react'
import timerkitchen from '../../assets/img/kitchen_timer.gif'


const ChefChangeOrder = ({ order, foodList }) => {



  console.log(order)

  return (
    <>
    {
      (order.status === 'OrderPending') ?
      <aside className="">
        <section>
          <h3>Mesa #{order.table}</h3>
          <div className="">
            <p>Cliente:{order.customer}</p>
           <p>Hora del pedido:{order.timeInit}</p> 
          </div>
          <div>
            { order.products ?
            order.products.map((product) => (
              <div className="">
              <p>{product.amount}</p>
              <p>{product.name}</p>
            </div>
            )): null}
          </div><br />
        </section>
        <div>
        <p>
        
          <img className='timer-kitchen' src={timerkitchen} alt='timer-kitchen' />
        </p>
        </div>
        <button onClick={()=> foodList(order)}>Orden lista</button>
      </aside>
      : null
    }
    </>
  )
}

export default ChefChangeOrder;
