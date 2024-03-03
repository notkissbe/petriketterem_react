import {} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../index.css'
import './index.css'



export function Kosar(){
    return(
        <div id='kosa' className='border border-3 rounded'>
            <h3 className='text-center'>Kosár:</h3>
            <hr />
            <p className='text-center'>Jelenleg sajnos üres :c</p>
        </div>
    )
}