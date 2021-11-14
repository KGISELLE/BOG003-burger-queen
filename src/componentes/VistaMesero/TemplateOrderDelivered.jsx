import React from 'react'

const TemplateOrderDelivered = ({orderD}) => {
  return (
    <>
    {
      (orderD.status === "delivered") ? 
          <aside className="card-delivered col-md-4 col-lg-3 m-2">
            <h4 class="card-title m-4">Mesa #{orderD.table}</h4>
            <div>
              <p class="card-text m-2">Cliente: {orderD.customer}</p>
              <hr />
            </div>
            <p p class="card-text m-2">Inicio: {orderD.dateInit} {orderD.timeInit}</p>
            <p p class="card-text m-2">Fin: {orderD.dateEnd} {orderD.timeEnd}</p>
            <p class="card-text m-2">Tiempo: {orderD.totalTime}</p>
            <hr />
            <table class="table">
              <thead>
                <tr>
                  <th className="text-center" scope="col">CANT.</th>
                  <th className="text-center" scope="col">PRODUCTOS</th>
                  <th className="text-center" scope="col">PRECIO</th>
                </tr>
              </thead>
              <tbody>
                {orderD.products
                  ? orderD.products.map((product) => (
                    <tr>
                      <th className="text-center" scope="col">{product.amount}</th>
                      <th className="text-center" scope="col">{product.name}</th>
                      <th className="text-center" scope="col">$ {product.price * product.amount}</th>
                    </tr>
                  ))
                  : null}
              </tbody>
            </table>
            <br />
            <h4><b>Total: $ {orderD.PriceTotal}</b></h4>
          </aside>
      : null
    }
    </>
  )
}

export default TemplateOrderDelivered;
