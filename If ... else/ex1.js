/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
    var max = 0 ;
    for (var numbers of arr){
      if ( numbers > max )
        max = numbers ;
    }
    return max;
  }
  
  max([5, 6, 9, 1, 10, 23, 123,111]); // 123