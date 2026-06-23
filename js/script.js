window.addEventListener("scroll", function(){

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";

}else{

navbar.style.boxShadow = "none";

}

});