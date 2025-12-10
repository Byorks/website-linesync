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
  // autoplay: {
  //   delay: 6000,
  //   disableOnInteraction: false,
  // },
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
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next-cases",
    prevEl: ".swiper-button-prev-cases",
  },
  pagination: {
    el: ".swiper-pagination-cases",
    clickable: true,
    type: "bullets",
  }, // ou fraction
  // breakpoints: {
  //   768: { slidesPerView: 2 },
  //   1024: { slidesPerView: 3 },
  // },
  mousewheel: false,
  keyboard: true,
});

const swiper = new Swiper(".myTextSwiper", {
  direction: "vertical", // Faz subir
  loop: true, // Infinito
  autoplay: {
    delay: 2500, // Tempo entre as trocas (2.5s)
    disableOnInteraction: false,
  },
  allowTouchMove: false, // Impede o usuário de arrastar (opcional)
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

// Página Sobre
const swiperColab = new Swiper(".swiper-collaborators", {
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
    640: { slidesPerView: 1.2 },
    768: { slidesPerView: 3.2 },
  },

  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
});

// Página de estágio Cultura
const swiperCultureAbout = new Swiper(".swiper-culture-2", {
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
    768: { slidesPerView: 3 },
  },

  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
});

// Lucide
console.log("tentando criar lucide");
console.log(lucide);
lucide.createIcons({
  attrs: {
    "stroke-width": 2.2, // padrão é 2px
  },
});

// =========================================
// Splitting
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  Splitting();
});

// =========================================
// Nav Menu
// =========================================

// TO-DO
// [ ] - Ajustar para eu não ter que mudar na mão cada vez que eu alterar o tamanho do menu no HTML
// [ ] - Páginas fora home clicar fora do menu não o fecha

const menu = document.getElementById("menu");
const navBtn = document.getElementById("nav-btn");
const overlay = document.getElementById("menu-overlay");
const navHiddenDistance = "-100dvh";

// Troca o ícone do lucide
const updateIcon = (isOpen) => {
  if (!iconElement) return;
  navBtn
    .querySelector("svg")
    .setAttribute("data-lucide", isOpen ? "x" : "menu");
  lucide.createIcons();
};

const closeMobileMenu = () => {
  menu.classList.remove("top-[66px]");
  menu.classList.add(`top-[${navHiddenDistance}]`);
  overlay.classList.remove("opacity-100", "pointer-events-auto");
  overlay.classList.add("opacity-0", "pointer-events-none");
  menu.dataset.state = "closed";
  updateIcon(false);
};

const openMobileMenu = () => {
  menu.classList.add("top-[66px]");
  menu.classList.remove(`top-[${navHiddenDistance}]`);
  overlay.classList.remove("opacity-0", "pointer-events-none");
  overlay.classList.add("opacity-100", "pointer-events-auto");
  menu.dataset.state = "open";
  updateIcon(true);
};

navBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Para eventos que estão sendo propagados de outros eventlisteners
  menu.dataset.state === "open" ? closeMobileMenu() : openMobileMenu();

  // tamanho do navbar
  // menu.classList.toggle('top-[66px]');
});

