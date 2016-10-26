//Back-End
var original;
var output = [];
var letters = [];
var byLetter ="";
var letterCheck;
var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var splitString = function(stringToSplit, separator) {
  return letters = stringToSplit.split(separator);
};
var vowelCheck = function(words, vowel) {
    for(index=0; index<vowel.length; index++){
      if(words[0] === vowel[index]) {
        words.push("ay")
        output = words.join("");      
      }
      else{}
    }
};


//Front-End
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    original = $("#sentence").val();
    letters = splitString(original, byLetter);
    vowelCheck(letters, vowels);
    //letterCheck(letters, alphabet);

  });

});
