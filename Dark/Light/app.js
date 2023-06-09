const timeEl = document.querySelector(".time")
const btn = document.querySelector(".toggle")
const dayEl = document.querySelector(".day")
const monthAll = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม"
];


function setTime() {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    timeEl.innerHTML = `${hours < 10 ? `0${hours}` : hours} : 
    ${minutes < 10 ? `0${minutes}` : minutes} : 
    ${seconds < 10 ? `0${seconds}` : seconds}`
}

function setDay() {
    const date = new Date();
    const day = date.getDate(); // แก้ไขให้ใช้ getDate() เพื่อดึงวันที่
    const month = date.getMonth();
    const monthName = monthAll[month];
    const year = date.getFullYear() + 543; //แปลงเป็น พ.ศ.
    dayEl.innerHTML = `วันที่ ${day}  ${monthName}  ${year}`;
  }

setDay()
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
