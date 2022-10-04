var listaRegistros = {
    ultimoGerado:0,
    usuario:[]
}

function insertUsuario(nome, URL){
    cont id = listaRegistros.ultimoIdGerado + 1;
    listaRegistros.usuario.push({
        nome, URL
    })
}