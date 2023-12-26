function buttonShow(){
    let showButton = document.querySelector('.container-receitas');
    if (showButton.classList.contains('open')){
        showButton.classList.remove('open');
    }
    else {
        showButton.classList.add('open')
    }
}