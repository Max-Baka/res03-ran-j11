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
        imputError.innerHTML = "Veuillez choisir un nom d'utilisateur";
        imputError.classList.add("erreur");
        usernameImput.classList.add("erreur");
        fieldset.appendChild(imputError);}
        
        
        
    let emailImput = document.querySelector("#email");
    
    if(emailImput.value !== "")
    {
        e.target.submit();
    }
    else
    {
    
    let imputError = document.createElement("p");
    let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(2)");
    
        imputError.innerHTML = "Veuillez choisir une adresse valide";
        imputError.classList.add("erreur");
        emailImput.classList.add("erreur");
        fieldset.appendChild(imputError);
        
        }
    
});
