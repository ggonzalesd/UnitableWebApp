(()=>{

const container = document.getElementById("schedule-area")

const hours = [
    ["IHC", 2, 4, 5],
    ["Ciencias", 5, 2, 3],
    ["Ejercicio", 3, 5, 6],
    ["DDBB", 6, 3, 4],
    ["ML", 7, 5, 6]
]

hours.forEach(e => {
    //console.log(e)

    const element = document.createElement("div")
    const span = document.createElement("span")
    span.innerText = e[0]
    element.className += "schedule-block schedule-note"
    element.setAttribute("hours", `${e[1]} ${e[2]},${e[3]}`)
    element.appendChild(span)

    container.appendChild(element)
})

//<div class="schedule-block schedule-note"hours="4 4,5"><span>Pensar</span></div>


const notes = document.getElementsByClassName("schedule-note")

const positionOnGrid = (element, row, c_start, c_end)=>{
    element.style['grid-row'] = c_start + "/" + ((c_end-0)+1)
    element.style['grid-column'] = row + "/" + row
}

const checkNote = (note) => {
    if (note.hasAttribute('hours')){
        const coords = note.getAttribute('hours').split(" ")
        if(coords.length == 2){
            const rows = coords[0]
            const columns = coords[1].split(",")
            if(columns.length == 2){
                positionOnGrid(note, rows, columns[0], columns[1])
            } else {
                console.error("Un bloque no tiene el atributo 'hour' correctamente escritos", note)
            }
        } else {
            console.error("Un bloque no tiene el atributo 'hour' correctamente escritos", note)
        }
    }
}

for(let i=0; i<notes.length; i++){
    checkNote(notes[i])
}

const btnAddActivity = document.getElementById("add-activity")
const divActivityForm = document.getElementById("create-activity")
const header = document.getElementById("header")
const main = document.getElementById("main")
const footer = document.getElementById("footer")

btnAddActivity.addEventListener("click", ()=>{
    header.style["filter"] = "blur(4px)"
    main.style["filter"] = "blur(4px)"
    footer.style["filter"] = "blur(4px)"
    divActivityForm.style["visibility"] = "visible";
})

const HideActivityForm = () => {
    activityName = document.getElementById("activity-name")
    description = document.getElementById("descripcion")

    warningDiv = document.getElementById("warning-zone")

    txtDay = document.getElementById("day")
    txtHourStart = document.getElementById("hour-start")
    txtHourEnd = document.getElementById("hour-end")

    activityName.value = ""
    description.value = ""

    header.style["filter"] = ""
    main.style["filter"] = ""
    footer.style["filter"] = ""
    warningDiv.innerText = ""
    warningDiv.style["visibility"] = "hidden";

    txtDay.value = ""
    txtHourStart.value = ""
    txtHourEnd.value = ""
}

const btnCreate = document.getElementById("form-btn-crear")
btnCreate.addEventListener("click", ()=>{
    // Add a new activity
    activityName = document.getElementById("activity-name")
    description = document.getElementById("descripcion") // Discarded for now
    txtDay = document.getElementById("day")
    txtHourStart = document.getElementById("hour-start")
    txtHourEnd = document.getElementById("hour-end")

    warningDiv = document.getElementById("warning-zone")

    // We make sure the activity HAS a name
    if (activityName.value === "") {
        warningDiv.style["visibility"] = "visible";
        warningDiv.innerText = "La actividad debe tener un nombre"
        return
    }

    // We make sure all schedule inputs have a value
    valDay = txtDay.value
    valHourStart = txtHourStart.value
    valHourEnd = txtHourEnd.value
    if (valDay === "" || valHourStart === "" || valHourEnd === "") {
        warningDiv.style["visibility"] = "visible";
        warningDiv.innerText = "Parametros de horario no completados"
        return
    }
    
    // Now we make sure all these inputs are numeric
    const isNumeric = (txt) => {
        return !isNaN(txt)
    }
    
    if (!isNumeric(valDay) || !isNumeric(valHourStart) || !isNumeric(valHourEnd)) {
        warningDiv.style["visibility"] = "visible";
        warningDiv.innerText = "Uno o más valores NO son numéricos"
        return
    }
    day = +valDay + 1
    hourStart = +valHourStart + 1
    hourEnd = +valHourEnd + 1
    console.log("Día: " + (day-1))
    console.log("Hora inicio: " + (hourStart-1))
    console.log("Hora fin: " + (hourEnd-1))

    // Finally, we make sure the values are between accepted ranges
    if (!(1 <= (day-1) && (day-1) <= 7)) {
        warningDiv.style["visibility"] = "visible";
        warningDiv.innerText = "El rango permitido para el día es de 1 a 7"
        return
    }

    if (!(1 <= (hourStart-1) && (hourStart-1) < (hourEnd-1))) {
        warningDiv.style["visibility"] = "visible";
        warningDiv.innerText = "El rango permitido para la hora de inicio es de 1 hasta la hora fin"
        return
    }

    if (!((hourStart-1) < (hourEnd-1) && (hourEnd-1) <= 8)) {
        warningDiv.style["visibility"] = "visible";
        warningDiv.innerText = "El rango permitido para la hora de inicio es de la hora inicio hasta 8"
        return
    }
    
    hourPrueba = [activityName.value, day, hourStart, hourEnd]

    const element = document.createElement("div")
    const span = document.createElement("span")
    span.innerText = hourPrueba[0]
    element.className += "schedule-block schedule-note"
    element.setAttribute("hours", `${hourPrueba[1]} ${hourPrueba[2]},${hourPrueba[3]}`)
    element.appendChild(span)

    container.appendChild(element)

    checkNote(notes[notes.length-1])

    // Then quit
    divActivityForm.style["visibility"] = "hidden";
    HideActivityForm()
})

const btnCancel = document.getElementById("form-btn-cancelar")
btnCancel.addEventListener("click", ()=>{
    // Simply quit
    divActivityForm.style["visibility"] = "hidden";
    HideActivityForm()
})
})() 