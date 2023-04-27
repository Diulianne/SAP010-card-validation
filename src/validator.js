const validator = {
  // eslint-disable-next-line no-unused-vars
  isValid(creditCardNumber) {
    // Accept only digits, dashes or spaces
    const removeSpace = creditCardNumber.split(" ").join("");
    let doubleNum = false,
      sum = 0;

    if (removeSpace.length < 1) return false;

    removeSpace
      .split("")
      .reverse()
      .forEach((reverseNum) => {
        reverseNum = parseInt(reverseNum);
        if (doubleNum) {
          reverseNum * 2 > 9
            ? (sum += reverseNum * 2 - 9)
            : (sum += reverseNum * 2);
        } else {
          sum += reverseNum;
        }
        doubleNum = !doubleNum;
      });

    return sum % 10 === 0;
  },


  maskify(creditCardNumber) {
    const last4Digits = creditCardNumber.slice(-4);
    return last4Digits.padStart(creditCardNumber.length, "#");
  },
};

export default validator;
