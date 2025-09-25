const lightmodeBtn = document.querySelectorAll(`[data-txt="Light Mode"]`);

let getMode = JSON.parse(localStorage.getItem("Mode"));
if (getMode == "dark") document.body.classList.add("dark");

lightmodeBtn.forEach((e) => {
  e.onclick = () => {
    console.log(5);
    document.body.classList.toggle("dark");

    let mode;
    if (document.body.classList.contains("dark")) {
      mode = "dark";
    } else {
      mode = "light";
    }

    localStorage.setItem("Mode", JSON.stringify(mode));
  };
});
