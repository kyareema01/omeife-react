let nav = document.querySelector('nav');
let hamburger = document.querySelector('.hamburger.cont');
let button = document.querySelector('#btn');
let hambtn = document.getElementById('ham-btn');
let getInTouch = document.querySelectorAll('#git-btn');
let exploreBtn = document.getElementById('explore-btn');
// console.log();

function hrefLocation(btn, pageLocation) {
  btn.addEventListener('click', ()=>{
    window.location.href = pageLocation;
  })
}

// Function calls for btns to contact page
// and Services 

let contactPage = 'contact-us.html';
hrefLocation(button, contactPage)

hrefLocation(hambtn, contactPage)

let servicesPage = 'services.html';
hrefLocation(exploreBtn, servicesPage)


// carousel indicators
function showIndicator(dots) {
  let slideIndex = 0;
  
  const showCurrentIndicator = () => {
    dots.forEach(dot => 
      dot.classList.remove("action")
    );
    dots[slideIndex].classList.add('action');
  
    // Add active indicator class to the current slide dot:
    slideIndex = (slideIndex + 1) % dots.length;
  }

  showCurrentIndicator()

  setInterval(showCurrentIndicator, 4200);
}

// Function calls for indicators
let dots = document.querySelectorAll(".dot");
showIndicator(dots);
let indicators = document.querySelectorAll('.indicator');
showIndicator(indicators);

 function openMenu() {
    nav.classList.toggle('open');
    hamburger.style.display = 'none'
 }

 function closeMenu() {
   nav.classList.toggle('open');
   hamburger.style.display = 'block'
 }

