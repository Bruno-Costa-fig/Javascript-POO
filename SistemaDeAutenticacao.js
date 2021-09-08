export class SistemaDeAutenticacao {
    static login(autenticavel, senha){
        if(SistemaDeAutenticacao.ehAutenticavel(autenticar)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    // verifica se há a chave do método autenticar no objeto
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function;
    }
}