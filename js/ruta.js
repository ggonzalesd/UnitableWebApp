(()=>{

let temas = [
    {
        "name": "Tema #1",
        "subtemas": [
            {
                "name": "¿Cómo empezar?",
                "doc": [
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/logo.png"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/group-icon.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/wallpaper.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/store-profile-bg.jpg"
                    }
                ]
            },
            {
                "name": "Unitable",
                "doc": [
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/logo.png"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/group-icon.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/wallpaper.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/store-profile-bg.jpg"
                    }
                ]
            },
            {
                "name": "Conceptos",
                "doc": [
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/wallpaper.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/group-icon.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/logo.png"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/store-profile-bg.jpg"
                    }
                ]
            }
        ]
    },
    {
        "name": "Tema #2",
        "subtemas": [
            {
                "name": "Diarios",
                "doc": [
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/wallpaper.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/group-icon.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/logo.png"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/store-profile-bg.jpg"
                    }
                ]
            },
            {
                "name": "Empresas",
                "doc": [
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/logo.png"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/store-profile-bg.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/wallpaper.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/group-icon.jpg"
                    }
                ]
            }
        ]
    },
    {
        "name": "Tema #3",
        "subtemas": [
            {
                "name": "Salud",
                "doc": [
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/store-profile-bg.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/logo.png"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/group-icon.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/wallpaper.jpg"
                    }
                ]
            },
            {
                "name": "Hola mundo",
                "doc": [
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/store-profile-bg.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/logo.png"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/group-icon.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/wallpaper.jpg"
                    }
                ]
            },
            {
                "name": "Testing Name",
                "doc": [
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/group-icon.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/logo.png"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/store-profile-bg.jpg"
                    },
                    {
                        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur quo pariatur veritatis natus officiis, ab totam labore fugit beatae ullam consequatur saepe, assumenda inventore est repudiandae magnam. Cum, omnis.",
                        "image": "images/wallpaper.jpg"
                    }
                ]
            }
        ]
    },
]

const subtemaTitleHtml = document.getElementById("subtema-title")

const subtemaContainer = document.getElementById("subtemas-list")

let lastButton = null

const renderContent = (subtema) =>{
    subtemaTitleHtml.innerText = subtema.name
    subtemaContainer.innerHTML = ""

    const doc = subtema.doc

    for(let i=0; i<doc.length; i++){
        console.log(doc[i])
        const parrafo = document.createElement("div")
        parrafo.classList.add("parrafo")

        const divtext = document.createElement("div")
        divtext.classList.add("text")
        const divtextp = document.createElement("p")
        divtextp.innerText = doc[i].text
        divtext.appendChild(divtextp)

        const divimage = document.createElement("div")
        divimage.classList.add("image")
        const divimageimg = document.createElement("img")
        divimageimg.setAttribute("src", doc[i].image)
        divimageimg.setAttribute("width", "200")
        divimage.appendChild(divimageimg)

        if (i%2==0){
            parrafo.appendChild(divtext)
            parrafo.appendChild(divimage)
        } else {
            parrafo.appendChild(divimage)
            parrafo.appendChild(divtext)
        }

        subtemaContainer.appendChild(parrafo)
    }

}

const buttonPressed = (element, subtema)=>{
    document.body.classList.add
    if (lastButton !== null){
        lastButton.childNodes[1].classList.remove("tree-subtema-button-checked")
    }
    element.childNodes[1].classList.add("tree-subtema-button-checked")
    lastButton = element

    renderContent(subtema)
}


const divSpan = (classes, spanText)=>{
    const div = document.createElement("div")
    const span = document.createElement("span")

    for(let i=0; i<classes.length; i++){
        div.classList.add(classes[i])
    }

    div.appendChild(span)
    span.innerText = spanText
    
    return div
}

const subTemaGenerator = (subtema, selected, circleText)=>{
    const treeSubtema = document.createElement("div")
    treeSubtema.classList.add("tree-subtema")

    const treeSubtemaPath = document.createElement("div")
    treeSubtemaPath.classList.add("tree-subtema-path")
    const treeSubtemaButton = document.createElement("div")
    treeSubtemaButton.classList.add("tree-subtema-button")
    if (selected===true){
        treeSubtemaButton.classList.add("tree-subtema-button-checked")
    }
    treeSubtemaButton.appendChild(divSpan(["tree-subtema-circle", "circle"], circleText))
    treeSubtemaButton.appendChild(divSpan(["tree-subtema-title"], subtema.name))
    
    treeSubtema.appendChild(treeSubtemaPath)
    treeSubtema.appendChild(treeSubtemaButton)

    return treeSubtema
}

const treeTema = (tema, i)=>{
    const tree = document.createElement("div")
    tree.classList.add("tree-tema")

    const treeTemaHeader = document.createElement("div")
    treeTemaHeader.classList.add("tree-tema-header")

    treeTemaHeader.appendChild(divSpan(["circle"], ""+(i+1)))

    const temaTitle = document.createElement("dev")
    temaTitle.classList.add("tema-title")
    const h3tema = document.createElement("h3")
    h3tema.innerText = tema.name
    temaTitle.appendChild(h3tema)

    treeTemaHeader.appendChild(temaTitle)

    const treeTemaSubs = document.createElement("div")
    treeTemaSubs.classList.add("tree-tema-subs")

    tree.appendChild(treeTemaHeader)
    tree.appendChild(treeTemaSubs)

    for(let j=0; j<tema.subtemas.length; j++){
        const subtematag = subTemaGenerator(
            tema.subtemas[j],
            i==0 && j == 0,
            (""+(i+1))+"."+(""+(j+1))
        )
        if (i == 0 && j == 0){
            lastButton = subtematag 
            renderContent(tema.subtemas[j])
        }

        treeTemaSubs.appendChild(subtematag)

        subtematag.addEventListener("click", ()=>{buttonPressed(subtematag, tema.subtemas[j]);})
    }

    return tree
}

const sectionTree = document.getElementById("section-tree")

for(let i=0; i<temas.length; i++){
    const tema = treeTema(temas[i], i)

    sectionTree.appendChild(tema)
}


})()