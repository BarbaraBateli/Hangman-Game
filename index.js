const library = [
  "cachorro",
  "gato",
  "porco",
  "elefante",
  "girafa",
  "leão",
  "tigre",
  "urso",
  "papagaio",
  "pavão",
  "avestruz",
  "tartaruga",
  "jacaré",
  "hipopótamo",
  "rinoceronte",
  "pinguim",
  "lagarto",
  "cobra",
  "peixe",
  "pássaro",
  "coelho",
  "pato",
  "macaco",
  "coruja",
  "morcego",
  "raposa",
];
let quantity = library.length - 1;
/*let position = Math.round(Math.random() * quantity);
let word = library[position];
let sizeWord = word.length;*/
let boxLetters = [];
let rights;
let wrongsMax = 7;
let wrongs = 0;
let drawings = [];
let right = false;
let playing = false;

function defineLetters(word) {
  const letters = word.split("");
  const boxWord = document.getElementById("dvmenu");
  for (let i = 0; i < letters.length; i++) {
    boxWord.innerHTML += `<span class="letter" id="letter-${i}"></span>`;
  }
  console.log(word);
}

function playing() {
  player = document.getElementById("letterP");
  player.focus();
  if (player.value == "") {
    alert("Type a letter");
  } else {
    if (playing) {
      let player;
      let object;
      let letterTmp;
      //ver tradução em inglês
      let letter;
      let quest;
      letter = player.value;
      player.value = "";
      right = false;
      quest = word.match(letter);
      while (quest != null) {
        letterTmp = word.search(letter);
        object = document.getElementById("letter" + letterTmp).value = letter;
        word = word.replace(letter, "0");
        rights++;
        quest = word.match(letter);
        right = true;
      }
      if (!right) {
        document.getElementById("dvtypedletters").innerHTML +=
          letter.toUpperCase() + " ";
        wrongs++;
        if (wrongs < 7) {
          drawings[wrongs].style.display = "block";
        } else {
          alert("YOU LOST!");
          playing = false;
        }
      }
      if (rights == sizeWord) {
        alert("YOU WINED!");
        playing = false;
      }
    }
  }
}

function start() {
  playing = true;
  player = document.getElementById("letterP");
  player.value = "";
  player.focus();
  rights = 0;
  wrongs = 0;
  right = false;
  document.getElementById("dvtypedletters").innerHTML = "Typed Letters:";
  position = Math.round(Math.random() * quantity);
  word = library[position];
  sizeWord = word.length;
  defineLetters(word);
  console.log(word);
}

document.getElementById("start").addEventListener("click", start);
