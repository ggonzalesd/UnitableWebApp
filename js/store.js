(()=>{

const storeContainerTheme = document.getElementById("store-container-theme")

for(let i=0; i<15; i++){
    storeContainerTheme.innerHTML += `<div class="card-item card-item-theme">
    <div class="card-theme-title">Tema #AA</div>
    <div class="card-theme-desc">
        <p>50 monedas</p>
        <button class="btn">+</button>
    </div>
</div>`
}

const storeContainerPdf = document.getElementById("store-container-pdf")

for(let i=0; i<15; i++){
    storeContainerPdf.innerHTML += `<div class="card-item card-item-pdf">
    <div class="card-item card-item-pdf">
        <div class="card-pdf-title">Documento.pdf</div>
        <div class="card-pdf-desc">
            <p>50 monedas</p>
            <button class="btn">+</button>
        </div>
    </div>
</div>`
}

})()