(()=>{

const messageContainer = document.getElementById("messages")

for(let i=0; i<12; i++){
    messageContainer.innerHTML += `<div class="message">
    <div class="user-message">
        <img src="images/profile-photo.jpg" alt="">
        <span>Username</span>
    </div>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla accusamus, vitae excepturi animi error soluta provident odit corrupti atque voluptatibus ab necessitatibus autem deleniti tempora consequatur aliquam quod magnam.
    </p>
    </div>`
}

const chatContainer = document.getElementById("chat-container")

const textChannels = document.getElementsByClassName("channel text-channel")
const audioChannels = document.getElementsByClassName("channel audio-channel")

const textChat = chatContainer.children[1]
const audioChat = chatContainer.children[2]

for(let i=0; i<textChannels.length; i++){
    textChannels[i].addEventListener("click", ()=>{
        textChat.style['display'] = ''
        audioChat.style['display'] = 'none'
    })
}

for(let i=0; i<audioChannels.length; i++){
    audioChannels[i].addEventListener("click", ()=>{
        textChat.style['display'] = 'none'
        audioChat.style['display'] = ''
    })
}

const header = document.getElementById("header")
const main = document.getElementById("chat-container")
const footer = document.getElementById("footer")

const addRoom = (elem, name) => {
    elem.innerHTML += `
    <div class="channel text-channel">
        <span>${name}</span>
        <button class="btn">0</button>
    </div>
    `
}

const HideRoomForm = () => {
    roomName = document.getElementById("nombre-sala")
    description = document.getElementById("descripcion")
    topic = document.getElementById("tema")

    warningDiv = document.getElementById("warning-zone")

    roomName.value = ""
    description.value = ""
    topic.value = ""

    header.style["filter"] = ""
    main.style["filter"] = ""
    footer.style["filter"] = ""
    warningDiv.innerText = ""
    warningDiv.style["visibility"] = "hidden";
}

const btnCreateRoom = document.getElementById("btn-create-room")

const divRoomForm = document.getElementById("create-room")

btnCreateRoom.addEventListener("click", ()=>{
    header.style["filter"] = "blur(4px)"
    main.style["filter"] = "blur(4px)"
    footer.style["filter"] = "blur(4px)"
    divRoomForm.style["visibility"] = "visible"
})

const btnCreate = document.getElementById("form-btn-crear")
btnCreate.addEventListener("click", ()=>{
    const txtRoomName = document.getElementById("nombre-sala")
    const txtDescription = document.getElementById("descripcion")
    const txtTopic = document.getElementById("tema")

    warningDiv = document.getElementById("warning-zone")

    // We first make sure the room HAS a name
    if (txtRoomName.value === "") {
        warningDiv.style["visibility"] = "visible";
        warningDiv.innerText = "La sala debe tener un nombre"
        return
    }

    // It must ALSO have a topic
    if (txtTopic.value === "") {
        warningDiv.style["visibility"] = "visible";
        warningDiv.innerText = "La sala debe tratar un tema en específico"
        return
    }

    // We finally generate the new room
    addRoom(document.getElementById("text-channel"), txtRoomName.value)

    // Then quit
    divRoomForm.style["visibility"] = "hidden";
    HideRoomForm()
})

const btnCancel = document.getElementById("form-btn-cancelar")
btnCancel.addEventListener("click", ()=>{
    // Simply quit
    divRoomForm.style["visibility"] = "hidden";
    HideRoomForm()
})

})()