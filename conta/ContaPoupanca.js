import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    static NumeroDeContas = 0;

    constructor(saldoInicial, cliente, agencia, tipo){
        super(saldoInicial, cliente, agencia, tipo);
        ContaPoupanca.NumeroDeContas += 1;
    }

    sacar(valor){
        let taxa = 1.02;
        return this._sacar(valor, taxa)
    }
}

