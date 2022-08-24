let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome() {
    let txt = document.querySelector('#txtNome');
    if (nome.value.length < 3) {
     txt.innerHTML = 'Nome inválido'
     txt.style.color = 'red'
    }
    else { 
    txt.innerHTML = 'Nome válido'
    txt.style.color = 'blue'
    nomeOk = true    
}
}

function validaEmail() {
    
    let txtEmail = document.querySelector('#txtEmail');
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
     txtEmail.innerHTML = 'Email inválido'
     txtEmail.style.color = 'red'
    }
     else { 
     txtEmail.innerHTML = 'Email válido'
     txtEmail.style.color = 'blue'
     emailOk = true    
 }

}

function validaAssunto() {
    
    let txtAssunto = document.querySelector('#txtAssunto');
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'O texto suporta apenas 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
     
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('formulário enviado com sucesso')
    } else{
        alert('preencha o formulário corretamente')
    }
}