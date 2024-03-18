const btnArtist = document.querySelector('.main__btn');
const raffleLink = document.querySelector('#raffle__link');

btnArtist.addEventListener('click', () => {
    let randomArtist = Math.floor(Math.random() * 90001);
    let spanPage = document.querySelector('.span-page');
    
    raffleLink.setAttribute('href', `https://e621.net/artists/${randomArtist}`);
    spanPage.innerText = `Artista número ${randomArtist}`;
    spanPage.classList.add('p-5px-h');
})