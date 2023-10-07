let duzina1 = document.querySelector('#duzina1');
let sirina1 = document.querySelector('#sirina1');

let duzina2 = document.querySelector('#duzina2');
let sirina2 = document.querySelector('#sirina2');

const duzinaMatricaInput = document.querySelectorAll('.duzina');
duzinaMatricaInput.forEach(e => {
    e.value = 4;
});

const sirinaMatricaInput = document.querySelectorAll('.sirina');
sirinaMatricaInput.forEach(e => {
    e.value = 3;
});

let br = 0;

let matrica1, matrica2;

// Pravljenje matrice A
let mjestoZaMatricu1 = document.querySelector('#matrica1');
let duzinaMatrice1 = 4, sirinaMatrice1 = 3;

let input1;
function napraviMatricu1(duzina, sirina) {
    mjestoZaMatricu1.innerHTML = '';

    duzina = duzinaMatrice1;
    sirina = sirinaMatrice1;

    matrica1 = new Array(duzina);
    for(let i = 0; i < matrica1.length; i++) {
        matrica1[i] = new Array(sirina);
    }

    input1 = new Array(duzina);
    for(let i = 0; i < input1.length; i++) {
        input1[i] = new Array(sirina);
    }

    for(let i = 0; i < duzina; i++) {
        for(let j = 0; j < sirina; j++) {
            input1[i][j] = document.createElement('input');
            input1[i][j].type = 'number';
            if(br % 2 !== 0)
            input1[i][j].className = 'input-matrice-svijetli';
            else
            input1[i][j].className = 'input-matrice';
            mjestoZaMatricu1.appendChild(input1[i][j]);
        }
    }
}


// Dugmici za matricu A
const sveNula1Btn = document.querySelector('#sve-01');
sveNula1Btn.addEventListener('click', () => {
    sveNula1(duzinaMatrice1, sirinaMatrice1);
});
function sveNula1(duzina, sirina) {
    mjestoZaMatricu1.innerHTML = '';

    duzina = duzinaMatrice1;
    sirina = sirinaMatrice1;

    input1 = new Array(duzina);
    for(let i = 0; i < input1.length; i++) {
        input1[i] = new Array(sirina);
    }

    for(let i = 0; i < duzina; i++) {
        for(let j = 0; j < sirina; j++) {
            input1[i][j] = document.createElement('input');
            input1[i][j].type = 'number';
            if(br % 2 !== 0)
            input1[i][j].className = 'input-matrice-svijetli';
            else
            input1[i][j].className = 'input-matrice';
            input1[i][j].value = 0;
            mjestoZaMatricu1.appendChild(input1[i][j]);
        }
    }
}

const sveJedan1Btn = document.querySelector('#sve-11');
sveJedan1Btn.addEventListener('click', () => {
    sveJedan1();
})
function sveJedan1(duzina, sirina) {
    mjestoZaMatricu1.innerHTML = '';

    duzina = duzinaMatrice1;
    sirina = sirinaMatrice1;

    input1 = new Array(duzina);
    for(let i = 0; i < input1.length; i++) {
        input1[i] = new Array(sirina);
    }

    for(let i = 0; i < duzina; i++) {
        for(let j = 0; j < sirina; j++) {
            input1[i][j] = document.createElement('input');
            input1[i][j].type = 'number';
            if(br % 2 !== 0)
            input1[i][j].className = 'input-matrice-svijetli';
            else
            input1[i][j].className = 'input-matrice';
            input1[i][j].value = 1;
            mjestoZaMatricu1.appendChild(input1[i][j]);
        }
    }
}

const obrisi1Btn = document.querySelector('#obrisi1');
obrisi1Btn.addEventListener('click', () => {
    obrisi1(duzinaMatrice1, sirinaMatrice1);
});

function obrisi1(duzina, sirina) {
    mjestoZaMatricu1.innerHTML = '';
    detIspis1.innerHTML = '';

    duzina = duzinaMatrice1;
    sirina = sirinaMatrice1;

    input1 = new Array(duzina);
    for(let i = 0; i < input1.length; i++) {
        input1[i] = new Array(sirina);
    }

    for(let i = 0; i < duzina; i++) {
        for(let j = 0; j < sirina; j++) {
            input1[i][j] = document.createElement('input');
            input1[i][j].type = 'number';
            if(br % 2 !== 0)
            input1[i][j].className = 'input-matrice-svijetli';
            else
            input1[i][j].className = 'input-matrice';
            input1[i][j].value = null;
            mjestoZaMatricu1.appendChild(input1[i][j]);
        }
    }
}

const randomBtn1 = document.querySelector('#random1');
randomBtn1.addEventListener('click', () => {
    random1(duzinaMatrice1, sirinaMatrice1);
});

