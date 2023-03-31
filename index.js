const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const button = document.getElementById("generate");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const myRange = document.getElementById("myRange");
const value = document.getElementById("value");

button.addEventListener("click", () => {
  password1.textContent = generator(myRange.value);
  password2.textContent = generator(myRange.value);
});

myRange.addEventListener("input", () => {
  value.textContent = myRange.value;
});

function generator(number) {
  let ramdonPass = [];
  for (let i = 0; i < number; i++) {
    let ramdonPick = Math.floor(Math.random() * characters.length);
    ramdonPass.push(characters[ramdonPick]);
  }
  return ramdonPass.join("");
}
