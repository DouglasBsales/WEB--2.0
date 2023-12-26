function buttonShow(){
    let showButton = document.querySelector('.container-receitas');
    if (showButton.classList.contains('open')){
        showButton.classList.remove('open');
    }
    else {
        (showButton.classList.add('open'))
    }
}

function menuShow(){
    showMenu = document.querySelector('.menu-mobile');
        if(showMenu.classList.contains('open')){
            showMenu.classList.remove('open')
            document.querySelector('.icone').src =('imagens/menu-dark.svg');
        } 
        else {(showMenu.classList.add('open'))
        document.querySelector('.icone').src =('imagens/close-dark.svg');
    }
}