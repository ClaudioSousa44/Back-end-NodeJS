const contatos = require('./contatos.js');

const idCliente = (id, listaContatos) => {
    let status = false;
    let contactsJson = {};
    
    

    listaContatos.whats.forEach((perfil) => {
        if(perfil.id == id){
            contactsJson = perfil.contacts;
            status = true;
        }
    });

    if(status){
        return contactsJson;
    }else{
        return status;
    }

    
};

module.exports = {
    idCliente
}
