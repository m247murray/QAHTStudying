document.addEventListener("DOMContentLoaded", function() {

    var minutes = 5;
    var seconds = 0;
    var timer;
  
    function startTimer() {
      seconds--;
  
      if (seconds <= 0) {
        minutes--;
        seconds = 59;
      }
  
      if (minutes < 0  ) {
        clearInterval(timer);
        minutes = parseInt(document.getElementById("time").value);
        
        console.log(typeof minutes);
        seconds = 0;
        document.getElementById("minutes").innerText = (minutes < 10 ? "0" + minutes : minutes);
        document.getElementById("seconds").innerText = "00";
        
      }
  
      document.getElementById("minutes").innerText = (minutes < 10 ? "0" + minutes : minutes);
      document.getElementById("seconds").innerText = (seconds < 10 ? "0" + seconds : seconds);

    }
  
    document.getElementById("start").addEventListener("click", function() {
      timer = setInterval(startTimer, 1000);
    });
  
    document.getElementById("pause").addEventListener("click", function() {
      clearInterval(timer);
    });
  
    document.getElementById("reset").addEventListener("click", function() {
      clearInterval(timer);
      hours = 0;
      minutes = parseInt(document.getElementById("time").value);
      console.log(typeof minutes);
      seconds = 0;
      document.getElementById("minutes").innerText = (minutes < 10 ? "0" + minutes : minutes);
      document.getElementById("seconds").innerText = "00";
    });
  
  });
  