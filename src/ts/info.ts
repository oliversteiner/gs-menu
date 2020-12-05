import MediaQueries, {MediaQuery} from "./mediaQueries"
import Settings from './settings'


interface ScreenSize {
  x: number;
  y: number;
}


class Info {
  screenSize: ScreenSize = {x: 0, y: 0}
  resizeTimer: any
  private name = 'Info'
  private mediaQuery: MediaQuery

  constructor() {
    console.log('Info loaded')

    this.mediaQuery = Info.getMediaQuery()
    this.buildSettingsSection()
    this.init()
  }

  public static getScreenSize(): { x: number; y: number } {
    const width = window.innerWidth
    const height = window.innerHeight
    return {x: width, y: height}
  }

  public static getMediaQuery(): MediaQuery {
    const width = window.innerWidth

    const MQ = new MediaQueries()
    const mediaQueries = MQ.getMediaQueries()
    // if Screen resolution is bigger then 1200px
    // return MediaQuery "large"

    if (width > 1200) {
      return mediaQueries.filter( mediaQuery => mediaQuery.name == 'large').shift()
    }

    // Get MediaQuery with appropriate resolution
    return mediaQueries.filter(mediaQuery => {
      console.log(mediaQuery.label + '   - ' + width)
      if (width <= mediaQuery.maxWidth) {
        return mediaQuery
      }
    }).shift()
  }

  private resizeEvent(): void {
    clearTimeout(this.resizeTimer)
    this.resizeTimer = setTimeout(() => {
      const screen = Info.getScreenSize()
      const media = Info.getMediaQuery()
      Info.updateSettings(screen, media)

      this.screenSize = {x: screen.x, y: screen.y}
      this.mediaQuery = media
    }, 250)
  }

  init(): void {
    // Get current ScreenInfos
    this.resizeEvent()

    // Listen to Screen Resizing
    window.addEventListener('resize', this.resizeEvent)
  }

  private buildSettingsSection() {
    Settings.addSection(this.name)
    Settings.addItem(this.name, 'Screen')
    Settings.addItem(this.name, 'Media')
  }

  private static updateSettings(screen: ScreenSize, media: MediaQuery) {
    const screenValue =
      '<span class="x-label">x</span>' +
      screen.x +
      '<span class="y-label">y</span>' +
      screen.y
    const mediaQueryValue =
      '<span class="media-icon"><i class="fas ' +
      media.icon +
      '"></i></span>' +
      media.label

    Settings.updateItem('Info', 'Screen', screenValue)
    Settings.updateItem('Info', 'Media', mediaQueryValue)
  }
}

export default Info
