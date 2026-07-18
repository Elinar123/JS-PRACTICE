function bubbleSort(sort) {
    for(let i = 0; i < sort.length - 1; i++ ) {
        let swapped = false;
        for(let j = 0; j < sort.length - 1 - i; j++){
           if(sort[j] > sort[j+1]){
              swapped = true;
              let temp = sort[j];
              sort[j] = sort[j+1];
              sort[j+1] = temp;
           }
        }
        if(swapped === false){
            break;
        }
    }

    return sort;
  
}

const sortNum = bubbleSort([3, 5, 2, 7, 8, 9, 4]);

console.log(sortNum);