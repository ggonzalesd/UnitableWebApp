(()=>{

const groupsOwnList = document.getElementById("groups-own-list")

const groupsSearchList = document.getElementById("groups-search-list")

for(let i=0; i<10; i++){
    groupsOwnList.innerHTML += `<div class="groups-item">
    <div class="description">
        <img src="images/groups-icon.jpg" alt="">
        <div>
            <h4>Grupo #${i+1}</h4>
            <p>Description</p>
        </div>
    </div>
    <div class="information">
        <div class="tag btn-premium">10K</div>
        <span>Miembros</span>
        <button class="btn btn-group">OK</button>
    </div>
</div>`
}

for(let i=0; i<20; i++){
    groupsSearchList.innerHTML += `<div class="groups-item">
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
</div>`
}


const btnsGroup = document.getElementsByClassName("btn-group")

for(let i=0; i<btnsGroup.length; i++){
    btnsGroup[i].addEventListener("click", ()=>{
        window.location.href = "chat.html"
    })
}

})()