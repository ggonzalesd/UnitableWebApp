(()=>{

    const btnTengoCuenta = document.querySelector("#form-btn-tengocuenta")
    
    btnTengoCuenta.addEventListener("click", ()=>{
        window.location.href = "login.html"
    })
    
    const formNtnUnete = document.querySelector("#form-btn-unete")
    
    formNtnUnete.addEventListener("click", ()=>{
        window.location.href = "profile.html"
    })
    
    const HideTermsForm = () => {
        header.style["filter"] = ""
        main.style["filter"] = ""
        footer.style["filter"] = ""
    }
    const TermsLabel = document.getElementById("terms-lbl")
    TermsLabel.addEventListener("click", ()=>{
        header.style["filter"] = "blur(4px)"
        main.style["filter"] = "blur(4px)"
        footer.style["filter"] = "blur(4px)"
        div_terms.style["visibility"] = "visible";
    })
    const btnClose = document.getElementById("form-btn-close")
    btnClose.addEventListener("click", ()=>{
        // Simply quit
        div_terms.style["visibility"] = "hidden";
        HideTermsForm()
    })
    })()