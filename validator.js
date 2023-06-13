const validator = { //todos esses codigos são atribuidos a uma constante que eu chamo no index
  isValid(creditCardNumber) {// credtCardNumber é o valor do cartão que o usuário vai digitar
    
    const removeSpace = creditCardNumber.split(" ").join("");  //o split e o join juntos funcionam com um replace, trnsforma em string

    let doubleNum = false,
      sum = 0;
    removeSpace
      .split("")
      .reverse() //O método reverse() inverte os itens de um array
      .forEach((reverseNum) => { // O método forEach() executa uma dada função em cada elemento de um array.PARA CADA
        //parte mais confusa
        reverseNum = parseInt(reverseNum); // parseInt() que vai analisar a string e retornar um número inteiro
        if (doubleNum) {
          reverseNum * 2 > 9
            ? (sum += reverseNum * 2 - 9) //? = se for verdadeiro : se não 
            : (sum += reverseNum * 2);
        } else {
          sum += reverseNum;
        }
        doubleNum = !doubleNum;
      });
    return sum % 10 === 0; // verifica se o ultimo numero é 0
  },

  //mascara o numero do cartão. O numero do cartão só é mascarado quando clico no botão pq coloquei o maskfy dentro da função quando clico no botão

  maskify(creditCardNumber) {
    const last4Digits = creditCardNumber.slice(-4); //Como um índice negativo SLICE, indica um deslocamento em relação ao fim da sequência. extrai os QUATRO últimos elementos.
    return last4Digits.padStart(creditCardNumber.length, "#"); //O método padStart() preenche a string original com um determinado caractere, ou conjunto de caracteres, (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido.
  },
};
export default validator;
