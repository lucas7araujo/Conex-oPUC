const API_KEY = "496925439c5d4e388f8d02a4d9ab9c84"; 
const API_URL = `https://newsapi.org/v2/everything?q=Brasil&language=pt&apiKey=${API_KEY}`;

fetch(API_URL)
    .then(response => response.json()) 
    .then(data => {
        console.log(data); 

        if (!data.articles || data.articles.length === 0) {
            document.getElementById('card-post').innerHTML = "<p>🚨 Nenhuma notícia encontrada.</p>";
            return;
        }

        let txtHTML = '';

        data.articles.forEach(news => { 
            const image = news.urlToImage ? news.urlToImage : "img/default-news.jpg"; 

            txtHTML += `
                <div class="news">
                    <div class="news-img"><img src="${image}" alt="Imagem da notícia"></div>
                    <div class="news-texto">
                        <a href="detalhes.html?id=${news.url}"><h2 class="news-h2">${news.title}</h2></a>
                        <p>Publicado em ${new Date(news.publishedAt).toLocaleDateString("pt-BR")}<br><strong>Fonte:</strong> ${news.source.name}</p>
                    </div>
                </div>
            `;
        });

        document.getElementById('card-post').innerHTML = txtHTML;
    })
    .catch(error => {
        console.error("Erro ao buscar notícias:", error);
        document.getElementById('card-post').innerHTML = "<p>🚨 Erro ao carregar as notícias.</p>";
    });


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
];

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

document.getElementById('barralateral').innerHTML = txtHTML2;
