function changeColor() {
  let colors = ["silver", "orange", "pink", "green", "purple"];
  let random = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[random];
}

document.getElementById("myTime").addEventListener("click", displayTime);

function displayTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let am = true;

  if (hours > 12) {
    am = false;
    hours -= 12;
  }

  let currentTime = hours + ":" + currentDate.getMinutes();
  if (am) {
    currentTime += " AM";
  } else {
    currentTime += " PM";
  }

  document.getElementById("time").innerHTML = currentTime;
}
