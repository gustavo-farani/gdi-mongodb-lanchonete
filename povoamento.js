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
        nome: "Veglicious",
        categoria: "Sandubas",
        descricao: "Pão macio, Delicioso hamburger de grão de bico 100g - molho vegano de shoyu com mostarda - alface - tomate - cebola frita",
        preco: 30.90,
        id_produto: "j7u2",
        veg: "sim"
    },
    {
        nome: "Achocolatado Nescau",
        categoria: "Bebidas",
        descricao: "Embalagem 200 ml",
        preco: 3.90,
        id_produto: "990x"
    },
    {
        nome: "Suco de Laranja",
        categoria: "Bebidas",
        descricao: "Copo 200 ml",
        preco: 4.00,
        id_produto: "777b",
        veg: "sim"
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
        id_produto: "34b6"
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
        descricao: "Coca-Cola 350 ml",
        preco: 6.50,
        id_produto: "g3kk"
    },
    {
        nome: "Refrigerante Lata",
        categoria: "Bebidas",
        descricao: "Antartica 350 ml",
        preco: 6.50,
        id_produto: "g3kj"
    },
    {
        nome: "Coca-Cola 500 ml",
        categoria: "Bebidas",
        descricao: "Garrafa 500 ml",
        preco: 6.50,
        id_produto: "h4ll"
    },
    {
        nome: "Água 500 ml",
        categoria: "Bebidas",
        descricao: "Garrafa 500 ml",
        preco: 2.00,
        id_produto: "mn9l",
        veg: "sim"
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
        nome: "Nuggets Vegetal",
        categoria: "petiscos",
        descricao: "Delicioso nugget feito a base de vegetais",
        preco: 14.90,
        id_produto: "fs41",
        veg: "sim"
    },
    {
        nome: "Onion rings",
        categoria: "petiscos",
        descricao: "Cebolinhas empanadas com molho especial grátis >> aproveite, porção com 10 unidades ou aprox 200g",
        preco: 18.90,
        id_produto: "s25d",
        veg: "sim"
    },
    {
        nome: "Batata Frita G",
        categoria: "petiscos",
        descricao: "Batatinhas Mccain sequinhas e quentinhas em sua casa, porção 150g aproximadamente.",
        preco: 17.90,
        id_produto: "g5s5",
        veg: "sim"
    },
    {
        nome: "Batata Frita P",
        categoria: "petiscos",
        descricao: "Batatinhas crocantes e sequinhas Mccain. Aproximadamente 110g",
        preco: 16.90,
        id_produto: "c4e2",
        veg: "sim"
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
db.combos.insertMany([
    {
        nome: "Combo Clone Pizza Frango, Catupity, Bacon e Nordestina",
        categoria: "",
        preco: 90.90,
        produtos: [
            db.produtos.findOne({id_produto: "569s"})._id, // pizza frango catupiry e bacon
            db.produtos.findOne({id_produto: "64r1"})._id, // Nordestina
            db.produtos.findOne({id_produto: "1jj4"})._id  // Refri
            
        ],
        id_combo: "cfpj"
    },
    {
        nome: "Combo Clone Pizza Pizza Potuguesa e Peperone",
        categoria: "",
        preco: 80.90,
        produtos: [
            db.produtos.findOne({id_produto: "s54d"})._id, // pizza portuguesa
            db.produtos.findOne({id_produto: "6s15"})._id, // peperone
            db.produtos.findOne({id_produto: "34b6"})._id  // Refri
            
        ],
        id_combo: "xrl8"
    },
    {
        nome: "Combo Maldição da Gula",
        categoria: "",
        preco: 132.90,
        produtos: [
            db.produtos.findOne({id_produto: "g5s5"})._id, // batata frita G
            db.produtos.findOne({id_produto: "fs41"})._id, // nuggets
            db.produtos.findOne({id_produto: "6s15"})._id, // Pizza Peperone
            db.produtos.findOne({id_produto: "87u2"})._id, // Cheese Burguer de Frango
            db.produtos.findOne({id_produto: "1jj4"})._id, // Refrigerante 1,5L
            db.produtos.findOne({id_produto: "s25d"})._id  // Onion rings
        ],
        id_combo: "wbsj"
    },
    {
        nome: "Combo Smash da Luxúria",
        categoria: "",
        preco: 92.90,
        produtos: [
            db.produtos.findOne({id_produto: "a0b7"})._id, // Smash Cheddar
            db.produtos.findOne({id_produto: "0c88"})._id, // Smash Mussarela
            db.produtos.findOne({id_produto: "6s15"})._id, // Pizza Peperone
            db.produtos.findOne({id_produto: "an5k"})._id  // Refrigerante 1,5L           
        ],
        id_combo: "baws"
    },
    {
        nome: "Combo Smash da Gula",
        categoria: "",
        preco: 92.90,
        produtos: [
            db.produtos.findOne({id_produto: "0e87"})._id, // Smash Coração
            db.produtos.findOne({id_produto: "0c88"})._id, // Smash Mussarela
            db.produtos.findOne({id_produto: "s54d"})._id, // pizza portuguesa
            db.produtos.findOne({id_produto: "an5k"})._id  // Refrigerante 1,5L           
        ],
        id_combo: "baws"
    },
    {
        nome: "Combo Petisco da Ganância",
        categoria: "",
        preco: 45.90,
        produtos: [
            db.produtos.findOne({id_produto: "c4e2"})._id, // Batata Frita P
            db.produtos.findOne({id_produto: "65dg"})._id, // Coxinha de Frango com Catupiry
            db.produtos.findOne({id_produto: "gc51"})._id  // Bolinho de CharqueL           
        ],
        id_combo: "gff2"
    },
    {
        nome: "Combo Delícia Soberba",
        categoria: "",
        preco: 22.90,
        produtos: [
            db.produtos.findOne({id_produto: "990x"})._id, // Achocolatado Nescau
            db.produtos.findOne({id_produto: "217h"})._id, // Milk Shake
            db.produtos.findOne({id_produto: "g3kk"})._id  // Refrigerante Lata           
        ],
        id_combo: "jrsm"
    },
    {
        nome: "Combo Preguiça Vegana",
        categoria: "",
        preco: 48.90,
        produtos: [
            db.produtos.findOne({id_produto: "fs41"})._id, // Nuggets Vegetal
            db.produtos.findOne({id_produto: "s25d"})._id, // Onion rings
            db.produtos.findOne({id_produto: "g5s5"})._id, // Batata Frita G 
            db.produtos.findOne({id_produto: "j7u2"})._id  // Sanduba Veg          
        ],
        id_combo: "fgm3"
    }
]);

db.createCollection("cardapio");

db.cardapio.insertOne(
    {
        nome: "Segunda feira da Preguiça",
        dia_de_semana: "Segunda",
        combos: [
            db.combos.findOne({id_combo: "fgm3"})
        ]
    }
);

db.cardapio.insertOne(
    {
        nome: "Terça feira Soberba",
        dia_de_semana: "Terça",
        combos: [
            db.combos.findOne({id_combo: "jrsm"})
        ]
    }
);

db.cardapio.insertOne(
    {
        nome: "Quarta feira da Ganância",
        dia_de_semana: "Quarta",
        combos: [
            db.combos.findOne({id_combo: "gff2"})
        ]
    }
);

db.cardapio.insertOne(
    {
        nome: "Quinta feira da Luxúria",
        dia_de_semana: "Quinta",
        combos: [
            db.combos.findOne({id_combo: "baws"})
        ]
    }
);

db.cardapio.insertOne(
    {
        nome: "Sexta feira da Gula",
        dia_de_semana: "Sexta",
        combos: [
            db.combos.findOne({id_combo: "wbsj"})
        ]
    }
);

db.cardapio.insertOne(
    {
        nome: "Sabadão do Clone de Pizza",
        dia_de_semana: "Sabadão",
        combos: [
            db.combos.findOne({id_combo: "cfpj"})
        ]
    }
);

db.cardapio.insertOne(
    {
        nome: "Domingão do Clone de Pizza",
        dia_de_semana: "Domingão",
        combos: [
            db.combos.findOne({id_combo: "xrl8"})
        ]
    }
);
