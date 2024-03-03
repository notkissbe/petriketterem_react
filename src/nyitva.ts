export interface OpeningHours {
    day: string;
    startTime: string;
    endTime: string;
    closed: boolean;
}

export interface Holiday {
    date: string;
    startTime: string;
    endTime: string;
    closed: boolean;
}

document.addEventListener("DOMContentLoaded", async () => {
    const openingHoursResponse = await fetch('http://localhost:3000/nyitvatartas');
    const openingHoursData: OpeningHours[] = await openingHoursResponse.json();

    openingHoursData.forEach((entry: OpeningHours) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");

        if (entry.closed) {
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

        const table = document.getElementById("openingHoursTable") as HTMLElement;
        table.appendChild(tr);
    });

    const holidayResponse = await fetch('http://localhost:3000/unnepnapok');
    const holidayData: Holiday[] = await holidayResponse.json();

    holidayData.forEach((entry: Holiday) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");

        if (entry.closed) {
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

        const table = document.getElementById("holidayTable") as HTMLElement;
        table.appendChild(tr);
    });
});
