function robo(numInput) {
  if (isNaN(numInput) === true) {
    return alert("Please enter a number!");
  } else {
    return alert(numInput);
  }
}

$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault;
    let numInput = parseInt($("input#num-input").val());
    robo(numInput);
  });
});