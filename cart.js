let productname = localStorage.getItem("productname")
let productprice = localStorage.getItem("productprice")
let productimage = localStorage.getItem("productimage")
let noOfitems = localStorage.getItem("noOfItems")
let container = document.getElementById("container5")
let small = document.getElementById("small")
let price = document.getElementById("price")
let checkout = document.getElementById("checkout")
displayProduct = " "
displayProduct+=`
        <h3>Cart</h3>
        <hr>
        <div class="d-flex">
            <img src="${productimage}" alt="" style="width: 150px; margin-right: 30px;">
            <div>
                <h4>${productname}</h4>
                <h5><i class="fa-solid fa-naira-sign"></i>${productprice}</h5>
            </div>
        </div>
        <div class="d-flex align-items-center">
            <i class="fa-solid fa-trash-can fs-4 ms-4 me-2" style="color: orange;"></i>
            <h4 style="color: orange;">REMOVE</h4>
            <i class="fa-solid fa-minus offset-7 me-5" style="color: orange;"></i>
            <i class="fa-solid fa-plus" style="color: orange;"></i>
        </div>
`
small.classList.add("show")
container.innerHTML = displayProduct
small.innerHTML = noOfitems
price.innerHTML = `Total: <i class="fa-solid fa-naira-sign"></i> ${productprice}`
let loginstatus = localStorage.getItem("login status")
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
checkout.addEventListener("click",()=>{
    if(loginstatus == "Login sucessfull"){
        small.classList.add("hidden")
        alert('Your order is sucessfull', 'success')


    function alert(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      
        alertPlaceholder.append(wrapper)
      }
    }else{
        alert('You have to sign in', 'danger')


    function alert(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      
        alertPlaceholder.append(wrapper)
      }
    }
})