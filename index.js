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
class Game {
  constructor(word) {
    this.word = word;
    this.rights = 0;
    this.wrongs = 0;
  }
  start(boxWord) {
    const letters = this.word.split("");
    boxWord.innerHTML = "";
    for (let i = 0; i < letters.length; i++) {
      boxWord.innerHTML += `<div class="letterBox" id="letter-${i}"></div>`;
    }
    console.log(this.word);
  }
  check(letter, places) {
    let indexes = [];
    let notMatched = 0;
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] == letter) {
        indexes.push(i);
        this.rights += 1;
      } else {
        indexes.push(-1);
        notMatched += 1;
      }
    }
    if (this.word.length == notMatched) {
      this.wrongs += 1;
    }
    for (let i = 0; i < places.length; i++) {
      if (indexes[i] == i) {
        places[i].innerText = letter;
      }
    }
  }
  checkGameOver() {
    if (this.wrongs == 7) {
      alert("Game Over!");
    } else if (this.rights == this.word.length) {
      alert("You Won!!!");
    }
  }
}
document.getElementById("start").addEventListener("click", function () {
  let quantity = library.length - 1;
  let position = Math.round(Math.random() * quantity);
  let word = library[position];
  let game = new Game(word);
  let boxWord = document.getElementById("dvword");
  game.start(boxWord);
  console.log(boxWord);
  document.getElementById("guess").addEventListener("click", function () {
    let letter = document.getElementById("currentLetter").value;
    let places = boxWord.children;
    document.getElementById("typedletters").innerHTML +=
      letter.toUpperCase() + " ";
    game.check(letter, places);
    game.checkGameOver();
    document.getElementById("currentLetter").value = "";
  });
});

