let container = document.getElementById("container5")
let image = localStorage.getItem("image")
let name = localStorage.getItem("name")
let price=localStorage.getItem("price")
displayProduct = " "
displayProduct+= `
<div class="me-4">   
                <img src="${image}" alt=""  class="rounded">
                <hr>
                <h5>SHARE THIS PRODUCT</h5>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i> </a>   
            </div>
            
            <div>
                <a href="#" class="bg-warning p-1 text-light col-6">Free Delivery</a>
                
                <h2>${name}</h2>
                <h6 >Brand: <a href="#" style="color: blue;">Grant</a> | <a href="#" style="color: blue;">Similar products from Grant</a></h6 >
                <hr>
                <h3><strong><i class="fa-solid fa-naira-sign"></i>${price}</strong></h3>
                <i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star"></i><br><br>
                <button class="btn btn-warning ps-5 pe-5 w-100 text-light" id="btn"><i class="fa-solid fa-cart-shopping text-light fs-5"></i> ADD TO CART</button>
                <hr>
            </div>
`
container.innerHTML = displayProduct
buttonOrder = document.getElementById("btn")
small = document.getElementById("small")
buttonOrder.addEventListener("click",clicks)
let i = 1
function clicks(){
    localStorage.setItem("productname",name)
    localStorage.setItem("productprice",price)
    localStorage.setItem("productimage",image)
    localStorage.setItem("noOfItems",i)
    small.classList.add("show")
    small.innerHTML= `${i++}`
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    alert('You have successfully added this item to cart', 'success')


    function alert(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      
        alertPlaceholder.append(wrapper)
      }
}
cart = document.getElementById("cart")
cart.addEventListener("click",()=>{
    window.location.href = "cart.html"
})