function random1(duzina, sirina) {
    mjestoZaMatricu1.innerHTML = '';

    duzina = duzinaMatrice1;
    sirina = sirinaMatrice1;

    input1 = new Array(duzina);
    for(let i = 0; i < input1.length; i++) {
        input1[i] = new Array(sirina);
    }

    for(let i = 0; i < duzina; i++) {
        for(let j = 0; j < sirina; j++) {
            input1[i][j] = document.createElement('input');
            input1[i][j].type = 'number';
            if(br % 2 !== 0)
            input1[i][j].className = 'input-matrice-svijetli';
            else
            input1[i][j].className = 'input-matrice';
            input1[i][j].value = parseInt(Math.random() * 100 + 0);
            mjestoZaMatricu1.appendChild(input1[i][j]);
        }
    }
}

let MATRICA1;
let input1Kopija;
const transponujBtn1 = document.querySelector('#transponuj1');
transponujBtn1.addEventListener('click', () => {
    
    [duzinaMatrice1, sirinaMatrice1] = [sirinaMatrice1, duzinaMatrice1];

    MATRICA1 = new Array(duzinaMatrice1)
    for(let i = 0; i < duzinaMatrice1; i++) {
        MATRICA1[i] = new Array(sirinaMatrice1);
    } 

    
    for(let i = 0; i < duzinaMatrice1; i++) {
        for(let j = 0; j < sirinaMatrice1; j++) {
            MATRICA1[i][j] = input1[j][i].value;
        }
    } 



    while (mjestoZaMatricu1.lastElementChild) {
        mjestoZaMatricu1.removeChild(mjestoZaMatricu1.lastElementChild);
      }

    duzina1.value = duzinaMatrice1;
    sirina1.value = sirinaMatrice1;


    input1Kopija = new Array(duzinaMatrice1)
    for(let i = 0; i < duzinaMatrice1; i++) {
        input1Kopija[i] = new Array(sirinaMatrice1);
    }

    for(let i = 0; i < duzinaMatrice1; i++) {
        for(let j = 0; j < sirinaMatrice1; j++) {
            input1Kopija[i][j] = document.createElement('input');
            input1Kopija[i][j].type = 'number';
            input1Kopija[i][j].value = MATRICA1[i][j];
            if(br % 2 !== 0)
            input1Kopija[i][j].className = 'input-matrice-svijetli';
            else
            input1Kopija[i][j].className = 'input-matrice';
            mjestoZaMatricu1.appendChild(input1Kopija[i][j]);
        }
    }

    input1 = input1Kopija;

    mjestoZaMatricu1.style.gridTemplateColumns = `repeat(${sirinaMatrice1}, 1fr)`;
    mjestoZaMatricu1.style.gridTemplateRows = `repeat(${duzinaMatrice1}, 1fr)`;
});


let determinanta1Btn = document.querySelector('#determinanta1');
let Determinanta1;
let detIspis1 = document.querySelector('#id1');

const determinant = m => 
  m.length == 1 ?
  m[0][0] :
  m.length == 2 ? 
  m[0][0]*m[1][1]-m[0][1]*m[1][0] :
  m[0].reduce((r,e,i) => 
    r+(-1)**(i+2)*e*determinant(m.slice(1).map(c => 
      c.filter((_,j) => i != j))),0)

determinanta1Btn.addEventListener('click', () => {
    detIspis1.innerHTML = '';
    if(duzinaMatrice1 == sirinaMatrice1) {
        matrica1 = new Array(duzinaMatrice1)
        for(let i = 0; i < duzinaMatrice1; i++) {
            matrica1[i] = new Array(sirinaMatrice1);
        } 
    
        
        for(let i = 0; i < duzinaMatrice1; i++) {
            for(let j = 0; j < sirinaMatrice1; j++) {
                matrica1[i][j] = parseInt(input1[i][j].value);
            }
        }
        Determinanta1 = determinant(matrica1);
        detIspis1.innerHTML = `Determinanta: ${Determinanta1}`;
        detIspis1.style.animation = 'animacija-ispis1 0.5s ease-in';
        detIspis1.style.animationFillMode =  'forwards';
    } else {
        detIspis1.innerHTML = 'Matrica mora biti kvadratna';
        detIspis1.style.animation = 'animacija-ispis1 0.5s ease-in';
        detIspis1.style.animationFillMode =  'forwards';
        let interval = setInterval(() => {
            detIspis1.style.animation = 'animacija-ispis2 0.5s ease-out';
            detIspis1.style.animationFillMode =  'forwards';
        }, 2500);
        setTimeout(() => {
            clearInterval(interval);
        }, 2500);
    }
    window.scrollBy(0, 50);
});


