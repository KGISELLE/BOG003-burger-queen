import React, { } from 'react'
import  NavOrder  from './NavOrder';
import  ChangeOrder  from './ChangeOrder';
import  {readOrders}  from '../../firebase/firestore'
import HeaderLogo from '../header_logo'

const StatusOrder = () => {
    const [ordersCooked, setOrdersCooked] = React.useState([]);

    const datos = (data) => setOrdersCooked(data)
    //console.log(datos, "data")

    const callParent = () => {
      readOrders(datos, 'asc');
    }

    React.useEffect(() => {
        readOrders(datos, 'asc');
      }, []);
     
      return (
        <section>
            <HeaderLogo/>
          <NavOrder />
          <article className="card-container">
              
            {
              ordersCooked.length > 0
              ? ordersCooked.map((order)  => (
                 <ChangeOrder
                 orderToCooked={order} 
                  key={order.id}
                  callParent={callParent}
                  
                 
                />
                
              ))
              : null
            }
          </article>
        </section>
      )
    


}

export default StatusOrder;