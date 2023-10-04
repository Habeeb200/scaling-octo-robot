let all = document.getElementById("all")
let supermarket = document.getElementById("supermarket")
let health = document.getElementById("health")
let home = document.getElementById("home")
let phone = document.getElementById("phone")
let computing = document.getElementById("computing")
let electronics = document.getElementById("electronics")
let fashion = document.getElementById("fashion")
let cslide = document.querySelectorAll(".swiper-slide")
let h3Tag = document.querySelectorAll("h3")
all.addEventListener("click",()=>{
    allBtnValue = all.dataset.category
    cslide.forEach((slide)=>{
        h3Tag.forEach((tag)=>{
            tagValue = tag.dataset.category
            csSlideValue = slide.firstElementChild.dataset.category
            if(allBtnValue === csSlideValue || allBtnValue === "all"){
                slide.classList.remove("hidden")
                tag.classList.remove("hidden")
            }else{
                slide.classList.add("hidden")
                tag.classList.add("hidden")
            }
        })
    })
})
supermarket.addEventListener("click",()=>{
    supBtnValue = supermarket.dataset.category
    cslide.forEach((slide)=>{
        h3Tag.forEach((tag)=>{
            tagValue = tag.dataset.category
            csSlideValue = slide.firstElementChild.dataset.category
            if(supBtnValue === csSlideValue || supBtnValue == tagValue){
                slide.classList.remove("hidden")
                tag.classList.remove("hidden")
            }else{
                slide.classList.add("hidden")
                tag.classList.add("hidden")
            }
        })
    })
})
health.addEventListener("click",()=>{
    healthBtnValue = health.dataset.category
    cslide.forEach((slide)=>{
        h3Tag.forEach((tag)=>{
            tagValue = tag.dataset.category
            csSlideValue = slide.firstElementChild.dataset.category
            if(healthBtnValue === csSlideValue || healthBtnValue == tagValue){
                slide.classList.remove("hidden")
                tag.classList.remove("hidden")
            }else{
                slide.classList.add("hidden")
                tag.classList.add("hidden")
            }
        })
    })
})
home.addEventListener("click",()=>{
    homeBtnValue = home.dataset.category
    cslide.forEach((slide)=>{
        h3Tag.forEach((tag)=>{
            tagValue = tag.dataset.category
            csSlideValue = slide.firstElementChild.dataset.category
            if(homeBtnValue === csSlideValue || homeBtnValue == tagValue){
                slide.classList.remove("hidden")
                tag.classList.remove("hidden")
            }else{
                slide.classList.add("hidden")
                tag.classList.add("hidden")
            }
        })
    })
})
phone.addEventListener("click",()=>{
    phoneBtnValue = phone.dataset.category
    cslide.forEach((slide)=>{
        h3Tag.forEach((tag)=>{
            tagValue = tag.dataset.category
            csSlideValue = slide.firstElementChild.dataset.category
            if(phoneBtnValue === csSlideValue || phoneBtnValue == tagValue){
                slide.classList.remove("hidden")
                tag.classList.remove("hidden")
            }else{
                slide.classList.add("hidden")
                tag.classList.add("hidden")
            }
        })
    })
})
computing.addEventListener("click",()=>{
    computingBtnValue = computing.dataset.category
    cslide.forEach((slide)=>{
        h3Tag.forEach((tag)=>{
            tagValue = tag.dataset.category
            csSlideValue = slide.firstElementChild.dataset.category
            if( computingBtnValue === csSlideValue || computingBtnValue == tagValue){
                slide.classList.remove("hidden")
                tag.classList.remove("hidden")
            }else{
                slide.classList.add("hidden")
                tag.classList.add("hidden")
            }
        })
    })
})
electronics.addEventListener("click",()=>{
    electronicsBtnValue = electronics.dataset.category
    cslide.forEach((slide)=>{
        h3Tag.forEach((tag)=>{
            tagValue = tag.dataset.category
            csSlideValue = slide.firstElementChild.dataset.category
            if( electronicsBtnValue === csSlideValue || electronicsBtnValue == tagValue){
                slide.classList.remove("hidden")
                tag.classList.remove("hidden")
            }else{
                slide.classList.add("hidden")
                tag.classList.add("hidden")
            }
        })
    })
})
fashion.addEventListener("click",()=>{
    fashionBtnValue = fashion.dataset.category
    cslide.forEach((slide)=>{
        h3Tag.forEach((tag)=>{
            tagValue = tag.dataset.category
            csSlideValue = slide.firstElementChild.dataset.category
            if( fashionBtnValue === csSlideValue && fashionBtnValue == tagValue){
                slide.classList.remove("hidden")
                tag.classList.remove("hidden")
            }else{
                slide.classList.add("hidden")
                tag.classList.add("hidden")
            }
        })
    })
})