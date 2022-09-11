// navbar
const display = document.getElementById("drop");
const muncul = document.getElementById("tampil");

display.addEventListener('click', function(){
  muncul.classList.toggle("slide");

});

// scrollview
document.addEventListener('click', function(event) {
  if (!event.target.matches('.page-scroll')) return;

  event.preventDefault();
  
  var element = document.getElementById(event.target.dataset.target);
  
  element.scrollIntoView({behavior: "smooth"});

});

//navbar background
window.onscroll = function() {myFunction()};

function myFunction() {
    
  if (document.documentElement.scrollTop > 250) {
    document.getElementById("navbar").style.backgroundColor='black';  
    document.getElementById("navbar").style.position='fixed'; 
  }
  else {
    document.getElementById("navbar").style.backgroundColor='';
  }
}












