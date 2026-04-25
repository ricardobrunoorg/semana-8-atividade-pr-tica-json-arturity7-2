// ============================================================
// B.1 - DEFINIÇÃO DOS DADOS (JSON)
// ============================================================

const catalogo = [
  {
    id: 1,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção científica", "aventura", "drama"],
    nota: 9.5,
    assistido: true
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime"],
    nota: 9.8,
    assistido: true
  },
  {
    id: 3,
    titulo: "Parasita",
    tipo: "filme",
    ano: 2019,
    generos: ["drama", "suspense"],
    nota: 8.6,
    assistido: false
  },
  {
    id: 4,
    titulo: "Dark",
    tipo: "serie",
    ano: 2017,
    generos: ["ficção científica", "mistério"],
    nota: 8.9,
    assistido: true
  },
  {
    id: 5,
    titulo: "O Poderoso Chefão",
    tipo: "filme",
    ano: 1972,
    generos: ["crime", "drama"],
    nota: 9.2,
    assistido: false
  },
  {
    id: 6,
    titulo: "Stranger Things",
    tipo: "serie",
    ano: 2016,
    generos: ["terror", "ficção científica", "drama"],
    nota: 8.5,
    assistido: false
  },
  {
    id: 7,
    titulo: "Coringa",
    tipo: "filme",
    ano: 2019,
    generos: ["drama", "suspense"],
    nota: 8.4,
    assistido: true
  },
  {
    id: 8,
    titulo: "Chernobyl",
    tipo: "serie",
    ano: 2019,
    generos: ["drama", "história"],
    nota: 9.3,
    assistido: false
  }
];


// ============================================================
// B.2 - ACESSO E LEITURA DOS DADOS
// ============================================================

// Exibe a estrutura completa do catálogo no console
console.log("=== CATÁLOGO COMPLETO ===");
console.log(catalogo);

// Título do primeiro item (índice 0)
console.log("\n--- Primeiro item ---");
console.log("Título:", catalogo[0].titulo);

// Ano do último item (índice = tamanho do array - 1)
console.log("\n--- Último item ---");
console.log("Ano:", catalogo[catalogo.length - 1].ano);

// Segundo gênero do terceiro item (índice 2, gênero índice 1)
console.log("\n--- Terceiro item: segundo gênero ---");
const terceiroItem = catalogo[2];

if (terceiroItem.generos[1]) {
  console.log("Segundo gênero de '" + terceiroItem.titulo + "':", terceiroItem.generos[1]);
} else {
  console.log("O item '" + terceiroItem.titulo + "' não tem um segundo gênero.");
}