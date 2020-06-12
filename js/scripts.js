$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault;
    let numInput = parseInt($("input#num-input").val());
    alert(numInput);
  });
});