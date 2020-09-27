// Load Menu
import Menu from "./ts/menu";
const menu = new Menu()


// Load Settings
import Settings from './ts/settings'
const settingsPanel = new Settings()

// Add Listeners for Menu control to settingsPanel
settingsPanel.elems.checkBoxSlowDownAnimation.addEventListener("change", menu.toggleSlowDownAnimation, false)
settingsPanel.elems.buttonMenuRestart.addEventListener("click", menu.mainMenuRestart)
settingsPanel.elems.buttonMenuPlay.addEventListener("click", menu.mainMenuPlay)
settingsPanel.elems.buttonMenuPause.addEventListener("click", menu.mainMenuPause)


// load Info
import Info from './ts/info'
const info = new Info()

// load preview
import Preview from './ts/preview'
const preview = new Preview()
