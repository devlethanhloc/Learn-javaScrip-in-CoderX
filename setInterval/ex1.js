/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
function countDown(x) {
    var intervalId = setInterval(function(){
      --x;
      console.log('Happay new year');
      if ( x == 0 )
        clearInterval(intervalId);
    }, x)
  }
  
  countDown(5);