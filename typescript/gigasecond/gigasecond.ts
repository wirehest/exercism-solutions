export class Gigasecond {
  GIGA_MILLISECONDS = 1e12 as const;
  #date: Date;

  constructor(date: Date) {
    this.#date = date;
  }

  public date() {
    return new Date(this.#date.getTime() + this.GIGA_MILLISECONDS);
  }
}
