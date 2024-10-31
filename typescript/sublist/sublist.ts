type ListType = 'equal' | 'superlist' | 'sublist' | 'unequal';

export class List<T> {
  items: T[];

  constructor(...items: T[]) {
    this.items = items;
  }

  compare(other: List<T>): ListType {
    let listA = `,${this.items?.join(',')},`;
    let listB = `,${other.items?.join(',')},`;

    if (listA === listB) return 'equal';
    if (listA.includes(listB) || !other.items.length) return 'superlist';
    if (listB.includes(listA) || !this.items.length) return 'sublist';
    return 'unequal';
  }
}
