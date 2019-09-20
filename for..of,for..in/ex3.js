/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
  function result(arr){
    for(var index in arr){
      console.log(index);
    }
    if(index != null){
      result(arr[index]);
    }
  }
  
  result(apartment);
  
  /*for (var thingsInApartment in apartment ){
    console.log(thingsInApartment);
  }
  for (var thingsInBedroom in apartment.bedroom ){
    console.log(thingsInBedroom);
  }
  for (var thingsInBed in apartment.bedroom.bed ){
    console.log(thingsInBed);
  }*/
  
  /**
   * Kết quả mong muốn:
   * bedroom
   * area
   * bed
   * type
   * price
   * Chú ý: không cần hiển thị ra đúng thứ tự như trên
   */
  