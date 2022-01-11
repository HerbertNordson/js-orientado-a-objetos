import { CheckingAccount } from "./CheckingAccount.js";
import { Client } from "./Client.js";

const client_1 = new Client();
const client_2 = new Client();

client_1.name = "Ricardo";
client_1.cpf = 11122233344;

console.log(client_1);

client_2.name = "Angel";
client_2.cpf = 34522233344;

const client_account = new CheckingAccount();
const client_account2 = new CheckingAccount();

client_account.client = client_1;
client_account.ag = 1001;

client_account2.client = client_2;
client_account2.ag = 1001;

client_account.deposit(100);
console.log("Value: $" + client_account._amount);

client_account.withdraw(50);
console.log("Value Withdraw: $" + client_account._amount);

client_account.transfer(20, client_account2);

console.log(client_account2.client);
