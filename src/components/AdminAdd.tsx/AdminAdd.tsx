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
                <label htmlFor="kep">Kép:</label>
                <input className='form-control' type="file" name="kep" id="kep" /> <br />
                <label htmlFor="nev">Név:</label><br />
                <input className='form-control' id='nev'></input><br />
                <label htmlFor="kategoria">Katergória:</label><br />
                <select className='form-select' name="kategoria" id="kategoria">
                    <option value="Előétel">Előétel</option>
                    <option value="Leves">Leves</option>
                    <option value="Főétel">Főétel</option>
                    <option value="Köret">Köret</option>
                    <option value="Sütemény">Sütemény</option>
                    <option value="Nem alkoholos ital">Nem alkoholos ital</option>
                    <option value="Alkoholos">Alkoholos</option>
                </select><br />
                <label htmlFor="ar">Ár:</label><br />
                <input className='form-control' id='ar'></input><br />
                <label htmlFor="allergenek">Allergének:</label><br />
                <input className='form-control' id='allergenek'></input><br /><br />
                <button className='btn btn-outline-light'>Hozzáad</button>
            </form>
        </div>
    )
}