// Sort an array alphabetically
function alphabetical(arr) {
    var sort = arr.sort(function(a, b){
      return a.localeCompare(b);
    });
    console.log(sort);
  }
  
  alphabetical(["dog", "wolf", "by", "family", "eaten"]) 
  // ["by", "dog", "eaten", "family", "wolf"] 