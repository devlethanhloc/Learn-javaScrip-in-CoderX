// Count the occurrences of each element inside an array using reduce
function countOccurrences(arr) {
    return arr.reduce(function(all,one){
    var check = all[one] + 1;
    if(check)
      all[one]= check;
    else 
      all[one] = 1;
    return all;
  }, {});
}

countOccurrences(['a', 'b', 'c', 'b', 'a']);
// { 
//   a: 2, 
//   b: 2, 
//   c: 1 
// }
