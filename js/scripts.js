function robo(numInput) {
  numInt = parseInt(numInput);
  numSplit = numInput.split("");
  numArray = [];
    
  if (isNaN(numInt) === true) {
    return alert("Please enter a number!");
  } else if ((numSplit.indexOf("1") >= 0)) {
    return alert("Beep!")  
  } else {
    while (numInt >= 0) {
      (numArray).push(numInt);
      numInt --;
    }
    return alert((numArray).reverse());
  }
}

$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault;
    let numInput = $("input#num-input").val();
    robo(numInput);
  });
});