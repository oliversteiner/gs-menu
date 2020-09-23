// @ts-ignore
import {gsap} from "gsap"
// @ts-ignore
import {MotionPathPlugin} from 'gsap/MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin)

// Convert Circle To Path
MotionPathPlugin.convertToPath('#menu-circle')


// Animation Function for all MenuItems
const menuAnimation = function (endPoint:any, duration:any) {
    return {
        duration: duration,
        ease: "expo",
        motionPath: {
            path: "#menu-circle",
            align: "#menu-circle",
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            end: endPoint
        }
    }
}

// Timeline for all Menu Items
    const menuTimeline = gsap.timeline({repeat: 5, repeatDelay: 1})


// Add Animation to Menu Items
    menuTimeline.to("#menu-item-3", menuAnimation(-0.3,1), 0.2)
      .to("#menu-item-2", menuAnimation(-0.25,1.5),0.2 )
      .to("#menu-item-1", menuAnimation(-0.2, 2), 0.2)
