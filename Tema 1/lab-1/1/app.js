console.log('Welcome to data transmission ');

document.getElementById('message').innerHTML = 'Message from JavaScript';
var user={
    "id":1,
    "nume":"Ionut Grigoras",
    "adress":"sat Comlausa str Josani nr 183"

};
console.log(user.id, user.nume, user.adress);
function test(){
    console.log(user.id===1?user.nume:user.adress)
}
test();
$(document).ready(function(){
    $("#p1").mousedown(function(){
      alert("Mouse down over p1!");
    });
  });