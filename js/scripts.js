function robo(numInput) {
  numInt = parseInt(numInput);
  numSplit = numInput.split("");
  numArray = [];

  while (numInput >= 0) {
    (numArray).push(numInput);
    numInput --;
  }
    
  if (isNaN(numInt) === true) {
    return "Please enter a number!";
  } else if (numSplit.indexOf("3") >= 0) {
    return "Won't you be my neighbor?"  
  } else if (numSplit.indexOf("2") >= 0) {
    return "Boop!"
  } else if (numSplit.indexOf("1") >= 0) {
    return "Beep!"
  } else {
      output = numArray.map(String);
      for(i = 0; i < output.length; i++)
        if ((output[i]).includes("3")) {
          output.splice([i], 1, "Won't you be my neighbor?");
        }
      for(i = 0; i < output.length; i++)
        if ((output[i]).includes("2")) {
          output.splice([i], 1, "Beep!");
        }
      for(i = 0; i < output.length; i++)
        if ((output[i]).includes("1")) {
          output.splice([i], 1, "Boop!");
        }
    return (output).reverse().join(", ");
  }
}

$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    const numInput = $("input#num-input").val();
    $("body").scrollTop(200);
    $("#hidden").fadeIn(500);
    $("#output").empty();
    $("#output").append(robo(numInput));
  });
  $("#reload").click(function() {
    location.reload(true);
  });
});