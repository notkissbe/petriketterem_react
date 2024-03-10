import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { useEffect, useState } from "react";
import { KosarAdd } from '../kosar/kosar';


export interface Kartya {
    kepek:string;
    nev: string;
    kategoria: string;
    ar: string;
    allergenek: string;
}



export function CreateCard(props: Kartya) {

    return (
        <div className="card mt-3">
            <img src={props.kepek} alt="" className="card-img-top rounded" />
            <div className="card-body text-center">
                <h5 className="card-title" >{props.nev}</h5>
                <p className="text-end" hidden >{props.kategoria}</p>
                <p className="card-text">{props.allergenek}</p>
                <div className="row">
                    <p className="col">{props.ar + " ft"}</p>
                    <p></p>
                    <button className="col btn btn-outline-light btn-sm position-absolute bottom-0 start-0" /*onClick={KosarAdd(props.nev,props.ar)}*/>Hozzáadás</button>
                </div>
            </div>
        </div>
    )

}
export function DrawDisplay({ term }: { term: string }) {


    const [kartyak, setKartyak] = useState([] as Kartya[]);
    //const [searchTerm, setSearchTerm] = useState('');
    //setSearchTerm(term);
    let searchTerm = term;


    useEffect(() => {
        async function load() {
            let eredmeny = await fetch('http://localhost:3000/etelek');
            let kartyaarr:Kartya[] = await eredmeny.json();
            if(searchTerm != ""){
                const kivalogatott = kartyaarr.filter(kartya => kartya.kategoria.includes(searchTerm));
                setKartyak(kivalogatott);
            }
            else{
                setKartyak(kartyaarr);
            }

        }
        load();
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