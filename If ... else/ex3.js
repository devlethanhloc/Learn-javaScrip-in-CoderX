// /**
//  * Viết hàm xếp hạng theo điểm số theo công thức sau:
//  * [0-5): C
//  * [5-7): B
//  * [7-10]: A
//  */
function grade(score) {
    if(score>=0 && score <5) return 'C';
    else if(score >=7 && score <=10) return 'A';
    else return 'B';
  }
  
  console.log(grade(4)); // C
  console.log(grade(5)); // B
  console.log(grade(10));
  console.log(grade(9));