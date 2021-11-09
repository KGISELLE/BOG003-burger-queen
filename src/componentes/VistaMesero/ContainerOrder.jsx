import React from 'react';
import OrderProduct from './SumaOrder.jsx';
import { createOrder } from '../../firebase/firestore.js'
import Alert from './Alert.jsx';
import swal from 'sweetalert';
import Form from 'react-bootstrap/Form';


 const ContainerOrder = ({handleQuantity, handleRemove, state, setState, objOrder }) => {
    const sumTotal = (products) => {
        const total = products.reduce((acc, item) => acc + item.price * item.amount, 0)
        return total
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({...state, [name] : value})
      };
    
      const dataStore = async(state) => {
        createOrder(state);
        await setState(objOrder);
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        state.PriceTotal = sumTotal(state.products)
        dataStore(state);
    };

    const handleCancel = () => {
      const cleanOrder = () => {
        setState(objOrder)
      }
      Alert('¿Seguro que quieres cancelar el pedido?', 'error', true, 'Pedido cancelado', cleanOrder)
    };

    return (
        <form className="container-fluid" onSubmit={handleSubmit}>
          {/*  Sección para input cliente y mesa */}
          <div className="row">
            <div className="col-6 m-3">
              <Form.Control className='input'
                type="text"
                name="customer"
                onChange={handleInputChange}
                value={state.customer}
                placeholder="Nombre cliente"
                required
              />
            </div>
            <div className="col-4 m-3">
              <Form.Control className='input'
                type="number"
                name="table"
                onChange={handleInputChange}
                value={state.table}
                placeholder="Mesa No."
                required
              />
            </div>
          </div>
          <h3 className="border-bottom border-light">Resumen del pedido</h3>
          <section className="orderDetails">
            <div className="row">
              <h4 className="col-4 border border-white">Productos</h4>
              <h4 className="col-5 border border-white">Cantidad</h4>
              <h4 className="col-3 border border-white">Valor</h4>
            </div>
            <aside className="row">
              {state.products.map((item) => (
                <OrderProduct
                  key={item.id}
                  item={item}
                  handleQuantity={handleQuantity}
                  handleRemove={handleRemove}
                />
              ))}
              {state.products.length > 0 ?
                <h3 className="total-value">Total:  $ {sumTotal(state.products)} </h3>
                : <h3>Aún no agregas productos</h3>
              }

            </aside>
          </section>

          <div>
            {
              state.products.length > 0 ?
                <>
                  <button className="deleteBotton btn btn-danger m-4"
                    onClick={e => {
                      e.preventDefault()
                      handleCancel()}}>
                    ✖️ Cancelar pedido
                  </button>
                  <button className="btn btn-warning mt-3 btn-lg" onClick={() => {
                    if (!state.customer.trim()) {
                      swal("Falta completar el nombre del cliente", "", "error");
                    } else if (!state.table) {
                      swal("Falta completar número de mesa", "", "error");
                    }
                    else {
                      swal("Excelente", "Orden registrada", "success");
                    }
                  }}>
                    👩‍🍳 Enviar a cocina
                  </button>
                </>
                : ''
            }

          </div>
        </form>
      );
    };


export default ContainerOrder;

