import * as mediaQueries from '../data/MediaQueries.json'

interface MediaQuery {
  label: string
  name: string
  icon: string
  maxWidth: number
}

interface ScreenSize {
  x: number
  y: number
}


class Info {
  screenSize: ScreenSize
  mediaQuery: MediaQuery | undefined
  resizeTimer: any
  mediaQueries: MediaQuery[]

  constructor() {
    console.log('Info loaded')

    this.mediaQueries = Object.values(mediaQueries) // Convert Module to Array
    this.screenSize = {x: 0, y: 0}
    this.mediaQuery = Info.getMediaQuery()

    this.init()
  }


  public static getScreenSize(): { x: number; y: number } {
    const width = window.innerWidth
    const height = window.innerHeight
    return {x: width, y: height}
  }


  public static getMediaQuery(): MediaQuery {
    const width = window.innerWidth

    // if Screen resolution is bigger then 1200px
    // return MediaQuery "large"
    if (width > 1200) {
      return mediaQueries[3]
    }

    // Get MediaQuery with appropriate resolution
    return mediaQueries.filter(mediaQuery => {
      console.log(mediaQuery.label + '   - ' + width)
      if (width <= mediaQuery.maxWidth) {
        return mediaQuery
      }
    })[0]

  }

  private resizeEvent(): void {
    clearTimeout(this.resizeTimer)
    this.resizeTimer = setTimeout(() => {
      const screen = Info.getScreenSize()
      const media = Info.getMediaQuery()
      Info.updateSettingsPanel(screen, media)

      this.screenSize = {x: screen.x, y: screen.y}
      this.mediaQuery = media
    }, 250)
  }

  init(): void {
    // Get current ScreenInfos
    this.resizeEvent()

    // Listen to Screen Resizing
    window.addEventListener("resize", this.resizeEvent)
  }

  private static updateSettingsPanel(screen: ScreenSize, media: MediaQuery) {

    // Get Elements in Dom
    const containerScreen = document.querySelector('.display-screen-size')
    const containerMediaQuery = document.querySelector('.display-media-query')

    // Update Elements
    containerScreen.innerHTML = '<span class="x-label">x</span>' + screen.x + '<span class="y-label">y</span>' + screen.y
    containerMediaQuery.innerHTML =
      '<span class="media-icon"><i class="fas '+ media.icon + '"></i></span>'
      + media.label
  }

}


export default Info
