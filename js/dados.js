// Dados do JSON
const dados = {
    "personagens": [
      {
        "nome": "Monkey D. Luffy",
        "apelido": "Chapéu de Palha",
        "tripulação": "Piratas do Chapéu de Palha",
        "cargo": "Capitão",
        "imagem": "./images/luffy.png"
      },
      {
        "nome": "Roronoa Zoro",
        "apelido": "Pirata Caçador de Piratas",
        "tripulação": "Piratas do Chapéu de Palha",
        "cargo": "Esgrimista",
        "imagem": "./../images/zoro.png"
      },
      {
        "nome": "Nami",
        "apelido": "A Gata Ladra",
        "tripulação": "Piratas do Chapéu de Palha",
        "cargo": "Navegadora",
        "imagem": "/../images/nami.png"
      },
      {
        "nome": "Usopp",
        "apelido": "Sogeking",
        "tripulação": "Piratas do Chapéu de Palha",
        "cargo": "Atirador",
        "imagem": "../images/Usopp.png"
      },
      {
        "nome": "Sanji",
        "apelido": "Black Leg",
        "tripulação": "Piratas do Chapéu de Palha",
        "cargo": "Cozinheiro",
        "imagem": "../images/sanji.png"
      },
      {
        "nome": "Nico Robin",
        "apelido": "Flor Demoníaca",
        "tripulação": "Piratas do Chapéu de Palha",
        "cargo": "Arqueóloga",
        "imagem": "../images/nico.png"
      }
    ]
};


// Referência à div de cards
const cardsDiv = document.querySelector('.cards');

// Itera sobre os personagens no JSON e cria um card para cada um
dados.personagens.forEach(personagem => {
    // Cria um elemento div para o card
    const card = document.createElement('div');
    card.classList.add('card');

    // Adiciona a imagem do personagem ao card
    const imagem = document.createElement('img');
    imagem.src = personagem.imagem;
    imagem.alt = personagem.nome;
    card.appendChild(imagem);

    // Adiciona as informações do personagem ao card
    const informacoes = document.createElement('div');
    informacoes.innerHTML = `
        <h2>${personagem.nome}</h2>
        <span class="apelido"><strong>Apelido:</strong> ${personagem.apelido}</span>
        <span><strong>Tripulação:</strong> ${personagem.tripulação}</span>
        <span><strong>Cargo:</strong> ${personagem.cargo}</span>
    `;
    card.appendChild(informacoes);

    // Adiciona o card à div de cards
    cardsDiv.appendChild(card);
});
