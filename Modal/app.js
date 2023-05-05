const openbtn = document.querySelector(".btn-open")
const closebtn = document.querySelector(".btn-close")
const modal = document.querySelector(".modal-container")

openbtn.addEventListener("click",()=>{
    modal.classList.add("show")
})
closebtn.addEventListener("click",()=>{
    modal.classList.remove("show")
})