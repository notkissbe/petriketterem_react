import { useState } from 'react';
import { AdminHeader } from '../../components/AdminHeader/adminHeader';
import { DrawAdminDisplay } from '../../components/AdminDisplay/AdminDisplay';

export function AdminPage(){

    const [pressed, setPressed] = useState("");


    function kategoriaHandler(e:any){
        setPressed(e.target.value);
        console.log("prop change in rendeles")
    }

    return (
        <div>
            <AdminHeader/>
            <nav className="navbar navbar-light bg-dark border-3 border-top border-bottom border-danger">
              <form className="container-fluid justify-content-start">
                <button className="btn btn-outline-light mx-4 btn-lg" value="Előétel" type="button" onClick={kategoriaHandler}>Előétel</button>
                <button className="btn btn-outline-light mx-4 btn-lg" value="Leves" type="button" onClick={kategoriaHandler}>Levesek</button>
                <button className="btn btn-outline-light mx-4 btn-lg" value="Főétel" type="button" onClick={kategoriaHandler}>Főételek</button>
                <button className="btn btn-outline-light mx-4 btn-lg" value="Köret" type="button" onClick={kategoriaHandler}>Köretek</button>
                <button className="btn btn-outline-light mx-4 btn-lg" value="Sütemény" type="button" onClick={kategoriaHandler}>Desszertek</button>
                <button className="btn btn-outline-light mx-4 btn-lg" value="Ial" type="button" onClick={kategoriaHandler}>Italok</button>
              </form>
            </nav>
            <DrawAdminDisplay term={pressed}/>
        </div>
    )
}