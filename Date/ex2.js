/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ cách ngày được truyền vào n ngày
 */
function subtractDays(date, n) {
    var date = new Date(date);
    var day =  date.getDate();
    date.setDate(day-n);
    console.log(date);
  }
  
  subtractDays(new Date(), 5);