let slideIndex=0;showSlides();function showSlides(){let i;let slides=document.getElementsByClassName("mySlides");let controllers=document.getElementsByClassName("controller");for(i=0;i<slides.length;i++){slides[i].style.display="none";}
slideIndex++;if(slideIndex>slides.length){slideIndex=1;}
for(i=0;i<controllers.length;i++){controllers[i].className=controllers[i].className.replace(" active","");}
slides[slideIndex-1].style.display="block";controllers[slideIndex-1].className+=" active";setTimeout(showSlides,5000);}