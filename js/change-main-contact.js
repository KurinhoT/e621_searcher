const main = document.querySelector('main');
const buttons = {
    twitter: document.querySelectorAll('.contat__twitter'),
    github: document.querySelectorAll('.contat__github')
};

const infos = {
    links: [
        [
            "https://twitter.com/kurotraducoes",
            "https://twitter.com/shordreno"
        ],

        [
            "https://github.com/KurinhoT"
        ]
    ],

    imgs: [
        [
            "../images/kuro-twitter-pfp.jpg",
            "../images/agenolho-twitter-pfp.jpg"
        ],

        [
            "../images/kuro-github-pfp.png"
        ]
    ],

    profiles: [
        [
            "kurotraducoes",
            "shordreno"
        ],

        [
            "KurinhoT",
        ]
    ]
};

const funcContact = (contactType, img1, search1, profile1, img2, search2, profile2) => {
    contactType.forEach(button => {
        button.addEventListener('click', async () => {
            main.innerHTML = `
            <div id="contacts">
                <div class="contact__specific">
                    <h1>Kuro</h1>
                    <div class="contact__img">
                        <img src="${img1}" alt="" srcset="">
                        <a href="${search1}" target="_blank" rel="noopener noreferrer">${profile1}</a>
                    </div>
                </div>

                <hr>
                
                <div class="contact__specific">
                    <h1>Agenolho</h1>
                    <div class="contact__img">
                        <img src="${img2}" alt="" srcset="">
                        <a href="${search2}" target="_blank" rel="noopener noreferrer">${profile2}</a>
                    </div>
                </div>
            </div>
            `
        });
    });
};

funcContact(buttons.twitter, infos.imgs[0][0], infos.links[0][0], infos.profiles[0][0], infos.imgs[0][1], infos.links[0][1], infos.profiles[0][1]);
funcContact(buttons.github, infos.imgs[1][0], infos.links[1][0], infos.profiles[1][0], null, null, "");