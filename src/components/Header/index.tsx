import {} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../index.css'
import { Link } from 'react-router-dom';
import './index.css'

export function Header(){
    return(
        <header>
            <nav className="navbar bg-dark">
                <Link className="nav-brand ms-3" to="/">
                    <img id="logo" src="src/images/restaurantlogo.png" alt="logo"/>
                </Link>
                <a className="nav-link ms-3" href='#elerhetosegek'>Elérhetőségek</a>
                <Link className="nav-link ms-3" to="/etlap" id="etlap">Étlap</Link>
      </nav>
    </header>
    )
}