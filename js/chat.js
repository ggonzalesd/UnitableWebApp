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

})()