function getIt() {
  $('p').on('click', function(){
  alert("hey!")
 });
}

function frameIt() {
  $('img').on('load', function(){
   $('img').addClass('tasty');
});
}

function submitIt() {
  
}

$(document).ready(function(){
  getIt()
  frameIT()
});
