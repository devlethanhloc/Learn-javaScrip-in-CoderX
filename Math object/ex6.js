/* 
  Viết hàm circleMachine() tính chu vi và diện tích hình tròn khi biết bán kính
*/

function circleMachine(r) {
    var perimeter = 2 * Math.PI * r;
    var s = Math.PI * r * r;
    console.log('Chu vi: ', perimeter);
    console.log('Diện tích: ', s);
  }
  
  circleMachine(3);
  // Chu vi: 18.85
  // Diện tích: 28.27