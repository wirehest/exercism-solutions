interface Grade {
  [grade: number]: string[];
}

export class GradeSchool {
  fullRoster: Grade = {};

  roster(): Grade {
    return structuredClone(this.fullRoster);
  }

  add(name: string, grade: keyof Grade) {
    if (JSON.stringify(this.fullRoster).includes(name)) {
      this.fullRoster = JSON.parse(
        JSON.stringify(this.fullRoster).replace(
          new RegExp(`"${name}"[,]?`, 'giu'),
          '',
        ),
      );
    }
    if (this.fullRoster[grade]) {
      this.fullRoster[grade].push(name);
    } else {
      this.fullRoster[grade] = [name];
    }
    Object.keys(this.fullRoster).map((grade) => {
      return this.fullRoster[+grade as keyof Grade].sort();
    });
  }

  grade(grade: number) {
    if (!this.fullRoster[grade]) this.fullRoster[grade] = [];
    return structuredClone(this.fullRoster[grade]);
  }
}
