document.addEventListener("DOMContentLoaded", function(){
    const produtos = [
    {
        nome: "Produto",
        preco: "R$ 00,00",
        descricao: "Descrição*", 
        img: ""
    },
    {
        nome: "Produto",
        preco: "R$ 00,00",
        descricao: "Descrição*", 
        img: ""
    },
    {
        nome: "Produto",
        preco: "R$ 00,00",
        descricao: "Descrição*", 
        img: ""
    },
    {
        nome: "Produto",
        preco: "R$ 00,00",
        descricao: "Descrição*", 
        img: ""
    },
    {
        nome: "Produto",
        preco: "R$ 00,00",
        descricao: "Descrição*", 
        img: ""
    },
    {
        nome: "Produto",
        preco: "R$ 00,00",
        descricao: "Descrição*", 
        img: ""
    }
    ];

    const lista = document.querySelector('.produto-lista');
    if (lista) {
        lista.innerHTML = produtos.map(produto => `
            <div class="produto-card">
                <img src="${produto.img}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p class="preco">${produto.preco}</p>
                <p>${produto.descricao}</p>
                <button>Ver mais</button>
            </div>
        `).join('');
    }
});