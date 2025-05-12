const API_KEY = "496925439c5d4e388f8d02a4d9ab9c84"; 
const API_URL = `https://newsapi.org/v2/everything?q=Brasil&language=pt&apiKey=${API_KEY}`;

const params = new URLSearchParams(window.location.search);
const noticiaUrl = params.get("id"); 

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log("Dados da API:", data); 
        console.log("ID buscado:", noticiaUrl); 

        if (!data.articles || data.articles.length === 0) {
            document.getElementById("noticia-id").innerHTML = "<p>🚨 Nenhuma notícia encontrada.</p>";
            return;
        }

        const noticia = data.articles.find(news => news.url === noticiaUrl);

        if (noticia) {
            const image = noticia.urlToImage ? noticia.urlToImage : "img/default-news.jpg"; 
            const content = noticia.content ? noticia.content : "Conteúdo não disponível.";

            document.getElementById("noticia-id").innerHTML = `
                <div class="card">
                    <h2 class="titulo-detalhes">${noticia.title}</h2>
                    <img src="${image}" alt="Imagem da notícia" class="img-detalhes">
                    <p class="autor">Publicado em ${new Date(noticia.publishedAt).toLocaleDateString("pt-BR")}<br><strong>Fonte:</strong> ${noticia.source.name}</p>
                    <p class="conteudo">${content.split(" +")[0]}</p>
                  <p>Leia mais em <a href="${noticia.url}" target="_blank" style="color: #b50404;">${noticia.source.name}</a></p>
                </div>
            `;
        } else {
            document.getElementById("noticia-id").innerHTML = "<p><strong>🚨 Notícia não encontrada.</strong></p>";
        }
    })
    .catch(error => {
        console.error("Erro ao buscar notícia:", error);
        document.getElementById("noticia-id").innerHTML = "<p>🚨 Erro ao carregar a notícia.</p>";
    });
