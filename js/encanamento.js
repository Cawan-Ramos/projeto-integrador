document.addEventListener("DOMContentLoaded", function(){
    const produtos = [
    {
        nome: "Cola Cano PVC",
        preco: "R$ 10,00",
        img: "img/encanamento/cola-cano.png"
    },
    {
        nome: "Fita Veda Rosca",
        preco: "R$ 4,00",
        img: "img/encanamento/fita-veda-rosca.png"
    },
    {
        nome: "Joelho Soldavel 25mm",
        preco: "R$ 2,50",
        img: "img/encanamento/joelho25.jfif"
    },
    {
        nome: "Luva Soldavel 25mm",
        preco: "R$ 3,00",
        img: "img/encanamento/luva25.jfif"
    },
    {
        nome: "Barra de Cano 25mm",
        preco: "R$ 24,00",
        img: "img/encanamento/tubo-pvc25.jfif"
    },
    {
        nome: "Barra de Cano 75mm",
        preco: "R$ 70,00",
        img: "img/encanamento/tubo-pvc75.jfif"
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