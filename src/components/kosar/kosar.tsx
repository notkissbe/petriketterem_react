import {useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../index.css'
import './index.css'
import { KosarElem } from '../../Pages/Rendelés/rendeles';



export function Kosar() {
    const [kosar, setKosar] = useState([] as KosarElem[])
    const [osszeg, setOsszeg] = useState(0);

    useEffect(()=>{
        let szamlalo = 0;
        kosar.forEach(element => {
            szamlalo += parseInt(element.ar);
        });
        setOsszeg(szamlalo);
    }, [kosar])

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
            <table>
                <tr>
                    <th>Név</th>
                    <th>Ár:</th>
                </tr>
                {
                    kosar.map(elem => <tr><td>{elem.nev}</td><td>{elem.ar}</td></tr>)
                }
            </table>
            <hr />
            <p className='mx-3'>Összeg: {osszeg}</p>
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