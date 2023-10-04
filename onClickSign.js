btnSignIn = document.querySelector("#btnSignIn") 
loginstatus = localStorage.getItem("login status")
if(loginstatus == "Login sucessfull"){
    output = "SIGNED IN"
    btnSignIn.innerHTML = output
}
btnSignIn.addEventListener("click",()=>{
    window.location.href = "loginpage.html"
})