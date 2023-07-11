function pageLoad(){
    const content = document.getElementById('content');
    const header = document.createElement('h1');
    header.textContent = 'Resturant Homepage';
    content.appendChild(header);
}

pageLoad();