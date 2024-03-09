import { useState } from 'react';
import { Kartya } from '../rendelesdisplay/display';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../index.css'
import './index.css'

interface KosarElem {
    nev:string,
    ar:string
}

//const [tartalom,setTartalom] = useState([]as KosarElem[]);

export function KosarAdd(nev:string, ar:string){
    
    //setTartalom(["nev","ar"]]);

}

export function Kosar(){
    return(
        <div id='kosa' className='border border-3 rounded'>
            <h3 className='text-center'>Kosár:</h3>
            <hr />
            
            <p className='text-center'>Jelenleg sajnos üres :c</p>
        </div>
    )
}

/*<ul>
                {
                    tartalom.map(kartya => <li>{kartya.nev}</li>)
                }
            </ul>
            */