const menuSide = document.querySelector(".bar")
const sideBar = document.querySelector(".menusidebar")
const closeSide = document.querySelector(".close")
const cartBar = document.querySelector(".carty")
const cart = document.querySelector(".cart-toggle")
const closeCart = document.querySelector(".closes")

menuSide.addEventListener("click",function(){
 sideBar.style.transform= "translate(0%)"
})

closeSide.addEventListener("click", function(){
 sideBar.style.transform= "translate(-100%)"
})
cartBar.addEventListener("click",function(){
 cart.style.transform= "translate(0%)"
})
closeCart.addEventListener("click", function(){
 cart.style.transform= "translate(100%)"
})