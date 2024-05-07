
let fullname = document.getElementById('fullname');
let professionals = document.getElementById('professional-summary');
let bg1 = document.getElementById('H001');
let bg2 = document.getElementById('H002');
let bg3 = document.getElementById('H003');
let bg4 = document.getElementById('H004');
let bg5 = document.getElementById('H005');
let bg8 = document.getElementById('H008');
let grass = document.getElementById('grass');
let tree = document.getElementById('tree');
let hat = document.querySelector('.hats');
let ht = document.querySelector('.html');
let cs = document.querySelector('.css');
let js = document.querySelector('.js');
let card = document.querySelector('.card');
let abfs = document.querySelector('.abouttext');
let proj1 = document.querySelector('.proj1');
let proj2 = document.querySelector('.proj2');
let proj3 = document.querySelector('.proj3');
let hatsm = document.querySelector('.hatsm');
let projcard = document.querySelector('.projcard');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    fullname.style.marginTop = value <= 500 ? value * 2.5 + 'px' : '700px';
    tree.style.top = value <= 500 ? value * -1.5 + 'px' : '-400px';
    tree.style.left = value <= 500 ? value * 1.5 + 'px' : '400px';
    bg5.style.left = value <= 500 ? value * 1.5 + 'px' : '400px';
    bg4.style.left = value <= 500 ? value * -1.5 + 'px' : '-400px';
    bg1.style.top = value <= 500 ? value * 1.5 + 'px' : '400px';
});

hat.addEventListener('click', ()=> {
    hatsm.classList.toggle('zin');
    ht.classList.toggle('show');
    cs.classList.toggle('show');
    js.classList.toggle('show');
    abfs.classList.remove('fs');
    cs.classList.remove('fs')
    js.classList.remove('fs')
    ht.classList.remove('fs')
});

ht.addEventListener('click', ()=> {
    ht.classList.toggle('fs')
    cs.classList.remove('fs')
    js.classList.remove('fs')
    abfs.classList.remove('fs');
})

cs.addEventListener('click', ()=> {
    cs.classList.toggle('fs')
    ht.classList.remove('fs')
    js.classList.remove('fs')
    abfs.classList.remove('fs');
})

js.addEventListener('click', ()=> {
    js.classList.toggle('fs')
    cs.classList.remove('fs')
    ht.classList.remove('fs')
    abfs.classList.remove('fs');
})

abfs.addEventListener('click', ()=> {
    abfs.classList.toggle('fs');
    js.classList.remove('fs')
    cs.classList.remove('fs')
    ht.classList.remove('fs')
});

proj1.addEventListener('click', ()=> {
    proj1.classList.toggle('fs');
    proj2.classList.remove('fs');
    proj3.classList.remove('fs');
    hatsm.classList.toggle('small');
})
proj2.addEventListener('click', ()=> {
    proj2.classList.toggle('fs');
    proj1.classList.remove('fs');
    proj3.classList.remove('fs');
    hatsm.classList.toggle('small');
})
proj3.addEventListener('click', ()=> {
    proj3.classList.toggle('fs');
    proj2.classList.remove('fs');
    proj1.classList.remove('fs');
    hatsm.classList.toggle('small');
})

const small = () => {
    if (proj1.classList.contains('fs') || proj2.classList.contains('fs') || proj3.classList.contains('fs')) {
        hatsm.classList.add('small');
    } else {
        hatsm.classList.remove('small');
    }
};

small();

proj1.addEventListener('transitionend', small);
proj2.addEventListener('transitionend', small);
proj3.addEventListener('transitionend', small);