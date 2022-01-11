import { CheckingAccount } from "./CheckingAccount.js";
import { Client } from "./Client.js";

const client_1 = new Client();
const client_account = new CheckingAccount();

client_1.name = "Ricardo";
client_1.cpf = 11122233344;

console.log(client_1);

client_account.ag = 1001;

client_account.deposit(100);

console.log(client_account._amount);

client_account.withdraw(50);

console.log(client_account._amount);
