import {} from 'react';

export interface Kartya {
    kepek:string;
    nev: string;
    kategoria: string;
    ar: string;
    allergenek: string;
}

export function AdminAdd(){
    
    return (
        <div className='container'>
            <h1>Új tétel hozzáadása</h1>
            <form action="">
                <label htmlFor="nev">Név:</label><br />
                <input id='nev'></input><br />
                <label htmlFor="kategoria">Katergória:</label><br />
                <input id='kategoria'></input><br />
                <label htmlFor="ar">Ár:</label><br />
                <input id='ar'></input><br />
                <label htmlFor="allergenek">Allergének:</label><br />
                <input id='allergenek'></input><br /><br />
                <button className='btn btn-outline-light btn-sm'>Hozzáad</button>
            </form>
        </div>
    )
}