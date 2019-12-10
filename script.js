//variable list
var specChar = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\ ";
var num = " 0123456789 ";
var lowCase = " abcdefghijklmnopqrstuvwxyz ";
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
//more var
var specCharInput = document.getElementById("specChar");
var numInput = document.getElementById("num");
var lowCaseInput = document.getElementById("lowCase");
var upCaseInput = document.getElementById("upCase");
var lengthInput = document.getElementById("lenght");
var passwordField = document.getElementById("passwordField");
var createButton = document.getElementById("create");
var userPWord;
var pwordGroup;
var pwordlenght;

//loop
for (var x = 0; x < 128; x++) {

//variables
var userInput1 = pwordlength[Math.floor(Math.random() * pwordlength.length)];
var pwordlength = prompt ("How many characters would you like your password to be?");
//if
if (userInput1 >=128 && userInput1 === typeof(number))    
    alert("You chose " + userInput1)

