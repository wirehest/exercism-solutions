export class Clock {
  static template = 'hh:mm';
  hour = 0;
  minute = 0;

  constructor(hour: number, minute?: number) {
    [this.hour, this.minute] = this.#getTime(this.#toMinutes(hour, minute));
  }

  public toString(): string {
    return Clock.template
      .replace('hh', String(this.hour).padStart(2, '0'))
      .replace('mm', String(this.minute).padStart(2, '0'));
  }

  public plus(minutes: number): Clock {
    [this.hour, this.minute] = this.#getTime(
      this.#toMinutes(this.hour, this.minute) + minutes,
    );
    return this;
  }

  public minus(minutes: number): Clock {
    this.plus(-minutes);
    return this;
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString();
  }

  #getTime(totalMinutes: number): [number, number] {
    let hour = (((Math.floor(totalMinutes / 60) + 24) % 24) + 24) % 24;
    let minute = ((totalMinutes % 60) + 60) % 60;
    return [hour, minute];
  }

  #toMinutes(hour: number, minute = 0): number {
    return hour * 60 + minute;
  }
}
