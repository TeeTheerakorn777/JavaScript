const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

btn.addEventListener("click",()=>{
    coupon.select() //เพื่อให้มีกรอบครุมตัวที่คัดลอก
    // coupon.setSelectionRange(0,999999)
    navigator.clipboard.writeText(coupon.value) //คัดลอก
    btn.textContent="คัดลอกคูปองแล้ว!!" //นำไปแสดง
    setTimeout(()=>{
        btn.textContent="คัดลอก"
    },3000)
})