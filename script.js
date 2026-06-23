const botonMenu = document.querySelector(".menu-toggle-button");
const menuTodo = document.querySelector(".todo");
const menuHorizontal = document.querySelector(".horizontal-menu");
const main = document.querySelector(".main_index");

botonMenu.addEventListener("click", () => {
  menuTodo.classList.toggle("activo");
  menuHorizontal.classList.toggle("menu-abierto");
});
