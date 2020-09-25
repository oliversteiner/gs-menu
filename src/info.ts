const medias = {
  mobile: {
    name: 'Mobile',
    icon: 'fa-mobile-alt'
  },
  tablet: {
    name: 'Tablet',
    icon: 'fa-tablet-alt'
  },
  desktop: {
    name: 'Desktop',
    icon: 'fa-desktop'
  },
  large: {
    name: 'Large',
    icon: 'fa-desktop'
  }
}

enum mediaQuery {
  Mobile, // 576
  Tablet, // 768
  Desktop, // 992
  Large// 1200
}

interface ScreenSize {
  x: number
  y: number
}

interface Medias {
  name: string
  icon: string
}

class Info {
  screenSize: ScreenSize
  mediaQuery: mediaQuery | undefined
  resizeTimer: any

  constructor() {
    console.log('Info loaded')
    this.screenSize = {x: 0, y: 0}
    this.mediaQuery = undefined

    this.init()
  }


  public static getScreenSize(): { x: number; y: number } {
    const width = window.innerWidth
    const height = window.innerHeight
    return {x: width, y: height}
  }

  public static mediaQueryStringString(media: mediaQuery): string {
    // Convert global Medias to array and get Item with Index from media
    return Object.values(medias)[media].name
  }

  public static mediaQueryStringIcon(media: mediaQuery): string {
    // Convert global Medias to array and get Item with Index from media
    const iconName = Object.values(medias)[media].icon
    return '<i class="fas ' + iconName + '"></i>'
  }

  public static getMediaQuery(): mediaQuery {
    const width = window.innerWidth

    if (width <= 576) {
      return mediaQuery.Mobile
    } else if (width <= 768) {
      return mediaQuery.Tablet
    } else if (width <= 992) {
      return mediaQuery.Desktop
    } else {
      return mediaQuery.Large
    }
  }

  private resizeEvent(): void {
    clearTimeout(this.resizeTimer)
    this.resizeTimer = setTimeout(() => {
      const screen = Info.getScreenSize()
      const media = Info.getMediaQuery()
      this.screenSize = {x: screen.x, y: screen.y}
      this.mediaQuery = media
      Info.updateSettingsPanel(screen, media)
    }, 250)
  }

  init(): void {
    // Get current ScreenInfos
    this.resizeEvent()

    // Listen to Screen Resizing
    window.addEventListener("resize", this.resizeEvent)
  }

  private static updateSettingsPanel(screen: ScreenSize, media: mediaQuery) {
    const containerScreen = document.querySelector('.display-screen-size')
    const containerMediaQuery = document.querySelector('.display-media-query')
    containerScreen.innerHTML = '<span class="x-label">x</span>' + screen.x + '<span class="y-label">y</span>' + screen.y
    containerMediaQuery.innerHTML = '<span class="media-icon">'
      + Info.mediaQueryStringIcon(media)
      + '</span>'
      + Info.mediaQueryStringString(media)
  }

}


export default Info
