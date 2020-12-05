export interface MediaQuery {
  label: string;
  name: string;
  icon: string;
  maxWidth: number;
}

class MediaQueries {

 private  mediaQueries: MediaQuery[]

  constructor() {
    this.mediaQueries = [
      {
        label: 'Mobile',
        name: 'mobile',
        icon: 'fa-mobile-alt',
        maxWidth: 576,
      },
      {
        label: 'Tablet',
        name: 'tablet',
        icon: 'fa-tablet-alt',
        maxWidth: 768,
      },
      {
        label: 'Desktop',
        name: 'desktop',
        icon: 'fa-desktop',
        maxWidth: 992,
      },
      {
        label: 'Large',
        name: 'large',
        icon: 'fa-desktop',
        maxWidth: 1200,
      },
    ]
  }


  public getMediaQueries() {
    return this.mediaQueries;
  }
}

export default MediaQueries
