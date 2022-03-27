for(loopThis = 0; loopThis < document.querySelectorAll('.buttonZ').length; loopThis++) {
    document.querySelectorAll('.buttonZ')[loopThis].addEventListener('click', function () {
    this.style.height = '400px'
    this.style.width = '400px'  
});
    }