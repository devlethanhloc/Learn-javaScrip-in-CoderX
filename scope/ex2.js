var a = 1;

var b = {
  a: 2,
  foo: function() {
    console.log(this.a);
  }
};

b.foo(); // 2

var fooCopy = b.foo;
fooCopy(); //1
console.log(fooCopy());
// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13
// từ khóa this trong foo() của object b truy xuất đến property a nằm trong object b
//Còn fooCopy thì chỉ copy method foo() của b, this.a lúc này sẽ truy xuất đến a ở line 1