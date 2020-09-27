const SettingsState: State = {
  debugMode: false,
  animateBackground: false,
  label: false,
  slowDownAnimation: false,
}

interface State {
  debugMode: boolean,
  animateBackground: boolean,
  label: boolean,
  slowDownAnimation: boolean,
}

class Settings {

  constructor() {
    console.log('Settings loaded')
    Settings.addListeners()
  }

  private static addListeners() {
    // Add Listeners
    const elems = Settings.elems()
    elems.checkBoxDebugMode.addEventListener("change", Settings.toggleDebugMode, false)
    elems.checkBoxAnimateBackground.addEventListener("change", Settings.toggleAnimateBackground, false)
    elems.checkBoxDefaultCheckbox.addEventListener("change", Settings.checkboxAction, false)
  }

 public static elems() {

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

    return {
      checkBoxDebugMode: checkBoxDebugMode,
      checkBoxAnimateBackground: checkBoxAnimateBackground,
      checkBoxDefaultCheckbox: checkBoxDefaultCheckbox,
      buttonMenuRestart: buttonMenuRestart,
      buttonMenuPlay: buttonMenuPlay,
      buttonMenuPause: buttonMenuPause,
      checkBoxSlowDownAnimation: checkBoxSlowDownAnimation,
      containerScreen: containerScreen,
      containerMediaQuery: containerMediaQuery
    }


  }

// Debug Mode
  private static toggleDebugMode(event: any) {
    if (event.target.checked) {
      document.body.classList.add('debug')
      SettingsState.debugMode = true
      console.log('DebugMode: ON')
    } else {
      document.body.classList.remove('debug')
      SettingsState.debugMode = false
      console.log('DebugMode: OFF')
    }
  }

// Animate Background
  private static toggleAnimateBackground(event: any) {
    if (event.target.checked) {
      console.log('Animate Background: ON')
    } else {
      console.log('Animate Background: OFF')
    }
  }


// Checkbox Template
  private static checkboxAction(event: any) {
    if (event.target.checked) {
      console.log('Action: ON')
    } else {
      console.log('Action: OFF')
    }
  }

}

export default Settings


