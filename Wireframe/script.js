let cards = document.querySelectorAll('.card');
let full = false;

for (i = 0; i < cards.length; i++) {
    let card = cards[i];

    card.addEventListener('click', event => {

        if (full === false) {
            card.style.width = '100%';
            card.style.margin = '0';
            card.style.height = '100vh';
            card.style.order = '-1';
            card.style.border = '4px solid #000';

            full = true;

        } else if (full === true) {
            card.style.width = '';
            card.style.margin = '';
            card.style.height = '';
            card.style.order = '';
            card.style.border = '';

            full = false;
        }
    });
}
