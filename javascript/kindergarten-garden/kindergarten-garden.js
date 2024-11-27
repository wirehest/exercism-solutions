const DEFAULT_STUDENTS = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
];

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    this.diagram = diagram;
    this.students = students.sort();
  }

  plants(student) {
    let position = 2 * this.students.findIndex((s) => s === student);
    let encodings = this.diagram.split('\n').flatMap((row) => {
      return row.slice(position, position + 2).split('');
    });

    let plants = encodings.map((plantCode) => {
      return PLANT_CODES[plantCode];
    });

    return plants;
  }
}
