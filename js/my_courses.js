(()=>{

    const coursesMyList = document.getElementById("my-courses-list")
    
    for(let i=0; i<10; i++){
        coursesMyList.innerHTML += `<div class="box">
        <div class="my-cards">
            <div class="img-card">
                <button class="btn-card btn-primary"> &#62 </button>
            </div>
            <div>
                <h5 class="title-card">Cursos</h5>
                <p class="description-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio voluptas quos debitis dolore vero quis incidunt repudiandae, quaerat dolorem culpa itaque quod? Molestiae, ratione minus rerum iure distinctio quis!</p>
            </div>
        </div>

        <button class="btn-reto">Haz el reto</button>
    </div>`
    }

    const btnsIngresar = document.getElementsByClassName("btn-card")

    for(let i=0; i<btnsIngresar.length; i++){
        btnsIngresar[i].addEventListener("click", ()=>{
            window.location.href = "ruta.html"
        })
    }
    

    const btnVolver= document.getElementById("btn-volver")

    btnVolver.addEventListener("click", ()=>{
        window.location.href = "courses.html"
    })
})()