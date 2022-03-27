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

var firstLink = document.querySelector('#stanje');
firstLink.addEventListener('click', function(){
    var audio = new Audio('sound/click3.mp3');
    audio.play();
});
var firstLink = document.querySelector('#rentStana');
firstLink.addEventListener('click', function(){
    var audio = new Audio('sound/click3.mp3');
    audio.play();
});
var firstLink = document.querySelector('#infostan');
firstLink.addEventListener('click', function(){
    var audio = new Audio('sound/click3.mp3');
    audio.play();
});
var firstLink = document.querySelector('#sbb');
firstLink.addEventListener('click', function(){
    var audio = new Audio('sound/click3.mp3');
    audio.play();
});

var firstLink = document.querySelector('#struja');
firstLink.addEventListener('click', function(){
    var audio = new Audio('sound/click3.mp3');
    audio.play();
});

// keypress

this.document.addEventListener('keyup', function(event){
    
    if(event.keyCode == 9){
        var audio = new Audio('sound/click3.mp3');
        audio.play();
    }
});
