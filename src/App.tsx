import { Header } from './components/Header/index'
import { Footer } from './components/Footer/index'
import { Route, Routes } from 'react-router-dom'
import { AdminPage } from './Pages/admin/admin.tsx'
import {Fooldal} from './Pages/Fooldal/fooldal.tsx'
import { Rendeles } from './Pages/Rendelés/rendeles.tsx'
import { AdminAddPage } from './Pages/admin/adminAddPage.tsx'

export default function App(){
  return(
    <div className='App'>
      <Routes>
        <Route path='/' element={<Fooldal/>}></Route>
        <Route path='/rendeles' element={<Rendeles/>}></Route>
        <Route path='/admin' element={<AdminPage hozzaadas={false}/>}></Route>
        <Route path='/admin/add' element={<AdminPage hozzaadas={true}/>}></Route>
      </Routes>
    </div>
  )
}

