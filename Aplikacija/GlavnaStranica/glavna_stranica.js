const dodatneInfo = document.querySelectorAll('.dodatneInfo')
dodatneInfo.forEach(e => {
    e.style.display = 'none';
});


const matriceInfo = document.querySelector('.matriceInfo');
const tagovi = document.querySelectorAll('a');
tagovi.forEach(e => {
    e.addEventListener('click', () => {
        switch(e.dataset.naziv) {
            case 'matrice':
               dodatneInfo.forEach(e2 => {
                    if(e2.id == 'matrice') {
                        e2.style.display = 'block'
                        e2.style.opacity = '0';
                        e2.style.animation = 'animacija1 1s ease-in 1';
                        e2.style.animationFillMode =  'forwards';
                    }
                    else e2.style.display = 'none'; 
               });
                break;

            case 'sabiranje':
               dodatneInfo.forEach(e2 => {
                    if(e2.id == 'sabiranje') {
                        e2.style.display = 'block'
                        e2.style.opacity = '0';
                        e2.style.animation = 'animacija1 1s ease-in 1';
                        e2.style.animationFillMode =  'forwards';
                    }
                    else e2.style.display = 'none'; 
               });
                break;

            case 'oduzimanje':
            dodatneInfo.forEach(e2 => {
                if(e2.id == 'oduzimanje') {
                    e2.style.display = 'block'
                    e2.style.opacity = '0';
                    e2.style.animation = 'animacija1 1s ease-in 1';
                    e2.style.animationFillMode =  'forwards';
                }
                else e2.style.display = 'none';
            });
                break;

            case 'mnozenje':
            dodatneInfo.forEach(e2 => {
                if(e2.id == 'mnozenje') {
                    e2.style.display = 'block'
                    e2.style.opacity = '0';
                    e2.style.animation = 'animacija1 1s ease-in 1';
                    e2.style.animationFillMode =  'forwards';
                }
                else e2.style.display = 'none';
            });
                break;

            case 'determinanta':
                dodatneInfo.forEach(e2 => {
                     if(e2.id == 'determinanta') {
                        e2.style.display = 'block'
                        e2.style.opacity = '0';
                        e2.style.animation = 'animacija1 1s ease-in 1';
                        e2.style.animationFillMode =  'forwards';
                     }
                     else e2.style.display = 'none';
                });
                break;

            case 'transponacija':
                dodatneInfo.forEach(e2 => {
                     if(e2.id == 'transponacija') {
                        e2.style.display = 'block'
                        e2.style.opacity = '0';
                        e2.style.animation = 'animacija1 1s ease-in 1';
                        e2.style.animationFillMode =  'forwards';
                     }
                     else e2.style.display = 'none';
                });
                break;

            case 'inverza':
                dodatneInfo.forEach(e2 => {
                     if(e2.id == 'inverza') {
                        e2.style.display = 'block'
                        e2.style.opacity = '0';
                        e2.style.animation = 'animacija1 1s ease-in 1';
                        e2.style.animationFillMode =  'forwards';
                     }
                     else e2.style.display = 'none';
                });
                break;

            case 'kalkulator':
                window.close('glavna_stranica.html');
                window.open('../Kalkulator/kalkulator.html');
                break;
        }
    });
});

const matrice = document.getElementById('matrice');
matrice.style.display = 'block';
matrice.style.opacity = '1';