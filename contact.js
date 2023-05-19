function contact()
{
    const content=document.querySelector('#content')

    // NAVBAR SECTION START
 
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
     homeLink.classList.add("link");
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
     contactLink.classList.add("link","current");
     contactLink.setAttribute('id','contact');
     contactLink.textContent='Contact';
 
     contactList.append(contactLink);
     ulList.append(contactList);
 
     navBar.append(ulList);
 
     nav.append(navHeader);
     nav.append(navBar);
 
     //NAVBAR SECTION END
     //MAIN SECTION
     const main=document.createElement('main');

     const container=document.createElement('div');
    container.classList.add('container');

    const heading2=document.createElement('h2');
    heading2.classList.add('header');
    heading2.textContent="Contact Us";
    container.append(heading2);


    const sections=document.createElement('div');
    sections.classList.add('sections');

    const form=document.createElement('form');
    form.classList.add('form');

    form.innerHTML=`
    <label for="name">Full Name</label>
    <input type="text" name="name" id="name">
    <label for="address">Address</label>
    <input type="text" name="address" id="address">
    <label for="message">Message</label>
    <textarea name="message" id="" cols="20" rows="5"></textarea>
    <button class="button">Send Message</button>
    `

    

    sections.append(form);
    container.append(sections)

    main.append(container)
     content.append(nav)
     content.append(main)
}
export {contact};