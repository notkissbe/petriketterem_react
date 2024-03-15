import { Kartya } from '../AdminDisplay/AdminDisplay';
import './index.css';
import React from 'react';
import { useEffect, useState } from "react";

export function Footer() {

  const [nyit, setnyit] = useState([] as Nyitva[]);
  const [unnep, setUnnep]=useState([] as Nyitva[]);

  interface Nyitva {
    nap:string;
    kezdo_idopont: string;
    veg_idopont: string;
    zarva: number;
  }

  async function load(){
    let eredmeny=await fetch('http://localhost:3000/nyitvatartas');
    let eredmeny2=await fetch('http://localhost:3000/unnepnapok');
    let nyitas:Nyitva[]=await eredmeny.json();
    let nyitas2:Nyitva[]=await eredmeny2.json();

    nyitas.forEach(element =>{
      if(element.zarva==1)
      {
        //setnyit("ZÁRVA")
      }
    })
    setnyit(nyitas);
    setUnnep(nyitas2);
  }
  //load();


  return (
    <div id='elerhetosegek' className="row">
      <div className="col">
        <table className="table bg-dark" id="tablazat">
          <thead>
            <tr>
              <th colSpan={3}>Nyitvatartás</th>
            </tr>
            <tr>
              <th>Nap:</th>
              <th>Nyitás:</th>
              <th>Zárás:</th>
            </tr>
          </thead>
          <tbody>
            {nyit.map(ny=><tr><td>{ny.nap}</td><td>{ny.kezdo_idopont}</td><td>{ny.veg_idopont}</td></tr>)}
          </tbody>

        </table>
        <table className="table bg-dark" id="unnepnapok">
          <thead>
            <tr>
              <th colSpan={3}>Ünnepnapi nyitvatartás</th>
            </tr>
            <tr>
              <th>Dátum:</th>
              <th>Nyitás:</th>
              <th>Zárás:</th>
            </tr>
          </thead>
          <tbody>
            {unnep.map(u=><tr><td>{u.nap}</td><td>{u.kezdo_idopont}</td><td>{u.veg_idopont}</td></tr>)}
          </tbody>
          
        </table>
      </div>


      <div className="col terkepdoboz">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.2132129775564!2d19.08751597676159!3d47.505238794971085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc8645265a5f%3A0x509abda64d383b7b!2sBMSZC%20Petrik%20Lajos%20K%C3%A9t%20tan%C3%ADt%C3%A1si%20Nyelv%C5%B1%20Technikum!5e0!3m2!1shu!2shu!4v1705514831219!5m2!1shu!2shu" width="100%" height="100%" loading="lazy"></iframe>
      </div>


      <div className="col">
        <table className="table">
          <thead>
            <tr>
              <th>Elérhetőségek:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cím:</td>
              <td>Budapest, Thököly út 48-54, 1146</td>
            </tr>
            <tr>
              <td>Email: </td>
              <td>petrik.etterem@gmail.com</td>
            </tr>
            <tr>
              <td>Telefon:</td>
              <td>06-20-123-4567</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}