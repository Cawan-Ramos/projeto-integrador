function carregarComponente(arquivo, seletor) {
    fetch(arquivo)
        .then(function(resp) {
            if (!resp.ok) throw new Error('Arquivo não encontrado: ' + arquivo);
            return resp.text();
        })
        .then(function (html) {
            var destino = document.querySelector(seletor);
            if (destino) destino.innerHTML = html;
        })
        .catch(function (err) {
            console.error('Erro ao carregar componente', arquivo, err);
        });
}

function marcarMenuAtivo() {
    var path = window.location.pathname.split('/').pop();
    if (path === '') path = 'index.html';
    var links = document.querySelectorAll('.menu a');
    links.forEach(function(link) {
        var href = link.getAttribute('href');
        link.classList.remove('active');
        if (href === path) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('DOMContentLoaded', function() {
    carregarComponente('componentes/header.html', '#header-container');
    carregarComponente('componentes/footer.html', '#footer-container');
    setTimeout(marcarMenuAtivo, 150); // Espera o header aparecer para marcar o menu
});