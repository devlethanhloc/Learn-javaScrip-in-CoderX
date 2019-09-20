// Given an array of arrays, flatten them into a single array
function flatten(arr) {
    return arr.reduce(function(acc, array){
      return acc.concat(array);
    }, []) 
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

//console.log(arrays.join());

flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];