import validator from "./validator.js";

console.log();

window.validarCartao = function () {
  //window é um objeto que se refere a janela inteira. Peguei o validarCartão e transformei em uma função que vai chamar os seguintes comandos:
  const numeroCartaoElement = document.getElementById("numeroDoCartao"); //Pega o elemento do html e tranforma em uma constante
  const isValid = validator.isValid(numeroCartaoElement.value); //criei uma constante chamanda isValid que pega do validator a função isValid para que verificar se o valor do numeroCartaoElement é verdadeiro ou falso
  console.log(isValid); // mostra no meu console se é verdadeiro ou falso
  const maskedCreditCardNumber = validator.maskify(numeroCartaoElement.value); //Criei uma constante chamada maskedCreditCardNumber que que pega do validator a função maskify e passa o elemento numeroCartaoElement para ser mascarado
  numeroCartaoElement.value = maskedCreditCardNumber; //aqui é onde o valor do numeroCartaoElement vai ser mascarado

  //mostrar a mensagem se o cartão é valido ou não
  if (isValid === true && isValid.value > 1) {
    document.getElementById("mensagem").innerHTML = "Cartão Válido";
  } else {
    document.getElementById("mensagem").innerHTML = "Cartão Inválido";
  }
};
