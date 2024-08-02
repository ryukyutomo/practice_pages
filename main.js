'use strict'

let index = 0;
let slides = document.querySelectorAll("#slider .slide");

function showSlide(i) {
  slides.forEach((slide, index) => {
    slide.style.display = index === i ? 'block' : 'none';
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 3000); // 3秒ごとにスライドを切り替えます

// const color = prompt('color?');

// switch (color) {
//   case 'red':
//     console.log('Stop!');
//     break;
//   case 'blue':
//     console.log('Go!');
//     break;
//   case 'yellow':
//   case 'green':  
//     console.log('Slowdown');
//     break;
//   default:
//     console.log('Wrong color!');
//     break;  
// }

// for (let i = 1; i <= 10; i++){
//   // 
//   console.log(`${i}: Hello`);
// }

// const rate = 1.1;

// for (let price = 150; price <= 160; price++){
//   console.log(`Price: ${price}`);
//   for (let amount = 120; amount <= 140; amount +=10){
//     console.log(price * amount * rate);
//   }
  
// }


// let command = Number(prompt('Menu 1,2,3 or 0 to exit!'));

// while (command !== 0){
//   console.log(`Menu ${command} processed.`);
//   command = Number(prompt('Menu 1,2,3 or 0 to exit!'));
// }

let command;

do {
  command = Number(prompt('Menu 1,2,3 or 0 to exit!'));
  if (command === 0){
    console.log('Exited');
  }else{
    console.log(`Menu ${command} processed.`);
  }  
} while (command !== 0);