import { useState } from 'react';
import { AdminHeader } from '../../components/AdminHeader/adminHeader';
import { DrawAdminDisplay } from '../../components/AdminDisplay/AdminDisplay';
import { AdminAdd } from '../../components/AdminAdd.tsx/AdminAdd';

export function AdminPage({ hozzaadas }: { hozzaadas: boolean }){

    const [pressed, setPressed] = useState("");
    let hozzaadasMode = hozzaadas;

    function kategoriaHandler(e:any){
        setPressed(e.target.value);
        console.log("prop change in rendeles")
    }

    if (hozzaadasMode) {
      return (
        <div>
          <AdminHeader/>
          <AdminAdd/>
        </div>
      )
    }
    else{
      return (
          <div>
              <AdminHeader/>
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
              <DrawAdminDisplay term={pressed}/>
          </div>
      )
    }

    
}