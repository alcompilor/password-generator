const genLower = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz".split("");
  return chars;
};

const genUpper = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return chars;
};

const genSpecial = () => {
  const chars = "$&+,:;=?@#|'<>.^*()%!-".split("");
  return chars;
};

const genNumbers = () => {
  const chars = "1234567890".split("");
  return chars;
};

const combinedArray = (specialStatus) => {
  if (specialStatus) {
    const combined = genLower().concat(genUpper(), genNumbers(), genSpecial());
    return combined;
  } else {
    const combined = genLower().concat(genUpper(), genNumbers());
    return combined;
  }
};

const shuffledArray = (specialStatus) => {
  const shuffled = combinedArray(specialStatus).sort(
    (a, b) => 0.5 - Math.random()
  );

  return shuffled;
};

const genPass = (length, specialStatus) => {
  const charsArray = shuffledArray(specialStatus);
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * charsArray.length);
    password += charsArray[randomNum];
  }
  return password;
};

export { genPass };
