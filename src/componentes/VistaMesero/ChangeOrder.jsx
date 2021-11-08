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
          <section>
            <h3>Mesa Nª{orderToCooked.table}</h3>
            <div>
              <p>Cliente:{orderToCooked.customer}</p>
              <p><b>Fecha: </b>{orderToCooked.dateInit}</p>
              <p><b>Hora: </b>{orderToCooked.timeInit}</p>
               
            </div>
            <div>
              {orderToCooked.products ? orderToCooked.products.map((prod) => (
                <div>
                  <p>{prod.amount}</p>
                  <p>{prod.name}</p>
                </div>
              ))
                : null}
            </div>
            <h4 className=""> Total: $ {orderToCooked.PriceTotal}</h4>
            <button
              className={chanceStatus(orderToCooked.status)}
              onClick={() => foodReadyDeliver(orderToCooked.orderId, orderToCooked.status)}
              disabled={
                orderToCooked.status === 'OrderPending' ? true : false
              }
            >
              {
                orderToCooked.status === 'OrderPending' ? 'Preparando orden' : 'Listo para servir'
              }
            </button>
          </section>
          : null
      }
    </>
  )



}

export default ChangeOrder; 