import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export interface Kartya {
    kepek:string;
    nev: string;
    kategoria: string;
    ar: string;
    allergenek: string;
}



export function CreateCard(props: Kartya) {

    return (
        <div className="card mt-3 mx-auto">
            <img src={"http://localhost:3000/"+props.kepek} alt="" className="card-img-top rounded CardImage" />
            <div className="card-body text-center">
                <h5 className="card-title" >{props.nev}</h5>
                <p className="text-end" hidden >{props.kategoria}</p>
                <p className="card-text">{props.allergenek}</p>
                <div className="row">
                    <p className="col">{props.ar + " ft"}</p>
                    <p></p>
                    <button className="col btn btn-outline-light btn-sm position-absolute bottom-0 start-0" onClick={()=>{handleTorles(props.nev,props.kategoria)}}>Törlés</button>
                </div>
            </div>
        </div>
    )

}
async function handleTorles(nev:string,kategoria:string){
    console.log(kategoria)
    if (window.confirm(`Biztosan törölni akarja a következőt?\n${nev}`)){
        if(kategoria=="Nem alkoholos ital" || kategoria == "Alkoholos"){
            await fetch('http://localhost:3000/ital:' + encodeURI(nev),{
                method: 'DELETE'
            })
        }
        else{
            await fetch('http://localhost:3000/etel' + encodeURI(nev),{
                method: 'DELETE'
            })
        }
    }
    window.dispatchEvent(new Event("torles"));
}

export function DrawAdminDisplay({ term }: { term: string }) {
    

    const [kartyak, setKartyak] = useState([] as Kartya[]);
    //const [searchTerm, setSearchTerm] = useState('');
    //setSearchTerm(term);
    let searchTerm = term;    
    
    useEffect(() => {
        async function load() {
            let eredmeny = await fetch('http://localhost:3000/etelek');
            let eredmeny2=await fetch('http://localhost:3000/italok');
            let kartyaarr:Kartya[] = await eredmeny.json();
            let kartyaarr2:Kartya[]=await eredmeny2.json();
            kartyaarr2.forEach(element => {
                kartyaarr.push(element);
            });
            console.log(kartyaarr);
            if(searchTerm != ""){
                const kivalogatott = kartyaarr.filter(kartya => kartya.kategoria.includes(searchTerm));
                setKartyak(kivalogatott);
            }
            else{
                setKartyak(kartyaarr);
            }

        }
        load();
        window.addEventListener("torles", load)
    }, [searchTerm])
    
    
    return (
        <div className="row">
            {/*<CreateCard nev="Elso" kategoria="sajtok" ar="22" allergenek="Tojas,gluten"/>*/}
            {
                kartyak.map(etel => <CreateCard kepek={etel.kepek} nev={etel.nev} kategoria={etel.kategoria} ar={etel.ar} allergenek={etel.allergenek} />)
            }
        </div>
    )
}