//Implement the Chunky Monkey Algorithm

function chunkArrayInGroups(arr, num) {
    let chunk = [];
     for(let i = 0; i < arr.length; i += num){
        chunk.push(arr.slice(i, i + num));
     }
    return chunk;
}

const test = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
console.log(test);
