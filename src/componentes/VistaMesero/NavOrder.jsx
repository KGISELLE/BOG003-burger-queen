import React from 'react'
import { Link } from "react-router-dom";

const NavOrder = () => {
    return (
        <nav className="navServer">
      <ul>
        <li><Link to="/meserxs">Realizar pedidos</Link></li>
        <li><Link to="/meserxs-estadopedidos">Estado de los pedidos</Link></li>
        <li><Link to="/mesero/pedidosEntregados-clientes">Pedidos entregados</Link></li>
      </ul>
    </nav>
    )
}

export default NavOrder