class Client {
  name;
  cpf;
}

class checkingAccount {
  ag;
  _amount = 0;

  withdraw = (value) => {
    if (this._amount >= value) return (this._amount -= value);
  };

  deposit = (value) => {
    if (value > 0) return (this._amount += value);
  };
}

const client_1 = new Client();
const client_account = new checkingAccount();

client_1.name = "Ricardo";
client_1.cpf = 11122233344;

console.log(client_1);

client_account.ag = 1001;

client_account.deposit(100);

console.log(client_account._amount);

client_account.withdraw(50);

console.log(client_account._amount);
