/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) { 
    var s = 1;
    for (var calculateMultiply of arr){
      s*= calculateMultiply;
    }
    return s;
  }
  
  console.log(multiply([2, 3, 4])); // expect: 24