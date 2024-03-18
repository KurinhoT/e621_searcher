const btnComic = document.querySelector('.main__btn');
const raffleLink = document.querySelector('#raffle__link');

btnComic.addEventListener('click', () => {
    let randomComic = Math.floor(Math.random() * 40001);
    let spanPage = document.querySelector('.span-page');
    
    raffleLink.setAttribute('href', `https://e621.net/pools/${randomComic}`);
    spanPage.innerText = `Comic número ${randomComic}`;
    spanPage.classList.add('p-5px-h');
})