// Pravljenje matrice B
let mjestoZaMatricu2 = document.querySelector('#matrica2');
let duzinaMatrice2 = 4, sirinaMatrice2 = 3;
let input2
function napraviMatricu2(duzina, sirina) {
    mjestoZaMatricu2.innerHTML = '';

    duzina = duzinaMatrice2;
    sirina = sirinaMatrice2;

    let matrica2 = new Array(duzina);
    for(let i = 0; i < matrica2.length; i++) {
        matrica2[i] = new Array(sirina);
    }

    input2 = new Array(duzina);
    for(let i = 0; i < input2.length; i++) {
        input2[i] = new Array(sirina);
    }

    for(let i = 0; i < duzina; i++) {
        for(let j = 0; j < sirina; j++) {
            input2[i][j] = document.createElement('input');
            input2[i][j].type = 'number';
            if(br % 2 !== 0)
            input2[i][j].className = 'input-matrice-svijetli';
            else
            input2[i][j].className = 'input-matrice';
            mjestoZaMatricu2.appendChild(input2[i][j]);
        }
        
    }
}

// Dugmici za matricu B
const sveNula2Btn = document.querySelector('#sve-02');
sveNula2Btn.addEventListener('click', () => {
    sveNula2(duzinaMatrice2, sirinaMatrice2);
});
function sveNula2(duzina, sirina) {
    mjestoZaMatricu2.innerHTML = '';

    duzina = duzinaMatrice2;
    sirina = sirinaMatrice2;

    input2 = new Array(duzina);
    for(let i = 0; i < input2.length; i++) {
        input2[i] = new Array(sirina);
    }

    for(let i = 0; i < duzina; i++) {
        for(let j = 0; j < sirina; j++) {
            input2[i][j] = document.createElement('input');
            input2[i][j].type = 'number';
            if(br % 2 !== 0)
            input2[i][j].className = 'input-matrice-svijetli';
            else
            input2[i][j].className = 'input-matrice';
            input2[i][j].value = 0;
            mjestoZaMatricu2.appendChild(input2[i][j]);
        }
    }
}

const sveJedan2Btn = document.querySelector('#sve-12');
sveJedan2Btn.addEventListener('click', () => {
    sveJedan2();
})
function sveJedan2(duzina, sirina) {
    mjestoZaMatricu2.innerHTML = '';

    duzina = duzinaMatrice2;
    sirina = sirinaMatrice2;

    input2 = new Array(duzina);
    for(let i = 0; i < input2.length; i++) {
        input2[i] = new Array(sirina);
    }

    for(let i = 0; i < duzina; i++) {
        for(let j = 0; j < sirina; j++) {
            input2[i][j] = document.createElement('input');
            input2[i][j].type = 'number';
            if(br % 2 !== 0)
            input2[i][j].className = 'input-matrice-svijetli';
            else
            input2[i][j].className = 'input-matrice';
            input2[i][j].value = 1;
            mjestoZaMatricu2.appendChild(input2[i][j]);
        }
    }
}

const obrisi2Btn = document.querySelector('#obrisi2');
obrisi2Btn.addEventListener('click', () => {
    obrisi2(duzinaMatrice2, sirinaMatrice2);
});

function obrisi2(duzina, sirina) {
    mjestoZaMatricu2.innerHTML = '';
    detIspis2.innerHTML = '';

    duzina = duzinaMatrice2;
    sirina = sirinaMatrice2;

    input2 = new Array(duzina);
    for(let i = 0; i < input2.length; i++) {
        input2[i] = new Array(sirina);
    }

    for(let i = 0; i < duzina; i++) {
        for(let j = 0; j < sirina; j++) {
            input2[i][j] = document.createElement('input');
            input2[i][j].type = 'number';
            if(br % 2 !== 0)
            input2[i][j].className = 'input-matrice-svijetli';
            else
            input2[i][j].className = 'input-matrice';
            input2[i][j].value = null;
            mjestoZaMatricu2.appendChild(input2[i][j]);
        }
    }
}

const randomBtn2 = document.querySelector('#random2');
randomBtn2.addEventListener('click', () => {
    random2(duzinaMatrice2, sirinaMatrice2);
});

function random2(duzina, sirina) {
    mjestoZaMatricu2.innerHTML = '';

    duzina = duzinaMatrice2;
    sirina = sirinaMatrice2;

    input2 = new Array(duzina);
    for(let i = 0; i < input2.length; i++) {
        input2[i] = new Array(sirina);
    }

    for(let i = 0; i < duzina; i++) {
        for(let j = 0; j < sirina; j++) {
            input2[i][j] = document.createElement('input');
            input2[i][j].type = 'number';
            if(br % 2 !== 0)
            input2[i][j].className = 'input-matrice-svijetli';
            else
            input2[i][j].className = 'input-matrice';
            input2[i][j].value = parseInt(Math.random() * 100 + 0);
            mjestoZaMatricu2.appendChild(input2[i][j]);
        }
    }
}

