document.querySelector('form').reset()
const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById('email').value
    const nome = ('Daniel Dias')
    const senha = document.getElementById('password').value

    if(email == 'danieldiasconceicao71@gmail.com' && senha == '12345'){
        alert(`Olá, ${nome}! Seja bem vindo.`)
    }else{
        alert(`Dados Incorretos!!`)
    }

})