


for(let timeLoop = 0; timeLoop < document.querySelectorAll('a').length; timeLoop++){

    document.querySelectorAll('a')[timeLoop].addEventListener('click', function () {
        let home = document.querySelectorAll('a')[timeLoop];
        home.classList.add('Active');
        setTimeout (function () {
            home.classList.remove('Active');
        },150);
    })   
}





// let x = document.querySelectorAll('a')[0];
// home.classList.remove('Active');


