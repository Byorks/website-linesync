// init Swiper:
const swiperBanner = new Swiper(".swiper-banner", {
  cssMode: false,
  speed: 800,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  mousewheel: false,
  keyboard: true,
});

// Segundo carrossel (serviços)
const swiperServices = new Swiper(".swiper-services", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  // É possível estilizar quantos slides vão aparecer por breakpoint
  // breakpoints: {
  //   640: { slidesPerView: 2 },
  //   768: { slidesPerView: 3 },
  //   1024: { slidesPerView: 4 },
  // },
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
    dynamicBullets: true, // opcional: bullets menores conforme distância
  },
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
});

//  Cases / Parceiros (navigation customizada, sem loop talvez)
const swiperCases = new Swiper(".swiper-cases", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: { el: ".swiper-pagination", clickable: true, type: "bullets" }, // ou fraction
  // breakpoints: {
  //   768: { slidesPerView: 2 },
  //   1024: { slidesPerView: 3 },
  // },
  mousewheel: false,
  keyboard: true,
});

// Página de estágio Cultura
const swiperCulture = new Swiper(".swiper-culture", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  // É possível estilizar quantos slides vão aparecer por breakpoint
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 1.2 },
  },

  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
});

// Lucide
lucide.createIcons();

// =========================================
// Nav Menu
// =========================================

const menu = document.getElementById("menu");
const navBtn = document.getElementById("nav-btn");
const overlay = document.getElementById("menu-overlay");

// Troca o ícone do lucide
const updateIcon = (isOpen) => {
  navBtn
    .querySelector("svg")
    .setAttribute("data-lucide", isOpen ? "x" : "menu");
  lucide.createIcons();
};

const closeMobileMenu = () => {
  menu.classList.remove("top-[66px]");
  menu.classList.add("top-[-300%]");
  overlay.classList.remove("opacity-100", "pointer-events-auto");
  overlay.classList.add("opacity-0", "pointer-events-none");
  menu.dataset.state = "closed";
  updateIcon(false);
};

const openMobileMenu = () => {
  menu.classList.add("top-[66px]");
  menu.classList.remove("top-[-300%]");
  overlay.classList.remove("opacity-0", "pointer-events-none");
  overlay.classList.add("opacity-100", "pointer-events-auto");
  menu.dataset.state = "open";
  updateIcon(true);
};

navBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.dataset.state === "open" ? closeMobileMenu() : openMobileMenu();

  // tamanho do navbar
  // menu.classList.toggle('top-[66px]');
});

// Fechar quando clica fora do menu
document.addEventListener("click", (e) => {
  const clickedInside = navBtn.contains(e.target) || menu.contains(e.target);
  if (!clickedInside && menu.dataset.state === "open") {
    closeMobileMenu();
  }
});

// fechando com tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.dataset.state === "open") {
    closeMobileMenu();
  }
});

// =========================================
// Contdown
// =========================================
const daysElements = document.querySelector("[count-days]");
const hoursElements = document.querySelector("[count-hours]");
const minutesElements = document.querySelector("[count-minutes]");
const secondsElements = document.querySelector("[count-seconds]");

const render = (days, hours, minutes, seconds) => {
  daysElements.innerHTML = String(days).padStart(2, "0");
  hoursElements.innerHTML = String(hours).padStart(2, "0");
  minutesElements.innerHTML = String(minutes).padStart(2, "0");
  secondsElements.innerHTML = String(seconds).padStart(2, "0");
};

const countdown = () => {
  const now = new Date();
  console.log(now);

  // Ano atual
  const actualYear = now.getFullYear(); // 2025

  // Janeiro é 0 porque os anos são contados em um array
  // primeiro param é o ano, segundo é o mês e o terceiro é o dia
  const targetDate = new Date(actualYear, 11, 28);

  const timeLeft = targetDate - now; // retorna a data em milissegundos

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  render(days, hours, minutes, seconds);
};

// Executando de 1 em 1 segundo
setInterval(countdown, 1000);
