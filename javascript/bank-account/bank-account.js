/** A: Representation of a bank account. */
export class BankAccount {
  constructor() {
    this.accountOpen = false;
    this.accountBalance = null;
  }

  open() {
    if (this.accountOpen) {
      throw new ValueError();
    } else {
      this.accountOpen = true;
      this.accountBalance = 0;
    }
  }

  close() {
    if (this.accountOpen) {
      this.accountOpen = false;
    } else {
      throw new ValueError();
    }
  }

  deposit(amount) {
    if (this.accountOpen && amount >= 0) {
      this.accountBalance += amount;
    } else {
      throw new ValueError();
    }
  }

  withdraw(amount) {
    if (this.accountOpen && amount >= 0 && this.accountBalance - amount >= 0) {
      this.accountBalance -= amount;
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if (this.accountOpen) {
      return this.accountBalance;
    } else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
