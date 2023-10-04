let items = document.querySelectorAll(".card")
items.forEach((item)=>{
    item.addEventListener("click",()=>{
       window.location.href = "buying.html"
    localStorage.setItem("image",item.firstElementChild.src)
    let text = item.firstElementChild.nextElementSibling.textContent
    price = text.slice(29,37)
    text1 = text.slice(0,29)
    localStorage.setItem("name",text1)
    localStorage.setItem("price",price)
}) 
})
