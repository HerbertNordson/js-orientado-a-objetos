import { CheckingAccount } from "./CheckingAccount.js";
import { Client } from "./Client.js";

const client_1 = new Client("Ricardo", 11122233344);
const client_2 = new Client("Angel", 34522233344);

const client_account = new CheckingAccount(1001, client_1);
const client_account2 = new CheckingAccount(1001, client_2);

client_account.deposit(100);
client_account.withdraw(50);

console.log(client_account._client);
console.log("Ag: ", client_account.ag);
console.log("Balance: $", client_account.amount);
client_account.transfer(20, client_account2);
console.log("--------------------------------------");
console.log(client_account2._client);
console.log("Ag: ", client_account2.ag);
console.log("Balance: $", client_account2.amount);
console.log("--------------------------------------");
console.log("Account active: ", CheckingAccount.numberAccounts);
