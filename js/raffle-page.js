const raffleBtn = document.querySelector('.main__btn');
const raffleLink = document.querySelector('#raffle__link');

raffleBtn.addEventListener('click', () => {
    let randomPage = Math.floor(Math.random() * 751);
    let spanPage = document.querySelector('.span-page');
    
    raffleLink.setAttribute('href', `https://e621.net/posts?page=${randomPage}`);
    spanPage.innerText = `Página ${randomPage}`;
    spanPage.classList.add('p-5px-h');
});