let MATRICA2;
let input2Kopija;
const transponujBtn2 = document.querySelector('#transponuj2');
transponujBtn2.addEventListener('click', () => {
    
    [duzinaMatrice2, sirinaMatrice2] = [sirinaMatrice2, duzinaMatrice2];

    MATRICA2 = new Array(duzinaMatrice2)
    for(let i = 0; i < duzinaMatrice2; i++) {
        MATRICA2[i] = new Array(sirinaMatrice2);
    } 

    
    for(let i = 0; i < duzinaMatrice2; i++) {
        for(let j = 0; j < sirinaMatrice2; j++) {
            MATRICA2[i][j] = input2[j][i].value;
        }
    }

    while (mjestoZaMatricu2.lastElementChild) {
        mjestoZaMatricu2.removeChild(mjestoZaMatricu2.lastElementChild);
      }

    duzina2.value = duzinaMatrice2;
    sirina2.value = sirinaMatrice2;


    input2Kopija = new Array(duzinaMatrice2)
    for(let i = 0; i < duzinaMatrice2; i++) {
        input2Kopija[i] = new Array(sirinaMatrice2);
    }

    for(let i = 0; i < duzinaMatrice2; i++) {
        for(let j = 0; j < sirinaMatrice2; j++) {
            input2Kopija[i][j] = document.createElement('input');
            input2Kopija[i][j].type = 'number';
            input2Kopija[i][j].value = MATRICA2[i][j];
            if(br % 2 !== 0)
            input2Kopija[i][j].className = 'input-matrice-svijetli';
            else
            input2Kopija[i][j].className = 'input-matrice';
            mjestoZaMatricu2.appendChild(input2Kopija[i][j]);
        }
    }

    input2 = input2Kopija;

    mjestoZaMatricu2.style.gridTemplateColumns = `repeat(${sirinaMatrice2}, 1fr)`;
    mjestoZaMatricu2.style.gridTemplateRows = `repeat(${duzinaMatrice2}, 1fr)`;
});


let determinanta2Btn = document.querySelector('#determinanta2');
let Determinanta2;
let detIspis2 = document.querySelector('#id2');

determinanta2Btn.addEventListener('click', () => {
    if(duzinaMatrice2 == sirinaMatrice2) {
        matrica2 = new Array(duzinaMatrice1)
        for(let i = 0; i < duzinaMatrice2; i++) {
            matrica2[i] = new Array(sirinaMatrice2);
        } 

        
        for(let i = 0; i < duzinaMatrice2; i++) {
            for(let j = 0; j < sirinaMatrice2; j++) {
                matrica2[i][j] = parseInt(input2[i][j].value);
            }
        }
        Determinanta2 = determinant(matrica2);
        console.log(Determinanta2);
        detIspis2.innerHTML = `Determinanta: ${Determinanta2}`;
        detIspis2.style.animation = 'animacija-ispis1 0.5s ease-in';
        detIspis2.style.animationFillMode =  'forwards';
    } else {
        detIspis2.innerHTML = 'Matrica mora biti kvadratna';
        detIspis2.style.animation = 'animacija-ispis1 0.5s ease-in';
        detIspis2.style.animationFillMode =  'forwards';
        let interval = setInterval(() => {
            detIspis2.style.animation = 'animacija-ispis2 0.5s ease-out';
            detIspis2.style.animationFillMode =  'forwards';
        }, 2500);
        setTimeout(() => {
            clearInterval(interval);
        }, 2500);
    }
    window.scrollBy(0, 50);
});

// Funkcije za duzinu i sirinu matrice A
const strelicaGore1 = document.querySelector('#strelica-gore1');
strelicaGore1.addEventListener('click', () => {
    if(duzinaMatrice1 < 8) {
        duzinaMatrice1++;
        duzinaMatricaInput.forEach((e, index) => {
            if(index === 0) {
                e.value++;
            }
        })
        mjestoZaMatricu1.style.gridTemplateColumns = `repeat(${sirinaMatrice1}, 1fr)`;
        mjestoZaMatricu1.style.gridTemplateRows = `repeat(${duzinaMatrice1}, 1fr)`;
        napraviMatricu1(duzinaMatrice1, sirinaMatrice1);
    }
});

const strelicaDole1 = document.querySelector('#strelica-dole1');
strelicaDole1.addEventListener('click', () => {
    if(duzinaMatrice1 > 1) {
        duzinaMatrice1--;
        duzinaMatricaInput.forEach((e, index) => {
            if(index === 0) {
                e.value--;
            }
        })
        mjestoZaMatricu1.style.gridTemplateColumns = `repeat(${sirinaMatrice1}, 1fr)`;
        mjestoZaMatricu1.style.gridTemplateRows = `repeat(${duzinaMatrice1}, 1fr)`;
        napraviMatricu1(duzinaMatrice1, sirinaMatrice1);
    }
})

const strelicaLijevo1 = document.querySelector('#strelica-lijevo1');
strelicaLijevo1.addEventListener('click', () => {
    if(sirinaMatrice1 > 1) {
        sirinaMatrice1--;
        sirinaMatricaInput.forEach((e, index) => {
            if(index === 0) {
                e.value--;
            }
        });
        mjestoZaMatricu1.style.gridTemplateColumns = `repeat(${sirinaMatrice1}, 1fr)`;
        mjestoZaMatricu1.style.gridTemplateRows = `repeat(${duzinaMatrice1}, 1fr)`;
        napraviMatricu1(duzinaMatrice1, sirinaMatrice1);
    }
});

