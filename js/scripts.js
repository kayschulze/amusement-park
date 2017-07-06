$(function() {
  var height = parseFloat(prompt("Please enter your height below. Rides that become highlighted are rides that you can ride."));

  if (height > 5 && height < 6) {
    $(".over5").css("background-color", "lightgreen");
  } else if (height < 5){
    $(".under5").css("background-color", "lightblue");
  } else if (height > 6){
    $(".over6").css("background-color", "lightyellow");
  } else {
    $(".error").show();
  }
});
