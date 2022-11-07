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


})()