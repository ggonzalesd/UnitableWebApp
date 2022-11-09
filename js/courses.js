(()=>{

    const coursesOwnList = document.getElementById("courses-own-list")

    const coursesSearchList = document.getElementById("courses-search-list")
    
    for(let i=0; i<10; i++){
        coursesOwnList.innerHTML += `<div class="card-own-list">
        <div class="img-card">
            <button class="btn-card btn-primary"> &#62 </button>
        </div>
        <div>
            <h5 class="title-card">Cursos</h5>
            <p class="description-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio voluptas quos debitis dolore vero quis incidunt repudiandae, quaerat dolorem culpa itaque quod? Molestiae, ratione minus rerum iure distinctio quis!</p>
        </div>
    </div>`
    }

    for(let i=0; i<20; i++){
        coursesSearchList.innerHTML += `<div class="card-search-list">
        <div class="img-card">
            <button class="btn-card-agregar btn-primary"> + </button>
        </div>
        <div>
            <h5 class="title-card">Cursos</h5>
            <p class="description-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio voluptas quos debitis dolore vero quis incidunt repudiandae, quaerat dolorem culpa itaque quod? Molestiae, ratione minus rerum iure distinctio quis!</p>
        </div>
    </div>`
    }

    const btnAgregar = document.getElementsByClassName("btn-card-agregar")

    let agregar = [true*btnAgregar]

    for(let i=0; i<btnAgregar.length; i++){
        btnAgregar[i].addEventListener("click", ()=>{
            if(agregar[i] === true){
                agregar[i] = false
                btnAgregar[i].innerText = "/"
                btnAgregar[i].style["backgroundColor"] = "#3f4e6a"
            } else{
                agregar[i] = true
                btnAgregar[i].innerText = "+"
                btnAgregar[i].style["backgroundColor"] = ""
            }
        })
    }
    

    const btnMyCourses = document.getElementById("btn-my-courses")

    btnMyCourses.addEventListener("click", ()=>{
        window.location.href = "my_courses.html"
    })
})()