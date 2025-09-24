import './styles.css';
import { home } from './home';
import { menu } from './menu';

const content = document.getElementById('content');
const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const aboutBtn = document.querySelector('.about-btn');

function clearAll() {
  content.textContent = '';
}

window.addEventListener('DOMContentLoaded', () => {
  clearAll();
  const elements = home.loadHome();
  elements.forEach((ele) => ele.classList.add('animate-in'));
  content.append(...elements);
});

homeBtn.addEventListener('click', () => {
  clearAll();
  const elements = home.loadHome();
  elements.forEach((ele) => ele.classList.add('animate-in'));
  content.append(...elements);
});

menuBtn.addEventListener('click', () => {
  clearAll();
  const container = menu.loadMenu();
  container.classList.add('animate-in');
  content.append(container);
});

aboutBtn.addEventListener('click', () => {
  clearAll();
});
