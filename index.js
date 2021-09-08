import {Cliente} from "./Cliente.js"
import {Diretor} from "./funcionarios/Diretor.js"
import {Gerente} from "./funcionarios/Gerente.js"
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 11122233345)
diretor.cadastrarSenha("1234")
const gerente = new Gerente("Ricardo", 5000, 55544433321)
gerente.cadastrarSenha("123")

const cliente = new Cliente("Lais", 22244488845, "123")

const estaLogado = SistemaDeAutenticacao.login(diretor, "1234");

console.log(estaLogado)
