console.log('Settings loaded')

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



// Checkbox Template
const checkboxAction = function (event: any) {
  if (event.target.checked) {
    console.log('Action: ON')
  } else {
    console.log('Action: OFF')
  }
}


// Add Listeners
checkBoxDebugMode.addEventListener("change", toggleDebugMode, false)
checkBoxAnimateBackground.addEventListener("change", toggleAnimateBackground, false)
checkBoxDefaultCheckbox.addEventListener("change", checkboxAction, false)

