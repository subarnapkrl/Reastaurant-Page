import './style.css';
import homeImg from './home.jpg';
import { initialPageLoad } from './initial-page-load.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

 initialPageLoad();
const body=document.querySelector('body')
    

    //NAVBAR SECTION START

    const nav=document.createElement('nav');

    const navHeader=document.createElement('div');
    navHeader.classList.add('nav-header');
    

    // const spanHeader=document.createElement('span');
    // spanHeader.textContent="Chill-Pill";
    // const paraHeader=document.createElement('p');
    // paraHeader.textContent="Icecream";
    const spanHeader=document.createElement("img");
    spanHeader.src="../src/dssss.svg"
    spanHeader.style.width="200px"
    spanHeader.style.height="150px"


    navHeader.appendChild(spanHeader);
    // navHeader.appendChild(paraHeader);


    const navBar=document.createElement('div');
    const ulList=document.createElement('ul');
    ulList.classList.add('ulList')

    const homeList=document.createElement("li");
    homeList.classList.add('list');
    const homeLink=document.createElement('a');
    homeLink.classList.add("link","current");
    homeLink.setAttribute('id','home');
    homeLink.textContent='Home';

    homeList.append(homeLink);
    ulList.append(homeList);

    const menuList=document.createElement("li");
    menuList.classList.add('list');
    const menuLink=document.createElement('a');
    menuLink.classList.add("link");
    menuLink.setAttribute('id','menu');
    menuLink.textContent='Menu';

    menuList.append(menuLink);
    ulList.append(menuList);

    const contactList=document.createElement("li");
    contactList.classList.add('list');
    const contactLink=document.createElement('a');
    contactLink.classList.add("link");
    contactLink.setAttribute('id','contact');
    contactLink.textContent='Contact';

    contactList.append(contactLink);
    ulList.append(contactList);

    navBar.append(ulList);

    nav.append(navHeader);
    nav.append(navBar);
body.append(nav)
    //NAVBAR SECTION END


const homeLinks=document.querySelector('#home');
homeLinks.addEventListener('click',()=>{
    alert('You clicked HOME PAGE')
    
     clearCOntent();
     menuLink.classList.remove('current');
     contactLink.classList.remove('current');
     homeLink.classList.add('current');

    initialPageLoad();
   
})



  const menuLinks=document.querySelector('#menu');
 menuLinks.addEventListener('click',()=>{
    alert('You clicked MENU PAGE')
    
     clearCOntent();
     homeLink.classList.remove('current');
     contactLink.classList.remove('current');
     menuLink.classList.add('current');
    menu();
    
 })

 const contactLinks=document.querySelector('#contact');
 contactLinks.addEventListener('click',()=>{
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
   
  const main=document.querySelector('main');
    
       content.removeChild(main)
    
   
   
 }


