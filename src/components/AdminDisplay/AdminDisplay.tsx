import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';

export interface Kartya {
    kepurl:string;
    nev: string;
    kategoria: string;
    ar: string;
    allergenek: string;
}



export function CreateCard(props: Kartya) {

    return (
        <div className="card mx-auto">
            <img src={props.kepurl} alt="" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title" >{props.nev}</h5>
                <p className="text-end" hidden >{props.kategoria}</p>
                <p className="card-text">{props.allergenek}</p>
                <div className="row">
                    <button className="col btn btn-outline-light btn-sm" /*onClick={KosarAdd(props.nev,props.ar)}*/>Törlés</button>
                    <p className="col text-center">{props.ar + " ft"}</p>
                </div>
            </div>
        </div>
    )

}
export function DrawAdminDisplay({ term }: { term: string }) {


    const [kartyak, setKartyak] = useState([] as Kartya[]);

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
        <div className="row mx-3">
            {/*<CreateCard nev="Elso" kategoria="sajtok" ar="22" allergenek="Tojas,gluten"/>*/}
            {
                kartyak.map(etel => <CreateCard kepurl={etel.kepurl} nev={etel.nev} kategoria={etel.kategoria} ar={etel.ar} allergenek={etel.allergenek} />)
            }
        </div>
    )
}