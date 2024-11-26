//
// This is only a SKELETON file for the 'Kindergarten Garden' exercise.
// It's been provided as a convenience to get you started writing code faster.
//

const DEFAULT_STUDENTS: Student[] = [
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
} as const;

type Student = string;
type Plant = (typeof PLANT_CODES)[keyof typeof PLANT_CODES];
type Plants = Plant[];
type Pots = Plants[];

export class Garden {
  readonly diagram: string;
  readonly students: Student[];

  constructor(diagram: string, students = DEFAULT_STUDENTS) {
    this.diagram = diagram;
    this.students = students.sort();
  }

  public plants(student: Student): Plants {
    let position = 2 * this.students.findIndex((s) => s === student);
    let encodings = this.diagram.split('\n').flatMap((row) => {
      return row.slice(position, position + 2).split('');
    });

    let plants = encodings.map((plantCode) => {
      return PLANT_CODES[plantCode as keyof typeof PLANT_CODES];
    });

    return plants;
  }
}
