import initialLoad from './modules/initial-load';

initialLoad();

import homepage from './modules/homepage';
import menu from './modules/menu';
import contact from './modules/contact';

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');

homeBtn.addEventListener('click', homepage);
menuBtn.addEventListener('click', menu);
contactBtn.addEventListener('click', contact);
