function myButton() {
  let person = prompt("Please enter your name", "Lebron James");
  if (person != null) {
    document.getElementById("demo").innerHTML =
      "Hello, " + person + "! You are a shining star";
  }
}
