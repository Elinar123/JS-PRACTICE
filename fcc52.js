//IMPLEMENT A VALUE REMOVER FUNCTION
function destroyer(arr,...num) {
    const filteredArr = arr.filter(item => !num.includes(item));
    return filteredArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));