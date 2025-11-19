document.addEventListener("DOMContentLoaded", function(){
    const produtos = [
    {
        nome: "Martelo de Aço",
        preco: "R$ 45,00",
        descricao: "Descrição*", 
        img: "img/produtos/martelo-25mm.webp"
    },
    {
        nome: "Arco de Serra",
        preco: "R$ 40,00",
        descricao: "Descrição*", 
        img: "img/produtos/arco-de-serra.png"
    },
    {
        nome: "Trena Starrett",
        preco: "R$ 25,00",
        descricao: "Descrição*", 
        img: "img/produtos/trena-starret.webp"
    },
    {
        nome: "Alicate Universal",
        preco: "R$ 35,00",
        descricao: "Descrição*", 
        img: "img/produtos/alicate-universal.jpg"
    },
    {
        nome: "Chave de Fenda",
        preco: "R$ 12,00",
        descricao: "Descrição*", 
        img: "img/produtos/chave-fenda.jpg"
    },
    {
        nome: "Chave Phillips",
        preco: "R$ 10,00",
        descricao: "Descrição*", 
        img: "img/produtos/chave-phillips.png"
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