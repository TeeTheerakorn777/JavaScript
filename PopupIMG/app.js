const smallImgs = document.querySelectorAll(".gallery img")
const fullimgs = document.querySelector(".full-img")
const modal = document.querySelector(".modal")
smallImgs.forEach(img=>{
    img.addEventListener("click",()=>{
        const fullsize = img.getAttribute("alt")
        const path = `foods-images/full/${fullsize}.jpg`
        fullimgs.src=path
        modal.classList.add("open")
    })
})

modal.addEventListener("click",(e)=>{
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open")
    }
})
