import { useState } from 'react';
import { Kartya } from '../rendelesdisplay/display';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../index.css'
import './index.css'
import { KosarElem } from '../../Pages/Rendelés/rendeles';



export function Kosar({kosarElemek}:{kosarElemek:KosarElem[]}){
    
    console.log(kosarElemek)
    if (kosarElemek.length == 0) {
        return(
            <div id='kosa' className='border border-3 rounded'>
                <h3 className='text-center'>Kosár:</h3>
                <hr />
                
                <p className='text-center'>Jelenleg sajnos üres :c</p>
            </div>
        )
    }
    else{
        <ul>
                {
                    kosarElemek.map(elem => <li>{elem.nev}, elem.ar</li>)
                }
        </ul>
    }
}

/*<ul>
                {
                    tartalom.map(kartya => <li>{kartya.nev}</li>)
                }
            </ul>
            */