import Settings from "./settings"


class Background {
  private settingsName = "Background";
  private settingsLabelImage = "Image";
  private settingsLabelSquare = "Square";
  private settingsLabelCircles = "Circle";
  private settingsForm = "background";
  private settingsFormBackground = "backgroundMode";

  private readonly modes: string[]


  constructor() {
    this.modes = ['image', 'squares', 'circles']
    this.buildSettingsSection();
  }

  private buildSettingsSection() {
    // Settings.addSection(this.settingsName);

    // Form
    Settings.addForm( this.settingsForm);
    Settings.addRadioItem(this.settingsForm, this.settingsFormBackground, this.settingsLabelImage);
    Settings.addRadioItem(this.settingsForm, this.settingsFormBackground, this.settingsLabelSquare);
    Settings.addRadioItem(this.settingsForm, this.settingsFormBackground, this.settingsLabelCircles);
  }

  public getModes() {
    return this.modes;
  }
}

export default Background
