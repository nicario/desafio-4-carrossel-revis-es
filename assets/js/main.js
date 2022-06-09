const reviews = [
  {
    id: 1,
    nome: "susan smith",
    trabalho: "web developer",
    imagem:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    texto:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    nome: "anna johnson",
    trabalho: "web designer",
    imagem:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    texto:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    nome: "peter jones",
    trabalho: "intern",
    imagem:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    texto:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    nome: "bill anderson",
    trabalho: "the boss",
    imagem:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    texto:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const imagem = document.getElementById("pessoa");
const autor = document.getElementById("autor");
const trabalho = document.getElementById("trabalho");
const informacao = document.getElementById("informacao");

const botaoanterior = document.querySelector(".botaoanterior");
const botaoproximo = document.querySelector(".botaoproximo");
const botaorandomico = document.querySelector(".botaorandomico");

let i = 0;

window.addEventListener("DOMContentLoaded", function() {
  const item = reviews[i];
  imagem.src = item.imagem;
  autor.textContent = item.nome;
  trabalho.textContent = item.trabalho;
  informacao.textContent = item.texto;
});

function mostraPessoa(pessoa) {
  const item = reviews[pessoa];
  imagem.src = item.imagem;
  autor.textContent = item.nome;
  trabalho.textContent = item.trabalho;
  informacao.textContent = item.texto;
};

botaoproximo.addEventListener('click', function(){
  i++;
  if(i > reviews.length - 1){
    i = 0;
  }
  mostraPessoa(i);
});

botaoanterior.addEventListener('click', function(){
  i--;
  if(i < 0){
    i = reviews.length - 1;
  }
  mostraPessoa(i);
});

botaorandomico.addEventListener('click', function(){
  i = Math.floor(Math.random() * reviews.length);
  mostraPessoa(i);
});






