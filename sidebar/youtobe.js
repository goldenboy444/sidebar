const Menu = document.querySelector(".menu-btn");
const Close = document.querySelector(".close-btn");
const Sidebar = document.querySelector(".side-bar")

Menu.addEventListener("click", () => {
   console.log("ishlayapti");
   Close.style.display = "block"
   Menu.style.display = "none"
   Sidebar.style.left = "0"
})
Close.addEventListener("click", () => {
   Sidebar.style.left = "-100%"
   Close.style.display = "none"
   Menu.style.display = "block"
   console.log(" close ishlayapti");
})