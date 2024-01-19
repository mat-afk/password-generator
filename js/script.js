// Selecting elements
const generatePasswordSpan = document.querySelector("#generate-password");
const generatedPasswordDiv = document.querySelector("#generated-password");

// Functions
const getLowercaseLetter = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getUppercaseLetter = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
  const symbols = "[]{}()!@#$%&*_-+=/?><,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Event listeners
generatePasswordSpan.addEventListener("click", () => {
  console.log(getLowercaseLetter());
  console.log(getUppercaseLetter());
  console.log(getNumber());
  console.log(getSymbol());
});
