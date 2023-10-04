myForm = document.getElementById("myForm")
email2 = document.getElementById("exampleInputEmail2")
password2 = document.getElementById("exampleInputPassword3")
email = localStorage.getItem("Email")
password = localStorage.getItem("Password")
let signUp = document.getElementsByTagName("h2")
let elements = document.querySelectorAll(".form-label")
let product = document.getElementsByClassName("product")
let continued = document.getElementById("continue")
myForm.addEventListener("submit", validation)
function validation(e){
    e.preventDefault()
    if(email2.value != email){
        output = "Please enter correct email"
        localStorage.setItem("login status",output)
            email2.classList.add("danger")
            elements[0].innerHTML = output
            elements[0].classList.add("error")
            email2.addEventListener("click",()=>{
                elements[0].innerHTML = "Email address"
                email2.value = ""
                email2.classList.remove("danger")
                elements[0].classList.remove("error")
            })
    }else if(password2.value != password){
        output = "Please enter correct password"
        localStorage.setItem("login status",output)
            password2.classList.add("danger")
            elements[1].innerHTML = output
            elements[1].classList.add("error")
            password2.addEventListener("click",()=>{
                elements[1].innerHTML = "Password"
                password2.value = ""
                password2.classList.remove("danger")
                elements[1].classList.remove("error")
            })
    }else{
        output = "Login sucessfull"
        localStorage.setItem("login status",output)
        signUp[0].innerHTML = output
        signUp[0].classList.add("success")
        password2.value = ""
        email2.value = ""
        myForm.addEventListener("click",()=>{
            output = "Login"
            signUp[0].innerHTML = output
        })
        product[0].classList.add("displayProduct")
        product[0].classList.remove("product")
        continued.classList.remove("product")
    }

}
