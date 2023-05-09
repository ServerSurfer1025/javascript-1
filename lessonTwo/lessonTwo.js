function getMotto() {
  return prompt("what is your favorite Motto?");
}
function getCount() {
  return parseFloat(prompt("How many times would you like to see this?"));
}

let motto = getMotto();
let count = getCount();

console.log(motto, count);
