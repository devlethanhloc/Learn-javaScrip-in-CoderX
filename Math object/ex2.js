/* 
  Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
  Làm tròn điểm trung bình
*/

function average(arr) {
    var s = 0;
    for ( var i = 0; i < arr.length ; i++){
      s += arr[i];
    }
    return Math.ceil(s/arr.length);
  }
  
  average([8, 8 , 6.75]) // 8