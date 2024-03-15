import React, { createElement, useEffect, useState } from 'react'
import { Header } from '../../components/Header/index'
import { Footer } from '../../components/Footer/index'
import { Kosar } from '../../components/kosar/kosar'
import { DrawDisplay } from '../../components/rendelesdisplay/display'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './rendeles.css'
import '../pages_shared.css'

export interface KosarElem {
  nev:string,
  ar:string
}



export function Rendeles() {
  const [pressed, setPressed] = useState("");

 /* function handleKosarAdded(nev:string, ar:string){
    
    let elem:KosarElem = {nev:nev, ar:ar};
    let bovitett = kosar.concat(elem);
    setKosar(bovitett);
}*/
useEffect(()=>{
  window.dispatchEvent(new Event("storage"))

},[]);

  function kategoriaHandler(e:any){
    setPressed(e.target.value);
    console.log("prop change in rendeles")
  }
  
  return (
    <div>
      <Header showExtraLink={true}></Header>
      <div id="rendelesContent" className='mx-3'>

        <div className='row'>
          <div className='col'>
            <nav className="navbar navbar-light bg-dark border-3 border-top border-bottom border-danger">
              <form className="container-fluid justify-content-start">
                <button className="btn btn-outline-light mx-auto btn-lg" value="Előétel" type="button" onClick={kategoriaHandler}>Előétel</button>
                <button className="btn btn-outline-light mx-auto btn-lg" value="Leves" type="button" onClick={kategoriaHandler}>Levesek</button>
                <button className="btn btn-outline-light mx-auto btn-lg" value="Főétel" type="button" onClick={kategoriaHandler}>Főételek</button>
                <button className="btn btn-outline-light mx-auto btn-lg" value="Köret" type="button" onClick={kategoriaHandler}>Köretek</button>
                <button className="btn btn-outline-light mx-auto btn-lg" value="Sütemény" type="button" onClick={kategoriaHandler}>Desszertek</button>
                <button className="btn btn-outline-light mx-auto btn-lg" value="Nem alkoholos ital" type="button" onClick={kategoriaHandler}>Alkoholmentes</button>
                <button className="btn btn-outline-light mx-auto btn-lg" value="Alkoholos" type="button" onClick={kategoriaHandler}>Alkoholos</button>
              </form>
            </nav>



            <div id='MenuBox' className='mx-3'>
              
              <DrawDisplay term={pressed}/>
            </div>

          </div>


          <div id='KosarDiv' className='col-3'>
            <Kosar/>
          </div>

        </div>

      </div>
      <hr></hr>
      <Footer></Footer>
    </div>
  )
}

