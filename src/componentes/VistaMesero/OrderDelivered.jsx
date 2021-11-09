import React,{useState}from 'react'
import TemplateOrderDelivered from './TemplateOrderDelivered.jsx'
import  NavOrder from './NavOrder.jsx'
import  {readOrders}  from '../../firebase/firestore'
import HeaderLogo from '../header_logo';

 const OrderDelivered = () => {

  const [ordersHistory, setOrdersHistory] = useState([]);

  const datos = (data) => setOrdersHistory(data)

  React.useEffect(() => {
    readOrders(datos, 'desc');
  }, []);

  return (
    <section>
      <HeaderLogo/>
      <NavOrder />
      <div className="card-container">
        {ordersHistory.length > 0
          ? ordersHistory.map((orderD) => (
              <TemplateOrderDelivered
              orderD={orderD}
                key={orderD.id}
              />
            ))
          : null
        }
      </div>
    </section>
  )
}


export default OrderDelivered