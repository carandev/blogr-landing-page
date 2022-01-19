const $hamburgerIcon = document.querySelector(".hamburger-icon")
const $header__nav = document.querySelector(".header__nav")
const $itemsNav = document.querySelectorAll(".item-nav")
const $connectContainer = document.querySelector(".header__connect-container")

$hamburgerIcon.addEventListener("click", ()  => {
  $header__nav.classList.toggle("hide")
  $hamburgerIcon.classList.toggle("change-icon")
})

const classToFlip = element => {
  const containerToShow = document.querySelector(`#${element.classList[1]}`)
  if (containerToShow) {
    containerToShow.classList.toggle("hide")
    element.classList.toggle("flip")
  } 
}

$itemsNav.forEach(element => element.addEventListener('click', () => classToFlip(element)))
