(() => {
  const btn = document.querySelector(".hamburger");
  const drawer = document.querySelector("#drawer");
  const overlay = document.querySelector(".overlay");
  if (!btn || !drawer || !overlay) return;

  const open = () => {
    document.body.classList.add("is-drawer-open");
    btn.classList.add("is-open");
    overlay.hidden = false;

    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "メニューを閉じる");
    drawer.setAttribute("aria-hidden", "false");
  };

  const close = () => {
    document.body.classList.remove("is-drawer-open");
    btn.classList.remove("is-open");
    overlay.hidden = true;

    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "メニューを開く");
    drawer.setAttribute("aria-hidden", "true");
  };

  const isOpen = () => document.body.classList.contains("is-drawer-open");

  btn.addEventListener("click", () => (isOpen() ? close() : open()));
  overlay.addEventListener("click", close);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) close();
  });

  drawer.addEventListener("click", (e) => {
    if (e.target.closest("a")) close();
  });
})();