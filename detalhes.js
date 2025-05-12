// Array de notícias
let noticias = [
    {
        id: 1,
        titulo: "Betim na Supercopa IMEF 2025",
        data: "Publicado em 10/04/2025",
        autor: "<strong>Autor: Lucas Araújo</strong>",
        conteudo: "A equipe de Betim disputará a Supercopa IMEF 2025...",
        imagem: "img/betim.jpg",
    },
    {
        id: 2,
        titulo: "Laboratório do Ramacrisna recebe certificação internacional!",
        data: "Publicado em 10/04/2025",
        autor: "<strong>Autor: Lucas Araújo</strong>",
        conteudo: "O Fabrication Laboratory do Instituto Ramacrisna está completando 3 anos com um grande marco.",
        imagem: "img/ramacrisna.webp",
    },
    {
        id: 3,
        titulo: "PUC Minas oferece atendimento gratuito pra declaração do IR",
        data: "Publicado em 10/04/2025",
        autor: "<strong>Autor: Lucas Araújo</strong>",
        conteudo: "Moradores de Betim e região podem contar com uma importante ajuda na entrega do Imposto de Renda.",
        imagem: "img/puc.jpg",
    },
    {
        id: 4,
        titulo: "Cruzeiro lança nova linha de uniformes",
        data: "Publicado em 13/04/2025",
        autor: "<strong>Autor: Lucas Araújo</strong>",
        conteudo: "A nova camisa do Cabuloso foi um verdadeiro sucesso!",
        imagem: "img/cruzeiro.jpg",
    },
];


const params = new URLSearchParams(window.location.search);
const noticiaId = parseInt(params.get("id"));


const noticia = noticias.find(news => news.id === noticiaId);


if (noticia) {
    document.getElementById("noticia-id").innerHTML = `
        <div class="card">
            <h2 class="titulo-detalhes">${noticia.titulo}</h2>
            <img src="${noticia.imagem}" alt="" class="img-detalhes">
            <p class="autor">${noticia.data}<br>${noticia.autor}</p>
            <p class="conteudo">${noticia.conteudo}</p>
        </div>
    `;
} else {
    document.getElementById("noticia-id").innerHTML = "<p><strong>Notícia não encontrada.</strong></p>";
}
