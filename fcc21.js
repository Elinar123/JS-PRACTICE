function mutation(word) {
    const first = word[0].toLowerCase();
    const  second = word[1].toLowerCase().split('');
    for(let i = 0; i < second.length; i++){
         if(!first.includes(second[i])){
           return false;
         }
         

    }
    return true;
         
}

const test = mutation(["hello", "hey"]); 
console.log(test);