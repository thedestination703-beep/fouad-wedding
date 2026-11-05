function openCurtain() {
  const music = document.getElementById("bg-music");
  if (music) {
    music.volume = 0.5;
    music.play().catch(() => {});
  }

  const rightCurtain = document.getElementById("curtainRight");
  const leftCurtain = document.getElementById("curtainLeft");
  const center = document.getElementById("curtainCenter");
  const langToggle = document.querySelector(".lang-toggle");

  center.style.opacity = "0";
  if (langToggle) langToggle.style.display = "none";

  setTimeout(() => {
    rightCurtain.style.transform = "translateX(65%)";
    leftCurtain.style.transform = "translateX(-65%)";
  }, 300);

  setTimeout(() => {
    document.getElementById("curtain-screen").classList.remove("active");
    document.getElementById("book-screen").classList.add("active");
  }, 2000);
}

let currentPage = 1;
const totalPages = 4;
function nextPage() {
  if (currentPage < totalPages) {
    document.getElementById("page" + currentPage).classList.remove("active");
    currentPage++;
    document.getElementById("page" + currentPage).classList.add("active");
  }
}

function changeLang(lang) {
  const isEn = lang === "en";
  document.documentElement.dir = isEn ? "ltr" : "rtl";
  document.getElementById("btn-ar").classList.toggle("active", !isEn);
  document.getElementById("btn-en").classList.toggle("active", isEn);

  document.querySelectorAll("[data-ar]").forEach((el) => {
    el.textContent = isEn
      ? el.getAttribute("data-en")
      : el.getAttribute("data-ar");
  });

  const arrows = document.querySelectorAll(".next-btn .arrow");
  arrows.forEach((arrow) => {
    arrow.style.transform = isEn ? "rotate(180deg)" : "rotate(0deg)";
  });
}

const weddingDate = new Date("2026-11-11T19:00:00").getTime();
function updateCountdown() {
  const now = new Date().getTime();
  const diff = weddingDate - now;
  if (diff <= 0) return;

  document.getElementById("days").textContent = Math.floor(
    diff / (1000 * 60 * 60 * 24),
  );
  document.getElementById("hours").textContent = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  document.getElementById("minutes").textContent = Math.floor(
    (diff % (1000 * 60 * 60)) / (1000 * 60),
  );
  document.getElementById("seconds").textContent = Math.floor(
    (diff % (1000 * 60)) / 1000,
  );
}
setInterval(updateCountdown, 1000);
updateCountdown();
