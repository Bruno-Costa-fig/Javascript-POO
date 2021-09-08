import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    static NumeroDeContas = 0;

    constructor(cliente, tipo){
        super(0, cliente, 1001, tipo);
        ContaSalario.NumeroDeContas += 1;
    }

    sacar(valor){
        let taxa = 1.01;
        return this._sacar(valor, taxa)
    }
}

