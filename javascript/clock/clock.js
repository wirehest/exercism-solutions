/** Representation of a digital clock. */
export class Clock {
  static template = 'hh:mm';

  constructor(hours = 0, minutes = 0) {
    [this.hours, this.minutes] = this.#getTime(
      this.#getInMinutes(hours, minutes)
    );
  }

  toString() {
    return Clock.template
      .replace('hh', String(this.hours).padStart(2, 0))
      .replace('mm', String(this.minutes).padStart(2, 0));
  }

  plus(minutes) {
    [this.hours, this.minutes] = this.#getTime(
      this.#getInMinutes(this.hours, this.minutes) + minutes
    );
    return this;
  }

  minus(minutes) {
    this.plus(-minutes);
    return this;
  }

  equals(clock) {
    if (this.toString() === clock.toString()) return true;
    return false;
  }

  #getTime(totalMinutes) {
    let hours = (((Math.floor(totalMinutes / 60) + 24) % 24) + 24) % 24;
    let minutes = ((totalMinutes % 60) + 60) % 60;
    return [hours, minutes];
  }

  #getInMinutes(hours, minutes) {
    return hours * 60 + minutes;
  }
}
