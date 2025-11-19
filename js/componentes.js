// modularização dos componentes - Header e Footer
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

// destaca o nome da página escolhida
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
    
    setTimeout(function() {
        marcarMenuAtivo();

        // Menu hambúrguer - só funciona quando header já foi carregado
        var btn = document.getElementById('btn-menu');
        var nav = document.getElementById('nav-menu');
        if(btn && nav){
            btn.addEventListener('click', function(){
                var aberto = nav.classList.toggle('aberto');
                btn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
            });
            // Fecha o menu quando clicar em qualquer link
            nav.querySelectorAll('a').forEach(function(link){
                link.addEventListener('click', function(){
                    nav.classList.remove('aberto');
                    btn.setAttribute('aria-expanded', 'false');
                });
            });
        }
    }, 200); // Espera o header/footer serem "injetados"
});