import { Routes, Route, Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Paquete Express</Link>
                </li>
                <li>
                    <Link to="/sendex">Sendex</Link>
                </li>         
                <li>
                    <Link to="/Estafera">Estafeta</Link>
                </li>           
            </ul>
        </nav>

        <Outlet />
    </div>
  )
}

export default Navbar