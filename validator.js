const validator = {
  isValid(creditCardNumber) {
    const removeSpace = creditCardNumber.split(" ").join("");

    let doubleNum = false,
      sum = 0;
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
