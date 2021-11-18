// const list = document.querySelector('.output ul');
// list.innerHTML = '';
// let greetings = ['Happy Birthday!',
//                  'Merry Christmas my love',
//                  'A happy Christmas to all the family',
//                  'You\'re all I want for Christmas',
//                  'Get well soon'];

// for (let i = 0; i < greetings.length; i++) {
//   let input = greetings[i];
//   // Your conditional test needs to go inside the parentheses
//   // in the line below, replacing what's currently there
//   if (greetings[i]) {
//     let listItem = document.createElement('li');
//     listItem.textContent = input;
//     list.appendChild(listItem);
//   }
// }


// const list = document.querySelector('.output ul');
// list.innerHTML = '';
// let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                 'GNF576746573fhdg4737dh4;Greenfield',
//                 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                 'SYB4f65hf75f736463;Stalybridge',
//                 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// for (let i = 0; i < stations.length; i++) {
//   let input = stations[i];
//   // write your code just below here

//   let result = input;
//   let listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
// }

const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
let product = [
                'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'
];
let res = product.toString().split(',');
let res2 = res[0].split(':');
let num = Number(res2[1]);
for (let i = 0; i < product.length; i++) { // number 2
  // number 3
    let seperate = product.toString().split(',');
    let res = seperate[i].split(':');   
  // number 4
  // number 5
  let itemText = res[i];
  total += Number(res[i+1]);

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
