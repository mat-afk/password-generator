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
  const symbols = "[]{}()!@#$%&*_-+=/><,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (
  getLowercaseLetter,
  getUppercaseLetter,
  getNumber,
  getSymbol
) => {
  let password = "";
  const lenght = 10;

  const generators = [
    getLowercaseLetter,
    getUppercaseLetter,
    getNumber,
    getSymbol,
  ];

  for (let i = 0; i < lenght; i++) {
    password += generators[Math.floor(Math.random() * generators.length)]();
  }

  generatedPasswordDiv.style.display = "block";
  generatedPasswordDiv.querySelector("h4").innerHTML = password;
};

// Event listeners
generatePasswordSpan.addEventListener("click", () => {
  generatePassword(
    getLowercaseLetter,
    getUppercaseLetter,
    getNumber,
    getSymbol
  );
});
