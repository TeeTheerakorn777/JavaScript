// ฟังก์ชันนี้ใช้สำหรับแสดง progress bar บนหน้าเว็บ
const progressEl = document.querySelector(".progress")
window.addEventListener("scroll", scrollProgress)

function scrollProgress() {
    // คำนวณความสูงของหน้าเว็บและตำแหน่งที่เลื่อนไป
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPercentage = (scrollTop / pageHeight) * 100

    // แสดง progress bar
    progressEl.style.visibility = "visible"
    progressEl.style.width = scrollPercentage + "%"
}

// ฟังก์ชันนี้ใช้สำหรับแสดงปุ่ม scroll to top เมื่อเลื่อนหน้าเว็บลงมา
const scrollBtn = document.querySelector(".top")
const rootEl = document.documentElement
document.addEventListener("scroll", showBtn)

function showBtn() {
    // คำนวณความสูงของหน้าเว็บและตำแหน่งที่เลื่อนไป
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
    if (rootEl.scrollTop / scrollTotal > 0.3) {
        // แสดงปุ่มเมื่อเลื่อนหน้าเว็บลงมาถึงระดับที่กำหนด
        scrollBtn.classList.add("show-btn")
    } else {
        scrollBtn.classList.remove("show-btn")
    }
}

// ฟังก์ชันนี้ใช้สำหรับเลื่อนหน้าเว็บไปที่ด้านบน
scrollBtn.addEventListener("click", scrollToTop)

function scrollToTop() {
    // เลื่อนหน้าเว็บไปที่ด้านบนด้วย animation
    rootEl.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// ฟังก์ชันนี้ใช้สำหรับแปะแนว header เมื่อเลื่อนหน้าเว็บลงมา
const header = document.querySelector(".header1")
window.addEventListener("scroll", stickNavbar)

function stickNavbar() {
    if (window.scrollY > header.offsetHeight + 150) {
        header.classList.add("show-header")
    } else {
        header.classList.remove("show-header")
    }
}

const products = document.querySelectorAll(".box");

window.addEventListener("scroll", scrollProduct);

function scrollProduct() {
  const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  products.forEach((product) => {
    if (document.documentElement.scrollTop / scrollTotal > 0.2) {
      product.classList.add("show-product");
    } else {
      product.classList.remove("show-product");
    }
  });
}

const products2 = document.querySelectorAll(".box2");

window.addEventListener("scroll", scrollProduct2);

function scrollProduct2() {
  const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  products2.forEach((product) => {
    if (document.documentElement.scrollTop / scrollTotal > 0.5) {
      product.classList.add("show-product");
    } else {
      product.classList.remove("show-product");
    }
  });
}

const products3 = document.querySelectorAll(".box3");

window.addEventListener("scroll", scrollProduct3);

function scrollProduct3() {
  const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  products3.forEach((product) => {
    if (document.documentElement.scrollTop / scrollTotal > 0.8) {
      product.classList.add("show-product");
    } else {
      product.classList.remove("show-product");
    }
  });
}









