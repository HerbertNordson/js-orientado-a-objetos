import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;
  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia);
    ContaCorrente.numeroDeContas += 1;
  }
}
