import {db} from './firebaseconfig.js'
import {collection, addDoc, updateDoc, doc,query, getDocs, orderBy } from "firebase/firestore";

const createOrder = (orderData) => {
    addDoc(collection(db, 'orders'), {
        ...orderData
    })
}

const updateStatusOrder =  (idOrder, statusValue) => {
     updateDoc(doc(db, 'orders', idOrder), {
        status: statusValue,
    })
}

const updateTimeDateEnd =  (idOrder, initTime) => {
  updateDoc(doc(db, 'orders', idOrder), {
    timeEnd: orderTime(),
    dateEnd: orderDate(),
    totalTime: duration(initTime)
 })
}

const duration = (initTime) => {
  const a = orderTime().split(':');
  const b = initTime.split(':');
  const aParse = parseInt(a[0])*60 + parseInt(a[1])
  const bParse = parseInt(b[0])*60 + parseInt(b[1])
  const difMin = aParse - bParse
  return `${difMin} minuto(s)` 
}



const readOrders = async(cb, order) => {
    const q = query(
        collection(db,'orders'), orderBy("orderDateTime", order)
    )

    const snap = await getDocs(q)
    const arrOrders = [];
    snap.forEach((doc) => 
    arrOrders.push({
        orderId: doc.id,
        ...doc.data()
    })
    );
    cb(arrOrders)
}

 

  const orderTime = () => {
    const time = { hour24: 'true', hour: 'numeric', minute: 'numeric'};
    const newTime = new Date().toLocaleTimeString('es-Es', time);
    return `${newTime}`
  }
  
  const orderDate = () => {
    const date = { month: 'short', day: 'numeric', year: 'numeric' };
    const newDate = new Date().toLocaleDateString('es-Es', date);
    return `${newDate}`
  }
  
/*  const orderDateTime = (dataTime) => new Intl.DateTimeFormat('default', {
    year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric',
  }).format(new Date(dataTime)); */

  const orderDateTime = () => {
    const year = new Date().getFullYear();
    const month = `0${new Date().getMonth()}`.slice(-2);
    const day = `0${new Date().getDate()}`.slice(-2);
    const hour = `0${new Date().getHours()}`.slice(-2);
    const minute = `0${new Date().getMinutes()}`.slice(-2);
    const second = `0${new Date().getSeconds()}`.slice(-2);
    // eslint-disable-next-line radix
    return parseInt(`${year}${month}${day}${hour}${minute}${second}`, 0);
  };

  
 

export {
    createOrder,
    updateStatusOrder,
    readOrders,
    orderDate,
    orderTime,
    orderDateTime,
    duration,
    updateTimeDateEnd,
   
    }