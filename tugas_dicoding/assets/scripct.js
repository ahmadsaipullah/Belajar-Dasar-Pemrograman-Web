
window.onscroll = function() {myFunction()};

function myFunction() {
    
  if (document.documentElement.scrollTop > 250) {
    document.getElementById("navbar").style.backgroundColor='black';
    document.getElementById("navbar").style.position='fixed';
    document.getElementById("navbar").style.width='100%';
    document.getElementById("navbar").style.transition='4s';
  }
  else {
    document.getElementById("navbar").style.backgroundColor='';
    document.getElementById("navbar").style.position='';
    document.getElementById("navbar").style.animation = '';
    
  }
}



const menuToggel = document.querySelector('.menu-toggel input');
const nav = document.querySelector('nav ul');
const lik = document.getElementById('navbar');

menuToggel.addEventListener('click', function() {
    nav.classList.toggle('slide');
    lik.style.backgroundColor='black';
});



