var math = {
    // add: function(a, b) {
    //   return a + b;
    // }
    sum: function(array) {
          var sum = 0;
          for(var value of array)
          {
            sum = sum + value;
          }
          return sum;
      }
  };
  
  module.exports = math;