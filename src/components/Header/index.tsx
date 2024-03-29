import {} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css'
import { Link } from 'react-router-dom';
import './index.css'

interface HeaderProps {
    showExtraLink: boolean;
  }
  
  export function Header({ showExtraLink }: HeaderProps) {
    return (
      <header>
        <nav className="navbar bg-dark mx-3">
          <Link className="nav-brand mx-3" to="/">
            <img id="logo" src="src/images/restaurantlogo.png" className='img-fluid' alt="logo"/>
          </Link>
            {showExtraLink && <a className="nav-link mx-3" href='/'>Főoldal</a>}
          <a className="nav-link mx-3" href='#elerhetosegek'>Elérhetőségek</a>
        </nav>
      </header>
    );
  }