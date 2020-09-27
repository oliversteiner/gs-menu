import MainMenu from "./ts/mainMenu";
import Settings from './ts/settings'
import Info from './ts/info'
import Preview from './ts/preview'

// Load Menu
let mainMenu: MainMenu;
mainMenu = new MainMenu();

// Load Settings
let settingsPanel: Settings;
settingsPanel = new Settings();

// load Info
let info: Info;
info = new Info();

// load preview
let preview: Preview;
preview = new Preview();


// Start Menu animation
MainMenu.play();