const strelicaDesno1 = document.querySelector('#strelica-desno1')
strelicaDesno1.addEventListener('click', () => {
    if(sirinaMatrice1 < 8) {
        sirinaMatrice1++;
        sirinaMatricaInput.forEach((e, index) => {
            if(index === 0) {
                e.value++;
            }
        });
        mjestoZaMatricu1.style.gridTemplateColumns = `repeat(${sirinaMatrice1}, 1fr)`;
        mjestoZaMatricu1.style.gridTemplateRows = `repeat(${duzinaMatrice1}, 1fr)`;
        napraviMatricu1(duzinaMatrice1, sirinaMatrice1);
    }
});


// Funkcije za duzinu i sirinu matrice B
const strelicaGore2 = document.querySelector('#strelica-gore2');
strelicaGore2.addEventListener('click', () => {
    if(duzinaMatrice2 < 8) {
        duzinaMatrice2++;
        duzinaMatricaInput.forEach((e, index) => {
            if(index === 1) {
                e.value++;
            }
        })
        mjestoZaMatricu2.style.gridTemplateColumns = `repeat(${sirinaMatrice2}, 1fr)`;
        mjestoZaMatricu2.style.gridTemplateRows = `repeat(${duzinaMatrice2}, 1fr)`;
        napraviMatricu2(duzinaMatrice2, sirinaMatrice2);
    }
});

const strelicaDole2 = document.querySelector('#strelica-dole2');
strelicaDole2.addEventListener('click', () => {
    if(duzinaMatrice2 > 1) {
        duzinaMatrice2--;
        duzinaMatricaInput.forEach((e, index) => {
            if(index === 1) {
                e.value--;
            }
        })
        mjestoZaMatricu2.style.gridTemplateColumns = `repeat(${sirinaMatrice2}, 1fr)`;
        mjestoZaMatricu2.style.gridTemplateRows = `repeat(${duzinaMatrice2}, 1fr)`;
        napraviMatricu2(duzinaMatrice2, sirinaMatrice2);
    }
})

const strelicaLijevo2 = document.querySelector('#strelica-lijevo2');
strelicaLijevo2.addEventListener('click', () => {
    if(sirinaMatrice2 > 1) {
        sirinaMatrice2--;
        sirinaMatricaInput.forEach((e, index) => {
            if(index === 1) {
                e.value--;
            }
        });
        mjestoZaMatricu2.style.gridTemplateColumns = `repeat(${sirinaMatrice2}, 1fr)`;
        mjestoZaMatricu2.style.gridTemplateRows = `repeat(${duzinaMatrice2}, 1fr)`;
        napraviMatricu2(duzinaMatrice2, sirinaMatrice2);
    }
});

const strelicaDesno2 = document.querySelector('#strelica-desno2')
strelicaDesno2.addEventListener('click', () => {
    if(sirinaMatrice2 < 8) {
        sirinaMatrice2++;
        sirinaMatricaInput.forEach((e, index) => {
            if(index === 1) {
                e.value++;
            }
        });
        mjestoZaMatricu2.style.gridTemplateColumns = `repeat(${sirinaMatrice2}, 1fr)`;
        mjestoZaMatricu2.style.gridTemplateRows = `repeat(${duzinaMatrice2}, 1fr)`;
        napraviMatricu2(duzinaMatrice2, sirinaMatrice2);
    }
});


// Funkcije za racunanje matrica
const opBtn = document.querySelectorAll('.op-btn');
const rezultati = document.querySelector('.rezultati');
const rez = document.querySelector('.rez');
const errori = document.querySelector('.errori');
let naslovRez = document.querySelector('.naslov-rez');
let rezultat;

const saberiBtn = document.querySelector('#plus');
let zbirMatrica;
const obrisiRezBtn = document.querySelector('.obrisi-rez');

