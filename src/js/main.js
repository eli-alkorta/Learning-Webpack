'use strict';

// import '../style/style.css';
import '../style/style.scss';

const clients = ['client1', 'client2', 'client3', 'client4'];

let html = '';

clients.forEach(client => {
  html += `<li>${client}</li>`
});

document.querySelector('#clients').innerHTML = html;