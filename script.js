let cartas = [
  {
    nome: "Homem de Ferro",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg`,
    atributos: {
      força: 5,
      velocidade: 6,
      habilidade: 2,
      inteligência: 6
    }
  },
  {
    nome: "Capitão América",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg`,
    atributos: {
      força: 3,
      velocidade: 2,
      habilidade: 6,
      inteligência: 3
    }
  },
  {
    nome: "Thor",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg`,
    atributos: {
      força: 6,
      velocidade: 5,
      habilidade: 3,
      inteligência: 2
    }
  },
  {
    nome: "Hulk",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_03.jpg`,
    atributos: {
      força: 6,
      velocidade: 5,
      habilidade: 4,
      inteligência: 1
    }
  },
  {
    nome: "Nick Fury",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/284nfy_ons_crd_01.jpg`,
    atributos: {
      força: 1,
      velocidade: 2,
      habilidade: 4,
      inteligência: 3
    }
  },
  {
    nome: "Viúva Negra",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_04.jpg`,
    atributos: {
      força: 1,
      velocidade: 2,
      habilidade: 6,
      inteligência: 4
    }
  },
  {
    nome: "Gavião Arqueiro",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/018hcb_ons_crd_02.jpg`,
    atributos: {
      força: 1,
      velocidade: 1,
      habilidade: 6,
      inteligência: 2
    }
  },
  {
    nome: "Loki",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/017lok_ons_crd_03.jpg`,
    atributos: {
      força: 5,
      velocidade: 4,
      habilidade: 4,
      inteligência: 5
    }
  },
  {
    nome: "Pantera Negra",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_ons_crd_02.jpg`,
    atributos: {
      força: 3,
      velocidade: 6,
      habilidade: 4,
      inteligência: 5
    }
  },
  {
    nome: "Soldado Invernal",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/015wsb_ons_crd_03.jpg`,
    atributos: {
      força: 5,
      velocidade: 4,
      habilidade: 4,
      inteligência: 3
    }
  },
  {
    nome: "Máquina de Guerra",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/042wmr_ons_crd_03.jpg`,
    atributos: {
      força: 5,
      velocidade: 6,
      habilidade: 2,
      inteligência: 5
    }
  },
  {
    nome: "Visão",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/013vis_ons_crd_01-1.jpg`,
    atributos: {
      força: 2,
      velocidade: 5,
      habilidade: 6,
      inteligência: 6
    }
  },
  {
    nome: "Homem-Aranha",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg`,
    atributos: {
      força: 2,
      velocidade: 6,
      habilidade: 5,
      inteligência: 3
    }
  },
  {
    nome: "Wanda",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_02.jpg`,
    atributos: {
      força: 1,
      velocidade: 3,
      habilidade: 6,
      inteligência: 4
    }
  },
  {
    nome: "Doutor Estranho",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_ons_crd_02.jpg`,
    atributos: {
      força: 1,
      velocidade: 4,
      habilidade: 6,
      inteligência: 6
    }
  },
  {
    nome: "Senhor das Estrelas",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/021slq_ons_crd_02.jpg`,
    atributos: {
      força: 5,
      velocidade: 5,
      habilidade: 2,
      inteligência: 2
    }
  },
  {
    nome: "Thanos",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/019tha_ons_crd_03.jpg`,
    atributos: {
      força: 6,
      velocidade: 4,
      habilidade: 5,
      inteligência: 4
    }
  },
  {
    nome: "Ultron",
    imagem: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/061ult_ons_crd_01-1.jpg`,
    atributos: {
      força: 5,
      velocidade: 6,
      habilidade: 5,
      inteligência: 6
    }
  }
];
let cartaJogador, cartaMaquina;
let numeroCarta;
let pontosJogador = 0, pontosMaquina = 0;

exibirQuantidadeDeCartas()

// Funções
function exibirQuantidadeDeCartas() {
  let divQuantidadeCartas = document.getElementById("quantidade-cartas");

  divQuantidadeCartas.innerHTML = `<p>Quantidade de cartas disponíveis: ${cartas.length}</p>`;
}

function receberCartaSorteada() {
  numeroCarta = parseInt(Math.random() * cartas.length);

  return cartas[numeroCarta];
}