saberiBtn.addEventListener('click', () => {
    if(duzinaMatrice1 == duzinaMatrice2 && sirinaMatrice1 == sirinaMatrice2) {
        rez.innerHTML = '';
        rezultati.innerHTML = '';
        errori.innerHTML = '';
        detIspis2.innerHTML = '';

        rez.style.opacity = '1';
        rezultati.style.opacity = '1';
        naslovRez = document.createElement('div');
        naslovRez.innerHTML = '';
        naslovRez.innerHTML = 'A + B';
        naslovRez.className = 'naslov-rez';
        rez.appendChild(naslovRez);



        zbirMatrica = new Array(duzinaMatrice1);
        for(let i = 0; i < duzinaMatrice1; i++) {
            zbirMatrica[i] = new Array(sirinaMatrice1);
        }
        for(let i = 0; i < duzinaMatrice1; i++) {
            for(let j = 0; j < sirinaMatrice1; j++) {
                zbirMatrica[i][j] = parseInt(input1[i][j].value) + parseInt(input2[i][j].value);
            }
        }

        rezultat = new Array(duzinaMatrice1);
        for(let i = 0; i < duzinaMatrice1; i++) {
            rezultat[i] = new Array(sirinaMatrice1);
        }

        for(let i = 0; i < duzinaMatrice1; i++) {
            for(let j = 0; j < sirinaMatrice1; j++) {
                rezultat[i][j] = document.createElement('input');
                rezultat[i][j].type = 'number';
                rezultat[i][j].value = zbirMatrica[i][j];
                if(br % 2 !== 0)
                rezultat[i][j].className = 'input-matrice-svijetli';
                else
                rezultat[i][j].className = 'input-matrice';
                rezultati.appendChild(rezultat[i][j]);
            }
        }
        rezultati.style.gridTemplateColumns = `repeat(${sirinaMatrice1}, 1fr)`;
        rezultati.style.gridTemplateRows = `repeat(${duzinaMatrice1}, 1fr)`;

        rez.appendChild(naslovRez);
        rez.appendChild(rezultati);
        rez.appendChild(obrisiRezBtn);

        obrisiRezBtn.addEventListener('click', () => {
            rez.style.opacity = '0';
            rez.innerHTML = '';
        });

    } else {
        while(rez.firstChild) {
            rez.removeChild(rez.firstChild);
        }
        window.scrollTo(0, document.body.scrollHeight);
        errori.innerHTML = 'Matrice A i B nisu istih dimenzija';
        errori.className = 'error';
        errori.style.animation = 'animacija-ispis1 0.5s ease-in';
        errori.style.animationFillMode =  'forwards';
        let interval = setInterval(() => {
            errori.style.animation = 'animacija-ispis2 0.5s ease-out';
            errori.style.animationFillMode =  'forwards';
        }, 2500);
        setTimeout(() => {
            clearInterval(interval);
        }, 2500);
    }
});

const oduzmiBtn = document.querySelector('#minus');
let razlikaMatrica;
oduzmiBtn.addEventListener('click', () => {
    if(duzinaMatrice1 == duzinaMatrice2 && sirinaMatrice1 == sirinaMatrice2) {
        rez.innerHTML = '';
        rezultati.innerHTML = '';
        detIspis1.innerHTML = '';
        detIspis2.innerHTML = '';

        rez.style.opacity = '1';
        rezultati.style.opacity = '1';
        naslovRez = document.createElement('div');
        naslovRez.innerHTML = '';
        naslovRez.innerHTML = 'A - B';
        naslovRez.className = 'naslov-rez';
        rez.appendChild(naslovRez);

        razlikaMatrica = new Array(duzinaMatrice1);
        for(let i = 0; i < duzinaMatrice1; i++) {
            razlikaMatrica[i] = new Array(sirinaMatrice1);
        }
        for(let i = 0; i < duzinaMatrice1; i++) {
            for(let j = 0; j < sirinaMatrice1; j++) {
                razlikaMatrica[i][j] = parseInt(input1[i][j].value) - parseInt(input2[i][j].value);
            }
        }

        rezultat = new Array(duzinaMatrice1);
        for(let i = 0; i < duzinaMatrice1; i++) {
            rezultat[i] = new Array(sirinaMatrice1);
        }

        for(let i = 0; i < duzinaMatrice1; i++) {
            for(let j = 0; j < sirinaMatrice1; j++) {
                rezultat[i][j] = document.createElement('input');
                rezultat[i][j].type = 'number';
                rezultat[i][j].value = razlikaMatrica[i][j];
                if(br % 2 !== 0)
                rezultat[i][j].className = 'input-matrice-svijetli';
                else
                rezultat[i][j].className = 'input-matrice';
                rezultati.appendChild(rezultat[i][j]);
            }
        }
        rezultati.style.gridTemplateColumns = `repeat(${sirinaMatrice1}, 1fr)`;
        rezultati.style.gridTemplateRows = `repeat(${duzinaMatrice1}, 1fr)`;

        rez.appendChild(naslovRez);
        rez.appendChild(rezultati);
        rez.appendChild(obrisiRezBtn);

        obrisiRezBtn.addEventListener('click', () => {
            rez.style.opacity = '0';
            rez.innerHTML = '';
        });

    } else {
        while(rez.firstChild) {
            rez.removeChild(rez.firstChild);
        }
        window.scrollTo(0, document.body.scrollHeight);
        errori.innerHTML = 'Matrice A i B nisu istih dimenzija';
        errori.className = 'error';
        errori.style.animation = 'animacija-ispis1 0.5s ease-in';
        errori.style.animationFillMode =  'forwards';
        let interval = setInterval(() => {
            errori.style.animation = 'animacija-ispis2 0.5s ease-out';
            errori.style.animationFillMode =  'forwards';
        }, 2500);
        setTimeout(() => {
            clearInterval(interval);
        }, 2500);
    }
});

