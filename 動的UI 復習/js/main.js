function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

scrollTop('button');

const target = document.getElementById("menu");
  target.addEventListener('click', () => {
    const target = document.getElementById("menu");
    target.classList.toggle('open');
  });

const tabs = document.getElementsByClassName('tab-menu-item');
for (let i = 0; i < tabs.length; i++){
  tabs[i].addEventListener('click', tabSwitch);
}
function tabSwitch() {
  document.getElementsByClassName('active')[0].classList.remove('active');
  this.classList('active');
  document.getElementsByClassName('show')[0].classList.remove('show');
  this.classList('show');
  const arrayTabs = Array.prototype.slice.call(tabs);
  const index = arrayTabs.indexOf(this);
  document.getElementsByClassName('tab-content-item')[index].classList.add('show');
};