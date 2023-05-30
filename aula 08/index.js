let varA = 'A'; //Transferir valor de A para B
let varB = 'B'; //Transferir valor de B para C 
let varC = 'C'; //Transferir valor de C para A

// Jeito antigo de fazer 
const varATemp = VarA // Salvar uma variável teporaria..
varA = varB
varB = varC
varC = varATemp

// Jeito novo de resolver
[varA, varB, varC] = [varB, varC, verA]

console.log(varA,varB,varC)

