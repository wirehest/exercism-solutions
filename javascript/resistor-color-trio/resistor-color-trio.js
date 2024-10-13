/** Returns the resistance value for the given resistor color bands. */
export class ResistorColorTrio {
  COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];

  constructor(bands) {
    this.bands = bands;
  }

  get label() {
    if (!this.bands.every((color) => this.COLORS.includes(color))) {
      throw new Error('/invalid color/');
    }

    let kilo = true;
    let ohms = +this.bands
      .map((x, i) => {
        let colorIndex = this.COLORS.indexOf(x.toLowerCase());
        if (i === this.bands.length - 1) return '0'.repeat(colorIndex);
        return colorIndex + '';
      })
      .join('');

    return `Resistor value: ${ohms > 1000 ? ohms / 1000 : ohms} ${
      ohms > 1000 ? 'kiloohms' : 'ohms'
    }`;
  }
}
