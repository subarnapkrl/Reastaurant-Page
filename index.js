import './style.css';
import homeImg from './home.jpg';
import { initialPageLoad } from './initial-page-load.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

initialPageLoad();


const homeLink=document.querySelector('#home');
homeLink.addEventListener('click',()=>{
    alert('You clicked HOME PAGE')
     clearCOntent()
    initialPageLoad();
   
})



  const menuLink=document.querySelector('#menu');
 menuLink.addEventListener('click',()=>{
    alert('You clicked MENU PAGE')
     clearCOntent()
    menu();
    
 })

 const contactLink=document.querySelector('#contact');
 contactLink.addEventListener('click',()=>{
    alert('You clicked CONTACT PAGE')
     clearCOntent()
    contact();
 })



 function clearCOntent()
 {
   const content=document.querySelector('#content');
   const nav=document.querySelector('nav');
  const main=document.querySelector('main');
    
        content.removeChild(nav)
       content.removeChild(main)
    
   
   
 }


