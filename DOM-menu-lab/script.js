
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//task 1.0
const mainEl = document.querySelector('main');
console.log(mainEl);
//task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';
console.log(mainEl);
//task 1.2
mainEl.innerHTML= '<h1>SEI Rocks!</h1>'
//task 1.3
mainEl.classList.add('flex-ctr');
//Task 2.0
const topMenuEl = document.querySelector('#top-menu')
console.log(topMenuEl);
//task 2.1
topMenuEl.style.height = '100%';
//task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'; 
//task 2.3
topMenuEl.classList.add('flex-around');
//task 3.1
for(let i = 0; i < menuLinks.length; i++) {
    const a = document.createElement('a')
    a.setAttribute('href', menuLinks[i].href)
    a.textContent = menuLinks[i].text
    topMenuEl.appendChild(a)
}