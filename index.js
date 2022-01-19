import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new Conta(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const conta2 = new ContaCorrente(102, cliente1);

console.log(contaCorrenteRicardo);
