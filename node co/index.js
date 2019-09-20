/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
  ];
  
  var co = require('co');
  var axios = require('axios');
  
  function onDone(data){
    console.log(data);
  }
  function onError(error){
    console.log(error);
  }
  
  var load = function(url){
    return axios.get(url)
           .then(function(response){
              console.log(response.data);
            })
            .catch(function(error){
              console.log(error);
            });
  }
  // Cách 1: Sử dụng vòng lặp for
  
  function loadUrls(urls){
    var arr = [];
    for (url of urls){
      arr.push(load(url));
    }
    return Promise.all(arr);
  }
  
  loadUrls(urls)
    .then(onDone)
  
  // Cách 2: Sử dụng array.map
  // Gợi ý: Có thể yield 1 array các Promise
  
  // cách 1 : 
  
  // cách 2 : 
  // var readData = co.wrap(function*(urls){
  //   var data = yield urls.map(function(url){
  //     return load(url);
  //   });
  //   return data;
  // });
  // readData(urls)
  //   .then(onDone)
  //   .catch(onError)