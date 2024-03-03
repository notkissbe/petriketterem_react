import { useState } from 'react'
import { Header } from '../../components/Header/index'
import { Footer } from '../../components/Footer/index'
import './fooldal.css'
import '../pages_shared.css'
import { Link } from 'react-router-dom'


export function Fooldal() {
  return (
    <div>
      <Header showExtraLink={false}></Header>

    <div id='fooldal'>
      <div id="cim" >
        <h1 className="display-4">PETRIK ÉTTEREM</h1>
        <p className="lead">
          Üdvözöljük Önöket a Petrik Étteremben, ahol az ízek és élmények találkoznak egy harmonikus kulináris utazás során!<hr/>Étteremünk büszkén kínálja vendégeinknek a minőségi alapanyagokból készült, kreatív és ínycsiklandó ételeket, melyeket a szenvedélyes szakácsaink készítenek el szeretettel.
        </p>
        </div>
        <div className='rendeles_button'>
          <Link to={"/rendeles"}>
            <button className='btn btn-outline-light btn-lg'>Rendelés</button>
          </Link>
        </div>
        </div>
      <Footer></Footer>
    </div>
  )
}

