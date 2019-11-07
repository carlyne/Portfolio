let cards = document.querySelectorAll('.card');
let encarts = document.querySelectorAll('.encart');
let full = false;

function displayEncart(displayStatut, transformStatut) {
    for(i = 0; i < encarts.length; i++) {
        let encart = encarts[i];
                
        encart.style.display = displayStatut;
    }
}

function sizeProject(classProject) {
    if(full === false) {
        document.querySelector(classProject).style.backgroundSize = 'contain';
    } else if (full === true){
        document.querySelector(classProject).style.backgroundSize = 'cover';
    }

}

for (i = 0; i < cards.length; i++) {
    let card = cards[i];

    card.addEventListener('click', event => {

        if (full === false) {
            sizeProject('.project01');
            card.style.width = '100%';
            card.style.margin = '0';
            card.style.height = '100vh';
            card.style.border = '4px solid #000';
            card.style.position = 'fixed';;
            card.style.right = '0';
            card.style.top = '0';
            card.style.zIndex = '100';
            card.style.transform = 'translateX(1%) scale(1.01, 1.01)';
            
            displayEncart('block');
            
            full = true;

        } else if (full === true) {
            sizeProject('.project01');
            card.style.width = '';
            card.style.margin = '';
            card.style.height = '';
            card.style.border = '';
            card.style.position = '';
            card.style.zIndex = '0';
            card.style.transform = 'translateX(0) scale(1, 1)';
            
            displayEncart('none');
            
            full = false;
        }
    });
}
