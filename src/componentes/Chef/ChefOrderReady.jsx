import React from 'react'
import TemplateOrderDelivered from '../VistaMesero/TemplateOrderDelivered.jsx'
import ChefNav from './ChefNav.jsx'
import {readOrders} from '../../firebase/firestore'
import HeaderLogo from '../header_logo';

 const ChefOrderReady = () => {

  const [ordersR, setOrdersR] = React.useState([]);

  const callback = (data) => setOrdersR(data)

  React.useEffect(() => {
    readOrders(callback, 'desc');
  }, []);

  return (
    <section>
      <HeaderLogo/>
      <ChefNav />
      <article className="card-container">
        {ordersR.length > 0
          ? ordersR.map((orderD) => (
              <TemplateOrderDelivered
                orderD={orderD}
                key={orderD.orderId}
              />
            ))
          : null
        }
      </article>
    </section>
  )
}

export default ChefOrderReady;