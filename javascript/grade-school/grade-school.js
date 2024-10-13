/** Representation of a school roster with grades and names. */
export class GradeSchool {
  constructor() {
    this.fullRoster = {};
  }

  roster() {
    return structuredClone(this.fullRoster);
  }

  add(name, grade) {
    if (JSON.stringify(this.fullRoster).includes(name)) {
      this.fullRoster = JSON.parse(
        JSON.stringify(this.fullRoster).replace(
          new RegExp(`"${name}"[,]?`, 'giu'),
          ''
        )
      );
    }
    if (this.fullRoster[grade]) {
      this.fullRoster[grade].push(name);
    } else {
      this.fullRoster[grade] = [name];
    }
    Object.keys(this.fullRoster).map((x) => this.fullRoster[x].sort());
  }

  grade(grade) {
    if (!this.fullRoster[grade]) this.fullRoster[grade] = [];
    return structuredClone(this.fullRoster[grade]);
  }
}
