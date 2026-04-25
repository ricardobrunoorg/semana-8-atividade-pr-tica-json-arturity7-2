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


// ============================================================
// B.3-A - LISTAGEM COM forEach
// ============================================================
// forEach percorre cada item do array e executa uma função
// Não retorna nada — serve só para executar uma ação por item

console.log("\n=== LISTAGEM DE TÍTULOS (forEach) ===");

catalogo.forEach(function(item) {
  console.log("- [" + item.tipo + "] " + item.titulo + " (" + item.ano + ")");
});


// ============================================================
// B.3-B - TRANSFORMAÇÃO COM map
// ============================================================
// map percorre o array e RETORNA um novo array transformado
// O array original não é alterado

console.log("\n=== TÍTULOS EM CAIXA ALTA (map) ===");

const titulosEmCaixaAlta = catalogo.map(function(item) {
  return item.titulo.toUpperCase();
});

console.log(titulosEmCaixaAlta);


// ============================================================
// B.3-C - SELEÇÃO COM filter
// ============================================================
// filter percorre o array e RETORNA um novo array
// contendo apenas os itens que passam na condição (true)

console.log("\n=== NÃO ASSISTIDOS (filter) ===");

const naoAssistidos = catalogo.filter(function(item) {
  return item.assistido === false;
});

console.log("Quantidade de itens não assistidos:", naoAssistidos.length);


// ============================================================
// B.3-D - BUSCA COM find
// ============================================================
// find percorre o array e RETORNA o PRIMEIRO item
// que satisfaz a condição — ou undefined se não encontrar

console.log("\n=== PRIMEIRO ITEM COM NOTA >= 9 (find) ===");

const itemDestaque = catalogo.find(function(item) {
  return item.nota >= 9;
});

if (itemDestaque) {
  console.log("Título:", itemDestaque.titulo);
  console.log("Nota:", itemDestaque.nota);
} else {
  console.log("Nenhum item com nota maior ou igual a 9 foi encontrado.");
}


// ============================================================
// B.3-E - AGREGAÇÃO COM reduce
// ============================================================
// reduce percorre o array acumulando um valor
// Recebe dois parâmetros: o acumulador e o item atual
// O segundo argumento do reduce (0) é o valor inicial do acumulador

console.log("\n=== MÉDIAS DE NOTAS (reduce) ===");

// --- Média geral ---
// A cada passo, somamos a nota do item ao acumulador
const somaGeral = catalogo.reduce(function(acumulador, item) {
  return acumulador + item.nota;
}, 0);

const mediaGeral = somaGeral / catalogo.length;
console.log("Média geral de notas:", mediaGeral.toFixed(2));

// --- Média dos assistidos ---
// Primeiro filtramos só os assistidos, depois calculamos a média deles
const assistidos = catalogo.filter(function(item) {
  return item.assistido === true;
});

const somaAssistidos = assistidos.reduce(function(acumulador, item) {
  return acumulador + item.nota;
}, 0);

const mediaAssistidos = somaAssistidos / assistidos.length;
console.log("Média de notas dos assistidos:", mediaAssistidos.toFixed(2));


// ============================================================
// B.3-F - CHECAGENS COM some E every
// ============================================================
// some  → retorna TRUE se AO MENOS UM item passar na condição
// every → retorna TRUE somente se TODOS os itens passarem

console.log("\n=== CHECAGENS (some e every) ===");

// Existe algum item com ano anterior a 2000?
const temItemAntigo = catalogo.some(function(item) {
  return item.ano < 2000;
});
console.log("Existe algum item com ano < 2000?", temItemAntigo);

// Todos os itens têm pelo menos 1 gênero?
const todosTemGenero = catalogo.every(function(item) {
  return item.generos.length >= 1;
});
console.log("Todos os itens têm pelo menos 1 gênero?", todosTemGenero);