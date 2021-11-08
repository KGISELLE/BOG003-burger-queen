import React from 'react'
import { Link } from "react-router-dom";

const ChefNav = () => {
  return (
    <nav className="navServer">
        <ul>
          <li><Link to="/chef">Órdenes a preparar</Link></li>
          <li><Link to="/cocina/pedidos-listos">Pedidos Terminados</Link></li>
        </ul>
      </nav>
  )
}

export default ChefNav;