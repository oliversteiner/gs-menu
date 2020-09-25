import {gsap} from "gsap"
import {MotionPathPlugin} from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)


// Menu Item List
const MainMenuItems = gsap.utils.toArray('.menu-item')
let slowDownAnimation = false
// Convert Circle To Path
MotionPathPlugin.convertToPath('#menu-circle')


// Animation Function for all MenuItems in Main Menu
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
const menuTimeline = gsap.timeline({repeat: 0, repeatDelay: 0, delay: 0, transformOrigin: "0% 50%"})


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


function toggleMainMenuItems() {
  MainMenuItems.forEach((item: HTMLElement) => {
    const style = item.getAttribute('style')

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
  showMainMenuItems()
  menuTimeline.invalidate()
  menuTimeline.play(0)
}


/**
 * resizeCheck
 *
 */
let resizeTimer: any

function resizeCheck() {
  hideMainMenuItems()
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(function () {
    animateMainMenu()
  }, 250)
}

window.addEventListener("resize", resizeCheck)

import './settings'
import Info from './info'

let info = new Info()



// Slowdown Menu Animation
const toggleSlowDownAnimation = function (event: any) {
  if (event.target.checked) {
    console.log('Slow Down Animation: ON')
    slowDownAnimation = true
    menuTimeline.timeScale(0.1)
  } else {
    console.log('Slow Down Animation:  OFF')
    slowDownAnimation = false
    menuTimeline.timeScale(1)

  }
}

// Menu Animation Control
const mainMenuRestart = function () {
  console.log('mainMenuRestart')
  showMainMenuItems()
  menuTimeline.invalidate()

  // Bypass to large delay in Slowdown Animation
  let from = slowDownAnimation ? 0.18 : 0
  menuTimeline.play(from)
}

const mainMenuPlay = function () {
  console.log('mainMenuPlay')
  menuTimeline.play()

}

const mainMenuPause = function () {
  console.log('mainMenuPause')
  menuTimeline.pause()

}
// Settings Controls
const buttonMenuRestart = document.querySelector('.main-menu-restart')
const buttonMenuPlay = document.querySelector('.main-menu-play')
const buttonMenuPause = document.querySelector('.main-menu-pause')
const checkBoxSlowDownAnimation = document.getElementById('slow-down-animation')

// Add Listeners
checkBoxSlowDownAnimation.addEventListener("change", toggleSlowDownAnimation, false)
buttonMenuRestart.addEventListener("click", mainMenuRestart)
buttonMenuPlay.addEventListener("click", mainMenuPlay)
buttonMenuPause.addEventListener("click", mainMenuPause)