// Fechar quando clica fora do menu
document.addEventListener("click", (e) => {
  console.log("log de clique");
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
// Countdown
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

  const actualDay = now.getDate();
  const actualMonth = now.getMonth();
  console.log(actualDay)

  // Janeiro é 0 porque os anos são contados em um array
  // primeiro param é o ano, segundo é o mês e o terceiro é o dia
  const targetDate = new Date(actualYear, actualMonth, actualDay + 1);

  const timeLeft = targetDate - now; // retorna a data em milissegundos

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  render(days, hours, minutes, seconds);
};

// Usando Guard Clause para não rodar o countdown caso não tenha um component com id countdown na página
const initCountdown = () => {
  const countdownContainer = document.getElementById("countdown");

  if (!countdownContainer) {
    return;
  }

  console.log("Countdown iniciado!");

  // Executando de 1 em 1 segundo
  setInterval(countdown, 1000);
};

const setDateLimit = () => {
  const dateLimitContainer = document.getElementById("limit-date");
  if (!dateLimitContainer) {
    return;
  }

  const now = new Date();
  // Ano atual
  const actualYear = String(now.getFullYear()); // 2025

  let actualDay;
  if(getDate() + 1 == 32) {
    actualDay = "1";
  } else {
    actualDay = String(now.getDate() + 1); // E se for dia 31? Daria erro?
  }
  const actualMonth = now.getMonth;

  let formattedMonth = "";

  switch (actualMonth) {
    case 0:
      formattedMonth = "Janeiro";
      break;
    case 1:
      formattedMonth = "Fevereiro";
      break;
    case 2:
      formattedMonth = "Março";
      break;
    case 3:
      formattedMonth = "Abril";
      break;
    case 4:
      formattedMonth = "Maio";
      break;
    case 5:
      formattedMonth = "Junho";
      break;
    case 6:
      formattedMonth = "Julho";
      break;
    case 7:
      formattedMonth = "Agosto";
      break;
    case 8:
      formattedMonth = "Setembro";
      break;
    case 9:
      formattedMonth = "Outubro";
      break;
    case 10:
      formattedMonth = "Novembro";
      break;
    default:
      formattedMonth = "Dezembro";
  }

  const setDate = document.getElementById("limit-date");

  let dateParagraph = document.createElement("p");

  dateParagraph.innerText = `${actualDay} de ${formattedMonth} de ${actualYear}`;

  setDate.appendChild(dateParagraph);
};

initCountdown();

setDateLimit();

// Efeito de reveal on scroll
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1, // 10% do elemento precisa estar visível para disparar
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      // para animar apenas em um scroll
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// Animation On Scroll
AOS.init({
  // Configs opcionais
  duration: 800, // Duração da animação (ms)
  once: false, // Se true, anima apenas na primeira vez que rola a página
  offset: 100, // Distância em px do topo para disparar a animação
});

// ============================================
// SCROLL TO TOP BUTTON 
// ============================================

const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerHTML =
  '<svg data-lucide="arrow-up" width="20" height="20"></svg>';
scrollToTopBtn.className =
  "fixed bottom-6 right-6 w-12 h-12 bg-misk-600 text-white rounded-full flex items-center justify-center opacity-0 cursor-pointer pointer-events-none transition-opacity duration-300 hover:bg-misk-700 z-40";
scrollToTopBtn.id = "scroll-to-top";
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.remove("opacity-0", "pointer-events-none");
  } else {
    scrollToTopBtn.classList.add("opacity-0", "pointer-events-none");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Initialize Lucide icons for dynamically added elements
lucide.createIcons();

// ============================================
// Dark Mode Toggle
// ============================================
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const iconElement = themeToggleBtn?.querySelector('i');

const loadTheme = () => {
  const localTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if(localTheme === 'dark' || (!localTheme && systemTheme)) {
    htmlElement.classList.add('dark');
    updateIcon('moon');
  } else {
    htmlElement.classList.remove('dark')
    updateIcon('sun');
  }
}

const toggleTheme = () => {
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    updateIcon('sun');
  } else {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    updateIcon('moon');
  }
}

// // Atualiza o ícone (Lucide)
// function updateIcon(mode) {
//     if (!iconElement) return;
    
//     // Se estiver usando data-lucide, precisamos pedir pro lucide renderizar novamente ou trocar o atributo
//     // Uma forma simples é trocar o atributo data-lucide e rodar lucide.createIcons()
//     // Mas como o Lucide substitui o <i> por <svg>, é melhor ter dois ícones no HTML e alternar a visibilidade (hidden/block)
    
//     // *DICA PRO:* Veja a implementação no HTML abaixo para a troca de ícones mais fácil.
// }

loadTheme();

// Event Listener
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}