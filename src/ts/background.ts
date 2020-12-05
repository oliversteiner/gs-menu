

class Background {
  private readonly modes: string[]


  constructor() {
    this.modes = ['image', 'squares', 'circles']
  }


  public getModes() {
    return this.modes;
  }
}

export default Background
