
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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
//task 4.0
const subMenuEl = document.querySelector('#sub-menu');
console.log(subMenuEl);
//task 4.1
subMenuEl.style.height = '100%';
//task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'; 
//task 4.3
subMenuEl.classList.add('flex-around');
//task 4.4
subMenuEl.style.position = 'absolute'; 
//task 4.5
subMenuEl.style.top = '0';
//task 5.1
const topMenuLinks = document.querySelectorAll('nav#top-menu > a');
const showingSubMenu = 'false'
console.log(topMenuLinks);
//task 5.2
topMenuEl.addEventListener('click', function(a) {
  a.preventDefault(); 
  console.log(a);
})




// Delegating the UL as the element to listen for a click event

//const ul = document.querySelector('ul');

/*ul.addEventListener('click', function(e) {
  e.preventDefault(); // stops a page from refreshing
  console.log(e);*/