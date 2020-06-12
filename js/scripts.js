function robo(numInput) {
  if (isNaN(numInput) === true) {
    return alert("Please enter a number!");
  } else {
    numArray = [];
    while (numInput >= 0) {
      (numArray).push(numInput);
      numInput --;
    }
    return alert((numArray).reverse());
  }
}

$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault;
    let numInput = parseInt($("input#num-input").val());
    robo(numInput);
  });
});