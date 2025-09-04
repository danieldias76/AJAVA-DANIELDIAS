// 10. Dia da semana 
// Crie um programa que receba um index (0, 1, 2, etc.) e retorne qual o dia da 
// semana. 
// (0 = domingo, 1 = segunda, 2 = terça, 3 = quarta, 4 = quinta, 5 = sexta, 6 = sábado) 

// let index = 6

// if(index == 0){
//     console.log("Domingo")
// }else if(index == 1){
//     console.log("Segunda")
// }else if(index == 2){
//     console.log("Terça")
// }else if(index == 3){
//     console.log("Quarta")
// }else if(index == 4){
//     console.log("Quinta")
// }else if(index == 5){
//     console.log("Sexta")
// }else if(index == 6){
//     console.log("Sabado")
// }


let data = new Date()
let diaSemana = data.getDay()

console.log(diaSemana)

switch (diaSemana) {
    case 0: console.log('Domingo')
        break
    case 1: console.log('Segunda')
        break
    case 2: console.log('Terça')
        break
    case 3: console.log('Quarta')
        break
    case 4: console.log('Quinta')
        break
    case 5: console.log('Sexta')
        break
    case 6: console.log('Sábado')
        break

    default: console.log('Valor invalido!')
        break
}
