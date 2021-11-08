import React from 'react';
//import logo from './logo.svg';
import PagInicio from './componentes/inicio.jsx'
import WaitersView from './componentes/VistaMesero/Viewmeseros.jsx'
import StatusOrder from './componentes/VistaMesero/StatusOrder.jsx'
import OrderDelivered from './componentes/VistaMesero/OrderDelivered.jsx'
import ChefOrder from './componentes/Chef/ChefOrder.jsx'
import ChefOrderReady  from './componentes/Chef/ChefOrderReady'
import './index.css';
import './components.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Switch>
        <Route exact path="/" component={PagInicio} />
        <Route exact path="/meserxs" component={WaitersView} />
        <Route exact path="/meserxs-estadopedidos" component={StatusOrder} />
        <Route exact path="/mesero/pedidosEntregados-clientes" component={OrderDelivered} />
        <Route exact path="/chef" component={ChefOrder} />
        <Route exact path="/cocina/pedidos-listos" component={ChefOrderReady} />
        </Switch>
    </Router>    
  )
  
}

export default App;
