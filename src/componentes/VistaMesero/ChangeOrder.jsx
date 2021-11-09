import React from 'react'
import { updateStatusOrder  } from '../../firebase/firestore'

 const ChangeOrder = ({ orderToCooked, callParent }) => {


  const chanceStatus = (status) => {
    if (status === 'OrderReady') {
      return 'active'
    } else if (status === 'OrderPending') {
      return 'inactive'
    }
  }

   const foodReadyDeliver = (id) => {
    updateStatusOrder(id, orderToCooked.status = 'delivered')
    callParent()
  }; 

  return (
    <>
      {
        (orderToCooked.status === 'OrderPending' || orderToCooked.status === 'OrderReady') ?
          
          <div class="card col-3 m-2" >
            <div class="card-body">
              <div className="container-date">
                <p class="card-text">{orderToCooked.dateInit}</p>
                <p class="card-text">{orderToCooked.timeInit}</p>
              </div>
              
              <h4 class="card-title mt-2">Mesa No. {orderToCooked.table}</h4>
              <p class="card-text mt-3">Cliente:  {orderToCooked.customer}</p>

              <table class="table">
                <thead>
                  <tr>
                    <th className="text-center" scope="col">CANT.</th>
                    <th className="text-center" scope="col">PRODUCTOS</th>
                  </tr>
                </thead>

                <tbody>
                  
                    {orderToCooked.products ? orderToCooked.products.map((prod) => (
                      <tr>
                        <th className="text-center" scope="col">{prod.amount}</th>
                        <th className="text-center" scope="col">{prod.name}</th>
                      </tr>
                    ))
                    : null}
                
                </tbody>
              </table>
              
              
              <h4 className=""> Total: $ {orderToCooked.PriceTotal}</h4>
              <button className="btn btn-warning mt-3"
                id={chanceStatus(orderToCooked.status)}
                onClick={() => foodReadyDeliver(orderToCooked.orderId, orderToCooked.status)}
                disabled={
                  orderToCooked.status === 'OrderPending' ? true : false
                }
              >
                {
                  orderToCooked.status === 'OrderPending' ? '👩‍🍳🥕🍳 Preparando orden' : '🤵🍽️ Listo para servir'
                }
              </button>

            </div>
          </div>
          : null
      }
    </>
  )

}

export default ChangeOrder; 
