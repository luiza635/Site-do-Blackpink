const integrantes = ["blackpink", "jisoo", "jennie", "rose", "lisa"];
let atual = "blackpink";

const galerias = {
  blackpink: [
    "blackpink-capa.jpg",
    "born-pink.jpg",
    "pink-venom.jpg",
    "pinkvenom.jpg",
    "SHOW.jpg",
    "shoow.jpg",
    "jump.jpg"
  ],
  jisoo: [
    "jisoo1.jpg",
    "jisoo2.jpg",
    "jisoo3.png",
    "jisoo4.jpg",
    "jisoo5.jpg",
    "jisoo6.jpg"
  ],
  jennie: [
    "jennie1.jpg",
    "jennie3.jpg",
    "jennie4.jpg",
    "jennie5.jpg",
    "jennie6.jpg",
    "jennie8.jpg",
    "jennie9.jpg",
    "jennie10.jpg",
    "jennie11.jpg",
    "jennie12.jpg"
  ],
  rose: [
    "rose1.jpg",
    "rose2.jpg",
    "rose3.jpg",
    "rose4.jpg",
    "rose5.jpg",
    "rose6.jpg",
    "rose7.jpg",
    "rose8.jpg",
    "rose10.jpg"
  ],
  lisa: [
    "lisa1.jpg",
    "lisa2.jpg",
    "lisa3.jpg",
    "lisa4.jpg",
    "lisa5.jpg",
    "lisa6.jpg",
    "lisa7.jpg",
    "lisa9.jpg",
    "lisa10.jpg"
  ]
};

function carregarGaleria() {
  const grid = document.getElementById("galeria-grid");
  const titulo = document.getElementById("titulo-galeria");
  const contador = document.getElementById("contador");

  grid.innerHTML = "";
  titulo.innerText = "GALERIA — " + atual.toUpperCase();
  contador.innerText = (integrantes.indexOf(atual) + 1) + "/" + integrantes.length;

  galerias[atual].forEach(nome => {
    const img = document.createElement("img");
    img.src = nome;
    img.alt = "Imagem de " + atual;
    img.loading = "lazy";

    img.onerror = () => img.remove();
    grid.appendChild(img);
  });
}

document.getElementById("prev-btn").onclick = () => {
  let i = integrantes.indexOf(atual);
  atual = integrantes[(i - 1 + integrantes.length) % integrantes.length];
  carregarGaleria();
};

document.getElementById("next-btn").onclick = () => {
  let i = integrantes.indexOf(atual);
  atual = integrantes[(i + 1) % integrantes.length];
  carregarGaleria();
};

carregarGaleria();
