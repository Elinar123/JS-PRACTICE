
function confirmEnding(str, value) {
    const lastWord = str.slice(str.length - value.length);
     return lastWord === value ? "True" : "False";
}

console.log(confirmEnding("Attention", "tion"));