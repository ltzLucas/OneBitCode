function media(...numbers) {
    return numbers.reduce((accum, num) => accum + num,0) / numbers.length
}

console.log(media(2,6,3,7,4))


function mediaPonderada(...notasEPesos) {
    // Verifica se há pelo menos um objeto passado como argumento
    if (notasEPesos.length === 0) {
      throw new Error("Pelo menos um objeto deve ser fornecido para calcular a média ponderada.");
    }
  
    // Calcula a soma dos produtos dos valores pelos pesos
    const somaProdutos = notasEPesos.reduce((acumulador, { n, p }) => acumulador + (n * p), 0);
  
    // Calcula a soma dos pesos
    const somaPesos = notasEPesos.reduce((acumulador, { p }) => acumulador + p, 0);
  
    // Calcula a média ponderada
    const media = somaProdutos / somaPesos;
  
    return media;
}
  
// Exemplo de uso
const resultado = mediaPonderada({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 });

console.log(resultado); // Saída: 7.75


function moda(...dados) {
    // Cria um objeto para contar a frequência de cada valor
    const frequencia = {};
  
    // Preenche o objeto de frequência
    dados.forEach(valor => {
      frequencia[valor] = (frequencia[valor] || 0) + 1;
    });
  
    // Encontra o valor com a maior frequência
    let modaValor;
    let maiorFrequencia = 0;
  
    Object.keys(frequencia).forEach(valor => {
      const freqAtual = frequencia[valor];
  
      if (freqAtual > maiorFrequencia) {
        modaValor = valor;
        maiorFrequencia = freqAtual;
      }
    });
  
    // Retorna a moda como um número
    return parseInt(modaValor);
  }

// Exemplo de uso
const resultadoModa = moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4);

console.log(resultadoModa); // Saída: 4
  
