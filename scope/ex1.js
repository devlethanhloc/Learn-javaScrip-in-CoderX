var a = 1;

function foo() {
  var a = 2;
  return a;
}

function bar() {
  a = 2;
  return a;
}

foo();
console.log(a); // Kết quả? a = 1
bar();
console.log(a); // Kết quả? a = 2
// Giải thích vì sao kết quả dòng 14 lại khác 16 bằng tiếng Việt hoặc tiếng Anh

// Vì dòng 14 trong function khởi tạo biến mới tên là a(Local scope) không ảnh hướng đến biến a (Global scope)
//Dòng 16 trong function thay đổi biến a (Global scope) = 2