const pomnoziBtn = document.querySelector('#pomnozeno');
let proizvodMatrica;
pomnoziBtn.addEventListener('click', () => {

    if(sirinaMatrice1 == duzinaMatrice2) {
        rez.innerHTML = '';
        rezultati.innerHTML = '';
        detIspis1.innerHTML = '';
        detIspis2.innerHTML = '';

        rez.style.opacity = '1';
        rezultati.style.opacity = '1';
        naslovRez = document.createElement('div');
        naslovRez.innerHTML = '';
        naslovRez.innerHTML = 'A x B';
        naslovRez.className = 'naslov-rez';
        rez.appendChild(naslovRez);

        proizvodMatrica = new Array(duzinaMatrice1);
        for(let i = 0; i < duzinaMatrice1; i++) {
            proizvodMatrica[i] = new Array(sirinaMatrice2);
            for(let j = 0; j < sirinaMatrice2; j++) {
                proizvodMatrica[i][j] = 0;
                for(let k = 0; k < sirinaMatrice1; k++) {
                    proizvodMatrica[i][j] += parseInt(input1[i][k].value) * parseInt(input2[k][j].value);
                }
            }
        }

        rezultat = new Array(duzinaMatrice1);
        for(let i = 0; i < duzinaMatrice1; i++) {
            rezultat[i] = new Array(sirinaMatrice2);
        }

        for(let i = 0; i < duzinaMatrice1; i++) {
            for(let j = 0; j < sirinaMatrice2; j++) {
                rezultat[i][j] = document.createElement('input');
                rezultat[i][j].type = 'number';
                rezultat[i][j].value = proizvodMatrica[i][j];
                if(br % 2 !== 0)
                rezultat[i][j].className = 'input-matrice-svijetli';
                else
                rezultat[i][j].className = 'input-matrice';
                rezultati.appendChild(rezultat[i][j]);
            }
        }
        rezultati.style.gridTemplateColumns = `repeat(${sirinaMatrice2}, 1fr)`;
        rezultati.style.gridTemplateRows = `repeat(${duzinaMatrice1}, 1fr)`;

        rez.appendChild(naslovRez);
        rez.appendChild(rezultati);
        rez.appendChild(obrisiRezBtn);

        obrisiRezBtn.addEventListener('click', () => {
            rez.style.opacity = '0';
            rez.innerHTML = '';
        });

    } else {
        while(rez.firstChild) {
            rez.removeChild(rez.firstChild);
        }
        window.scrollTo(0, document.body.scrollHeight);
        errori.innerHTML = 'Matrice A i B nisu ulančane';
        errori.className = 'error';
        errori.style.animation = 'animacija-ispis1 0.5s ease-in';
        errori.style.animationFillMode =  'forwards';
        let interval = setInterval(() => {
            errori.style.animation = 'animacija-ispis2 0.5s ease-out';
            errori.style.animationFillMode =  'forwards';
        }, 2500);
        setTimeout(() => {
            clearInterval(interval);
        }, 2500);
    }
});

const zamjeniBtn = document.querySelector('#zamjena');
let niz1, niz2;
zamjeniBtn.addEventListener('click', () => {
    niz1 = new Array(duzinaMatrice1);
    for(let i = 0; i < duzinaMatrice1; i++) {
        niz1[i] = new Array(sirinaMatrice1);
    }

    for(let i = 0; i < duzinaMatrice1; i++) {
        for(let j = 0; j < sirinaMatrice1; j++) {
            niz1[i][j] = parseInt(input1[i][j].value);
        }
    }

    niz2 = new Array(duzinaMatrice2);
    for(let i = 0; i < duzinaMatrice2; i++) {
        niz2[i] = new Array(sirinaMatrice2);
    }

    for(let i = 0; i < duzinaMatrice2; i++) {
        for(let j = 0; j < sirinaMatrice2; j++) {
            niz2[i][j] = parseInt(input2[i][j].value);
        }
    }

    [duzinaMatrice1, duzinaMatrice2] = [duzinaMatrice2, duzinaMatrice1];
    [sirinaMatrice1, sirinaMatrice2] = [sirinaMatrice2, sirinaMatrice1];

    [duzina1.value, duzina2.value] = [duzina2.value, duzina1.value];
    [sirina1.value, sirina2.value] = [sirina2.value, sirina1.value];

    napraviMatricu1(duzinaMatrice2, sirinaMatrice2);
    napraviMatricu2(duzinaMatrice1, sirinaMatrice1);

    for(let i = 0; i < duzinaMatrice1; i++) {
        for(let j = 0; j < sirinaMatrice1; j++) {
            input1[i][j].value = niz2[i][j];
        }
    }

    for(let i = 0; i < duzinaMatrice2; i++) {
        for(let j = 0; j < sirinaMatrice2; j++) {
            input2[i][j].value = niz1[i][j];
        }
    }

    while(rez.firstChild) {
        rez.removeChild(rez.firstChild);
    }

    mjestoZaMatricu1.style.gridTemplateColumns = `repeat(${sirinaMatrice1}, 1fr)`;
    mjestoZaMatricu1.style.gridTemplateRows = `repeat(${duzinaMatrice1}, 1fr)`;

    mjestoZaMatricu2.style.gridTemplateColumns = `repeat(${sirinaMatrice2}, 1fr)`;
    mjestoZaMatricu2.style.gridTemplateRows = `repeat(${duzinaMatrice2}, 1fr)`;
});

