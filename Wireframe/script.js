const cards = document.getElementById("board-session").getElementsByTagName("img");


for (let i = 0; i < cards.length; i++) {
    let card = cards[i];

    card.addEventListener('click', e => {
        if (e.target.classList.contains('full-size')) {
            e.target.classList.remove('full-size', 'no-hover');
        } else {
            e.target.classList.add('full-size', 'no-hover'); 
        }
    })
}