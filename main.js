let pwd = document.getElementById("password"); // mon 1er password 
let confirmPwd = document.getElementById("confirm-password"); // mon 2nd 
let submit = document.getElementById("pwd-submit"); // mon bouton 
  
pwd.addEventListener("focusout", function(){ // quand on sort du champ 
   if(pwd.value === confirmPwd.value) // si les deux password sont égauc 
   {  
        submit.style.display = "block"; // j'affiche le bouton 
   }  
   else // sinon 
   {  
       submit.style.display = "none"; // je le masque  
   }  
});  

// pareil pour le second champ password
confirmPwd.addEventListener("focusout", function(){  
    if(pwd.value === confirmPwd.value)  
    {  
        submit.style.display = "block";  
    }  
    else  
    {  
        submit.style.display = "none";  
    }  
});