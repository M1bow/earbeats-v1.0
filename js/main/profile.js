let parts = document.querySelectorAll(".pt");

parts.forEach((e) => {
  e.onclick = () => {
    e.classList.toggle("show");
  };
});
