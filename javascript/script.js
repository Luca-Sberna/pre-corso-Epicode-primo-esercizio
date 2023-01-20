const btnHb = document.getElementById('hb')
const btnInt = document.getElementById('interessi')
const btnExp = document.getElementById('esperienze')

var hb1 = document.getElementById('hb1');
var int1 = document.getElementById('int1');
var exp1 = document.getElementById('exp1');
var close ='Clicca per Maggiori info' 
var isOpen = false;

let hobby = 'I miei hobby sono giocare a calcio cucinare e LEAGUE of LEGEND'
let interessi = ' I miei interessi sono scopare ,mangiare ,divertirmi'
let esperienze = ` <ul>
<li>Lorem ipsum dolor sit.</li>
<li>Lorem ipsum dolor sit.</li>
<li>Lorem ipsum dolor sit.</li>
<li>Lorem ipsum dolor sit.</li>
<li>Lorem ipsum dolor sit.</li>
</ul> `



//HOBBY
btnHb.addEventListener("click", function(){
   if (!isOpen) {
    hb1.innerHTML = hobby;
    hb1.classList.add("open");
    isOpen = true;
   }else{
    hb1.classList.remove("open");
    hb1.innerHTML = close;
    isOpen = false;
   }   
})

//INTERESSI
btnInt.addEventListener("click", function(){
    if (!isOpen) {


    int1.innerHTML = interessi;
     
     int1.classList.add("open");
     
     isOpen = true;
    
    }else{
        int1.classList.remove("open");
        int1.innerHTML = close;
        isOpen = false;
    }   
 })

 //ESPERIENZE
 btnExp.addEventListener("click", function(){
    if (!isOpen) {
        exp1.innerHTML = esperienze;
        exp1.classList.add("open");
     isOpen = true;
     
    
    }else{
        exp1.classList.remove("open");
        exp1.innerHTML =close;
        isOpen = false;
    }   
 })