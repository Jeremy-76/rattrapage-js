const url = "https://www.random.org/integers/?num=2&min=1&max=6&col=1&base=10&format=plain&rnd=new";

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let score = document.getElementById("score");
let play = document.getElementById("buttonPlay");

function rollDice() {
  var myRequest = new Request(url); // On prépre le "colis" avec l'adresse du recepteur.

  fetch(myRequest)
    .then(function(response) {
      return response.blob(); //On reçoit des morceaux de colis que l'on concataine.
    })
    .then(function(myBlob) {
      myBlob.text().then(function(text){ // text = "6↵5↵"
      const DATA = text.split(""); // ["6", "↵", "5", "↵"]
      let roll1 = DATA[0]; // "6"
      let roll2 = DATA[2]; // "5"

      img1.setAttribute("src","images/dice" + roll1 + ".png");
      img2.setAttribute("src","images/dice" + roll2 + ".png");

      if(roll1 > roll2){
        score.innerHTML = "Joueur 1 gagne";
      } else if(roll1 === roll2){ // === -> verification du type et de la valeur, == -> vérification de la valeur
        score.innerHTML = "Egalité";
      } else{
        score.innerHTML = "Joueur 2 gagne";
      }
    });
  });
}
