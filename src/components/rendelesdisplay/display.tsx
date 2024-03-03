import { } from "react";
import logo from '../../../public/back-pub.png'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

interface Kartya {
    //kepurl:string; -> adatbazishoz meg hozza kell adni;
    nev: string;
    kategoria: string;
    ar: string;
    allergenek: string;
}

let kartyaarr: Kartya[];

async function fetchData() {
    let eredmeny = await fetch('http://localhost:3000/etelek');
    kartyaarr = await eredmeny.json();
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
export function DrawDisplay() {

    return (
        <div className="row">
            <CreateCard nev="Elso" kategoria="sajtok" ar="22" allergenek="Tojas,gluten"/>

        </div>
    )
}