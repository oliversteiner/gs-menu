console.log('load settings')

// State
const state = {
  debugMode: false,
  animateBackground: false,
  label: false,
  slowDownAnimation: false,
}


// Get Elements in Dom

// Settings
const checkBoxDebugMode = document.getElementById('debug-mode')
const checkBoxAnimateBackground = document.getElementById('animate-background')
const checkBoxDefaultCheckbox = document.getElementById('label')

// Animation Control
const buttonMenuRestart = document.querySelector('.main-menu-restart')
const buttonMenuPlay = document.querySelector('.main-menu-play')
const buttonMenuPause = document.querySelector('.main-menu-pause')
const checkBoxSlowDownAnimation = document.getElementById('slow-down-animation')

// Info
const containerScreen = document.querySelector('.display-screen-size')
const containerMediaQuery = document.querySelector('.display-media-query')


//  Click Actions
// Debug Mode
const toggleDebugMode = function (event: any) {
  if (event.target.checked) {
    document.body.classList.add('debug')
    state.debugMode = true
    console.log('DebugMode: ON')
  } else {
    document.body.classList.remove('debug')
    state.debugMode = false
    console.log('DebugMode: OFF')
  }
}

// Animate Background
const toggleAnimateBackground = function (event: any) {
  if (event.target.checked) {
    console.log('Animate Background: ON')
  } else {
    console.log('Animate Background: OFF')
  }
}

// Slowdown Menu Animation
const toggleSlowDownAnimation = function (event: any) {
  if (event.target.checked) {
    console.log('Slow Down Animation: ON')
  } else {
    console.log('Slow Down Animation:  OFF')
  }
}

// Checkbox Template
const checkboxAction = function (event: any) {
  if (event.target.checked) {
    console.log('Action: ON')
  } else {
    console.log('Action: OFF')
  }
}


// Menu Animation Control
const mainMenuRestart = function () {
  console.log('mainMenuRestart')
}

const mainMenuPlay = function () {
  console.log('mainMenuPlay')
}

const mainMenuPause = function () {
  console.log('mainMenuPause')
}

// Add Listeners
checkBoxDebugMode.addEventListener("change", toggleDebugMode, false)
checkBoxAnimateBackground.addEventListener("change", toggleAnimateBackground, false)
checkBoxDefaultCheckbox.addEventListener("change", checkboxAction, false)
checkBoxSlowDownAnimation.addEventListener("change", toggleSlowDownAnimation, false)
buttonMenuRestart.addEventListener("click", mainMenuRestart)
buttonMenuPlay.addEventListener("click", mainMenuPlay)
buttonMenuPause.addEventListener("click", mainMenuPause)


// Helpers
