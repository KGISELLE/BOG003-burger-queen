import React from "react";
import {readOrders} from '../../firebase/firestore'
import ChefChangeOrder from "./ChefChangeOrder";
import  ChefNav  from "./ChefNav";
import HeaderLogo from '../header_logo';
import {updateStatusOrder, updateTimeDateEnd } from '../../firebase/firestore'

const ChefOrder = () => {
  const [orders, setOrders] = React.useState([]);

  const foodList = (order) => {
    updateStatusOrder(order.orderId, order.status = 'OrderReady');
    updateTimeDateEnd(order.orderId, order.timeInit)
    readOrders(callback, 'asc');
  }  

  const callback = (data) => setOrders(data)

  React.useEffect(() => {
    readOrders(callback, 'asc');
  }, []); //si no coloco orders el useEfect no escucha el cambio, pero si se lo pongo me dispara los request con firebase

  //console.log(orders,)

  return (
    <section>
        <HeaderLogo/>
      <ChefNav />
      <article className="card-container">
        { orders.length > 0
          ? orders.map((order) => (
               <ChefChangeOrder
               order={order}
               key={order.orderId}
               foodList={foodList}
              /> 
            ))
          : null 
        }
      </article>
    </section>
  );
};

export default ChefOrder;

