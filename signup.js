let password = document.getElementById("exampleInputPassword1")
let myForm = document.getElementById("myForm")
let firstName = document.getElementById("exampleInputName")
let email = document.getElementById("exampleInputEmail1")
let state = document.querySelector(".state")
let elements = document.querySelectorAll(".form-label")
let signUp = document.getElementsByTagName("h2")
email2 = localStorage.getItem("Email")
password2 = localStorage.getItem("Password")
myForm.addEventListener("submit", formValidation)
function formValidation(e){
    e.preventDefault()
    if(email.value == email2){
        output = "You already have an account"
        signUp[0].innerHTML = output
        signUp[0].classList.remove("success")
       signUp[0].classList.add("error")
        firstName.value = ""
        password.value = ""
        email.value = ""
        myForm.addEventListener("click",()=>{
            signUp[0].classList.add("success")
            output = "SignUp"
            signUp[0].innerHTML = output
        })
    }else if(firstName.value.length <= 6){
        output = "Firstname must contain more than 6 characters"
        firstName.classList.add("danger")
        elements[0].innerHTML = output
        firstName.addEventListener("click",()=>{
            elements[0].innerHTML = "Firstname"
            firstName.classList.remove("danger")
        })
    }else if(email.value.length === 0){
        output = "Please enter email"
        email.classList.add("danger")
        email.value = output
        email.addEventListener("click",()=>{
            email.value = ""
            email.classList.remove("danger")
        })
    }else if(password.value.length < 8){
        output = "Password must contain more than 6 characters"
        password.classList.add("danger")
        elements[2].innerHTML = output
        password.addEventListener("click",()=>{
            elements[2].innerHTML = "Password"
            password.classList.remove("danger")
        })
    }else{
        localStorage.setItem('Email',email.value)
        localStorage.setItem("Password", password.value)
        output = "Signed up sucessfully"
        signUp[0].innerHTML = output
        signUp[0].classList.add("success")
        firstName.value = ""
        password.value = ""
        email.value = ""
        myForm.addEventListener("click",()=>{
            output = "SignUp"
            signUp[0].innerHTML = output
        })
    }
    
}
