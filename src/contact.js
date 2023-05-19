function contact()
{
    const body=document.querySelector('body')

   
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
     body.append(main)
}
export {contact};