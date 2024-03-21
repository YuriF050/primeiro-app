const usuario = {
    id: 1 ,
    nome: "firmino",
    email: "firminosouza@gmail.com",
    perfil: {
        id:1,
        descricao: "calvo"
    }
};



function login(email, senha) {
    console.log(email + senha);
    return new Promisse(resolve => {
        setTimeout(() => {
            resolve({
                token: "asdnasbgassfysaracfahjfasbvvcfxfasddnasfaisgbvuvas",
                usuario
            });
        }
       )
    }
    )
}

export default {login};