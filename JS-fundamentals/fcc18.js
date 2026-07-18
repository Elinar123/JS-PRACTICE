//Find the longest word

function findLongestWord(LongestWord) {
    let splitit = LongestWord.split(" ").filter(filtered => filtered !== "");
    let longest = 0; 

    for (let i = 0; i < splitit.length; i++) {
        if (splitit[i].length > longest) {
            longest = splitit[i].length;
        }
    }

    return longest;
}

const test = findLongestWord("Supercalifragilisticexpialidocious is a incredibly long word");
console.log(test);