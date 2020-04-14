/** Add any JavaScript you need to this file. */
var scale = 'scale(1)';
document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
 document.body.style.msTransform =   scale;       // IE 9
 document.body.style.transform = scale; 
window.onload = function showall() {
  document.querySelectorAll('.products').forEach(function(el) {
    el.style.display = 'block';
  });
};

function showall() {
  document.querySelectorAll('.products').forEach(function(el) {
    return (el.style.display = 'block');
  });
}
showall();
function product(x) {
  document.querySelectorAll('.products').forEach(function(el) {
    return (el.style.display = 'none');
  });

  x.style.display = 'block';
}
product;
Hide();
function Hide() {
  var Problem = document.getElementById('Problem');
  var txt = document.getElementById('Text');
  txt.style.display = Problem.checked ? 'block' : 'none';
}
