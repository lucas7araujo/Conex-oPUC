let noticias = [
    {
        id: 1,
        titulo: "Betim na Supercopa IMEF 2025",
        data: "Publicado em 10/04/2025",
        autor: "<strong>Autor: Lucas Araújo</strong>",
        conteudo: "A equipe de Betim está pronta para enfrentar um dos maiores desafios do futebol de base: a Supercopa IMEF 2025. Com uma preparação intensa e treinamentos estratégicos, os jovens atletas do sub-14 querem surpreender na competição. A estreia será contra um dos favoritos ao título, o Lavras FC, e a comissão técnica acredita que a união e a tática bem definida serão os diferenciais do Time da Cidade.<br><br>Nos últimos amistosos, a equipe demonstrou evolução, testando formações diferentes e garantindo bons resultados. Além da busca pelo troféu, a participação no torneio é uma grande vitrine para os jogadores, que sonham em ingressar em categorias superiores e até mesmo em clubes profissionais. A torcida promete comparecer em peso para apoiar os talentos locais na caminhada rumo à glória.",
        imagem: "img/betim.jpg",
    },
    {
        id: 2,
        titulo: "Laboratório do Ramacrisna recebe certificação internacional!",
        data: "Publicado em 10/04/2025",
        autor: "<strong>Autor: Lucas Araújo</strong>",
        conteudo: "O Instituto Ramacrisna celebrou um grande marco ao receber uma certificação internacional de qualidade para seu Laboratório de Fabricação (FabLab). A conquista representa um reconhecimento pelo alto padrão de inovação e tecnologia oferecido aos jovens da região. O espaço, equipado com impressoras 3D, máquinas de corte a laser e softwares avançados, tem sido essencial para capacitação técnica e projetos inovadores.<br><br>Com essa certificação, o FabLab do Ramacrisna passa a integrar um seleto grupo de laboratórios ao redor do mundo que seguem padrões rigorosos de excelência. Além de impulsionar novos cursos e parcerias com empresas, a certificação abre portas para que alunos desenvolvam projetos em colaboração com instituições internacionais. O evento de celebração contou com a presença de autoridades e especialistas, reforçando o impacto positivo do laboratório na formação de futuros profissionais.",
        imagem: "img/ramacrisna.webp",
    },
    {
        id: 3,
        titulo: "PUC Minas oferece atendimento gratuito pra declaração do IR",
        data: "Publicado em 10/04/2025",
        autor: "<strong>Autor: Lucas Araújo</strong>",
        conteudo: "A PUC Minas Betim, por meio do Núcleo de Apoio Contábil Fiscal (NAF), está oferecendo atendimento gratuito para auxiliar os moradores na declaração do Imposto de Renda 2025. O serviço, coordenado por professores e alunos do curso de Ciências Contábeis, busca esclarecer dúvidas e garantir que os contribuintes enviem suas declarações corretamente, evitando multas ou problemas com a Receita Federal.<br><br>O atendimento ocorre mediante agendamento, e há uma grande procura pelos serviços devido à complexidade das regras fiscais. Muitos contribuintes aproveitam essa oportunidade para entender melhor os detalhes das deduções e dos benefícios disponíveis. Além do suporte individualizado, a PUC também realizará palestras explicativas sobre as principais mudanças na legislação tributária deste ano, garantindo que a população esteja informada e segura ao declarar seu imposto.",
        imagem: "img/puc.jpg",
    },
    {
        id: 4,
        titulo: "Cruzeiro lança nova linha de uniformes",
        data: "Publicado em 13/04/2025",
        autor: "<strong>Autor: Lucas Araújo</strong>",
        conteudo: "O Cruzeiro revelou sua nova linha de uniformes para a temporada 2025 em um evento exclusivo para torcedores. A coleção, desenvolvida em parceria com uma renomada marca esportiva, traz um design moderno e detalhes que remetem às conquistas históricas do clube. O destaque ficou por conta da camisa principal, que homenageia os títulos internacionais da Raposa com estampas sutis e um acabamento premium.<br><br>Além do visual inovador, os novos uniformes contam com tecnologias avançadas para melhorar a performance dos jogadores, garantindo mais conforto e respirabilidade. Os torcedores já podem adquirir os modelos em lojas físicas e online, e a expectativa é de uma grande adesão. O lançamento gerou uma onda de entusiasmo entre os cruzeirenses, que aguardam ansiosos para ver o time em campo vestindo a nova armadura celeste.",
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
