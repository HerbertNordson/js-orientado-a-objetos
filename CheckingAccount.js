import { Client } from "./Client.js";

export class CheckingAccount {
  static numberAccounts = 0;
  ag;
  _client;

  set client(newClient) {
    if (newClient instanceof Client) this._client = newClient;
  }

  get client() {
    return this._client;
  }

  _amount = 0;

  get amount() {
    return this._amount;
  }

  withdraw = (value) => {
    if (this._amount >= value) {
      this._amount -= value;
      return value;
    }
  };

  deposit = (value) => {
    if (value <= 0) {
      return;
    }
    this._amount += value;
  };

  transfer = (value, account) => {
    const valueWithdraw = this.withdraw(value);
    account.deposit(valueWithdraw);
    console.log("Transfer performed successfully!!!");
    return;
  };

  constructor(ag, client) {
    this.ag = ag;
    this._client = client;
    CheckingAccount.numberAccounts += 1;
  }
}
