import User from "./User.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  criarCurso(nomeDoCurso, qtdVagas) {
    return `Curso de ${nomeDoCurso} criado com ${qtdVagas} vagas.`;
  }
}

const novoAdmin = new Admin("Rodrigo", "r@r.com", "2021-09-01");

console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso('Lógica de Programação', 32));