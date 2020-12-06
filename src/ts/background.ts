import Settings from "./settings"


class Background {
  private settingsName = "Background"
  private settingsLabelImage = "Image"
  private settingsLabelSquares = "Squares"
  private settingsLabelCircles = "Circles"
  private settingsForm = "background"
  private settingsFormBackground = "backgroundMode"

  private readonly modes: string[]
  private elems: any


  constructor() {
    this.modes = ['image', 'squares', 'circles']
    this.buildSettingsSection()
    this.elems = this.registerElems()
    this.addListeners()
  }

  private buildSettingsSection() {
    // Form
    Settings.addForm(this.settingsForm)
    Settings.addRadioItem(this.settingsForm, this.settingsFormBackground, this.settingsLabelImage)
    Settings.addRadioItem(this.settingsForm, this.settingsFormBackground, this.settingsLabelSquares)
    Settings.addRadioItem(this.settingsForm, this.settingsFormBackground, this.settingsLabelCircles)
  }

  public getModes() {
    return this.modes
  }

  addListeners() {
    // Add Listeners
    this.elems.radioImage.addEventListener('change', (event: MouseEvent) =>{this.onChangeRadio(event)})
    this.elems.radioSquares.addEventListener('change', (event: MouseEvent) =>{this.onChangeRadio(event)})
    this.elems.radioCircles.addEventListener('change', (event: MouseEvent) =>{this.onChangeRadio(event)})

  }

  registerElems() {
    const radioImage = document.getElementById( Settings.labelToId(this.settingsLabelImage))
    const radioSquares = document.getElementById( Settings.labelToId(this.settingsLabelSquares))
    const radioCircles = document.getElementById( Settings.labelToId(this.settingsLabelCircles))

    return {
      radioImage: radioImage,
      radioSquares: radioSquares,
      radioCircles: radioCircles
    }
  }

  private onChangeRadio(event: MouseEvent) {
    const elem = event.target as HTMLElement

    console.log(elem.id)

  }
}

export default Background
