import { DadosFuncionario } from "./DadosFuncionario.js"
import { FuncaoFuncionario } from "./FuncaoFuncionario.js"

const funcao1 = new FuncaoFuncionario("Analista", "Júnior", "2 anos");
const funcionario1 = new DadosFuncionario("Ramon", 11122233344, 27, funcao1);

const funcao2 = new FuncaoFuncionario("Gerente", "Sênior", "5 anos");
const funcionario2 = new DadosFuncionario("José", 45465988787, 35, funcao2);

console.log(funcionario1); console.log(funcionario2);
