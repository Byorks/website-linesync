// init Swiper:
const swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

const carrosselHomeServices = new Swiper(".swiper-services", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
});

const carrosselHomeCases = new Swiper(".swiper-cases", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
  },
  pagination: {
    el: ".swiper-pagination-3",
  },
  mousewheel: true,
  keyboard: true,
});

// Lucide
lucide.createIcons();

// __________________________________________
// __________________________________________
// Nav Menu

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
