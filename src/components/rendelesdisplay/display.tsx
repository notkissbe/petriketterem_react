import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { useEffect, useState } from "react";


interface Kartya {
    //kepurl:string; -> adatbazishoz meg hozza kell adni;
    nev: string;
    kategoria: string;
    ar: string;
    allergenek: string;
}



export function CreateCard(props: Kartya) {

    return (
        <div className="card">
            <img src="back-pub.png" alt="" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title" >{props.nev}</h5>
                <p className="text-end" hidden >{props.kategoria}</p>
                <p className="card-text">{props.allergenek}</p>
                <div className="row">
                    <button className="col btn btn-outline-light btn-sm">Hozzáadás</button>
                    <p className="col text-center">{props.ar + " ft"}</p>
                </div>
            </div>
        </div>
    )

}
export function DrawDisplay({ term }: { term: string }) {


    const [kartyak, setKartyak] = useState([] as Kartya[]);
    const [searchTerm, setSearchTerm] = useState(term);
    console.log("dadsa");
    
    useEffect(() => {
        async function load() {
            let eredmeny = await fetch('http://localhost:3000/etelek');
            let kartyaarr = await eredmeny.json();
            if(searchTerm != ""){
                const kivalogatott = kartyak.filter(kartya => kartya.kategoria.includes(searchTerm));
                setKartyak(kivalogatott);
            }
            setKartyak(kartyaarr);
            console.log(searchTerm)
        }
        load();
    }, [searchTerm])


    return (
        <div className="row">
            {/*<CreateCard nev="Elso" kategoria="sajtok" ar="22" allergenek="Tojas,gluten"/>*/}
            {
                kartyak.map(etel => <CreateCard nev={etel.nev} kategoria={etel.kategoria} ar={etel.ar} allergenek={etel.allergenek} />)
            }
        </div>
    )
}