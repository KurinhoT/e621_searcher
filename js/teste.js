const postBtn = document.querySelector('#post__btn');
const postContent = document.querySelector('#post__content');
const postImg = document.querySelector('#post__img');
const poolShow = document.querySelector('#pool__show');

const fetchAPI = (value) => {
    const result = fetch(`https://e621.net/posts/${value}.json?tags=-gore+-scat+-watersports+-young+-loli+-shota`)
    .then(res => {
        if (!res.ok) {
            throw new Error(`Erro número: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        return data.post
    })
    .catch(error => console.log(error));

    return result;
}

const fetchAPI2 = () => {
    const result = fetch(`https://e621.net/posts.json?limit=1`)
    .then(res => {
        if (!res.ok) {
            throw new Error(`Erro número: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        console.log(data.posts[0].id);
        return data.posts[0].id;
    })
    .catch(error => console.log(error));

    return result;
}

postBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    let colectNum = await fetchAPI2();
    let num = Math.floor(Math.random() * colectNum+1);
    const result = await fetchAPI(num);
    
    postContent.textContent = `${JSON.stringify(result.pools[0], undefined, 2)}`;
    if (JSON.stringify(result.pools[0]) !== undefined) {
        poolShow.innerHTML = `
        <a href="https://e621.net/pools/${JSON.stringify(result.pools[0])}" target="_blank" rel="noopener noreferrer">link da comic</a>
        `;
    } else {
        poolShow.innerHTML = '';
    }
    postImg.src = `${result.sample.url}`
})