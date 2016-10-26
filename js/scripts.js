//Back-End
var original;
var letters = [];
var byLetter ="";
var letterCheck;
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var splitString = function(stringToSplit, separator) {
  return letters = stringToSplit.split(separator);
};
var letterCheck = function(characters, arrayToCheck) {
  for(index=0; index<characters.length; index++) {
    for(i=0; i<arrayToCheck.length; i++) {
      if(characters[index] === arrayToCheck[i]){
        alert("it works");
      }
      else{
        alert("it doesn't work");
      }
    }
  };
};

//Front-End
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    original = $("#sentence").val();
    letters = splitString(original, byLetter);
    letterCheck(letters, alphabet);

  });

});
