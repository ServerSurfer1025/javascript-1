function submitData() {
  const form = document.forms["guessForm"];
  const min = parseInt(form.elements["min"].value);
  const max = parseInt(form.elements["max"].value);

  if (isNaN(min) || isNaN(max) || min < 1 || max > 100 || min >= max) {
    updateDOM(
      "Invalid input. Please enter valid numbers with min < max.",
      "red"
    );
    return;
  }

  console.log(`Min number: ${min}`);
  console.log(`Max number: ${max}`);

  numberGuessGame(min, max);
}

function updateDOM(value, color) {
  const displayFinal = document.getElementById("displayFinal");

  if (color === "red") {
    displayFinal.textContent = value;
    displayFinal.style.color = "red";
  } else if (color === "green") {
    displayFinal.textContent = value;
    displayFinal.style.color = "green";
  }
}

function numberGuessGame(min, max) {
  const actualNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  let message = `I'm thinking of a number between ${min} and ${max}. Guess what it is!`;
  let guess;

  console.log(`Actual number: ${actualNumber}`);

  do {
    guess = parseInt(prompt(message));
    if (guess < actualNumber) {
      message = `${guess} is too low! Try again!`;
    } else if (guess > actualNumber) {
      message = `${guess} is too high! Try again!`;
    }
  } while (guess !== actualNumber);

  console.log(`Guessed number: ${guess}`);

  message = `CONGRATULATIONS!!! ${guess} is correct!`;
  updateDOM(message, "green");
}
