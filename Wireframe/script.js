const cards = document.getElementById("board-session").getElementsByTagName("img");

const info = document.getElementById("info");


for (let i = 0; i < cards.length; i++) {
    let card = cards[i];

    card.addEventListener('click', e => {
        if (e.target.classList.contains('full-size')) {
            e.target.classList.remove('full-size', 'no-hover');

            info.style.display = "none";
            info.classList.remove('animation');
        } else {
            e.target.classList.add('full-size', 'no-hover');

            info.style.display = "block";
            info.classList.add('animation');
        }
    })
}
