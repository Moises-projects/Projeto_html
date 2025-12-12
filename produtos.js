const imagens = [
  "cadeira_aero.png", "cadeira_duex.png", "cadeira_harpy.png",
  "cadeira_heron.png", "cadeira_pichau.png",
  "cadeira_premiun.png", "cadeira_rob.png", "cadeira_rosa.png",
  "cadeira_sla.png",

  "i3.png", "i5_9gen.png", "i5_14gen.png", "i7.png", "i9.png",
  "intelcoreultra.png",
  "ryzen5.png", "ryzen7000.png", "ryzeni9.png",

  "placa_asrock.png", "placa_asrock2.png", "placa_chalenge.png",
  "placa_inno3d.png", "placa_msi.png", "placa_palit.png",
  "placa_pure.png", "placa_radeon.png", "placa_zotac.png"
];

const produtos = imagens.map(img => {
  let nome = "";
  let preco = 0;
  let categoria = "";

  if (img.includes("cadeira")) {
    categoria = "cadeira"; // categoria correta
    nome = img.replace(".png", "").replace(/_/g, " ");
    preco = 799 + Math.random() * 300;
  } 
  
  else if (img.includes("placa")) {
    categoria = "placa"; // categoria correta
    nome = img.replace(".png", "").replace(/_/g, " ");
    preco = 1500 + Math.random() * 3000;
  } 
  
  else if (
    img.includes("i3") || img.includes("i5") || img.includes("i7") || img.includes("i9") ||
    img.includes("ryzen") || img.includes("intel")
  ) {
    categoria = "processador"; // categoria correta
    nome = img.replace(".png", "").replace(/_/g, " ");
    preco = 600 + Math.random() * 2000;
  }

  return {
    nome: nome.toUpperCase(),
    categoria,
    preco: preco.toFixed(2),
    img: "./img/" + img,
    descricao: `Produto da categoria ${categoria}.`
  };
});

const container = document.getElementById("produtos");

// Função que renderiza os produtos
function renderProdutos(lista) {
  container.innerHTML = "";

  lista.forEach(prod => {
    container.innerHTML += `
      <div class="card">
        <img src="${prod.img}">
        <h3>${prod.nome}</h3>
        <p><strong>Categoria:</strong> ${prod.categoria}</p>
        <p class="descricao">${prod.descricao}</p>
        <p class="preco">R$ ${prod.preco}</p>
        <button>Comprar</button>
      </div>
    `;
  });
}

// Renderiza todos no início
renderProdutos(produtos);

// FILTRO POR CATEGORIA
document.getElementById("filtroCategoria").addEventListener("change", function () {
  const categoria = this.value;

  if (categoria === "todas") {
    renderProdutos(produtos);
  } else {
    const filtrados = produtos.filter(p => p.categoria === categoria);
    renderProdutos(filtrados);
  }
});

// BUSCA POR NOME
document.getElementById("barraBusca").addEventListener("input", function () {
  const texto = this.value.toLowerCase();

  const filtrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(texto)
  );

  renderProdutos(filtrados);
});
