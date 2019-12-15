//variable list
var specChar = ["!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\""];
var num = ["0123456789"];
var lowCase = ["abcdefghijklmnopqrstuvwxyz"];
var upCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
//more var
var passwordField = document.getElementById("p1");
var copyButton = document.getElementById("copy2clip");
var generateButton = document.getElementById("genpass");
var plength;
var userPWord = "";
//prompts
var pwordLength = prompt("How many characters do you want your password? Please enter number.");
var specCharInput = confirm("Do you want to include a special character?");
var numInput = confirm("Do you want to include numbers?");
var upCaseInput = confirm("Do you want to include captial letters?");
var lowCaseInput = confirm("Do you want to include lowercase characters?");


//function
function generate() {
  userPWord = ();
  passwordCharSet = ""; 
    if (specCharInput == true) {
      passwordCharSet = specChar
    } 
    
    if (numInput == true) {
      passwordCharSet == num
    } 
    
    if (upCaseInput == true) {
          passwordCharSet == lowCase
    } 
        
    if (lowCaseInput == true) {
          passwordCharSet == upCase
    } 
        
    
    plength = Number(pwordLength);

    console.log(pwordLength);
       
    for (let i = 0; i < plength; i++) {
      userPWord += passwordCharSet.charAt(
      Math.floor(Math.random() * passwordCharSet.length)
       );
      }
       if (userPWord == "") {
      passwordField.innerHTML = userPWord;
      }
   }
      
      //event
      generateButton.addEventListener("click", generate);
      
      console.log(userPWord);
      

       
    