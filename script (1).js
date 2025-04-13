
function startPresale() {
  alert("You have joined the ZUZU presale!");
}

function countdown() {
  const countdownDate = new Date("April 30, 2025 00:00:00").getTime();

  const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) {
      clearInterval(interval);
      document.getElementById("timer").innerHTML = "Presale Ended";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("timer").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    }
  }, 1000);
}

countdown();
