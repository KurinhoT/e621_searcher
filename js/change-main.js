const main = document.querySelector('main');
const buttons = {
    page: document.querySelector('.btn__raffle-page'),
    post: document.querySelector('.btn__raffle-post'),
    comic: document.querySelector('.btn__raffle-comic'),
    artist: document.querySelector('.btn__raffle-artist')
};

const funcRaffle = (raffleType, generateLinkText, searchType, maxNum) => {
    raffleType.addEventListener('click', () => {
        const types = Object.values(buttons);
        types.forEach(button => {
            if (button === raffleType) {
                button.classList.add('selected__especific-page');
            } else {
                button.classList.remove('selected__especific-page');
            }
        });

        main.innerHTML = `
        <h1 style="text-decoration: underline;">Sortear ${generateLinkText} Aleatório(a)</h1>
        <h3> Clique no botão abaixo para sortear um(a) ${generateLinkText.toLowerCase()} aleatório(a) </h3>
        <div id="main__options">
            <button type="button" class="main__btn" id="raffle${generateLinkText}Btn">
                Sortear ${generateLinkText.toLowerCase()}
            </button>    
        </div>
        <a id="raffle__link" href="" target="_blank" >
            <span class="span-page"></span>
        </a>
        `;

        const raffleLink = document.getElementById('raffle__link');
        const raffleBtn = document.getElementById(`raffle${generateLinkText}Btn`);

        raffleBtn.addEventListener('click', () => {
            const randomNum = Math.floor(Math.random() * maxNum);
            const spanPage = document.querySelector('.span-page');

            if (searchType === "page") {
                raffleLink.setAttribute('href', `https://e621.net/post?${searchType}=${randomNum}`);
            } else {
                raffleLink.setAttribute('href', `https://e621.net/${searchType}/${randomNum}`);
            }
            
            spanPage.innerText = `${generateLinkText} número ${randomNum}`;
            spanPage.classList.add('p-5px-h');
        });
    });
};

funcRaffle(buttons.page, "Página", "page", 751);
funcRaffle(buttons.post, "Post", "posts", 4684675);
funcRaffle(buttons.comic, "Comic", "pools", 40001);
funcRaffle(buttons.artist, "Artista", "artists", 90001);
