/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var fs = require('fs');
var readLineSync = require('readline-sync');

var allContact = [];

function loadData(){
  allContact = JSON.parse(fs.readFileSync('contact.json', {ecoding: 'uft8'}));
  // var data = fs.readFileSync('contact.json', {ecoding: 'uft8'});
  // allContact = JSON.parse(data);
}


function showMenu() {
  console.log('1. Nhập dữ liệu');
  console.log('2. Sửa dữ liệu contact');
  console.log('3. Xóa contact');
  console.log('4. Tìm kiếm contact');
  console.log('5. Xem tất cả contact')
  console.log('6. Save & Exit');
  var selectionNumber = readLineSync.question('>');
  switch (selectionNumber) {
    case '1': addContact();
      showMenu();
      break;
    case '2': repairContact();
      showMenu();
      break;
    case '3': deleteContact(allContact); 
      showMenu();
      break;
  //   case '4': findContact();
  //     showMenu();
  //     break;
    case '5': showContact(allContact);
      showMenu();
      break;
    case '6': saveAndExit();
      break;
    default:
      showMenu();
      break;
  }
}

function addContact(array){
  var name = readLineSync.question('Your name: ');
  var phoneNumber = readLineSync.question('Your phone number: ');
  var newContact = {
    name: name,
    phone: phoneNumber
  }
  allContact.push(newContact);
}

function repairContact(){
  var nameNeedToRepair = readLineSync.question('Name need to repair: ');
  for (var contact of allContact){
      if ( contact.name === nameNeedToRepair){
        var nameEdit = readLineSync.question('Name replace: ');
        var phoneEdit = readLineSync.question('Your new phone number: ');
        contact.name = nameEdit;
        contact.phone = phoneEdit;
      }
      // nếu nhập sai tên thì bắt người dùng nhập lại
      else{
        console.log('There is no name in the all contact');
        console.log('Please enter the name to correct again');
        console.log('Name in all contact: ');
        showContact(allContact);
        repairContact();
      };
  };
}

function deleteContact(array){
  console.log('All Contact: ');
  showContact(array);
  var nameNeedToDelete = readLineSync.question('Name need to delete: ');
  var newContact = array.filter(function(item){
    return  item.name !== nameNeedToDelete;
  });
  allContact = newContact;
}

// function findContact(){

// }

function showContact(array){
  for ( var contact of array ){
    console.log(contact.name, contact.phone);
  }
}

function saveAndExit(){
  fs.writeFileSync('./contact.json',JSON.stringify(allContact),{ecoding: 'uft8'});
  //  var writeData = JSON.stringify(contacts);
  //fs.writeFileSync("./contact.json", writeData);
}

function main(){
  loadData();
  showMenu();
}

main();