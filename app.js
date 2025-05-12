let noticias = [
  {
    id: 1,
    titulo: "Betim na Supercopa IMEF 2025",
    data: "Publicado em 10/04/2025",
    autor: "<strong>Autor: Lucas Araujo</strong>",
    conteudo: "A equipe de Betim disputará a Supercopa IMEF 2025, pela categoria sub-14! A competição de categorias de base realizada pelo Instituto Mineiro das Escolas de Futebol irá acontecer entre abril e julho, e o Time da Cidade está pronto para a sua estreia no próximo sábado (12), em Lavras!",
    imagem: "img/betim.jpg",
  },

  {
    id: 2,
    titulo: "Laboratório do Ramacrisna recebe certificação internacional!",
    data: "Publicado em 10/04/2025",
    autor: "<strong>Autor: Lucas Araujo</strong>",
    conteudo: "O Fabrication Laboratory (Laboratório de Fabricação, na tradução literal) do Instituto Ramacrisna está completando 3 anos com a conquista de um marco.",
    imagem: "img/ramacrisna.webp",
  },

  {
    id: 3,
    titulo: "PUC Minas oferece atendimento gratuito pra declaração do IR",
    data: "Publicado em 10/04/2025",
    autor: "<strong>Autor: Lucas Araujo</strong>",
    conteudo: "Moradores de Betim e região podem contar com uma importante ajuda neste período de entrega do Imposto de Renda. A PUC Minas Betim, por meio do Núcleo de Apoio Contábil Fiscal (NAF).",
    imagem: "img/puc.jpg",

  },

  {
    id: 4,
    titulo: "Cruzeiro lança nova linha de uniformes",
    data: "Publicado em 13/04/2025",
    autor: "<strong>Autor: Lucas Araujo</strong>",
    conteudo: "A nova camisa do Cabuloso foi um verdadeiro sucesso!",
    imagem: "img/cruzeiro.jpg",
  },

];

let txtHTML = '';

for (let i = 0; i < noticias.length; i++) {
  let news = noticias[i];

  txtHTML += `
    <div class="news">
    <div class="news-img"><img src="${news.imagem}" alt=""></div>
    <div class="news-texto">
    <a href="detalhes.html?id=${news.id}"><h2 class="news-h2">${news.titulo}</h2></a>
        <p>${news.data}<br>${news.autor}</p>
    </div>
    </div>
`;
}
console.log(txtHTML);

document.getElementById('card-post').innerHTML = txtHTML;

let noticias2 = [
  {
    id: "a1",
    titulo: "BTS retorna ao Brasil em 2026",
    imagem: "img/bts.webp",
  },
  {
    id: "a2",
    titulo: "Cristiano marca 3 vezes",
    imagem: "img/cr7.webp",
  },
  {
    id: "a3",
    titulo: "Inscrições PROUNI 2º Semestre",
    imagem: "img/prouni.png",
  },
  

]

let txtHTML2 = '';

for (let i = 0; i < noticias2.length; i++) {
  let news2 = noticias2[i];

  txtHTML2 += `
    <aside class="sidebar">
        <div class="assuntos">
            <img src="${news2.imagem}" alt="">
            <a href="detalhes.html?id=${news2.id}"><h2>${news2.titulo}</h2></a>
        </div>
    </aside>
`;
}

console.log(txtHTML2);

document.getElementById('barralateral').innerHTML = txtHTML2;

