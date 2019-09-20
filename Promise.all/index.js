/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */

var axios = require('axios');

link1 ='https://jsonplaceholder.typicode.com/todos/1'
link2 ='https://jsonplaceholder.typicode.com/todos/2'
link3 ='https://jsonplaceholder.typicode.com/todos/3'

function onDone(value){
  console.log(value);
}

function onError(err){
  console.log(err);
}


Promise.all([
  axios.get(link1)
  .then(function (response) {
  console.log(response.data);
  }),
  axios.get(link2)
  .then(function (response) {
  console.log(response.data);
  }),
  axios.get(link3)
  .then(function (response) {
  console.log(response.data);
  })
]).then(onDone)
  .catch(onError);
