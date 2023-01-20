const btnHb = document.getElementById("hb");
const btnInt = document.getElementById("interessi");
const btnExp = document.getElementById("esperienze");

var hb1 = document.getElementById("hb1");
var int1 = document.getElementById("int1");
var exp1 = document.getElementById("exp1");
var close = "Clicca per Maggiori info";
var isOpen = false;

let hobby =
  "Oltre allo sport, cucinare è uno dei miei hobby preferiti insieme al Gaming . ";
let interessi =
  "Ho sempre avuto una forte passione per i videogiochi ed il campo informatico sin da bambino, curioso di sapere cosa si cela dietro gli ormai comunissimi schermi luminosi che ci fanno compagnia nelle nostre giornate. ";
let esperienze = ` <ul>
<li>Ho vissuto 2 anni ad Ibiza(Spagna) dove iniziai a lavorare in cucina e incominciai ad apprendere lo spagnolo. </li>
<li>Tornato in italia , trovai come cuoco , per poi dopo due anni diventare capo cuoco del locale  </li>
<li>Insoddisfatto del tenore di vita , incominciai a guardarmi intorno e a seguire varie lezioni gratuite , ed eccomi qua.</li>
</ul> `;

//HOBBY
btnHb.addEventListener("click", function () {
  if (!isOpen) {
    hb1.innerHTML = hobby;
    hb1.classList.add("open");
    isOpen = true;
  } else {
    hb1.classList.remove("open");
    hb1.innerHTML = close;
    isOpen = false;
  }
});

//INTERESSI
btnInt.addEventListener("click", function () {
  if (!isOpen) {
    int1.innerHTML = interessi;

    int1.classList.add("open");

    isOpen = true;
  } else {
    int1.classList.remove("open");
    int1.innerHTML = close;
    isOpen = false;
  }
});

//ESPERIENZE
btnExp.addEventListener("click", function () {
  if (!isOpen) {
    exp1.innerHTML = esperienze;
    exp1.classList.add("open");
    isOpen = true;
  } else {
    exp1.classList.remove("open");
    exp1.innerHTML = close;
    isOpen = false;
  }
});
