//CREATED A DEEP FLATTENING TOOL
function steamrollArray(nestedArr) {
      const flattenedArr = nestedArr.reduce((acc, curr) => { 
        return !Array.isArray(curr) ? [...acc, curr] : [...acc, ...steamrollArray(curr)];
        }, []
      );
      return flattenedArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

// Flattens a deeply nested array into a single-level array.