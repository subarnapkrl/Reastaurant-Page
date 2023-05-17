function initialPageLoad()
{
    const content=document.querySelector('#content')

    //NAVBAR SECTION START

    const nav=document.createElement('nav');

    const navHeader=document.createElement('div');
    navHeader.classList.add('nav-header');

    const spanHeader=document.createElement('span');
    spanHeader.textContent="Chill-Pill";
    const paraHeader=document.createElement('p');
    paraHeader.textContent="Icecream";

    navHeader.appendChild(spanHeader);
    navHeader.appendChild(paraHeader);


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

    //NAVBAR SECTION END

    //MAIN SECTION START

    const main=document.createElement('main');

    const backgroundDiv=document.createElement('div');
    backgroundDiv.classList.add('background');
    main.append(backgroundDiv);

    const header=document.createElement('h1');
    const spanHead1=document.createElement('span');
    spanHead1.classList.add('span');
    spanHead1.textContent="Delivering";

    const spanHead2=document.createElement('span');
    spanHead2.classList.add('span');
    spanHead2.textContent="Happiness";

    header.append(spanHead1);
    header.append(spanHead2);

    main.append(header);

    const button=document.createElement('button');
    button.classList.add('btn');
    button.textContent="Order Now";
    main.append(button);

    //END MAIN SECTION


    content.append(nav);
    content.append(main);



}

export {initialPageLoad};