document.addEventListener("DOMContentLoaded", function(){
    const produtos = [
    {
        nome: "Churrasqueira Bafo Pequena",
        preco: "R$ 75,00",
        img: "img/churrasqueira/churrasqueira-abafo.jfif"
    },
    {
        nome: "Churrasqueira Aço",
        preco: "R$ 130,00",
        img: "img/churrasqueira/churrasqueira-aco.jfif"
    },
    {
        nome: "Churrasqueira de Alumínio Portátil",
        preco: "R$ 100,00",
        img: "img/churrasqueira/churrasqueira-portatil.jfif"
    },
    {
        nome: "Espeto para Churrasco",
        preco: "R$ 25,00",
        img: "img/churrasqueira/espeto.webp"
    },
    {
        nome: "Grelha para Churrasqueira",
        preco: "R$ 40,00",
        img: "img/churrasqueira/grelha-churrasqueira.jfif"
    },
    {
        nome: "Vassoura Multiuso",
        preco: "R$ 20,00",
        img: "img/churrasqueira/vassoura.jfif"
    }
    ];

    const lista = document.querySelector('.produto-lista');
    if (lista) {
        lista.innerHTML = produtos.map(produto => `
            <div class="produto-card">
                <img src="${produto.img}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p class="preco">${produto.preco}</p>
                <button>Ver mais</button>
            </div>
        `).join('');
    }
});