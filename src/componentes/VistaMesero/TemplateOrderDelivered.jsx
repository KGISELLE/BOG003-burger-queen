import React from 'react'

const TemplateOrderDelivered = ({orderD}) => {
  return (
    <>
    {
      (orderD.status === "delivered") ? 
      <aside className="" >
        <section>
          <h3>Mesa #{orderD.table}</h3>
          <div>
            <p><b>Cliente: </b>{orderD.customer}</p>
            <p><b>Inicio:</b> {orderD.dateInit} {orderD.timeInit}</p>
            <p><b>Fin:</b> {orderD.dateEnd} {orderD.timeEnd}</p>
            <p><b>Tiempo:</b> {orderD.totalTime}</p>
            <hr />
          </div>
          <div>
            {orderD.products
              ? orderD.products.map((product) => (
                <div className="">
                  <div className="">
                    <p>{product.amount}</p>
                    <p>{product.name}</p>
                  </div>
                  <p className="">$ {product.price*product.amount}</p>
                </div>  
                ))
              : null
            }
          </div>
        </section>
        <br />
        <h4><b>Total: $ {orderD.PriceTotal}</b></h4>
      </aside>
      : null
    }
    </>
  )
}

export default TemplateOrderDelivered;
