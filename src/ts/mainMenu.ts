import Settings from "./settings";
import {gsap} from "gsap"
import {MotionPathPlugin} from 'gsap/MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin)

// Global
const MainMenuItems = gsap.utils.toArray('.menu-item')
let MainMenuSlowDown = false
let MainMenuTimeline: gsap.core.Timeline;
let MainMenuResizeTimer: NodeJS.Timeout;

class MainMenu {

    constructor() {
        console.log('Menu loaded')
        this.buildAnimation()
        MainMenu.buildSettings()
        window.addEventListener("resize", this.resizeCheck)
       // Menu.play()
    }


    buildAnimation() {
        MotionPathPlugin.convertToPath('#menu-circle')

        // Animation Function for all MenuItems in Main Menu
        const menuAnimation = function (endPoint: any, duration: any) {
            return {
                duration: duration,
                // opacity: 1,
                ease: "expo",
                motionPath: {
                    path: "#menu-circle",
                    align: "#menu-circle",
                    autoRotate: false,
                    alignOrigin: [0.75, 0.5],
                    end: endPoint,
                }
            }
        }

// Timeline for all Menu Items
        MainMenuTimeline = gsap.timeline({
            paused: true,
            repeat: 0,
            repeatDelay: 0,
            delay: 0.5,
            transformOrigin: "0% 50%"
        })

// Add Animation to Menu Items
        MainMenuTimeline
            // 8 - facebook
            .to("#menu-item-8", menuAnimation(-0.87, 2), 0.2)

            // 7 - instagram
            .to("#menu-item-7", menuAnimation(-0.82, 2), 0.2)

            // 6 - contact
            .to("#menu-item-6", menuAnimation(-0.42, 2), 0.2)

            // 5 - events
            .to("#menu-item-5", menuAnimation(-0.38, 2), 0.2)

            // 4 - sticker shop
            .to("#menu-item-4", menuAnimation(-0.26, 2), 0.2)

            // 3 - showcase
            .to("#menu-item-3", menuAnimation(-0.22, 2), 0.2)

            // 2 - what we do
            .to("#menu-item-2", menuAnimation(-0.18, 2.5), 0.2)

            // 1 - about us
            .to("#menu-item-1", menuAnimation(-0.14, 2), 0.2)
    }


    public static toggleMainMenuItems() {
        MainMenuItems.forEach((item: HTMLElement) => {
            const style = item.getAttribute('style')

            if (style == 'visibility:hidden') {
                item.setAttribute('style', 'visibility:visible')
            } else {
                item.setAttribute('style', 'visibility:hidden')
            }
        })
    }


    public static hideMainMenuItems() {
        MainMenuItems.forEach((item: HTMLElement) => {
            item.setAttribute('style', 'visibility:hidden')
        })
    }


    public static showMainMenuItems() {
        MainMenuItems.forEach((item: HTMLElement) => {
            item.setAttribute('style', 'visibility:visible')
        })
    }


    private static playFromBegin() {
        MainMenu.showMainMenuItems()
        MainMenuTimeline.play(0)
    }


    private resizeCheck() {
        MainMenu.hideMainMenuItems()
        clearTimeout(MainMenuResizeTimer)
        MainMenuResizeTimer = setTimeout(() => {
            MainMenu.playFromBegin()
        }, 250)
    }


    public static toggleSlowDownAnimation(event: any) {
        if (event.target.checked) {
            console.log('Slow Down Animation: ON')
            MainMenuSlowDown = true
            MainMenuTimeline.timeScale(0.1)
        } else {
            console.log('Slow Down Animation:  OFF')
            MainMenuSlowDown = false
            MainMenuTimeline.timeScale(1)
        }
    }

    public static restart() {
        console.log('mainMenu Restart')
        MainMenu.showMainMenuItems()
        MainMenuTimeline.invalidate()

        // Bypass the large delay appearing in Slowdown Mode
        let from = MainMenuSlowDown ? 0.18 : 0
        MainMenuTimeline.play(from)
    }


    public static play() {
        console.log('mainMenu Play')
        MainMenu.showMainMenuItems()
        MainMenuTimeline.play()
    }


    public static pause() {
        console.log('mainMenu Pause')
        MainMenuTimeline.pause()
    }


    private static buildSettings() {
        const elems = Settings.elems()
        elems.checkBoxSlowDownAnimation.addEventListener("change", MainMenu.toggleSlowDownAnimation, false)
        elems.buttonMenuRestart.addEventListener("click", MainMenu.restart)
        elems.buttonMenuPlay.addEventListener("click", MainMenu.play)
        elems.buttonMenuPause.addEventListener("click", MainMenu.pause)
    }
}

export default MainMenu



