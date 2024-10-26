export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

type AccountResponse = void | ValueError;

export class BankAccount {
  #open = false;
  #balance = 0;

  open(): AccountResponse {
    if (this.#open) throw new ValueError();
    else [this.#open, this.#balance] = [true, 0];
  }

  close(): AccountResponse {
    if (this.#open) this.#open = false;
    else throw new ValueError();
  }

  deposit(_argument: number): AccountResponse {
    if (this.#open && _argument >= 0) this.#balance += _argument;
    else throw new ValueError();
  }

  withdraw(_argument: number): AccountResponse {
    if (this.#open && _argument >= 0 && this.#balance - _argument >= 0) {
      this.#balance -= _argument;
    } else throw new ValueError();
  }

  get balance(): number | ValueError {
    if (this.#open) return this.#balance;
    throw new ValueError();
  }
}
