// ---------- Menú móvil ----------
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---------- Año en el footer ----------
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// ---------- Selector de idioma EN / ES ----------
(function () {
  const STORAGE_KEY = "pcl-lang";
  const root = document.documentElement;
  const buttons = document.querySelectorAll("[data-lang-set]");

  function applyLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    buttons.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-lang-set") === lang);
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang-set") === lang));
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  let saved = "en";
  try { saved = localStorage.getItem(STORAGE_KEY) || "en"; } catch (e) {}
  applyLang(saved === "es" ? "es" : "en");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang-set")));
  });
})();

// ---------- Acordeón de preguntas frecuentes ----------
document.querySelectorAll(".faq-q").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const wasOpen = item.classList.contains("open");
    item.parentElement.querySelectorAll(".faq-item.open").forEach(i => {
      if (i !== item) i.classList.remove("open");
    });
    item.classList.toggle("open", !wasOpen);
  });
});
