//Back-End
var original;
var output = [];
var split= [];
var letters = [];
var words = [];
var byWord = " ";
var byLetter ="";
var letterCheck;
var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]

var toPigLatin = function(stringToSplit, byWords, byLetter, words, vowel) {
  words =stringToSplit.split(byWords);
  for(i=0; i<words.length; i++) {
    if(/[a-zA-z]/.test(words) === true) {
      letters = stringToSplit.split(byLetter);
      for(index=0; index<vowel.length; index++){
        if(letters[0] === vowel[index]) {
          letters.splice(-1," ", "ay")
          output = letters.join("");
          console.log(output);

        }
      }

    }
    else {
      alert("good job")
      return false;
    }
  };


}
var splitString = function(stringToSplit, separator) {
  return letters = stringToSplit.split(separator);
};
var letterCheck = function(symbols) {

};
  var vowelCheck = function(words, vowel) {

};
var consonantCheck = function(words, vowel) {
  for(i=0; i<words.length; i++) {
    for(index=0; index<vowel.length; index++) {
      if(words[0]===('q'||'Q') && words[1] === ('u' || 'U')) {
        split = words.splice(0,2);
        split = split.join('');
        words.push(split);
        joined = words.join('');
        words.push("ay");
        output = words.join('');
        return output;
      }
      else if(words[i] === vowel[index]) {
          split = words.splice(0,i);
          split = split.join('');
          words.push(split);
          joined = words.join('');
          words.push("ay");
          output = words.join('');
          return output;
      }
    }
  }
}
// var splitString = function(stringToSplit, separator) {
//   return letters = stringToSplit.split(separator);
// };
// var letterCheck = function(symbols) {
// for(i=0; i<symbols.length; i++) {
//   if(/[a-zA-z]/.test(symbols) === true) {
//   }
//   else {
//     return false;
//   };
//   }
// };
//   var vowelCheck = function(words, vowel) {
//   for(index=0; index<vowel.length; index++){
//     if(words[0] === vowel[index]) {
//       words.push("ay")
//       output = words.join("");
//       return output;
//     }
//     else{}
//   }
// };
// var consonantCheck = function(words, vowel) {
//   for(i=0; i<words.length; i++) {
//     for(index=0; index<vowel.length; index++) {
//       if(words[0]===('q'||'Q') && words[1] === ('u' || 'U')) {
//         split = words.splice(0,2);
//         split = split.join('');
//         words.push(split);
//         joined = words.join('');
//         words.push("ay");
//         output = words.join('');
//         return output;
//       }
//       else if(words[i] === vowel[index]) {
//           split = words.splice(0,i);
//           split = split.join('');
//           words.push(split);
//           joined = words.join('');
//           words.push("ay");
//           output = words.join('');
//           return output;
//       }
//     }
//   }
// }

//Front-End
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    original = $("#sentence").val();
    //letters = splitString(original, byLetter);
    // letterCheck(letters);
    // vowelCheck(letters, vowels);
    // consonantCheck(letters, vowels);
    toPigLatin(original, byWord, byLetter, letters, vowels);
  });

});
