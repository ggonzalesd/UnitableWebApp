(()=>{

const numberOfContacts = 4;
const numberOfActivities = 4;
const numberOfGroups = 4;


//section-profile-contacts

const secProContact = document.getElementById("section-profile-contacts")
const secProContactList = secProContact.children.item(1)


for(let i=0; i<numberOfContacts; i++){
    const text = `<div class="contact-cards">
    <img src="images/profile-contact-photo.jpg" alt="contact">
    <div>
        <div class="tag tag-profile">Estudiante</div>
        <p>Nombre</p>
    </div>
    </div>`
    secProContactList.innerHTML += text
}

//section-profile-actitivies


const secProActivites = document.getElementById("section-profile-actitivies")
const secProActivitesList = secProActivites.children.item(1)


for(let i=0; i<numberOfActivities; i++){
    const text = `<div class="activity-cards">
    <h4>Estudiar</h4>
    <div>
        <p>2022/10/12</p>
        <p>falta 2h</p>
    </div>
    </div>`
    secProActivitesList.innerHTML += text
}


//section-profile-groups


const secProGroups = document.getElementById("section-profile-groups")
const secProGroupsList = secProGroups.children.item(1)


for(let i=0; i<numberOfGroups; i++){
    const text = `<div class="group-cards">
    <img src="images/group-icon.jpg" alt="group">
    <div>
        <p>Grupo Dev</p>
        <div>
            <p>mensajes</p>
            <div class="tag"> 10K </div>
        </div>
    </div>
</div>`
    secProGroupsList.innerHTML += text
}

// section-profile-premium

let obtener = true

const btnPremium = document.getElementById("btn-premium")
btnPremium.addEventListener("click", ()=>{
    if(obtener === true){
        obtener = false
        btnPremium.innerText = "Cancelar Premium"
        btnPremium.style["backgroundColor"] = "green"
    } else{
        obtener = true
        btnPremium.innerText = "Obtener Premium"
        btnPremium.style["backgroundColor"] = ""
    }
})

})()