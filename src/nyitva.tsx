import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS } from "react";

export interface OpeningHours {
    day: string;
    startTime: string;
    endTime: string;
    closed: string;
}

export interface Holiday {
    date: string;
    startTime: string;
    endTime: string;
    closed: string;
}
export class Openclass{
    day: string;
    startTime: string;
    endTime: string;
    closed: string;

    constructor(day:string, startTime:string, endTime:string, closed:string){
        this.day = day;
        this.startTime=startTime;
        this.endTime=endTime;
        this.closed=closed;
    }
}

export async function CreateNyitvatartas() {

    var tbody = document.createElement("tbody");
    const openingHoursResponse = await fetch('http://localhost:3000/nyitvatartas');
    const openingHoursData: OpeningHours[] = await openingHoursResponse.json();

    openingHoursData.forEach((entry: OpeningHours) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");

        if (entry.closed == "ZÁRVA") {
            td1.innerText = entry.day;
            td2.innerText = "ZÁRVA";
            td2.colSpan = 2;
        } else {
            td1.innerText = entry.day;
            td2.innerText = entry.startTime.slice(0, 5);
            td3.innerText = entry.endTime.slice(0, 5);
        }

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tbody.appendChild(tr);
    });
    return tbody;
}

export async function CreateUnnepnap() {

    var tbody = document.createElement("tbody");
    const holidayResponse = await fetch('http://localhost:3000/unnepnapok');
    const holidayData: Holiday[] = await holidayResponse.json();

    holidayData.forEach((entry: Holiday) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");

        if (entry.closed == "ZÁRVA") {
            td1.innerText = entry.date.slice(0, 10);
            td2.innerText = "ZÁRVA";
            td2.colSpan = 2;
        } else {
            td1.innerText = entry.date.slice(0, 10);
            td2.innerText = entry.startTime.slice(0, 5);
            td3.innerText = entry.endTime.slice(0, 5);
        }

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tbody.appendChild(tr);
    });
    return tbody;
}

//ts kod

export async function FetchOpenHours() {
    const openingHoursResponse = await fetch('http://localhost:3000/nyitvatartas');
    const openingHoursData: OpeningHours[] = await openingHoursResponse.json();
    let nyitvanapok : Openclass[]
    openingHoursData.forEach()
}

export async function CreateReactNyitva(){
   

}