// @ts-ignore
import {gsap} from "gsap"
// @ts-ignore
import {MotionPathPlugin} from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

// read screensize
const ww = window.innerWidth
const wh = window.innerHeight

// Menu Item List
const MainMenuItems = gsap.utils.toArray('.menu-item')


// Convert Circle To Path
MotionPathPlugin.convertToPath('#menu-circle')


// Animation Function for all MainMenuItems
const menuAnimation = function (endPoint: any, duration: any) {
  return {
    duration: duration,
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
const menuTimeline = gsap.timeline({repeat: 0, repeatDelay: 1, transformOrigin: "0% 50%"})


// Add Animation to Menu Items
menuTimeline
  // 8 - facebook
  .to("#menu-item-8", menuAnimation(-0.87, 1), 0.2)

  // 7 - instagram
  .to("#menu-item-7", menuAnimation(-0.82, 1), 0.2)

  // 6 - contact
  .to("#menu-item-6", menuAnimation(-0.42, 1), 0.2)

  // 5 - events
  .to("#menu-item-5", menuAnimation(-0.38, 1), 0.2)

  // 4 - sticker shop
  .to("#menu-item-4", menuAnimation(-0.26, 1), 0.2)

  // 3 - showcase
  .to("#menu-item-3", menuAnimation(-0.22, 1), 0.2)

  // 2 - what we do
  .to("#menu-item-2", menuAnimation(-0.18, 1.5), 0.2)

  // 1 - about us
  .to("#menu-item-1", menuAnimation(-0.14, 2), 0.2)


let resizeTimer: any


function toggleMainMenuItems() {
  MainMenuItems.forEach((item: HTMLElement) => {
    const style = item.getAttribute('style')
    console.log('style', style)

    if (style == 'visibility:hidden') {
      item.setAttribute('style', 'visibility:visible')
    } else {
      item.setAttribute('style', 'visibility:hidden')
    }
  })
}

function hideMainMenuItems() {
  MainMenuItems.forEach((item: HTMLElement) => {
    item.setAttribute('style', 'visibility:hidden')
  })
}

function showMainMenuItems() {
  MainMenuItems.forEach((item: HTMLElement) => {
    item.setAttribute('style', 'visibility:visible')
  })
}

function animateMainMenu() {
  const ww = window.innerWidth
  const wh = window.innerHeight

  console.log('resize', ww + ' / ' + wh)
  showMainMenuItems()
  menuTimeline.invalidate()
  menuTimeline.play(0)
  // location.reload();
}

function resizeCheck() {
  hideMainMenuItems()
  console.log('MainMenuItems', MainMenuItems)


  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(function () {
    animateMainMenu()
  }, 250)
}

window.addEventListener("resize", resizeCheck)
