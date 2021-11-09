import React from 'react'
import { Link } from "react-router-dom";

const NavOrder = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">

          <li class="nav-link active col-xs-12 col-md-3 col-lg-4" ><Link to="/meserxs">Realizar pedidos</Link></li>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          </button>

          <li class="nav-link col-xs-12 col-md-4 col-lg-4"><Link to="/meserxs-estadopedidos">Estado de los pedidos</Link></li>

          <li class="nav-link col-xs-12 col-md-4 col-lg-4"><Link to="/mesero/pedidosEntregados-clientes">Pedidos entregados</Link></li>

      </div>
    </nav>
    )
}

export default NavOrder;
