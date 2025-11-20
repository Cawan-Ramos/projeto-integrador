document.addEventListener("DOMContentLoaded", function(){
    const produtos = [
    {
        nome: "Extensão Elétrica",
        preco: "R$ 40,00",
        img: "img/eletrica/extensão.jfif"
    },
    {
        nome: "Interruptor Simples",
        preco: "R$ 10,00",
        img: "img/eletrica/interruptor-simples.jpg"
    },
    {
        nome: "Lâmpada de Led",
        preco: "R$ 8,00",
        img: "img/eletrica/lampada-12w.jfif"
    },
    {
        nome: "Luminária de Embutir",
        preco: "R$ 25,00",
        img: "img/eletrica/luminaria-embutir.jfif"
    },
    {
        nome: "Luminária de Sobrepor",
        preco: "R$ 25,00",
        img: "img/eletrica/luminaria-sobrepor.jfif"
    },
    {
        nome: "Tomada Dupla",
        preco: "R$ 12,00", 
        img: "img/eletrica/tomada-dupla.jfif"
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