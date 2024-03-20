const main = document.querySelector('main');
const buttons = {
    twitter: document.querySelectorAll('.contat__twitter'),
    github: document.querySelectorAll('.contat__github')
};

const infos = {
    links: {
        twitterLink: {
            kuro: "https://twitter.com/kurotraducoes",
            agenolho: "https://twitter.com/shordreno"
        },
        githubLink: {
            kuro: "https://github.com/KurinhoT",
            agenolho: ""
        }
    },

    imgs: {
        twitterPfp: {
            kuro: "../images/kuro-twitter-pfp.jpg",
            agenolho: "../images/agenolho-twitter-pfp.jpg"
        },
        githubPfp: {
            kuro: "../images/kuro-github-pfp.png",
            agenolho: ""
        }
    },

    profiles: {
        twitterProfile: {
            kuro: "kurotraducoes",
            agenolho: "shordreno"
        },
        githubProfile: {
            kuro: "KurinhoT",
            agenolho: ""
        }
    }
};

const funcContact = (contactType, search1, search2, img1, img2, profile1, profile2) => {
    contactType.forEach(button => {
        button.addEventListener('click', async () => {
            main.innerHTML = `
            <div id="contacts">
                <div class="contact__specific">
                    <h1>Kuro</h1>
                    <div class="contact__img">
                        <img src="${img1.kuro}" alt="" srcset="">
                        <a href="${search1.kuro}" target="_blank" rel="noopener noreferrer">${profile1.kuro}</a>
                    </div>
                </div>

                <hr>
                
                <div class="contact__specific">
                    <h1>Agenolho</h1>
                    <div class="contact__img">
                        <img src="${img2.agenolho}" alt="" srcset="">
                        <a href="${search2.agenolho}" target="_blank" rel="noopener noreferrer">${profile2.agenolho}</a>
                    </div>
                </div>
            </div>
            `
        });
    });
};

funcContact(buttons.twitter, infos.links.twitterLink, infos.links.twitterLink, infos.imgs.twitterPfp, infos.imgs.twitterPfp, infos.profiles.twitterProfile, infos.profiles.twitterProfile);
funcContact(buttons.github, infos.links.githubLink, infos.links.githubLink, infos.imgs.githubPfp, infos.imgs.githubPfp, infos.profiles.githubProfile, infos.profiles.githubProfile);