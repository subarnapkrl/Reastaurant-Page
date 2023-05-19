import './style.css';
import homeImg from './home.jpg';
import { initialPageLoad } from './initial-page-load.js';
import { menu } from './menu.js';
import { contact } from './contact.js';


const body=document.querySelector('body')
    

    //NAVBAR SECTION START

    const nav=document.createElement('nav');

    const navHeader=document.createElement('div');
    navHeader.classList.add('nav-header');
    

    const spanHeader=document.createElement("img");
    spanHeader.src="../src/dssss.svg"
    spanHeader.style.width="200px"
    spanHeader.style.height="150px"


    navHeader.appendChild(spanHeader);
    


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
    contactLink.textContent='Contacts';

    contactList.append(contactLink);
    ulList.append(contactList);

    navBar.append(ulList);

    nav.append(navHeader);
    nav.append(navBar);
body.append(nav)
    //NAVBAR SECTION END

     initialPageLoad();






homeLink.addEventListener('click',()=>{
   //  alert('You clicked HOME PAGE')
    
     clearCOntent();
     menuLink.classList.remove('current');
     contactLink.classList.remove('current');
     homeLink.classList.add('current');

    initialPageLoad();
   
})

const btn=document.querySelector('.btn');
btn.addEventListener('click',()=>{
   // alert('You clicked on ORDER NOW Button');
   clearCOntent()
   menuLink.classList.add('current');
   menu()
   homeLink.classList.remove('current');
     contactLink.classList.remove('current');
})



 menuLink.addEventListener('click',()=>{
   //  alert('You clicked MENU PAGE')
    
     clearCOntent();
     
     menuLink.classList.add('current');
    menu();
    homeLink.classList.remove('current');
     contactLink.classList.remove('current');
    
 })

 contactLink.addEventListener('click',()=>{
   //  alert('You clicked CONTACT PAGE')
    
     clearCOntent();
     homeLink.classList.remove('current');
     menuLink.classList.remove('current');
     contactLink.classList.add('current');
    contact();
 })



 function clearCOntent()
 {
   const body=document.querySelector('body')
   
  const main=document.querySelector('main');
    
       body.removeChild(main)
    
   
   
 }


