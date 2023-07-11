export function pageLoad(){

    //create header
    const content = document.getElementById('content');
    const header = document.createElement('h2');
    header.classList.add('header')
    content.appendChild(header);

    //create menu buttons
    const headerButtons = [];
    for(let i = 0; i < 3; i++){
        const createButton = document.createElement('button');
        createButton.textContent = `Button ${i}`;
        createButton.setAttribute('button-id', i);
        headerButtons.push(createButton);
        header.appendChild(createButton);
    }
        const targetButtonId = 0;
        const targetButton = headerButtons.find(createButton => createButton.getAttribute('button-id') === `${targetButtonId}`);
        if(targetButton){
            targetButton.textContent = 'Hello';
        }
}

pageLoad();