function sortearCarta() {
  document.getElementById("resultado").innerHTML = "";

  cartaMaquina = receberCartaSorteada();
  cartas.splice(numeroCarta, 1);

  cartaJogador = receberCartaSorteada();
  cartas.splice(numeroCarta, 1);

  exibirQuantidadeDeCartas()
  exibirCartaJogador()
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
}

function exibirCartaJogador() {
  let divCartaJogador = document.getElementById("carta-jogador");

  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  inserirNomeDaCarta(divCartaJogador, cartaJogador)
  exibirAtributosCartaJogador(divCartaJogador, cartaJogador)
}

function inserirNomeDaCarta(divCarta, carta) {
  let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  let nome = `<p class="carta-subtitle">${carta.nome}</p>`;

  divCarta.innerHTML = moldura + nome;
}

function exibirAtributosCartaJogador(divCarta, carta) {
  let divOpcoes = `<div id="opcoes" class="carta-status">`;

  for (let atributo in carta.atributos) {
    divOpcoes += `<input type="radio" id="${atributo}" name="atributo" value="${atributo}"> <label for="${atributo}">${atributo} ${carta.atributos[atributo]}</label> <br>`;
  }
  divOpcoes += "</div>";

  divCarta.innerHTML += divOpcoes;
}

//Função jogar
function jogar() {
  let atributoSelecionado = atributoEscolhido()

  exibirResultado(atributoSelecionado)
  exibirPlacar()
  exibirCartaMaquina()

  document.getElementById("btnJogar").disabled = true;

  cartas.length < 2 ? exibirResultadoFinal() : document.getElementById("btnProximaRodada").disabled = false;
}

function atributoEscolhido() {
  let atributosRadio = document.getElementsByName("atributo");
  let atributoSelecionado = "";

  for (let i = 0; i < atributosRadio.length; i++) {
    if (atributosRadio[i].checked) {
      atributoSelecionado = atributosRadio[i].value;
    }
  }
  return atributoSelecionado;
}

function exibirResultado(atributoSelecionado) {
  let divResultado = document.getElementById("resultado");

  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    divResultado.innerHTML = `<p class="resultado-final">Ganhou!</p>`;
    pontosJogador++;
  } else if (cartaMaquina.atributos[atributoSelecionado] > cartaJogador.atributos[atributoSelecionado]) {
    divResultado.innerHTML = `<p class="resultado-final">Perdeu!</p>`;
    pontosMaquina++;
  } else {
    divResultado.innerHTML = `<p class="resultado-final">Empatou...</p>`;
  }
}

function exibirPlacar() {
  let divPlacar = document.getElementById("placar");
  divPlacar.innerHTML = `<p>Jogador ${pontosJogador} x ${pontosMaquina} Máquina</p>`;
}

function exibirCartaMaquina() {
  let divCartaMaquina = document.getElementById("carta-maquina");

  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  inserirNomeDaCarta(divCartaMaquina, cartaMaquina)
  exibirAtributosCartaMaquina(divCartaMaquina, cartaMaquina)
}

function exibirResultadoFinal() {
  document.getElementById("btnProximaRodada").disabled = true;

  if (pontosJogador > pontosMaquina) {
    document.getElementById("resultado").innerHTML = "<p class='resultado-final'>Você venceu da Máquina!</p>";
  } else if (pontosJogador < pontosMaquina) {
    document.getElementById("resultado").innerHTML = "<p class='resultado-final'>Você perdeu para Máquina, tente novamente...</p>";
  } else {
    document.getElementById("resultado").innerHTML = "<p class='resultado-final'>Empate, tente novamente...</p>";
  }
}

function exibirAtributosCartaMaquina(divCarta, carta) {
  let divOpcoes = `<div class="carta-status">`;

  for (let atributo in carta.atributos) {
    divOpcoes += `<span class="carta-maquina">${atributo} ${carta.atributos[atributo]}</span> <br>`;
  }
  divOpcoes += "</div>";
  divCarta.innerHTML += divOpcoes;
}

//Função proximaRodada
function proximaRodada() {
  document.getElementById("btnProximaRodada").disabled = true;

  document.getElementById("resultado").innerHTML = "<p class='resultado-final'>Sortear outra carta</p>";

  document.getElementById("cartas").innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`;

  document.getElementById("btnSortear").disabled = false;
}