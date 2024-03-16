import {useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../index.css'
import './index.css'
import { KosarElem } from '../../Pages/Rendelés/rendeles';



export function Kosar() {
    const [kosar, setKosar] = useState([] as KosarElem[])
    function load(){
        if (localStorage.length > 0) {
            var old: KosarElem[] = JSON.parse(localStorage.getItem("Kosar") || '{}');
            setKosar(old);
        }
        else{
            setKosar([]);
        }
    }
    window.addEventListener("storage", load)

    function handleTorles(){
        localStorage.clear();
        load();
    }

    if (kosar.length == 0) {
        return (
            <div id='kosa' className='border border-3 rounded'>
                <h3 className='text-center'>Kosár:</h3>
                <hr />

                <p className='text-center'>Jelenleg sajnos üres :c</p>
            </div>
        )
    }
    else {
        return(
        <div id='kosa' className='border border-3 rounded'>
            <h3 className='text-center'>Kosár:</h3>
            <hr />
            <ul>
                {
                    kosar.map(elem => <li>{elem.nev}, {elem.ar}</li>)
                }
            </ul>
            <hr />
            <p className='mx-3'>Összeg: </p>
            <div className='row'>
            <button className='btn text-center' onClick={handleTorles}>Kosár ürítése</button>
            <button className='btn '>Rendelés</button>
            </div>
        </div>
        )

    }
}

/*<ul>
                {
                    tartalom.map(kartya => <li>{kartya.nev}</li>)
                }
            </ul>
            */