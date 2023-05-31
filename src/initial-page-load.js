function initialPageLoad()
{
     const body=document.querySelector('body')

   

    //MAIN SECTION START

    const main=document.createElement('main');

    const backgroundDiv=document.createElement('div');
    backgroundDiv.classList.add('background');
    main.append(backgroundDiv);

 
    //END MAIN SECTION


    body.append(main);



}

export {initialPageLoad};
