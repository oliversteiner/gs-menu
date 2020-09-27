
// Load Settings
import Settings from './ts/settings'
import Info from './ts/info'

const settingsPanel = new Settings()
const info = new Info()

// Load Menu

import Menu from "./ts/menu";
const menu = new Menu()


// Add Listeners
settingsPanel.elems.checkBoxSlowDownAnimation.addEventListener("change", menu.toggleSlowDownAnimation, false)
settingsPanel.elems.buttonMenuRestart.addEventListener("click", menu.mainMenuRestart)
settingsPanel.elems.buttonMenuPlay.addEventListener("click", menu.mainMenuPlay)
settingsPanel.elems.buttonMenuPause.addEventListener("click", menu.mainMenuPause)

import Preview from './ts/preview'
const preview = new Preview()
