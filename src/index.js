import validator from "./validator.js";

window.validarCartao = function () {
  //window é um objeto que se refere a janela inteira. Peguei o validarCartão e transformei em uma função que vai chamar os seguintes comandos:
  const numeroCartaoElement = document.getElementById("numeroDoCartao"); //Pega o elemento do html e tranforma em uma constante
  const nameElement = document.getElementById("cardName");
  const dayElement = document.getElementById("day");
  const monthElement = document.getElementById("month");
  const codeElement = document.getElementById("code");
  const creditCardNumber = numeroCartaoElement.value.split(" ").join("");
  
  let isValid = false;
  if (creditCardNumber.length > 1) {
    isValid = validator.isValid(numeroCartaoElement.value); //criei uma constante chamanda isValid que pega do validator a função isValid para que verificar se o valor do numeroCartaoElement é verdadeiro ou falso
  }
  const maskedCreditCardNumber = validator.maskify(numeroCartaoElement.value); //Criei uma constante chamada maskedCreditCardNumber que que pega do validator a função maskify e passa o elemento numeroCartaoElement para ser mascarado
  numeroCartaoElement.value = maskedCreditCardNumber; //aqui é onde o valor do numeroCartaoElement vai ser mascarado

  //mostrar a mensagem se o cartão é valido ou não
  if (isValid) {
    document.getElementById("mensagem").innerHTML = "Cartão Válido";
  } else {
    document.getElementById("mensagem").innerHTML = "Cartão Inválido";
  }

  if (nameElement.value.length < 1) {
    document.getElementById("campnome").innerHTML = "Nome inválido";
  } else {
    document.getElementById("campnome").hidden = true;
  }

  if (numeroCartaoElement.value.length < 1) {
    document.getElementById("cardMsg").innerHTML = "Preencha um número válido";
  } else {
    document.getElementById("cardMsg").hidden = true;
  }

  if (dayElement.value.length < 1 || monthElement.value.length < 1) {
    document.getElementById("cardDateMsg").innerHTML = "Data inválida";
  } else {
    document.getElementById("cardDateMsg").hidden = true;
  }

  if (codeElement.value.length < 1) {
    document.getElementById("cardCodeMsg").innerHTML = "Código inválido";
  } else {
    document.getElementById("cardDateMsg").hidden = true;
  }

};
