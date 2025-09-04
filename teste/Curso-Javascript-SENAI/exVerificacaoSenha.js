// 5. Verificação de senha 
// Crie um programa que verifique se a senha digitada é igual a "12345". 
// Se for, exiba "Acesso permitido", caso contrário, "Senha incorreta". 

let senhaUsuario = "12345"
let senhaPermitida = "12345"

if (senhaUsuario === senhaPermitida){
    console.log(`A senha está correta! Acesso Permitido!!`)
}else{
    console.log(`A senha está incorreta! Acesso Negado!!`)
}