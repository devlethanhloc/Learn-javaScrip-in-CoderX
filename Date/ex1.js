/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
function diff(fromDate, toDate) {
    var fromDate = new Date(fromDate);
    var toDate = new Date(toDate);
    var fromDay = fromDate.getDate();
    var toDay = toDate.getDate();
    console.log('fromDate: ',fromDate,'toDate: ',toDate,'fromDay: ',fromDay,'toDay: ',toDay);
    console.log('Số ngày chênh lệch giữa 2 ngày: ');
    return Math.abs(fromDay-toDay);
  }
  
  var start = new Date('2018/05/13');
  var end = new Date();
  
  console.log(diff(start, end));
  
  