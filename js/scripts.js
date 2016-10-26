//Back-End
var original;
var output = [];
var split= [];
var letters = [];

var byLetter ="";
var letterCheck;
var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]

var splitString = function(stringToSplit, separator) {
  return letters = stringToSplit.split(separator);
};
var letterCheck = function(symbols) {
for(i=0; i<symbols.length; i++) {
  if(/[a-zA-z]/.test(symbols) === true) {
  }
  else {
    return false;
  };
}
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
var consonantCheck = function(words, vowel) {
  for(i=0; i<vowel.length; i++) {
    for(index=0; index<words.length; index++) {
      if(words[index] === vowel[i]) {
        split = words.splice(0,index);
        split = split.join('');
        words.push(split);
        joined = words.join('');
        words.push("ay");
        output = words.join('');
      }
    }
  }
}


//Front-End
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    original = $("#sentence").val();
    letters = splitString(original, byLetter);
    letterCheck(letters);
    vowelCheck(letters, vowels);
    consonantCheck(letters, vowels);

  });

});
