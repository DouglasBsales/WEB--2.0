function carregarNovoEstilo() {
    var estiloAtual = document.getElementById('novo-estilo');
    
    if (estiloAtual) {
        // Se o novo estilo já estiver carregado, remova-o
        estiloAtual.parentNode.removeChild(estiloAtual);
    } else {
        // Caso contrário, crie um novo elemento link e adicione ao cabeçalho
        var novoEstilo = document.createElement('link');
        novoEstilo.rel = 'stylesheet';
        novoEstilo.href = 'novo-estilo.css';  // Substitua 'novo-estilo.css' pelo caminho do seu novo estilo
        novoEstilo.id = 'novo-estilo';
        document.head.appendChild(novoEstilo);
    }
}






