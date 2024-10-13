export class List {
  constructor(arr) {
    this.arr = arr;
  }

  compare(list) {
    let strOne = this.arr?.join(',') || '';
    let strTwo = list.arr?.join(',') || '';

    if (strOne === strTwo) return 'EQUAL';
    if (strOne.includes(strTwo)) return 'SUPERLIST';
    if (strTwo.includes(strOne)) return 'SUBLIST';
    return 'UNEQUAL';
  }
}
