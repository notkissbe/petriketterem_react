import {} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../index.css'
import { Link } from 'react-router-dom';
import './index.css'

interface HeaderProps {
    showExtraLink: boolean;
  }
  
  export function Header({ showExtraLink }: HeaderProps) {
    return (
      <header>
        <nav className="navbar bg-dark">
          <Link className="nav-brand mx-3" to="/">
            <img id="logo" src="src/images/restaurantlogo.png" alt="logo"/>
          </Link>
            {showExtraLink && <a className="nav-link mx-3" href='/#elerhetosegek'>Főoldal</a>}
          <a className="nav-link mx-3" href='#elerhetosegek'>Elérhetőségek</a>
        </nav>
      </header>
    );
  }