const resultEl = document.getElementById("p1");
const generateEl = document.getElementById("genpass");
const clipboardEl = document.getElementById("copy2clip");
const pwordLength = parseInt(prompt("How many characters do you want your password? Please enter number."));
const specCharInput = confirm("Do you want to include a special character?");
const numInput = confirm("Do you want to include numbers?");
const upCaseInput = confirm("Do you want to include captial letters?");
const lowCaseInput = confirm("Do you want to include lowercase characters?")


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

//event listener
generateEl.addEventListener("click", () => {
  const length = +pwordLength;
  const hasLow = lowCaseInput;
  const hasUp = upCaseInput;
  const hasNum = numInput;
  const hasSymbol = specCharInput;
  //console.log(length);
 resultEl.innerText = generatePassword(hasLow, hasUp, hasNum, hasSymbol, length);
});

//generate password function
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  //each type to include
  const typesCount = lower + upper + number + symbol;
  
  console.log("typesCount", typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (item => Object.values(item)[0]);
  
  //console.log("typesArr: ", typesArr);
  
  
  if (typesCount === 0) {
    return "";
   }
 
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      //console.log("funcName: ", funcName);
      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
  //console.log(generatedPassword);
}


//functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//console.log(getRandomLower());

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
//console.log(getRandomUpper());
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
    //console.log(getRandomNumber()); 
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.' ;
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  //console.log(getRandomSymbol());
