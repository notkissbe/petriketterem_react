import { Header } from './components/Header/index'
import { Footer } from './components/Footer/index'
import { Route, Routes } from 'react-router-dom'
import {Fooldal} from './Pages/Fooldal/fooldal.tsx'
import {Etlap} from './Pages/Etlap/index.tsx'

export default function App(){
  return(
    <div className='App'>
      <Routes>
        <Route path='/' element={<Fooldal/>}></Route>
        <Route path='/etlap' element={<Etlap/>}></Route>
      </Routes>
    </div>
  )
}