// Animacije
const naslovOdabir = document.querySelectorAll('.naslov-odabir');
const naslovMatrice1 = document.querySelector('#naslovMatrice1');
const naslovMatrice2 = document.querySelector('#naslovMatrice2');
naslovOdabir.forEach((e, index) => {
    e.addEventListener('mouseenter', () => {
        e.style.animation = 'animacija-naslov-odabir1 0.35s ease-in';
        e.style.animationFillMode = 'forwards';

        if(index === 0) {
            naslovMatrice1.style.animation = 'animacija-naslov1 0.35s ease-in';
            naslovMatrice1.style.animationFillMode = 'forwards';
        } else {
            naslovMatrice2.style.animation = 'animacija-naslov1 0.35s ease-in';
            naslovMatrice2.style.animationFillMode = 'forwards';
        }

    });

    e.addEventListener('mouseleave', () => {
        e.style.animation = 'animacija-naslov-odabir2 0.35s ease-out';
        e.style.animationFillMode = 'forwards';

        if(index === 0) {
            naslovMatrice1.style.animation = 'animacija-naslov2 0.35s ease-out';
            naslovMatrice1.style.animationFillMode = 'forwards';
        } else {
            naslovMatrice2.style.animation = 'animacija-naslov2 0.35s ease-out';
            naslovMatrice2.style.animationFillMode = 'forwards';
        }
    })
})

let r = document.querySelector(':root');
let rs1 = getComputedStyle(r);
rs1.getPropertyValue('--text');

let body = document.querySelector('body');
let rs2 = getComputedStyle(body);
rs2.getPropertyValue('background-color');

let header = document.querySelector('#header');
let rs3 = getComputedStyle(r);
rs3.getPropertyValue('--header-background-color');

const sunce_mjesec = document.querySelector('#krug');
let rs4 = getComputedStyle(r);
rs4.getPropertyValue('--text-hover');

let rs5 = getComputedStyle(r);
rs5.getPropertyValue('--text-hover');



sunce_mjesec.addEventListener('click', () => {
    let INPUT = document.querySelectorAll('input');
    br++;
    if(br % 2 !== 0) {
        r.style.setProperty('--text', '#020080');
        body.style.setProperty('background-color', '#c2d7f0');
        header.style.setProperty('--header-background-color', '#0a2c57b3')
        sunce_mjesec.style.setProperty('--text-hover', 'white');
        sunce_mjesec.style.setProperty('--text', '#020080');
        INPUT.forEach(e => {
            e.classList.remove('input-matrice');
            e.classList.add('input-matrice-svijetli');
        });
    }else {
        r.style.setProperty('--text', '#3bba9c');
        body.style.setProperty('background-color', '#2e3047');
        header.style.setProperty('--header-background-color', '#252738b3');
        sunce_mjesec.style.setProperty('--text-hover', 'white');
        sunce_mjesec.style.setProperty('--text', '#3BBA9C');
        INPUT.forEach(e => {
            e.classList.remove('input-matrice-svijetli');
            e.classList.add('input-matrice');
        });
    }
});

const divOperacije = document.querySelector('.operacije')
divOperacije.addEventListener('mouseenter', () => {
    if(br % 2 !== 0) {
        opBtn.forEach(e => {
            e.addEventListener('mouseenter', () => {
                e.style.animation = 'animacija-op-btn3 0.35s ease-in';
                e.style.animationFillMode =  'forwards';
            });
        
            e.addEventListener('mouseleave', () => {
                e.style.animation = 'animacija-op-btn4 0.35s ease-out';
                e.style.animationFillMode =  'forwards';
            });
        });
    } else {
        opBtn.forEach(e => {
            opBtn.forEach(e => {
                e.addEventListener('mouseenter', () => {
                    e.style.animation = 'animacija-op-btn1 0.35s ease-in';
                    e.style.animationFillMode =  'forwards';
                });
            
                e.addEventListener('mouseleave', () => {
                    e.style.animation = 'animacija-op-btn2 0.35s ease-out';
                    e.style.animationFillMode =  'forwards';
                });
            });
        });
    }
});

// Nazad
const nazad = document.getElementById('nazad');
nazad.onclick = () => {
    window.close('kalkulator.html');
    window.open('../GlavnaStranica/glavna_stranica.html');
}

// Pravljenje pocetnih 4 x 3 matrica

window.onload = function () {
    napraviMatricu1(duzinaMatrice1, sirinaMatrice1);
    napraviMatricu2(duzinaMatrice2, sirinaMatrice2);
}


