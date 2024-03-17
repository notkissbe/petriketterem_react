import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import React, { useEffect, useState } from "react";
import { KosarElem } from '../../Pages/Rendelés/rendeles';

export interface Kartya {
    kepek:string;
    nev: string;
    kategoria: string;
    ar: string;
    allergenek: string;
}

function appendToStorage(name:string, data:KosarElem){
    var old:KosarElem[] = JSON.parse(localStorage.getItem(name)||'{}');
    //console.log(localStorage.length)
    let datao:KosarElem[] = [];
    if(localStorage.length == 0){
        datao.push(data);
    }
    else{
        old.forEach(element => {
            datao.push(element)
        });
        datao.push(data);
        //datao = [...old, data];
    }
    //console.log(datao);
    //old.push(data);
    localStorage.setItem("Kosar",JSON.stringify(datao));
    window.dispatchEvent(new Event("storage"))
}   
/*
function KosarAdd(event:React.MouseEvent<HTMLButtonElement>,props:Kartya){
    console.log(event.target);
    //let item:KosarElem = {nev:nev, ar:ar};
    localStorage.removeItem("Kosar");
    //localStorage.setItem("Kosar", JSON.stringify(item));
    
}
*/
const AddKosar = (nev:string,ar:string) => {
    let item:KosarElem = {nev:nev, ar:ar}
    //let jelenlegiKosar = localStorage.getItem("Kosar");
    appendToStorage("Kosar",item);
    //localStorage.setItem("Kosar", JSON.stringify(item));
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
                    <button className="col btn btn-outline-light btn-sm position-absolute bottom-0 start-0" onClick={()=>AddKosar(props.nev,props.ar)}>Kosárba</button>
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
            let eredmeny2=await fetch('http://localhost:3000/italok');
            let kartyaarr:Kartya[] = await eredmeny.json();
            let kartyaarr2:Kartya[]=await eredmeny2.json();
            kartyaarr2.forEach(element => {
                kartyaarr.push(element);
            });
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