/*
                                         
                           93+         93+ 
                           +93   /     +93 
___  __    __  ____    ___ ___  /M     ___ 
`AT 6ATb  6ATb `AT(    )M' `93 /ATTUR  `KE 
 +381 `DATE `M0 `Nt    h'   93  AT      XE 
 63'   05'   07  1993YEA    93  AT      @G 
 11    07    07   AT  M     93  AT      MA 
 68    19    19   `Zyx'     93  AT      IL 
 07    93    93    SRB      93  AT.  ,  .C 
_6_   _6_   _6_     V       93   MVJT1 _OM_
                            93             
                        (1) 93             
                         JUL5              

 Version: 0.0.1
  Author: Aleksandar Turovic
 Website: *//*
    Docs: *//*
    Repo: *//*
  Issues: *//*
    c@Not Published

 */

// input mesecnih rezija
function soloScript(){

    // kurs evra
    var kursEvra = 117.5;

    // stanje input
    var stanje = document.getElementById("stanje").value;

    // stanje store-input
    var stanje = parseInt(stanje);

    // rent input
    var rentStana = document.getElementById('rentStana').value;

    // infostan input
    var infostan = document.getElementById('infostan').value;

    // sbb input
    var sbb = document.getElementById('sbb').value;

    // struja input
    var struja = document.getElementById('struja').value;


    var konacno = stanje - rentStana * kursEvra - infostan - sbb - struja; 
    // total
   document.getElementById('konacno').value = konacno;

 

}


// 20% od total zarade da potrosim u toku meseca

// nova funckija 
let specNumber = 12500;
let grabKonacno = document.querySelector('#konacno')

function checkValue (){
if(grabKonacno.value < specNumber ){

   grabKonacno.style.color = 'red';

} else {

   grabKonacno.style.color = 'white';
}};

setInterval(checkValue,10);

//nova funckija

