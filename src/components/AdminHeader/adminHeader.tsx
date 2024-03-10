import {} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';

export function AdminHeader(){

    return (
            <header>
              <nav className="navbar bg-dark mx-3 border-bottom">
                <Link className="nav-brand mx-3" to="/">
                  <img id="logo" src="src/images/restaurantlogo.png" alt="logo"/>
                </Link>
                <Link className='nav-link mx-3' to={"/admin"}>Áttekintés</Link>
                <Link className='nav-link mx-3' to={"/admin/add"}>Hozzáadás</Link>
                <Link className='nav-link mx-3' to={"/admin/torles"}>Törlés</Link>
              </nav>
            </header>
          
    );
}