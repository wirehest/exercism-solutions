export class GradeSchool {
  #roster = {};
  #students = {};

  roster() {
    let classYears = Array.from(new Set(Object.values(this.#students)));

    for (let year of classYears) {
      let classRoster = Object.entries(this.#students)
        .filter(([student, classYear]) => {
          return classYear === year;
        })
        .map(([student, _]) => student)
        .sort();
      this.#roster[year] = classRoster;
    }

    return structuredClone(this.#roster);
  }

  add(student, classYear) {
    this.#students[student] = classYear;
  }

  grade(classYear) {
    return [...(this.roster()[classYear] ?? [])];
  }
}
