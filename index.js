const library = ["cachorro", "gato", "porco", "elefante", "girafa", "leão", "tigre", "urso", "papagaio", "pavão", "avestruz", "tartaruga", "jacaré", "hipopótamo", "rinoceronte", "pinguim", "lagarto", "cobra", "peixe", "pássaro", "coelho", "pato", "macaco", "coruja", "morcego", "raposa"];
let quantity = library.length - 1;
let position = Math.round(Math.random()*quantity);
let word = library[position];
let sizeWord = word.length;
let boxLetters = [];
let rights;
let wrongsMax = 7;
//confirmar esses nomes referentes a erros e acertos
let wrongs = 0;
let drawings = [];
let right = false;
let playing = false;

function defineLetters(l) {
    let object;
    for (let i = 0; i < 20; i++) {
      object = document.getElementById("letter" + i).value = "";
      object = document.getElementById("letter" + i).style.display = "none";
    }
    for (let i = 0; i < l; i++) {
        object = document.getElementById("letter" + i).style.display = "inline-block";
    }
}

    function playing() {
        player = document.getElementById("letterP");
        player.focus();
        if(player.value == "") {
            alert("Type a letter");
        } else {
            if(playing) {
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
                while(quest!=null) {
                    letterTmp = word.search(letter);
                    object = document.getElementById("letter" + letterTmp).value = letter;
                    word = word.replace(letter,'0');
                    rights++;
                    quest = word.match(letter);
                    right = true;
                }
                if(!right){
                    document.getElementById("dvtypedletters").innerHTML+=letter.toUpperCase() + " ";
                    wrongs++;
                    if(wrongs<7){
                        drawings[wrongs].style.display="block";
                    } else {
                        //document.getElementById("cabeca").src = "cabeca2.png";
                        document.getElementById("dvmsg").innerHTML="YOU LOST!";
                        playing=false;
                    }
                }
                if(rights==sizeWord) {
                    document.getElementById("dvmsg").innerHTML="YOU WINED!";
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
        position = Math.round(Math.random()*quantity);
        word = library[position];
        sizeWord = word.length;
        defineLetters(sizeWord);
        document.getElementById("dvmsg").innerHTML = "";
        //Ainda não encontrei as imagens para fazer o bonequinho;
        //Tenho que encontrá-las, definir os nomes e acertar no HTML;
        drawings[1] = document.getElementById("cabeca");
        drawings[2] = document.getElementById("corpo");
        drawings[3] = document.getElementById("bracoE");
        drawings[4] = document.getElementById("bracoD");
        drawings[5] = document.getElementById("pernaE");
        drawings[6] = document.getElementById("pernaD");
        //document.getElementById("cabeca").src="cabeca1.png";
        for(let i = 1; i < 7; i++) {
            drawings[i].style.display = "none";
        }
    }

    function tip() {
        alert(word);
        player.focus();
    }
    window.addEventListener("load",start);

