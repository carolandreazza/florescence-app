const MENU = [
  {
    title: "Flores da semana",
    data: [
      {
        id: "1",
        title: "Caixa de Margaridinhas - Amarelo",
        price: 118.9,
        description:
          "Para levar felicidade ao seu presenteado! Este lindo cachepô, decorado com tecido floral...",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
        ingredients: [
          "Cachepô;",
          "Decorado com tecido floral;",
          "Duas margaridinhas na cor amarela;",
          "25cm x 15cm x 15cm;",
          "Acompanha cartão para recado;",
        ],
      },
    ],
  },
  {
    title: "Flores",
    data: [
      {
        id: "2",
        title: "Delicado mix de flores silvestres",
        price: 34.9,
        description:
          "Lindo buquê de flores do campo com girassol e folhas que vão deixar seu ambiente...",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "Folhagens de Eucalipto;",
          "Girassol;",
          "Chuva de Prata;",
          "Alstromélias",
          "Embalado em papel ornamental;",
          "Laço em rafia natural;",
          "Cartão para recado;",
        ],
      },
      {
        id: "3",
        title: "Alstroemérias Vermelhas",
        price: 99.7,
        description:
          "Dez hastes das duráveis alstroemérias vermelhas, perfeitas para presentear uma pessoa especial...",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "Alstroemérias vermelhas;",
          "10 hastes;",
          "Entregue montadas na caixa;",
          "40cm x 21cm x 21cm;",
        ],
      },
      {
        id: "4",
        title: "Rosas Colombianas Verdi",
        price: 168.9,
        description:
          "Buquê com 10 rosas Colombianas na cor pink, perfeitas para uma data especial...",
        cover: require("../../assets/products/cover/4.png"),
        thumbnail: require("../../assets/products/thumbnail/4.png"),
        ingredients: [
          "10 Rosas Colombianas;",
          "Na cor pink;",
          "Entregue montadas na caixa da sua preferência;",
          "40cm x 21cm x 21cm;",
        ],
      },
    ],
  },
  {
    title: "Acompanhamento",
    data: [
      {
        id: "5",
        title: "Chocolate, Trufas, Brownies e Guloseimas",
        price: 172.9,
        description:
          "Kit de presente perfeito para os amantes de chocolate. Começando por uma caixa com deliciosas trufas...",
        cover: require("../../assets/products/cover/5.png"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "Caixa com deliciosas trufas francesas de chocolate;",
          "Dois brownies clássicos americanos",
          "Seis bombons da marca Le Delice;",
          "Biscoitos de wafer com cobertura parcial de chocolate ao leite;",
          "Quatro bombons Lindor;",
        ],
      },
      {
        id: "6",
        title: "Rosa Vermelha, Chocolate Lindt e Urso de Pelúcia",
        price: 151.9,
        description:
          "Que tal se declarar através dele? Um lindo urso estilo inglês, super macio, acompanhado de uma latinha em formato coração...",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: [
          "Urso estilo inglês;",
          "Latinha em formato coração ",
          "Quatro bombons Lindor da suíça Lindt;",
          "Uma rosa colombiana vermelha;",
        ],
      },
    ],
  },
  {
    title: "Cestas",
    data: [
      {
        id: "7",
        title: "Cesta retangular c/ alça pequeno",
        price: 68.9,
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        cover: require("../../assets/products/cover/7.png"),
        description:
          "Cesto pequeno que apresenta tonalidades naturais únicas, realçando sua autenticidade...",
          ingredients: [
            "Material: Fibra Natural de Seagrass;",
            "Tons Naturais: Cada cesto apresenta tonalidades naturais únicas, realçando sua autenticidade ",
            "30D x 15W x 16H centímetros;",
          ],
      },
      {
        id: "8",
        title: "Cesto Retangular médio com alça",
        price: 78.9,
        description:
          "Cesto médio de fibra natural com alça, que apresenta tonalidades naturais únicas, realçando sua autenticidade...",
        cover: require("../../assets/products/cover/8.png"),
        thumbnail: require("../../assets/products/thumbnail/8.png"),
        ingredients: [
          "Feito em fibra sintética de alta qualidade;",
          "Perfeito para um presente; ",
          "Produto sustentável por sua alta durabilidade;",
          "Marca: Mimo Style;",
          "Tamanho: 29 x 17 x 12 cm;",
        ],
      },
      {
        id: "9",
        title: "Cesto oval grande com alça",
        price: 98.9,
        description:
          "Cesto oval grande de fibra natural com alça, com fibras naturais únicas e polimento...",
        cover: require("../../assets/products/cover/9.png"),
        thumbnail: require("../../assets/products/thumbnail/9.png"),
        ingredients: [
          "Utiliza rattan de alta qualidade;",
          "Perfeito para um presente; ",
          "Produto sustentável por sua alta durabilidade;",
          "Acabamento é finalizado com um polimento, que dá o toque final diferenciado para a peça;",
          "Tamanho: 27Cmx7Cm;",
        ],
      },
    ],
  },
]

const PRODUCTS = MENU.map((item) => item.data).flat()

const CATEGORIES = MENU.map((item) => item.title)

type ProductProps = (typeof PRODUCTS)[0]

export { MENU, PRODUCTS, CATEGORIES, ProductProps }
