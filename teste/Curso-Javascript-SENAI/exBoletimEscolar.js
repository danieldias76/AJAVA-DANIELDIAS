// 4. Boletim escolar 
// Crie um programa que classifique o resultado de um aluno com base na nota: 
// • Nota maior ou igual a 70 → "Aprovado". 
// • Nota entre 50 e 69 → "Recuperação". 
// • Nota menor que 50 → "Reprovado". 

let notaAluno = 50

if(notaAluno >= 70){
    console.log(`A nota do aluno foi ${notaAluno}, ele está Aprovado!!`)
}else if (notaAluno >= 50){
   console.log(`A nota do aluno foi ${notaAluno}, ele está de Recuperação!!`)
}else{
    console.log(`A nota do aluno foi ${notaAluno}, ele está Reprovado!!`)
}