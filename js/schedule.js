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

for(let i=0; i<notes.length; i++){
    let note = notes[i]
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




})()