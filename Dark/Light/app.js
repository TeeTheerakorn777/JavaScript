const timeEl = document.querySelector(".time")
const btn = document.querySelector(".toggle")

function setTime() {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    timeEl.innerHTML = `${hours < 10 ? `0${hours}` : hours} : 
    ${minutes < 10 ? `0${minutes}` : minutes} : 
    ${seconds < 10 ? `0${seconds}` : seconds}`
}
fsdddddddddddddddddddddddddddddddddddddd
// setInterval(() => {
//     timeEl.innerText = new Date().toLocaleString()
// }, 1000)

btn.addEventListener("click",(e)=>{
    const html=document.querySelector('html')
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        btn.textContent="โหมดกลางคืน"
    } else {
        html.classList.add("dark")
        e.target.innerHTML="โหมดกลางวัน"
    }
})

setTime()
setInterval(setTime, 1000)
