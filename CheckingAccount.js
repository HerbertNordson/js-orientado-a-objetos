export class CheckingAccount {
  ag;
  client;

  _amount = 0;

  withdraw = (value) => {
    if (this._amount >= value) return (this._amount -= value);
  };

  deposit = (value) => {
    if (value > 0) return (this._amount += value);
  };

  transfer = (value, account) => {
    const valueWithdraw = this.withdraw(value);
    account.deposit(valueWithdraw);
    console.log("Transfer performed successfully!!!");
    return;
  };
}
