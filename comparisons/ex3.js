var a = '1000';
var b = '200';

console.log(a > b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù 1000 trông có vẻ lớn hơn 200. Viết câu trả lời ở dưới đây.

/*vì bạn so sánh chuỗi “1000” và “200”, nên kết quả sẽ là “1000” < “200”, chứ không phải so sánh 2 số. Nếu bạn muốn so sánh 2 số phải convert các chuỗi trên thành số: console.log(parseInt(a) > parseInt(b));*/