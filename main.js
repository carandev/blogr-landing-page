const $hamburgerIcon = document.querySelector(".hamburger-icon")
const $header__nav = document.querySelector(".header__nav")
const $itemNavConnect = document.querySelector(".connect")
const $connectContainer = document.querySelector(".header__connect-container")

$hamburgerIcon.addEventListener("click", ()  => {
  $header__nav.classList.toggle("hide")
})

$itemNavConnect.addEventListener("click", () => {
  $connectContainer.classList.toggle("hide")
})
