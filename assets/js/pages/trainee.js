// ============================================
// SWIPER INITIALIZATION
// ============================================

// Main Swiper (Hero/Full Page)
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

// Cultura Swiper (Services)
const carrosselHomeCultura = new Swiper(".swiper-services", {
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
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

// Cases Swiper (if needed)
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

// ============================================
// LUCIDE ICONS INITIALIZATION
// ============================================
lucide.createIcons();

// ============================================
// MOBILE MENU FUNCTIONALITY
// ============================================

const menu = document.getElementById("menu");
const navBtn = document.getElementById("nav-btn");
const overlay = document.getElementById("menu-overlay");

/**
 * Update the icon in the nav button
 * @param {boolean} isOpen - Whether the menu is open
 */
const updateIcon = (isOpen) => {
  const svg = navBtn.querySelector("svg");
  if (svg) {
    svg.setAttribute("data-lucide", isOpen ? "x" : "menu");
    lucide.createIcons();
  }
};

/**
 * Close the mobile menu
 */
const closeMobileMenu = () => {
  menu.classList.remove("top-[66px]");
  menu.classList.add("top-[-300%]");
  overlay.classList.remove("opacity-100", "pointer-events-auto");
  overlay.classList.add("opacity-0", "pointer-events-none");
  menu.dataset.state = "closed";
  updateIcon(false);
};

/**
 * Open the mobile menu
 */
const openMobileMenu = () => {
  menu.classList.add("top-[66px]");
  menu.classList.remove("top-[-300%]");
  overlay.classList.remove("opacity-0", "pointer-events-none");
  overlay.classList.add("opacity-100", "pointer-events-auto");
  menu.dataset.state = "open";
  updateIcon(true);
};

// Toggle menu on button click
navBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.dataset.state === "open" ? closeMobileMenu() : openMobileMenu();
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  const clickedInside = navBtn.contains(e.target) || menu.contains(e.target);
  if (!clickedInside && menu.dataset.state === "open") {
    closeMobileMenu();
  }
});

// Close menu with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.dataset.state === "open") {
    closeMobileMenu();
  }
});

// Close menu when clicking on a link
const menuLinks = menu.querySelectorAll("a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});

// ============================================
// FORM HANDLING
// ============================================

const form = document.getElementById("internship-form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(form);
    const data = {
      nome: formData.get("nome"),
      sobrenome: formData.get("sobrenome"),
      email: formData.get("email"),
      telefone: formData.get("telefone"),
      experiencia: formData.get("experiencia"),
      curriculo: formData.get("curriculo"),
      terms: formData.get("terms") === "on",
    };

    // Validate required fields
    if (!data.nome || !data.sobrenome || !data.email || !data.telefone || !data.experiencia || !data.curriculo || !data.terms) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert("Por favor, insira um email válido.");
      return;
    }

    // Validate phone format (basic)
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!phoneRegex.test(data.telefone)) {
      alert("Por favor, insira um telefone válido no formato (XX) XXXXX-XXXX.");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form Data:", data);

    // Example: Send to backend
    try {
      // Uncomment and modify the URL to your backend endpoint
      /*
      const response = await fetch("/api/internship-apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Inscrição enviada com sucesso!");
        form.reset();
      } else {
        alert("Erro ao enviar inscrição. Tente novamente.");
      }
      */

      // For now, show a success message
      alert("Inscrição enviada com sucesso! Entraremos em contato em breve.");
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      alert("Erro ao enviar inscrição. Tente novamente.");
    }
  });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// ============================================
// THEME TOGGLE (Optional)
// ============================================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  });

  // Load saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  }
}

// ============================================
// UTILITY: Format phone input
// ============================================

const phoneInput = document.getElementById("telefone");
if (phoneInput) {
  phoneInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) {
      value = value.slice(0, 11);
    }
    if (value.length >= 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length >= 10) {
      value = `${value.slice(0, 9)}-${value.slice(9)}`;
    }
    e.target.value = value;
  });
}

// ============================================
// SCROLL TO TOP BUTTON (Optional)
// ============================================

const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerHTML = '<svg data-lucide="arrow-up" width="20" height="20"></svg>';
scrollToTopBtn.className =
  "fixed bottom-6 right-6 w-12 h-12 bg-misk-600 text-white rounded-full flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 hover:bg-misk-700 z-145";
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
