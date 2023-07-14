export function pageLoad(){

    const content = document.getElementById('content');

    //create header
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);

    //create title
    const title = document.createElement('h2');
    title.textContent = 'Resturant Homepage';
    title.classList.add('title');
    header.appendChild(title);

    //body elements
    const bodyContent = document.createElement('div');
    bodyContent.textContent = 'Lorem Ipsum';
    bodyContent.classList.add('bodyContent');
    content.appendChild(bodyContent);
    

    //create menu buttons
    const headerButtons = [];
    for(let i = 0; i < 3; i++){
        const createButton = document.createElement('button');
        createButton.textContent = `Button ${i}`;
        createButton.setAttribute('button-id', i);
        headerButtons.push(createButton);
        header.appendChild(createButton);
    }
        let targetButtonId0 = 0;
        const targetButton0 = headerButtons.find(createButton => createButton.getAttribute('button-id') === `${targetButtonId0}`);
        if(targetButton0){
            targetButton0.textContent = 'Welcome';
        }
        let targetButtonId1 = 1;
        const targetButton1 = headerButtons.find(createButton => createButton.getAttribute('button-id') === `${targetButtonId1}`);
        if(targetButton1){
            targetButton1.textContent = 'Menu';
        }
        let targetButtonId2 = 2;
        const targetButton2 = headerButtons.find(createButton => createButton.getAttribute('button-id') === `${targetButtonId2}`);
        if(targetButton2){
            targetButton2.textContent = 'Contact';
        }
}

pageLoad();