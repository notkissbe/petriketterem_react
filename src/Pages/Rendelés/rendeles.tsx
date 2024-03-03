import { useState } from 'react'
import { Header } from '../../components/Header/index'
import { Footer } from '../../components/Footer/index'
import { Kosar } from '../../components/kosar/kosar'
import { DrawDisplay } from '../../components/rendelesdisplay/display'
import { OpeningHours, Holiday } from '../../nyitva';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './rendeles.css'
import '../pages_shared.css'



export function Rendeles() {
  const [napok, setNapok] = useState([] as OpeningHours[])

  return (
    <div>
      <Header showExtraLink={true}></Header>
      <div id="rendelesContent" className="container">

        <div className='row'>
          <div className='col'>
            <nav className="navbar navbar-light bg-dark border-3 border-top border-bottom border-danger">
              <form className="container-fluid justify-content-start">
                <button className="btn btn-outline-light mx-4 btn-lg" type="button">Előétel</button>
                <button className="btn btn-outline-light mx-4 btn-lg" type="button">Levesek</button>
                <button className="btn btn-outline-light mx-4 btn-lg" type="button">Főételek</button>
                <button className="btn btn-outline-light mx-4 btn-lg" type="button">Köretek</button>
                <button className="btn btn-outline-light mx-4 btn-lg" type="button">Desszertek</button>
                <button className="btn btn-outline-light mx-4 btn-lg" type="button">Italok</button>
              </form>
            </nav>



            <div id='MenuBox'>
              <DrawDisplay />
            </div>

          </div>


          <div id='KosarDiv' className='col-3'>
            <Kosar />
          </div>

        </div>

      </div>
      <Footer napok={napok}></Footer>
    </div>
  )
}

