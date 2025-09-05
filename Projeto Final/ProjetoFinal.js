const form = document.getElementById('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const telefoneInput = document.querySelector('#telefone');
const mensagemTextarea = document.querySelector('#mensagem');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value === "") {
        alert("Por favor preencha seu nome");
        return;
    }

    if (emailInput.value === "") {
        alert("Por favor preencha seu email");
        return;
    }

    if (telefoneInput.value === "") {
        alert("Por favor preencha seu número");
        return;
    }

    if (mensagemTextarea.value === "") {
        alert("Por favor preencha a mensagem");
        return;
    }

    // Validação extra
    enviar();
    
    // Você pode enviar o formulário aqui se quiser, ou fazer outra ação
    // form.submit(); // use com cuidado
});

function enviar() {
    if (nameInput.value === "ddd" && emailInput.value === "dddd@gmail.com" && telefoneInput.value === "12345" &&  mensagemTextarea.value === "WASD") {
        alert('Bem-Vindo');
    }
    else{ 
        alert('Dados Incorretos')
    }
}

