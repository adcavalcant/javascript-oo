import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role, ativo = true){ //polimorfismo no construtor
        super(nome, email, nascimento, role, ativo);
    }  
    
    aprovarEstudante(nomeEstudante, curso){
        return `${nomeEstudante} passou no curso ${curso}.`;
    }
}
