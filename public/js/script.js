const cards = document.getElementById("board-session").getElementsByTagName("img");
const info = document.getElementById("info");
const gallery = document.getElementById('gallery');
const infoText = document.querySelector('#info p');

const descr = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "blabla"];



for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    let description = "";

    card.addEventListener('click', e => {

        for (let j = 0; j < descr.length; j++) {
            let currentDescr = descr[j];
            if (i === j) {
                description = currentDescr;
            }
        }

        if (e.target.classList.contains('full-size')) {
            e.target.classList.remove('full-size', 'no-hover');

            info.style.display = "none";
            info.classList.remove('animation');
        } else {
            e.target.classList.add('full-size', 'no-hover');

            infoText.innerHTML = description;
            info.style.display = "block";
            info.classList.add('animation');
        }
    })
}
