const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuTitle.addEventListener("click", (e) => {
  // currentTarget is the element that the event listener is attached to
  // target is the element that triggered the event (by the user clicking on it)
  if (e.target === e.currentTarget) { //when click is on the menu title
    dropdownMenu.classList.toggle("visible");
  }  
})

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) { //when click is not on the dropdown menu
    dropdownMenu.classList.remove("visible")
  }
})