import {Cliente} from "./Cliente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Ramon", 12332145609);
diretor.cadastrarSenha("1234567");

const gerente = new Gerente("Jose", 99988877766);
gerente.cadastrarSenha('123');

const cliente = new Cliente("Xico", 12344577898, "456");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234567");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);
