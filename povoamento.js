// Dropando o database pra povoar tudo novamente
db.dropDatabase();

// Criando a coleção de produtos para inserir produtos nela
db.createCollection("produtos");

// Inserindo produtos da categoria pratos
db.produtos.insertMany([
    /*
    {
        nome: "",
        categoria: "Prato",
        descricao: "",
        preco: ,
        id_produto: ""
    }
    */
    {
        nome: "Smash Cheddar",
        categoria: "Sandubas",
        descricao: "Pão Dourarinho selado na manteiga, duas carnes fininhas bem tostadas e sequinhas com duas fatias de delicioso queijo cheddar e cebola refogada dando aquele toque especial com sua maionese artesanal!!",
        preco: 19.90,
        id_produto: "a0b7"
    },
    {
        nome: "Cheese Filé",
        categoria: "Sandubas",
        descricao: "Pão bola - filé bovino - queijo prato - alface - tomate - cebola frita - batata palha",
        preco: 29.70,
        id_produto: "b9pk"
    },
    {
        nome: "Smash Mussarela",
        categoria: "Sandubas",
        descricao: "Um delicioso pão douradinho selado com manteiga, com dois saborosos Hamburgers artesanais Fininhos e bem tostados, duas fatias de queijo Mussarela e cebola refogada, pra dar aquele upgrade tem a sua maionese artesanal da Confraria.",
        preco: 21.90,
        id_produto: "0c88"
    },
    {
        nome: "Smash Coração",
        categoria: "Sandubas",
        descricao: "Pão bola - coração de frango - queijo derretido - alface - tomate - cebola frita - batata palha.        ",
        preco: 29.99,
        id_produto: "0e87"
    },
    {
        nome: "Cheddar Bacon",
        categoria: "Sandubas",
        descricao: "Pão bola macio tipo Brioche, Hamburger Artesanal suculento tostado por fora, Queijo Cheddar, Bacon em Cubos bem assados com Salada e Batata Palha. Experimente!",
        preco: 26.90,
        id_produto: "44kj"
    },
    {
        nome: "Cheese Burguer de Frango",
        categoria: "Sandubas",
        descricao: "Pão Brioche macio, Delicioso hamburger artesanal 120g - queijo Mussarela derretido - bacon em cubos no ponto certo - alface - tomate - cebola frita - batata palha",
        preco: 33.90,
        id_produto: "87u2"
    },
    {
        nome: "Achocolatado Nescau",
        categoria: "Bebidas",
        descricao: "Embalagem 200 ml",
        preco: 3.90,
        id_produto: "990x"
    },
    {
        nome: "Milk Shake",
        categoria: "Bebidas",
        descricao: "Copo 300 ml",
        preco: 16.90,
        id_produto: "217h"
    },
    {
        nome: "Milk Shake",
        categoria: "Bebidas",
        descricao: "Copo 500 ml",
        preco: 18.90,
        id_produto: "an5k"
    },
    {
        nome: "Refrigerante 1,5 L",
        categoria: "Bebidas",
        descricao: "Coca-Cola 1,5 L",
        preco: 13.90,
        id_produto: "an5k"
    },
    {
        nome: "Refrigerante 1,5 L",
        categoria: "Bebidas",
        descricao: "Antartica 1,5 L",
        preco: 12.90,
        id_produto: "1jj4"
    },
    {
        nome: "Refrigerante Lata",
        categoria: "Bebidas",
        descricao: "Lata 350 ml",
        preco: 6.50,
        id_produto: "g3kk"
    },
    {
        nome: "Coca-Cola 500 ml",
        categoria: "Bebidas",
        descricao: "Lata 350 ml",
        preco: 6.50,
        id_produto: "g3kk"
    },
    {
        nome: "Pizza Frango Catupiry e Bacon",
        categoria: "Pizza",
        descricao: "Frango desfiado com Catupiry, queijo muçarela e Bacon em cubos.",
        preco: 52.90,
        id_produto: "569s"
    },
    {
        nome: "Pizza Nordestina",
        categoria: "Pizza",
        descricao: "Charque desfiada, queijo muçarela, bolinhas de cream cheese leva também cebola e azeitona fatiadas.",
        preco: 52.90,
        id_produto: "64r1"
    },
    {
        nome: "Pizza Peperone",
        categoria: "Pizza",
        descricao: "Peperoni fininho e picante, queijo muçarela delicioso, cebola fatiadas fininha e bolinhas de cream cheese que são tostados em nosso forno.",
        preco: 47.90,
        id_produto: "6s15"
    },
    {
        nome: "Pizza Marguerita",
        categoria: "Pizza",
        descricao: "Massa fininha, com molho de tomate que se expande até a borda e uma fina camada de queijo Catupiry, Muçarela, fatias de tomate, manjericão, orégano e azeitona",
        preco: 43.90,
        id_produto: "5s65"
    },
    {
        nome: "Pizza Potuguesa",
        categoria: "Pizza",
        descricao: "Ovos fatiados, queijo Muçarela derretido, presunto de excelente sabor e qualidade, Bacon em cubose ainda com cebola e azeitona fatiadas.",
        preco: 49.90,
        id_produto: "s54d"
    },
    {
        nome: "Bolinho de Charque",
        categoria: "petiscos",
        descricao: "6 unidades do nosso delicioso bolinho de charque.",
        preco: 16.90,
        id_produto: "gc51"
    },
    {
        nome: "Coxinha de Frango com Catupiry",
        categoria: "petiscos",
        descricao: "6 unidades da nossa coxinha de charque com catupiry.",
        preco: 15.90,
        id_produto: "65dg"
    },
    {
        nome: "",
        categoria: "petiscos",
        descricao: "",
        preco: ,
        id_produto: ""
    },
    {
        nome: "",
        categoria: "petiscos",
        descricao: "",
        preco: ,
        id_produto: ""
    },
    {
        nome: "",
        categoria: "petiscos",
        descricao: "",
        preco: ,
        id_produto: ""
    }


    
]);

// Inserindo produtos da categoria pratos
db.produtos.insertMany([
    /*
    {
        nome: "",
        categoria: "Prato",
        descricao: "",
        preco: ,
        id_produto: ""
    }
    */
    {
        nome: "Smash Cheddar",
        categoria: "Sandubas",
        descricao: "Pão Dourarinho selado na manteiga, duas carnes fininhas bem tostadas e sequinhas com duas fatias de delicioso queijo cheddar e cebola refogada dando aquele toque especial com sua maionese artesanal!!",
        preco: 19.90,
        id_produto: "a0b7"
    }
]);

// Criação da categoria de combos
db.createCollection("combos");

// inserção dos combos um por um, usando produtos já existentes
db.combos.insertOne(
    /*
    {
        nome: "",
        categoria: "";
        preco: ,
        produtos: [
            db.produtos.findOne({id_produto: ""})._id
        ],
        id_combo: ""
    }
    */

    
    


);

db.createCollection("cardapio");

db.cardapio.insertOne(
    {
        nome: "",
        dia_de_semana: "",
        combos: [
            db.combos.findOne({id_combo: ""})
        ]
    }
)
