// https://css-tricks.com/creating-a-3d-cube-image-gallery/

class Preview {
  public elems: any

  constructor() {
    console.log('Preview Loaded')
    this.elems = this.registerElems()
    this.addListeners()


  }

  public show(event: MouseEvent) {
    const elem = event.target as HTMLElement
    const itemName = elem.dataset.target
    const cubeSite = elem.dataset.cube
    const space = document.getElementById('space3D-container')
    const classes = ['top', 'left', 'bottom', 'right', 'front', 'back']

    space.classList.remove(...classes)
    space.classList.add(cubeSite)

    console.log('Action Item:', itemName)

  }

  addListeners() {
    // Add Listeners
    const triggers = [
      this.elems.triggerWhatWeDo,
      this.elems.triggerAboutUs,
      this.elems.triggerShowcase,
      this.elems.triggerStickerShop,
      this.elems.triggerEvents,
      this.elems.triggerContact,
    ]

    triggers.forEach((elem: HTMLElement) => {
      elem.addEventListener("mouseenter", (event: MouseEvent) => {
        this.show(event)
      })
    })
  }

  registerElems() {
    const triggerAboutUs = document.querySelector('.trigger-about-us')
    const triggerWhatWeDo = document.querySelector('.trigger-what-we-do')
    const triggerShowcase = document.querySelector('.trigger-showcase')
    const triggerStickerShop = document.querySelector('.trigger-sticker-shop')
    const triggerEvents = document.querySelector('.trigger-events')
    const triggerContact = document.querySelector('.trigger-contact')

    return {
      triggerAboutUs: triggerAboutUs,
      triggerWhatWeDo: triggerWhatWeDo,
      triggerShowcase: triggerShowcase,
      triggerStickerShop: triggerStickerShop,
      triggerEvents: triggerEvents,
      triggerContact: triggerContact,
    }
  }
}

export default Preview
