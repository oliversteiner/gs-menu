import Settings from "./settings";

let fpsTimes: number[] = [];

let observer = new PerformanceObserver(list => {
  list.getEntries().forEach(entry => {
    // Display each reported measurement on console
    if (console) {
      console.log("Name: "       + entry.name      +
          ", Type: "     + entry.entryType +
          ", Start: "    + entry.startTime +
          ", Duration: " + entry.duration  + "\n");
    }
  })
});

class Fps {
  private settingsName = "Performance";
  private settingsLabelFps = "FPS";
  private settingsLabelClient = "Client";
  private fps: number;

  constructor() {
    console.log("FPS loaded");
    this.buildSettingsSection();
    this.updateSettings(0, "normal");
    this.refreshLoop()
  }

  private buildSettingsSection() {
    Settings.addSection(this.settingsName);
    Settings.addItem(this.settingsName, this.settingsLabelFps);
    Settings.addItem(this.settingsName, this.settingsLabelClient);
  }

  private updateSettings(fps: number, speed: string) {
    const fpsValue = fps.toString(10);
    const speedValue = speed;

    Settings.updateItem(this.settingsName, this.settingsLabelFps, fpsValue);
    Settings.updateItem(
      this.settingsName,
      this.settingsLabelClient,
      speedValue
    );
  }

  /**
   * https://www.growingwiththeweb.com/2017/12/fast-simple-js-fps-counter.html
   */
  refreshLoop() {
    window.requestAnimationFrame(() => {
      const now = performance.now();
      while (fpsTimes.length > 0 && fpsTimes[0] <= now - 1000) {
        fpsTimes.shift();
      }
      fpsTimes.push(now);
      const fpsValue = fpsTimes.length;
      this.fps = fpsValue;
      const query = ".settings-section-performance-fps .value";
      document.querySelector(query).innerHTML = fpsValue.toString(10);
      this.refreshLoop();
    });
  }


  measure() {
    performance.measure('start');
  }
}

export default Fps;
