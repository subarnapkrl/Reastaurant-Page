import './style.css';
import homeImg from './home.jpg';
import { initialPageLoad } from './initial-page-load.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

initialPageLoad();


const homeLink=document.querySelector('#home');
homeLink.addEventListener('click',()=>{
    alert('You clicked HOME PAGE')
    
     clearCOntent();
     menuLink.classList.remove('current');
     contactLink.classList.remove('current');
     homeLink.classList.add('current');

    initialPageLoad();
   
})



  const menuLink=document.querySelector('#menu');
 menuLink.addEventListener('click',()=>{
    alert('You clicked MENU PAGE')
    
     clearCOntent();
     homeLink.classList.remove('current');
     contactLink.classList.remove('current');
     menuLink.classList.add('current');
    menu();
    
 })

 const contactLink=document.querySelector('#contact');
 contactLink.addEventListener('click',()=>{
    alert('You clicked CONTACT PAGE')
    
     clearCOntent();
     homeLink.classList.remove('current');
     contactLink.classList.remove('current');
     contactLink.classList.add('current');
    contact();
 })



 function clearCOntent()
 {
   const content=document.querySelector('#content');
   const nav=document.querySelector('nav');
  const main=document.querySelector('main');
    
       content.removeChild(main)
    
   
   
 }


