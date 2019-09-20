/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */

// for...of lấy tất cả các giá trị phần tử có trong thằng cha cho thằng con
// for...in chỉ lấy object (tức là key ex: name, age,..)
var people = [
    { name: 'Lili', age: 11, weight: 30},
    { name: 'Lala', age: 13, weight: 39},
    { name: 'Lele', age: 10, weight: 28}
  ]
  
  for (var person of people ){
    console.log(person);
  }
  console.log('======');
  var myDog = {
    name: 'Heo',
    age: 1,
    weight: 3.2
  }
  for (var key in myDog){
    console.log(key, myDog[key]);
  }