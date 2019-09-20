/* 
  Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
*/

function powerup(arr) {
    return arr.map(function(item){
      if (item % 2 ===0) return item * item;
      else return item;
    });
  }
  
  powerup([0, 3, 6, 7, 4]); // [0, 3, 36, 7, 16] 