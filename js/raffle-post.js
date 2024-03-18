const btnPost = document.querySelector('.main__btn');
const raffleLink = document.querySelector('#raffle__link');

btnPost.addEventListener('click', () => {
    let randomPost = Math.floor(Math.random() * 4684675);
    let spanPage = document.querySelector('.span-page');
    
    raffleLink.setAttribute('href', `https://e621.net/posts/${randomPost}`);
    spanPage.innerText = `Post número ${randomPost}`;
    spanPage.classList.add('p-5px-h');
})