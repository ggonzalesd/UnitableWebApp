(()=>{

const titleTags = document.getElementsByClassName("header-title")

console.log(window.location.pathname)

for(let i=0; i<titleTags.length; i++){
    titleTags[i].addEventListener("click", ()=>{
        window.location.href = "index.html"
    })
}


})()