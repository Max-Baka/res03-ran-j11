let form = document.querySelector("form:first-of-type");

form.addEventListener("submit",function(e){
    e.preventDefault();
    let usernameImput = document.querySelector("#username");
    
    if(usernameImput.value !== "")
    {
        e.target.submit();
    }
    else
    {
    let imputError = document.createElement("p");
    let fieldset = document.querySelector("form:first-of-type fieldset:first-of-type");
        imputError.innerHTML = "Veuilez choisir un nom d'utilisateur";
        imputError.classList.add(imputError);
    }
});