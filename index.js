const togglee= document.getElementsByClassName('toggle')[0];
const links = document.getElementsByClassName('navbar-right')[0];

togglee.addEventListener('click', ()=>
   { links.classList.toggle('active')}
)