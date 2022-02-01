var eventTime = null
// Uncomment the following line and specify your even time in GMT format similar to the example
eventTime = new Date("02 February 2022 10:00:00 UTC-05:00");

$( document ).ready(function() {
    setInterval(function() { countdown(); }, 1000);
});

function countdown() {	
    if(!eventTime) {
      eventTime = new Date()
      eventTime.setHours(eventTime.getHours() + 60);
    }
    endTime = (Date.parse(eventTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (days < "10") { days = "0" + days; }
    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    if (days == 1) {
      $("#days").html(days + "<span>Day</span>");
    }
    else if (days > 0) {
      $("#days").html(days + "<span>Days</span>");
    } else {
      $('#days').hide()
    }
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");		
  }
