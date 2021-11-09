import React from 'react'
import { Link } from "react-router-dom";

const ChefNav = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">

        <li class="nav-link active col-xs-12 col-sm-5 col-md-5 col-lg-6"><Link to="/chef">Órdenes a preparar</Link></li>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        </button>

        <li class="nav-link col-xs-12 col-sm-5 col-md-5 col-lg-6"><Link to="/cocina/pedidos-listos">Pedidos Terminados</Link></li>

      </div>
    </nav>

  )
}

export default ChefNav;
