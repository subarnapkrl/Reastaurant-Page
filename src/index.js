import './style.css';
import homeImg from './home.jpg';
import { initialPageLoad } from './initial-page-load.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

initialPageLoad();
function switchTabs(){

const homeLink=document.querySelector('#home');
homeLink.addEventListener('click',()=>{
    clearCOntent()
    initialPageLoad();
})



  const menuLink=document.querySelector('#menu');
 menuLink.addEventListener('click',()=>{
    clearCOntent()
    menu();
 })

 const contactLink=document.querySelector('#contact');
 contactLink.addEventListener('click',()=>{
    clearCOntent()
    contact();
 })

}

function clearCOntent()
{
   const content=document.querySelector('#content');
   const nav=document.querySelector('nav');
   const main=document.querySelector('main');
    if(nav && main){
        content.removeChild(nav)
        content.removeChild(main)
    }
   
   
}
switchTabs()

