import {} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../index.css'

export function Header(){
    return(
        <header>
            <nav className="navbar bg-dark">
                <a className="nav-brand ms-3" href="">
                    <img id="logo" src="src/images/restaurantlogo.png" alt=""/>
                </a>
                <a className="nav-link ms-3" href="nyitvatartas.html" id="nyitvatartas">Nyitvatartás</a>
                <a className="nav-link ms-3" href="" id="etlap">Étlap</a>
      </nav>
    </header>
    )
}