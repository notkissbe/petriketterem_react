import { useState } from 'react';

export interface Kartya {
    kepek:string;
    nev: string;
    kategoria: string;
    ar: string;
    allergenek: string;
}

export function AdminAdd(){
    const [filel,setFileL] = useState<File|null>(null);
    

    function sendtobackend(e : React.FormEvent){
        e.preventDefault();
        if(filel == null){
            alert("nincs kep feltoltve!");
            return;
        }
        const target = e.target as typeof e.target & {
            nev: {value:string};
            allergenek: {value:string};
            kategoria: {value:string};
            ar: {value:string};
            kep: {value:File};
        }
        //const kep = filel.name;
        const url = "http://localhost:3000/upload"
        //console.log(kep)
        let formdata = new FormData();
        formdata.append("nev",target.nev.value);
        formdata.append("allergenek",target.allergenek.value)
        formdata.append("kategoria",target.kategoria.value)
        formdata.append("ar",target.ar.value)
        formdata.append("image",filel!)

        fetch(url, {
            method: "post",
            body: formdata
        })

        /*{
                nev: target.nev.value,
                allergenek: target.allergenek.value,
                kategoria: target.kategoria.value,
                ar: target.ar.value,
                image: target.kep.value
            }*/
        e.currentTarget.children[20].classList.add("bg-success")
    };
    
    async function handleFileChange(e:React.SyntheticEvent){
        //e.preventDefault();
        let target = e.target as HTMLInputElement;
        if(target.files?.length! > 0){
            setFileL(target.files![0]);
            await console.log(filel?.name);
        }
        else{
            alert("hiba a fajl feltoltesekor")
        }

    }
    
    
    
    return (
        <div className='container'>
            <h1>Új tétel hozzáadása</h1>
            <form onSubmit={sendtobackend}>
                <label htmlFor="kep">Kép:</label>
                <input className='form-control' type="file" name="kep" id="kep" onChange={handleFileChange} /> <br />
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
                <input className='form-control' id='ar' type='number'></input><br />
                <label htmlFor="allergenek">Allergének:</label><br />
                <input className='form-control' id='allergenek'></input><br /><br />
                <button className='btn btn-outline-light'>Hozzáad</button>
            </form>
        </div>
    )
}