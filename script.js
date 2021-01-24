'use strict'

//слайдер
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//вывод окна анкеты
function viewDiv(){
    document.getElementById("order-alert").style.display = "block";
};


//добавление в корзину
let clicks = 0;
    function countClicks() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };


//кнопка вверх
let offset = 800;
let scrollUp=document.querySelector('.scroll-up');
const getTop = () =>document.documentElement.scrollTop;
window.addEventListener('scroll',()=>{
  if(getTop() > offset){
    scrollUp.classList.add('scroll-up--active');
  }
  else{
    scrollUp.classList.remove('scroll-up--active');
  }

});
scrollUp.addEventListener('click',()=>{
  window.scrollTo({
    top: 0,  
  });
});


//progress bar
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


//прелоадер 
let current_rotation = 0;
function rotateJs(){
    current_rotation += 10;
    document.querySelector("#sample").style.transform = 'rotate(' + current_rotation + 'deg)';
};
let timerId = setInterval(function(){
    rotateJs();
}, 50);

document.body.onload = function(){
  setTimeout(function(){
    let preloader = document.getElementById('page-preloader');
    if(!preloader.classList.contains('done')){
      preloader.classList.add('done');
    }
  },1500)
};


//бесконечная прокрутка
window.addEventListener("scroll", function(){         
  let block = document.getElementById('products');
  let contentHeight = block.offsetHeight;      
  let current_scroll = window.pageYOffset;      
  let window_height = window.innerHeight;     
  let y = current_scroll + window_height; 
  if(y >= contentHeight){
      block.innerHTML = block.innerHTML + block.innerHTML;
  }
});


//
function inputText() {
  let input_fname = document.getElementById('firstname_field').value;
  let input_lname = document.getElementById('lastname_field').value;
  document.getElementById('name').innerHTML = "Уважаемый, " + input_lname + " " + input_fname;
  let input_number = document.getElementById('phone_field').value;
  document.getElementById('number').innerHTML = input_number;
}