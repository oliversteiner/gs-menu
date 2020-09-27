import {gsap} from "gsap"
import {MotionPathPlugin} from 'gsap/MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin)

// Global
MotionPathPlugin.convertToPath('#menu-circle')
const MainMenuItems = gsap.utils.toArray('.menu-item')
let SlowDownAnimation = false


class Menu{
    private menuTimeline: gsap.core.Timeline;
    private resizeTimer: NodeJS.Timeout;


    constructor() {
    console.log('Menu loaded')
        this.buildAnimation()

        window.addEventListener("resize", this.resizeCheck)
    }

    buildAnimation()
    {


// Animation Function for all MenuItems in Main Menu
        const menuAnimation = function ( endPoint: any, duration: any) {
            return {
                duration: duration,
                opacity: 1,
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
        this.menuTimeline = gsap.timeline({pause: true, repeat: 0, repeatDelay: 0, delay: 0.5, transformOrigin: "0% 50%"})


// Add Animation to Menu Items
        this.menuTimeline
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

    toggleMainMenuItems() {
        MainMenuItems.forEach((item: HTMLElement) => {
            const style = item.getAttribute('style')

            if (style == 'visibility:hidden') {
                item.setAttribute('style', 'visibility:visible')
            } else {
                item.setAttribute('style', 'visibility:hidden')
            }
        })
    }

     hideMainMenuItems() {
         MainMenuItems.forEach((item: HTMLElement) => {
            item.setAttribute('style', 'visibility:hidden')
        })
    }

     showMainMenuItems() {
         MainMenuItems.forEach((item: HTMLElement) => {
            item.setAttribute('style', 'visibility:visible')
        })
    }

     animateMainMenu() {
        this.showMainMenuItems()
        this.menuTimeline.invalidate()
        this.menuTimeline.play(0)
    }

    resizeCheck() {
        this.hideMainMenuItems()
        clearTimeout(this.resizeTimer)
        this.resizeTimer = setTimeout( () => {
            this.animateMainMenu()
        }, 250)
    }

    // Controls

// Slowdown Menu Animation
    toggleSlowDownAnimation(event: any) {
        if (event.target.checked) {
            console.log('Slow Down Animation: ON')
            SlowDownAnimation = true
            this.menuTimeline.timeScale(0.1)
        } else {
            console.log('Slow Down Animation:  OFF')
            SlowDownAnimation = false
            this.menuTimeline.timeScale(1)

        }
    }

// Menu Animation Control

   public mainMenuRestart() {
        console.log('mainMenuRestart')
        this.showMainMenuItems()
        this.menuTimeline.invalidate()

        // Bypass to large delay in Slowdown Animation
        let from = SlowDownAnimation ? 0.18 : 0
        this.menuTimeline.play(from)
    }


   public mainMenuPlay() {
        console.log('mainMenuPlay')
        this.menuTimeline.play()

    }


    public mainMenuPause() {
        console.log('mainMenuPause')
        this.menuTimeline.pause()
    }
}

export default Menu



