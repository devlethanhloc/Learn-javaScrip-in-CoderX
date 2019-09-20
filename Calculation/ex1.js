var a = 10;

var x = --a + a++;
console.log(x);

// Nhấn Run để chạy code.
// Giải thích vì sao kết quả là 18.

// Giải thích:
// x = --a + a++; a = 10
// x = 9   + a++; a = 9
// x = 9   + 9 ; a = 10
console.log(a);
