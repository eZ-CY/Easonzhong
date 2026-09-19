(function () {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("resume-theme");
  if (savedTheme) root.dataset.theme = savedTheme;

  const themeToggle = document.querySelector("#themeToggle");
  if (themeToggle) themeToggle.addEventListener("click", function () {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("resume-theme", next);
  });

  const menu = document.querySelector("#mobileMenu");
  const nav = document.querySelector(".main-nav");
  if (menu && nav) {
    menu.addEventListener("click", function () {
      const open = nav.classList.toggle("mobile-open");
      menu.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("mobile-open");
        menu.setAttribute("aria-expanded", "false");
      });
    });
  }

  const details = document.querySelectorAll(".detail-project");
  if (details.length) {
    const show = function () {
      const wanted = (window.location.hash || "#shadowtrace").slice(1);
      details.forEach(function (detail) { detail.style.display = detail.id === wanted ? "block" : "none"; });
    };
    show();
    window.addEventListener("hashchange", show);
  }
})();
