/**
 * Tính số ms chênh lệch giữa 2 date object bất kì
 */
function diffMs(a, b) {
    var date1 = new Date(a);
    var date2 = new Date(b);
    var msDate1 = date1.getMilliseconds();
    var msDate2 = date2.getMilliseconds();
    console.log('Date 1:',date1,'Date 2:', date2,'ms Date 1:', msDate1,'ms Date 2:', msDate2);
    console.log(Math.abs(msDate1 - msDate2));
  }
  // viết ví dụ để kiểm tra
  
  diffMs('2019/9/17',new Date());