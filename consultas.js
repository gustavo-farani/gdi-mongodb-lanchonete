// Consultas de Bruna 
// Update e add to set - Atualizar o combo vegeteriano para conter um suco nos seus produtos
db.combos.update(
    { id_combo: "fgm3" },
    { $addToSet: { produtos:  db.produtos.findOne({id_produto: "777b"})._id } }
);
db.combos.find({ id_combo: "fgm3" }).pretty();

//gte e pretty - produtos que possuem preço maior que 30 reais, formatados na saída
db.produtos.find({ preco: { $gte: 30.00 } } ).pretty();

//exists - verificar quais produtos veganos existem no cardápio
db.produtos.find({ veg : {$exists: true } }).pretty();

// Consultas de Filipe
// Find: Retorna todos os produtos salvos
db.produtos.find().pretty();

// Gropu: agrupa os produtos por categoria e mostra a soma total dos preços de cada categoria
db.produtos.aggregate([
    {
        $group: {
            _id: "$categoria",
            preco_total: {
                $sum: "$preco"
            }
        }
    }
]);

// Sort: Ordenando os combos por ordem de preço
db.combos.find().sort({preco: -1}).pretty()

// All: Lista de combos que tem os produtos listados
db.combos.find({produtos: {$all: [
    db.produtos.findOne({id_produto: "0c88"})._id, // Smash Mussarela
    db.produtos.findOne({id_produto: "an5k"})._id  // Refrigerante 1,5L 
]}}).pretty();

// Save: altera o conteudo do objeto vaseado em seu _id
db.produtos.save({
    _id: db.produtos.findOne({id_produto: "g3kk"})._id,
    nome: "Refrigerante Lata",
    categoria: "Bebidas",
    descricao: "Antartica 350 ml",
    preco: 6.75,
    id_produto: "g3kk"
});

//Consultas Rodrigo
// Project, vai retornar o nome do produto e o preço.
db.produtos.find({id_produto: "g3kk"}).pretty();

db.produtos.aggregate([
    {
        $project:
        {
            _id: 0,
            nome: 1,
            preco: 1
        }
    }
]);

// AVG: retorna a média de preço dos combos

db.combos.aggregate([
    {
        $group:
            {
                _id: "$preco",
                avgPreco: {$avg: "$preco"}
            }
    }
]);

//FUNCTION: Lista o cardapio de nome Quinta feira da Luxúria

db.cardapio.find({$where: function() {
    return (this.nome == "Quinta feira da Luxúria")
}
});

//FILTER:retorna os produtos que são mais de 30 reis 

db.produtos.aggregate([
    {
        $project: {
            _id: 0,
            nome: 1,
            preco: {
                input: "$preco",
                as: "preco_maior",
                cond: {$gte: ["$preco", 30.00]}
            }
        }
    }
]);

// FINDONE: Retorna uma bebida

db.produtos.findOne({categoria: "Bebidas"});


/*
MATCH
Retorna os produtos com precos entre 10 e 20 reais
*/
db.produtos.aggregate( [
{ $match: { preco: { $gt: 10, $lt: 20} } }
]).pretty();


/*
MAX
Para cada categoria, é retornado o preco do produto mais caro de cada categoria.
*/
db.produtos.aggregate([
    {
        $group:
            {
                _id: "$categoria",
                maior_preco: {$max: "$preco"},
            }
    }
]);

/*
SEARCH
Retorna todos os combos que tem a string Vegetariana em seu nome
*/

db.combos.createIndex({nome: "text"}); /*Criando index para chamar a cláusula search */
db.combos.find(
   { $text: { $search: "Vegetariana"} }
).pretty()

/* 
LOOKUP
Retorna todos os produtos com um campo a mais (array de combos com preco igual ao produto corrente). Esse array será preenchido
com combos se o preco do produto corrente for igual ao preço do combo (ver o produto retornado Pizza Peperone).
*/

db.produtos.aggregate([
    {
        $lookup: {
            from: "combos",
            localField: "preco",
            foreignField: "preco",
            as: "array de combos com preco igual ao produto corrente"
        }
    }
]).pretty();

/* 
MAPREDUCE
Percorre todo os itens (produtos) de modo a ordená-los em ordem crescente de precos
*/

var map = function () {
    emit (this.nome, this.preco);
};

db.produtos.mapReduce (
    map,
    { out: "mapReduce"}
);

db.mapReduce.find().sort({"value":-1});


