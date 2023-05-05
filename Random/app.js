const messages = [
    "ข้าวผัด",
    "Coke",
    "ไข่ดdddddddddddddddddddddddddddddddddddddddาว",
    "หมูต้ม"
]

const comment = document.querySelector(".comment")
const btn = document.querySelector(".btn")

function random(){
    return messages[Math.floor(Math.random()*messages.length)]
}

btn.addEventListener("click",()=>messagerendom())

function messagerendom() {
    const mrd = document.createElement("div")
    mrd.classList.add("mrd")
    mrd.innerText =  random()
    comment.appendChild(mrd)
    setTimeout(() => {
        mrd.remove()
    }, 3000);
}