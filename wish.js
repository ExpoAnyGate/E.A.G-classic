//倒數
function updateCountdown() {
  const targetDate = new Date("2025-03-16T00:00:00"); // 目標時間 專題發表日！！！
  const now = new Date();
  const timeGap = targetDate - now; // 計算目標時間與當前時間之間的差距

  if (timeGap <= 0) {
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
    clearInterval(countdownInterval); // 停止倒數計時
  } else {
   const days = Math.floor(timeGap / (1000 * 60 * 60 * 24)); // 計算天數
   const hours = Math.floor(
     (timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   ); // 計算小時
   const minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60)); // 計算分鐘
   const seconds = Math.floor((timeGap % (1000 * 60)) / 1000); // 計算秒數

   // 更新 HTML 元素的內容
   document.getElementById("days").textContent = days;
   document.getElementById("hours").textContent = hours;
   document.getElementById("minutes").textContent = minutes;
   document.getElementById("seconds").textContent = seconds;
  }
}

// 每秒更新一次倒數
const countdownInterval = setInterval(updateCountdown, 1000);



//跑馬燈
const swiper = new Swiper(".mySwiper", {
  direction: "horizontal", // 水平滾動
  allowTouchMove: false,  // 禁止手動滑動
  //能呈現幾個.swiper-slide
  slidesPerView: "auto",  
  speed: 8000, //跑馬燈的速度(毫秒) 數值越大越慢
  loop: true, //循環
  autoplay: {
    delay: 0,   // 不延遲，馬上滾動
    //避免點擊造成跑馬燈失效，視情況增加
    disableOnInteraction: false,
  },
});

//許願展覽 計算剩下可輸入幾字
function updateCharacterCount() {
  const describeText = document.getElementById("describe-text");
  const charCountP = document.querySelector("#char-count p");
  const maxLength = describeText.getAttribute("maxlength");
  const currentLength = describeText.value.length;
  charCountP.textContent = `${currentLength}/${maxLength}`;
}

// 初始化計數
document.addEventListener("DOMContentLoaded", () => {
    const describeText = document.getElementById("describe-text");
    describeText.addEventListener("input", updateCharacterCount);
    updateCharacterCount(); // 確保頁面加載完成後也進行計數更新
});