const main = document.querySelector('main');
const buttons = {
    page: document.querySelectorAll('.btn__raffle-page'),
    post: document.querySelectorAll('.btn__raffle-post'),
    comic: document.querySelectorAll('.btn__raffle-comic'),
    artist: document.querySelectorAll('.btn__raffle-artist')
};

const funcRaffle = (raffleType, generateLinkText, searchType, maxNum) => {
    raffleType.forEach(button => {
        button.addEventListener('click', () => {

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

                // fetch(`https://e621.net/${searchType}/${randomNum}.json`)
                //     .then(async (res) => {
                //         if (!res.ok) {
                //             throw new Error(`${generateLinkText} não foi encontrado. Código de erro ${res.status}`);
                //         }
                //         return await res.json();
                //     })
                //     .then(data => {
                //         console.log(data);
                //         return data;
                //     })
                //     .catch(error => console.log(error))
                
                // raffleLink.setAttribute('href', `${data.posts.file.url}`);
                spanPage.innerText = `${generateLinkText} número ${randomNum}`;
                spanPage.classList.add('p-5px-h');
            });
        });
    });
};

funcRaffle(buttons.page, "Página", "page", 751);
funcRaffle(buttons.post, "Post", "posts", 4684675);
funcRaffle(buttons.comic, "Comic", "pools", 40001);
funcRaffle(buttons.artist, "Artista", "artists", 90001);