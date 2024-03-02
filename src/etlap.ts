document.addEventListener("DOMContentLoaded", async() => {
    let eredmeny=await fetch('http://localhost:3000/etelek');
    let kiir=await eredmeny.json();

    kiir.forEach((element: {nev: string, allergenek: string, kategoria: string, ar: number}) =>{
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        let tablazat=document.getElementById("tablazat") as HTMLElement;
        tablazat.appendChild(tr);
    })
})