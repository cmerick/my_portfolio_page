const html = document.querySelector("html");
const button = document.getElementById("#theme-switch-button");

button.addEventListener("click", () => {
    html.classList.toggle('dark-mode')
});