function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
 
    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
       window.location.href = "aula2.html";
    }
}

var dadoslista = [];

function salvarUser(){
    let nomeUser=document.getElementById("nomeUser").value;

    if(nomeUser){
        dadoslista.push(nomeUser);
    }
}

function criarLista(){
let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
for(let i = 0;i <= (dadoslista.length - 1);i++){
    tabela += "<tr><td>" + dadosLista[i] + "</td><td><button>Editar</button>" 
}
}
