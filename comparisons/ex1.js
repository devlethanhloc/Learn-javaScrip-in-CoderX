var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.


/*Đối với 2 object, việc so sánh === cho kết quả true nếu 2 object đó là 1. Mảng là object.
Khi bạn gán a = [1, 2]; b = [1, 2]; là bạn đang gán a và b đến 2 đối tượng khác nhau (được đặt ở các vùng nhớ khác nhau trong bộ nhớ, mặc dù hai đối tượng này có cùng giá trị).*/

    