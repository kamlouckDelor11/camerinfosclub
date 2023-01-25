//declaration

const btn__humberger = document.querySelector('.btn__humberger'),
       navBar = document.querySelector('.navbar ul'),
       flash__new = document.querySelectorAll('.flash__new'),
       wipper__presse = document.querySelector('.wipper__presse'),
       flash = document.querySelector('.flash'),
       footerCoppyRight = document.querySelector('.footer-bottom__copyright'),
       footerPhoneNumber = document.querySelector('.phoneNumber'),
       authorNameDesign = document.querySelector('.authorNameDesign'),
       presse__review = document.querySelectorAll('.presse_review');

//script footer
footerCoppyRight.innerHTML = '© camer infos club&nbsp;2022 - 2023';
footerPhoneNumber.innerHTML = '(237) 694 07 99 49';
authorNameDesign.innerHTML = 'designed by Carem KAMLOUCK';

//script anim bouton menu
       btn__humberger.addEventListener('click',()=>{
              btn__humberger.classList.toggle('btn__active');    
              navBar.classList.toggle('navbar__active');    
           
       });

//script anim revue de press
let AutoPlayPressReview;
let i = 0;
 function SaladingPressReview(){
       
       presse__review[i].classList.remove('active')
       if (i < presse__review.length-1){
              i ++
       } else{
              i = 0
       }
       presse__review[i].classList.add('active')

 };

 AutoPlayPressReview = setInterval(SaladingPressReview,6000);
// stop auto play slider when mouseover
       wipper__presse.addEventListener('mouseover',()=>{
              clearInterval( AutoPlayPressReview);
       });
   
//start auto play slading again when mouseout
       wipper__presse.addEventListener('mouseout',()=>{
              AutoPlayPressReview = setInterval(SaladingPressReview,6000);
       });

//script flash header
let AutoPlayFlashHeader;
let count = 0;
 function SaladingFlashHeader(){
       
       flash__new[count].classList.remove('actif')
       if (count < flash__new.length-1){
              count ++;
       } else{
              count = 0;
       }
       flash__new[count].classList.add('actif');
 };

 AutoPlayFlashHeader = setInterval(SaladingFlashHeader,6000);

 // stop auto play slider when mouseover
 flash.addEventListener('mouseover',()=>{
       clearInterval( AutoPlayFlashHeader);
});

//start auto play slading again when mouseout
flash.addEventListener('mouseout',()=>{
       AutoPlayFlashHeader = setInterval(SaladingFlashHeader,6000);
});



