
if (typeof(Storage) !== "undefined") {

    var lastVisit = localStorage.getItem("lastVisit");

    var currentDate = new Date().getTime();

    if (!lastVisit) {
      document.getElementById("message").textContent = "Welcome to the world of OneWheel! Here you can find useful information about our products and community.";
    } else {
      var timeDiff = currentDate - parseInt(lastVisit);
      var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      if (daysDiff < 1) {
        document.getElementById("message").textContent = "Back so soon! Awesome!";
      } else {
        var message = "You last visited " + daysDiff + " ";
        message += (daysDiff === 1) ? "day" : "days";
        message += " ago.";
        document.getElementById("message").textContent = message;
      }
    }

    localStorage.setItem("lastVisit", currentDate);
  } else {
    document.getElementById("message").textContent = "LocalStorage is not supported in your browser.";
  }
  