// // ส่วนนี้เป็นการกำหนดตัวแปร container ที่จะใช้เก็บ element ที่สร้างไว้ในภายหลัง
// const container = document.getElementById("container")

// // ส่วนนี้เป็นการเลือก element ที่มี class ชื่อ country และเก็บในตัวแปร btnC เพื่อใช้งานในภายหลัง
// const btnC = document.querySelector(".country")

// // ฟังก์ชั่น getC() เป็น async function ที่ใช้ Fetch API ในการดึงข้อมูลจาก URL และแสดงผลด้วยการเรียกฟังก์ชั่น createCard() สำหรับแต่ละประเทศ
// const getC = async () => {
//     try {
//         const url = 'https://restcountries.com/v2/all';
//         const response = await fetch(url);
//         const countries = await response.json();
//         countries.forEach((country) => {
//             createCard(country);
//         });
//       } catch (error) {
//         console.error(error);
//       }
//     };

// //แบบเก่า
// //   const url = 'https://restcountries.com/v2/all'
// //   const res = await fetch(url)
// //   const items = await res.json()
// //   items.forEach(country => {
// //     createCard(country)
// //   });
// // }

// // เรียกใช้ฟังก์ชั่น getC() เมื่อโหลดหน้าเสร็จสมบูรณ์
// getC()

// // ฟังก์ชั่น createCard() รับ object ของแต่ละประเทศเป็น parameter และสร้าง HTML element สำหรับแสดงข้อมูลด้วย innerHTML และ appendChild()
// const createCard = (data) => {
//   // สร้าง div element สำหรับแสดงข้อมูลประเทศ
//   const cardEl = document.createElement("div")
//   // เพิ่ม class country เข้าไปใน div element ที่สร้างขึ้นมา
//   cardEl.classList.add("country")
//   // สร้าง HTML content สำหรับแสดงข้อมูลของแต่ละประเทศ
//   const contentHTML = `
//     <div class="img-container">
//         <img src="${data.flag}"/>
//     </div>
//     <div class="info">
//         <h3 class="name">${data.name}</h3>
//         <small>เมืองหลวง : <span>${data.capital}</span></small>
//     </div>
// `
//   // เพิ่ม HTML content เข้าไปใน div element ที่สร้างขึ้นมา
//   cardEl.innerHTML = contentHTML
//   // เพิ่ม div element ที่สร้างขึ้นมาเข้าไปใน container
//   container.appendChild(cardEl)
// }

const container = document.getElementById("container");
const btnn = document.getElementById("btnn")
let pageNumber = 1;

const getC = async () => {
  try {
    const url = "https://restcountries.com/v2/all";
    const response = await fetch(url);
    const countries = await response.json();
    // คำนวณหาตำแหน่งเริ่มต้นและสิ้นสุดของแต่ละหน้า
    const startIndex = (pageNumber - 1) * 8;
    const endIndex = pageNumber * 8;
    // แสดงข้อมูลเฉพาะหน้าที่ต้องการ
    container.innerHTML = "";
    countries.slice(startIndex, endIndex).forEach((country) => {
      createCard(country);
    });
    document.getElementById("back-btn").disabled = pageNumber === 1;
  } catch (error) {
    console.error(error);
  }
};

const createCard = (data) => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("country");
  const contentHTML = `<div class="img-container"> <img src="${data.flag}"/> </div> <div class="info"> <h3 class="name">${data.name}</h3> <small>เมืองหลวง : <span>${data.capital}</span></small> </div>`
  cardEl.innerHTML = contentHTML;
  container.appendChild(cardEl);
};

// เพิ่มปุ่ม Next เพื่อไปหน้าถัดไป
const nextBtn = document.createElement("button");
nextBtn.classList.add("next-btn")
nextBtn.innerHTML = "Next";
nextBtn.addEventListener("click", () => {
  pageNumber++;
  getC();
  if (pageNumber > 1) {
    backBtn.disabled = false;
  }
});
btnn.appendChild(nextBtn);

// เพิ่มปุ่ม Back เพื่อกลับไปยังหน้าก่อนหน้านี้
const backBtn = document.createElement("button");
backBtn.classList.add("back-btn")
backBtn.innerHTML = "Back";
backBtn.disabled = true;
backBtn.addEventListener("click", () => {
  pageNumber--;
  getC();
  if (pageNumber === 1) {
    backBtn.disabled = true;
  }
});
btnn.prepend(backBtn);

getC();
