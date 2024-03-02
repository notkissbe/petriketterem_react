document.addEventListener("DOMContentLoaded",async () => {
    let eredmeny=await fetch('http://localhost:3000/nyitvatartas');
    let kiir=await eredmeny.json();

    kiir.forEach((element: { nap: string; kezdo_idopont: string; veg_idopont: string; zarva: string; }) => {
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");

        if(element.zarva=="1")
        {
            td1.innerText=element.nap;
            td2.innerText="ZÁRVA";
            td2.colSpan=2;
        }
        else{
            td1.innerText=element.nap;
            const b=element.kezdo_idopont.slice(0,5);
            td2.innerText=b;
            const c=element.veg_idopont.slice(0,5);
            td3.innerText=c;
        }

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        let tablazat = document.getElementById("tablazat") as HTMLElement;
        tablazat.appendChild(tr);
    });

    let unnep=await fetch('http://localhost:3000/unnepnapok');
    let kiirunnep=await unnep.json();

    kiirunnep.forEach((element: { datum: string; kezdo_idopont: string; veg_idopont: string; zarva: string; }) => {
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        if(element.zarva=="1")
        {
            const a=element.datum.slice(0,10);
            td1.innerText=a;
            td2.innerText="ZÁRVA";
            td2.colSpan=2;
        }
        else{
            const a=element.datum.slice(0,10);
            td1.innerText=a;
            const b=element.kezdo_idopont.slice(0,5);
            td2.innerText=b;
            const c=element.veg_idopont.slice(0,5);
            td3.innerText=c;
        }

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        let tablazat = document.getElementById("unnepnapok") as HTMLElement;
        tablazat.appendChild(tr);
    });
})