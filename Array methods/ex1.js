/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */

//Array methods: slice, splice.
//slice: lấy các giá trị trong mảng từ vị trí từ start đến vị trí end (không lấy giá trị ở vị trí end)
// nếu chỉ có vị trí start thì lấy giá trị từ start cho đến hết Array
//không thay đổi mảng ban đầu
var numbers = [1 , 3, 4, 8, 9];
console.log(numbers.slice(2));
console.log('=====');
console.log(numbers);
console.log('=====');
//splice: chọn vị trí trong mảng, 0 để chèn vào mảng ở vị trị được chọn ( 1 để thay thế phần tử trong mảng bằng phần tử mới được thêm vào), phần tử mới được chèn or phần tử mới thay thế phần tử cũ ở vị trí được chọn trong mảng.
var months = [ 'Jan', 'March', 'April', 'June'];
console.log(months.splice(1,0, 'Feb'));
console.log('=====');
console.log(months);
console.log('=====');
console.log(months.splice(4,1, 'Oct'));
console.log('=====');
console.log(months);
console.log('=====');