import loadHomePage from './loadHomePage';
import loadMenuPage from './loadMenuPage';
import loadContactPage from './loadContactPage';

function setActiveTab(tabId) {
  document.querySelectorAll('nav button').forEach(btn => {
    btn.classList.remove('active-tab');
  });
  const activeBtn = document.getElementById(tabId);
  if (activeBtn) activeBtn.classList.add('active-tab');
}

function addTabListeners() {
  document.getElementById('home-tab').addEventListener('click', () => {
    setActiveTab('home-tab');
    loadHomePage();
  });
  document.getElementById('menu-tab').addEventListener('click', () => {
    setActiveTab('menu-tab');
    loadMenuPage();
  });
  document.getElementById('about-tab').addEventListener('click', () => {
    setActiveTab('about-tab');
    loadContactPage();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveTab('home-tab');
  loadHomePage();
  addTabListeners();
});