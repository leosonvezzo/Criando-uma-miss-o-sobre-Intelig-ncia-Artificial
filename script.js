const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao: "Quis saber como usar IA no seu dia a dia."
      }
    ]
  },
  {
    enunciado: "Com a descoberta desta tecnologia, uma professora de tecnologia pediu que você escrevesse um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      {
        texto: "Utiliza uma ferramenta de busca com IA para ajudar a encontrar e resumir informações.",
        afirmacao: "Adotou a IA como ferramenta prática para otimizar pesquisas e estudos."
      },
      {
        texto: "Escreve o trabalho com base em conversas e pesquisas próprias na internet.",
        afirmacao: "Preferiu desenvolver o trabalho de forma tradicional e independente."
      }
    ]
  },
  {
    enunciado: "Após a elaboração do trabalho, a professora realizou um debate sobre o impacto da IA no trabalho do futuro. Como você se posiciona?",
    alternativas: [
      {
        texto: "Defende que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
        afirmacao: "Defendeu que o trabalho humano pode se transformar positivamente junto com a tecnologia."
      },
      {
        texto: "Me preocupo com as pessoas que perderão seus empregos e defendo a proteção dos trabalhadores.",
        afirmacao: "Lutou pela conscientização sobre os riscos sociais da automação no mercado de trabalho."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
