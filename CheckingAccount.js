export class CheckingAccount {
  ag;
  _amount = 0;

  withdraw = (value) => {
    if (this._amount >= value) return (this._amount -= value);
  };

  deposit = (value) => {
    if (value > 0) return (this._amount += value);
  };
}
