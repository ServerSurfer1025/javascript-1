let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}

for (let x = 1; x <= 100; x++) {
  console.log("for looop output:" + x);
}

for (let x = 2; x <= 100; x += 2) {
  console.log("even numbers: " + x);
}

let names = [
  "Olivia",
  "Liam",
  "Emma",
  "Amelia",
  "Ava",
  "Sophia",
  "Isabella",
  "LunaMia",
];
for (n in names) {
  console.log(names[n]);
}
