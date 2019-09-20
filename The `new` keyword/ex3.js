/* 
  Viết hàm lengthObj để in ra độ dài của một đối tượng
*/

function lengthObj(obj) {
    return (Object.keys(obj)).length;
  }
  
  var student = {
    name: "Jerry", 
    age: 14,
    role: "student"
  }
  
  lengthObj(student); // length: 3