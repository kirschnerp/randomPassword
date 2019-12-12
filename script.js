//variable list
var specChar = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\ ";
var num = " 0123456789 ";
var lowCase = " abcdefghijklmnopqrstuvwxyz ";
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
//more var
var passwordField = document.getElementById("p1");
var copyButton = document.getElementById("copy2clip");
var generateButton = document.getElementById("genpass");
var plength;
var userPWord;

//prompts
var pwordLength = prompt("How many characters do you want your password? Please enter number.");
var specCharInput = confirm("Do you want to include a special character?");
var numInput = confirm("Do you want to include numbers?");
var upCaseInput = confirm("Do you want to include captial letters?");
var lowCaseInput = confirm("Do you want to include lowercase characters?");


//function
function generate() {
  userPWord = "";
  passwordCharSet = ""; 
    if (specCharInput == null) {
      passwordCharSet != specChar
    } else {
      passwordCharSet += specChar;
    }
    
    if (numInput == null) {
      passwordCharSet != num
    } else {
      passwordCharSet += num;
    }
    
    if (upCaseInput == null) {
          passwordCharSet != lowCase
    } else {
          passwordCharSet += lowCase
    }
        
    if (lowCaseInput == null) {
          passwordCharSet != upCase
    } else {
        passwordCharSet += upCase;
    }
        
    
    plength = Number(pwordLength.value);
       
    for (let i = 0; i < plength; i++) {
      userPassword += passwordCharSet.charAt(
      Math.floor(Math.random() * passwordCharSet.length)
       );
     }
    if (userPWord == "") {
      passwordField.innerHTML = userPWord;
      }
   }
      
      //event
      generateButton.addEventListener("click", generate);
      

       
    /*
      clipboard.on('success', function(e) {
          console.info('Action:', e.action);
          console.info('Text:', e.text);
          console.info('Trigger:', e.trigger);
          let alertbox = document.getElementById('alert');
          alertbox.innerHTML = "Copied!"
          alertbox.classList.add('success');
          setTimeout(function(){ 
            alertbox.classList.remove('success');
          }, 3000);
          
          e.clearSelection();
      });
       
      clipboard.on('error', function(e) {
          console.error('Action:', e.action);
          console.error('Trigger:', e.trigger);
        let alertbox = document.getElementById('alert');
          alertbox.innerHTML = "Try select the text to copy"
          alertbox.classList.add('fail');
          setTimeout(function(){ 
            alertbox.classList.remove('fail');
          }, 3000);
      });

      
      
      var userInput1 = pwordlength[Math.floor(Math.random() * pwordlength.length)];

      //if
            if (userInput1 >=128 && userInput1 === typeof(number))    
        alert("You chose " + userInput1)  

        copyButton.setAttribute("data-clipboard-text", userPassword)

        generateButton.addEventListener("click", generate);
    */      
   



