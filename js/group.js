(()=>{

const groupsOwnList = document.getElementById("groups-own-list")

const groupsSearchList = document.getElementById("groups-search-list")

const addNewGroup = (elem, name, description) => {
    // numChildren = elem.childElementCount
    // console.log(numChildren)
    elem.innerHTML += `
    <div class="groups-item">
        <div class="description">
            <img src="images/groups-icon.jpg" alt="">
            <div>
                <h4>${name}</h4>
                <p>${description}</p>
            </div>
        </div>
        <div class="information">
            <div class="tag btn-premium">0</div>
            <span>Miembros</span>
            <button class="btn btn-group">OK</button>
        </div>
    </div>
    `
}

for(let i=0; i<10; i++){
    addNewGroup(groupsOwnList, `Grupo #${i+1}`, "Description")
}

for(let i=0; i<20; i++){
    groupsSearchList.innerHTML += `
    <div class="groups-item">
        <div class="description">
            <img src="images/groups-icon.jpg" alt="">
            <div>
                <h4>Grupo #1</h4>
                <p>Description</p>
            </div>
        </div>
        <div class="information">
            <div class="tag btn-premium">10K</div>
            <span>Miembros</span>
            <button class="btn btn-group">OK</button>
        </div>
    </div>
    `
}


const btnsGroup = document.getElementsByClassName("btn-group")

for(let i=0; i<btnsGroup.length; i++){
    btnsGroup[i].addEventListener("click", ()=>{
        window.location.href = "chat.html"
    })
}

const header = document.getElementById("header")
const main = document.getElementById("main")
const footer = document.getElementById("footer")

const HideGroupForm = () => {
    groupName = document.getElementById("nombre-grupo")
    description = document.getElementById("descripcion")
    topic = document.getElementById("tema")

    warningDiv = document.getElementById("warning-zone")

    groupName.value = ""
    description.value = ""
    topic.value = ""

    header.style["filter"] = ""
    main.style["filter"] = ""
    footer.style["filter"] = ""
    warningDiv.innerText = ""
    warningDiv.style["visibility"] = "hidden";
}

const divGroupForm = document.getElementById("create-group")

const btnCreateGroup = document.getElementById("btn-crear")
btnCreateGroup.addEventListener("click", ()=>{
    header.style["filter"] = "blur(4px)"
    main.style["filter"] = "blur(4px)"
    footer.style["filter"] = "blur(4px)"
    divGroupForm.style["visibility"] = "visible"
})

const btnCreate = document.getElementById("form-btn-crear")
btnCreate.addEventListener("click", ()=>{
    const txtGroupName = document.getElementById("nombre-grupo")
    const txtDescription = document.getElementById("descripcion")
    const txtTopic = document.getElementById("tema")

    warningDiv = document.getElementById("warning-zone")

    // We first make sure the group HAS a name
    if (txtGroupName.value === "") {
        warningDiv.style["visibility"] = "visible";
        warningDiv.innerText = "El grupo debe tener un nombre"
        return
    }

    // It must ALSO have a topic
    if (txtTopic.value === "") {
        warningDiv.style["visibility"] = "visible";
        warningDiv.innerText = "El grupo debe tratar un tema en específico"
        return
    }

    // We finally generate the new group
    addNewGroup(groupsOwnList, txtGroupName.value, txtDescription.value)

    // Then quit
    divGroupForm.style["visibility"] = "hidden";
    HideGroupForm()
})

const btnCancel = document.getElementById("form-btn-cancelar")
btnCancel.addEventListener("click", ()=>{
    // Simply quit
    divGroupForm.style["visibility"] = "hidden";
    HideGroupForm()
})

})()