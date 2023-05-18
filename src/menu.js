function menu()
{
     const content=document.querySelector('#content')

   // NAVBAR SECTION START

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
    spanHeader.style.height="100px"

    navHeader.appendChild(spanHeader);
    // navHeader.appendChild(paraHeader);


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
    menuLink.classList.add("link","current");
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

    const container=document.createElement('div');
    container.classList.add('container');

    const heading2=document.createElement('h2');
    heading2.classList.add('header');
    heading2.textContent="Our Premium Products";
    container.append(heading2);

    const section=document.createElement('div');
    section.classList.add('section');


    // ITEM 1
    const items1=document.createElement('div');
    items1.classList.add('items');
    const img1=document.createElement("img");
    img1.src="../src/item1.png";
    items1.append(img1);

    const h21=document.createElement('h2');
    h21.textContent="Saffron CheeseCake";
    items1.append(h21);

    const p1=document.createElement('p');
    p1.textContent="A Unique blend of Cheesecake Gelato infused with Real Saffron";
    items1.append(p1)

    const button1=document.createElement('button');
    button1.classList.add('btnn');
    button1.textContent="Order Now";
    items1.append(button1);
    //ITEM 1 END

    // ITEM 2
    const items2=document.createElement('div');
    items2.classList.add('items');
    const img2=document.createElement("img");
    img2.src="../src/item2.png";
    items2.append(img2);

    const h22=document.createElement('h2');
    h22.textContent="Vanilla Almond Dipped";
    items2.append(h22);

    const p2=document.createElement('p');
    p2.textContent="Premium Vanilla Gelato, Dipped in Chocolate & Crushed Almonds";
    items2.append(p2)

    const button2=document.createElement('button');
    button2.classList.add('btnn');
    button2.textContent="Order Now";
    items2.append(button2);
    //ITEM 2 END


    // ITEM 3
    const items3=document.createElement('div');
    items3.classList.add('items');
    const img3=document.createElement("img");
    img3.src="../src/item3.png";
    items3.append(img3);

    const h23=document.createElement('h2');
    h23.textContent="Premium Mango Gelato";
    items3.append(h23);

    const p3=document.createElement('p');
    p3.textContent="A Refreshing Real Mango Gelato for a Hot Summers day";
    items3.append(p3)

    const button3=document.createElement('button');
    button3.classList.add('btnn');
    button3.textContent="Order Now";
    items3.append(button3);
    //ITEM 3 END

    // ITEM 4
    const items4=document.createElement('div');
    items4.classList.add('items');
    const img4=document.createElement("img");
    img4.src="../src/item4.png";
    items4.append(img4);

    const h24=document.createElement('h2');
    h24.textContent="Toasted Pistachio Gelato";
    items4.append(h24);

    const p4=document.createElement('p');
    p4.textContent="A Strong Pistachio Ice Cream With Pistachio Crunch";
    items4.append(p4)

    const button4=document.createElement('button');
    button4.classList.add('btnn');
    button4.textContent="Order Now";
    items4.append(button4);
    //ITEM 4 END

    // ITEM 5
    const items5=document.createElement('div');
    items5.classList.add('items');
    const img5=document.createElement("img");
    img5.src="../src/item5.png";
    items5.append(img5);

    const h25=document.createElement('h2');
    h25.textContent='Lotus Oreo "Gloreotus"';
    items5.append(h25);

    const p5=document.createElement('p');
    p5.textContent="A Lotus ice cream with Oreo Cookies Collision on a Stick. Utterly GLOREOTUS!!!";

    items5.append(p5)

    const button5=document.createElement('button');
    button5.classList.add('btnn');
    button5.textContent="Order Now";
    items5.append(button5);
    //ITEM 5 END

    // ITEM 6
    const items6=document.createElement('div');
    items6.classList.add('items');
    const img6=document.createElement("img");
    img6.src="../src/item6.png";
    items6.append(img6);

    const h26=document.createElement('h2');
    h26.textContent="Strawberry Vanilla Gelato";
    items6.append(h26);

    const p6=document.createElement('p');
    p6.textContent="Vanilla Gelato Dipped in Strawberry Sorbet. A Winning Combination.";
    items6.append(p6)

    const button6=document.createElement('button');
    button6.classList.add('btnn');
    button6.textContent="Order Now";
    items6.append(button6);
    //ITEM 6 END

    // ITEM 7
    const items7=document.createElement('div');
    items7.classList.add('items');
    const img7=document.createElement("img");
    img7.src="../src/item7.png";
    items7.append(img7);

    const h27=document.createElement('h2');
    h27.textContent="Premium Chocolate Gelato";
    items7.append(h27);

    const p7=document.createElement('p');
    p7.textContent="A Rich ,Creamy, Belgian Milk chocolate Gelato.";
    items7.append(p7)

    const button7=document.createElement('button');
    button7.classList.add('btnn');
    button7.textContent="Order Now";
    items7.append(button7);
    //ITEM 7 END

    // ITEM 8
    const items8=document.createElement('div');
    items8.classList.add('items');
    const img8=document.createElement("img");
    img8.src="../src/item9.png";
    items8.append(img8);

    const h28=document.createElement('h2');
    h28.textContent="Premium Vanilla Gelato";
    items8.append(h28);

    const p8=document.createElement('p');
    p8.textContent="Premium Vanilla Gelato Stick. A Desert Chill Top Seller!";
    items8.append(p8)

    const button8=document.createElement('button');
    button8.classList.add('btnn');
    button8.textContent="Order Now";
    items8.append(button8);
    //ITEM 8 END

    section.append(items1);
    section.append(items2);
    section.append(items3);
    section.append(items4);
    section.append(items5);
    section.append(items6);
    section.append(items7);
    section.append(items8);

    container.append(section);
    
    main.append(container);

    
    content.append(nav);
    content.append(main);

}
export {menu};