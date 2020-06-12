function robo(numInput) {
  numInt = parseInt(numInput);
  numSplit = numInput.split("");
  numArray = [];
    
  if (isNaN(numInt) === true) {
    return alert("Please enter a number!");
  } else if (numSplit.indexOf("3") >= 0) {
    return alert("Won't you be my neighbor?")  
  } else if (numSplit.indexOf("2") >= 0) {
    return alert("Boop!")
  } else if (numSplit.indexOf("1") >= 0) {
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