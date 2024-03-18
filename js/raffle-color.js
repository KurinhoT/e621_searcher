const bodyColor = document.querySelector('body');
const btnColor = document.querySelector('#raffle__color');

const fetchAPI1 = (value) => {
    const result = fetch(`https://x-colors.yurace.pro/api/random/${value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    });

    return result;
}

btnColor.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await fetchAPI1(() => {
        Math.floor(Math.random() * 360);
    });
    bodyColor.style.cssText = `background-color:${result.hex};`;
});