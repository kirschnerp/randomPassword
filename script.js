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

//prompts
var pwordlength = prompt("How many characters do you want your password? Please enter number.");
var specCharInput = confirm("Do you want to include a special character?");
var numInput = confirm("Do you want to include numbers?");
var upCaseInput = confirm("Do you want to include captial letters?");


