



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];




var clicado = false;
var clicado2 = false;
var clicado3 = false;






window.sr = ScrollReveal({ reset: true});

sr.reveal('.hero', { rotate: {x: 10, y: 0, z: 0},
duration: 2000});


sr.reveal('.pc', { 

  duration: 3500

});






sr.reveal('.footer-v', { 
  
  rotate: {x: 100, y: 0, z: 0},

  duration: 1000,

});




sr.reveal('.vv', { 
  
  rotate: {x: 100, y: 25, z: 0},

  duration: 2500,

});










/*
 * Click vakinha PAGE.

*/




for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
    document.getElementById("logo2").style.opacity = "100";
  } else {
    document.getElementById("logo2").style.opacity = "0";
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});




/*
  * Não atualizar pagina após click 
  * Atualizar gostei ;)
 */


function func(){

  event.preventDefault();
  var newValue = $('#input-field-id').val();
 
  if (clicado == false)
  {
    $.ajax({
        type: 'POST',
        url: '/',
        data: "1",
        datatype: 'JSON',
    });

    console.log("Enviado mané kk");
    clicado = true;
  }

  else{}
  
}



function func2(){

  event.preventDefault();
  var newValue = $('#input-field-id').val();
 
  if (clicado2 == false)
  {
    $.ajax({
        type: 'POST',
        url: '/',
        data: "2",
        datatype: 'JSON',
    });

    console.log("Enviado mané kk");
    clicado2 = true;
  }

  else{}
  
}



function func3(){

  event.preventDefault();
  var newValue = $('#input-field-id').val();
 
  if (clicado3 == false)
  {
    $.ajax({
        type: 'POST',
        url: '/',
        data: "3",
        datatype: 'JSON',
    });

    console.log("Enviado mané kk");
    clicado3 = true;
  }

  else{}
  
}