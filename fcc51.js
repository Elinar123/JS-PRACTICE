//BUILT A SYMMETRIC DIFFERENCE FUNCTION
function diffArray(arr1, arr2) {
    let firstArr = arr1.filter(ar => !arr2.includes(ar));
    let secArr = arr2.filter(ar => !arr1.includes(ar));
    return [...firstArr,...secArr];
}

console.log(diffArray([], []));