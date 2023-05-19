function initialPageLoad()
{
     const body=document.querySelector('body')

   

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


    body.append(main);



}

export {initialPageLoad};