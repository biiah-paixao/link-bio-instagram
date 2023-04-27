let iconTheme = document.querySelector('#theme');
let body = document.querySelector("body");

iconTheme.addEventListener('click', () => {
  body.classList = body.classList.value == 'light' ? "dark" : "light"
})