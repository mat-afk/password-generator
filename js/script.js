// Selecting elements
const openGeneratePasswordSpan = document.querySelector(
  "#open-generate-password"
);
const generatedPasswordContainer = document.querySelector(
  "#generated-password"
);
const customOptionsContainer = document.querySelector("#custom-options");
const lengthInput = document.querySelector("#length");
const lettersCheckbox = document.querySelector("#letters");
const numbersCheckbox = document.querySelector("#numbers");
const symbolsCheckbox = document.querySelector("#symbols");
const generatePasswordBtn = document.querySelector("#generate-password");
const copyPasswordBtn = document.querySelector("#copy-password");

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

const setGenerators = () => {
  const generators = [];
  if (lettersCheckbox.checked) {
    generators.push(getLowercaseLetter);
    generators.push(getUppercaseLetter);
  }
  if (numbersCheckbox.checked) {
    generators.push(getNumber);
  }
  if (symbolsCheckbox.checked) {
    generators.push(getSymbol);
  }
  return generators;
};

const generatePassword = (length) => {
  let password = "";

  const generators = setGenerators();

  for (let i = 0; i < length; i++) {
    password += generators[Math.floor(Math.random() * generators.length)]();
  }

  generatedPasswordContainer.style.display = "block";
  generatedPasswordContainer.querySelector("h4").innerHTML = password;
};

// Event listeners
openGeneratePasswordSpan.addEventListener("click", () => {
  customOptionsContainer.classList.toggle("hide");
});

generatePasswordBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const length = lengthInput.value;
  if (length < 1 || length > 20) return;

  generatePassword(length);
});

copyPasswordBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const password = generatedPasswordContainer.querySelector("h4").innerHTML;
  if (!password) return;

  navigator.clipboard.writeText(password).then(() => {
    copyPasswordBtn.innerHTML = "Copied!";

    setTimeout(() => {
      copyPasswordBtn.innerHTML = "Copy";
    }, 700);
  });
});
