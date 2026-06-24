//BUILD A PROOFREADING TOOL
function isPalindrome(word){
     const wordie = word.toLowerCase();
     const palindrome = wordie.split('').reverse().join('');
     const check = palindrome === wordie ? true : false;
     return check;
}

//const test = isPalindrome("RACECAR");
//console.log(test);

function findPalindromeBreaks(words){
      const notPalindrome = [];
      for(let i = 0; i < words.length; i++){
         if(!isPalindrome(words[i].toLowerCase())){
             notPalindrome.push(i)
         }
  
      }
      return notPalindrome;
 }

//const test2 =  findPalindromeBreaks(["Radar", "Civic", "Apple", "1221", "Google", "Refer", "Banana", "2026"]);
//console.log(test2);


function findRepeatedPhrases(words, phraseLength ){
    const repWord = [];
    if(phraseLength >= words.length){
        return [];
      }
      for(let i = 0; i < words.length - phraseLength + 1; i++){
         const firstOccur = words.slice(i, i + phraseLength).join(' ');
         for(let j = i + 1; j < words.length - phraseLength + 1; j++){
              const occurrence = words.slice(j, j + phraseLength).join(' ');
              if(firstOccur === occurrence){
                 repWord.push(i);
                 repWord.push(j);
              }
         }
      }
      return repWord;
}

//const test3 = findRepeatedPhrases(["apple", "banana", "cherry", "apple", "banana", "date", "apple", "banana", "cherry"], 2);
//console.log(test3);

function analyzeTexts(texts, phraseLength) {
     const final = [];
   if(texts.length === 0){
      return [];
   }
    for(let i = 0; i < texts.length; i++){
     const repeated = findRepeatedPhrases(texts[i], phraseLength);
     const nonPalindrome = findPalindromeBreaks(texts[i]);
     const tempOb = {
       repeatedPhrases: repeated,
       palindromeBreaks: nonPalindrome
     };
    
     final.push(tempOb);
    
    }
     return final;
}
   
