// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

// const input = document.querySelector("#font-size-control");
// const text = document.querySelector('#text');

// // input.addEventListener('change', FontSize);

// // function FontSize(event) {
// //     text.style.fontSize = `${event.currentTarget.value}px`;
// // }

// input.addEventListener('change', event =>
//     text.style.fontSize = `${event.currentTarget.value}px`
// )


document.querySelector("#font-size-control").addEventListener('change', event =>
document.querySelector('#text').style.fontSize = `${event.currentTarget.value}px`
)