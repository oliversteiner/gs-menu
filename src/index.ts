import Background from "./ts/background"
import MainMenu from "./ts/mainMenu"
import Settings from './ts/settings'
import Info from './ts/info'
import Preview from './ts/preview'
import Fps from "./ts/fps"

// Load Settings
let settingsPanel: Settings
settingsPanel = new Settings()

// Load FPS
let fps: Fps
fps = new Fps()

// Load Menu
let mainMenu: MainMenu
mainMenu = new MainMenu()


// load Info
let info: Info
info = new Info()

// load preview
let preview: Preview
preview = new Preview()

// load background
let background: Background
background = new Background()

// Start Menu animation
MainMenu.play()
