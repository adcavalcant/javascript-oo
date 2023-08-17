import User from "./User.js";

class Docente extends User{
    constructor(nome, email, nascimento, role, ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(nomeEstudante, curso){
        return `${nomeEstudante} passou no curso ${curso}.`;
    }
}

const novoDocente = new Docente('Alexandra', 'a@al.com','1983-09-23')
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovarEstudante('caio','Estrutura de Dados'));