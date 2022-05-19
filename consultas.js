/* Walmir */

// USE
use lanchonete;

// RENAMECOLLECTION
// Renomeando a coleção do singular para o plural
db.cardapio.renameCollection("cardapios");

// COUNT
// Número de documents de cada collection
db.produtos.count();
db.combos.count();
db.cardapios.count();

// $WHERE, FUNCTION
//Retorna um produto específico com ID igual a "0e87"
db.produtos.find({$where: function() {
    return (this.id_produto == "0e87")
}
}).pretty();

// COND
// Retorna todos os produtos com um desconto de 10% aos items que custam mais de 30 reais 
db.produtos.aggregate(
{ $project: {
    nome: true,
    preco: '$preco',
    categoria: '$categoria',
    desconto: {$cond: [{$gt: ['$preco', 30]}, { $multiply: [ "$preco", 0.9 ] } , '$preco' ]}
}}).pretty();

/* Bruna */

// UPDATE, ADDTOSET, PRETTY
// Atualizar o combo vegeteriano para conter um suco nos seus produtos
db.combos.update(
    { id_combo: "fgm3" },
    { $addToSet: { produtos: db.produtos.findOne({id_produto: "777b"})._id } }
);
db.combos.find({ id_combo: "fgm3" }).pretty();

// GTE
// Produtos que possuem preço maior que 30 reais, formatados na saída
db.produtos.find({ preco: { $gte: 30.00 } } ).pretty();

// EXISTS
// Verificar quais produtos veganos existem no cardápio
db.produtos.find({ veg : {$exists: true } }).pretty();

/* Filipe */

// FIND
// Retorna todos os produtos salvos
db.produtos.find().pretty();

// SORT
// Ordenando os combos por ordem de preço
db.combos.find().sort({preco: -1}).pretty();

// ALL
// Lista de combos que tem os produtos listados
db.combos.find({produtos: {$all: [
    db.produtos.findOne({id_produto: "0c88"})._id, // Smash Mussarela
    db.produtos.findOne({id_produto: "an5k"})._id  // Refrigerante 1,5L 
]}}).pretty();

// SAVE
// Altera o conteudo do objeto vaseado em seu _id
db.produtos.save({
    _id: db.produtos.findOne({id_produto: "g3kk"})._id,
    nome: "Refrigerante Lata",
    categoria: "Bebidas",
    descricao: "Antartica 350 ml",
    preco: 6.75,
    id_produto: "g3kk"
});

/* Rodrigo */

// FINDONE: Retorna uma bebida
db.produtos.findOne({categoria: "Bebidas"});

// AGGREGATE, GROUP, MAX, AVG, SUM
// Agrega os produtos por categoria, é retornado o preco do produto mais caro, o preco medio, e a quantidade de produtos da categoria.
db.produtos.aggregate([
    {
        $group: {
            _id: "$categoria",
            preco_maximo: { $max: "$preco" },
            preco_medio: { $avg: "$preco" },
            preco_total: { $sum: "$preco" }
        }
    }
]).pretty();

/* Gustavo */

// LIMIT
db.produtos.find(
    { categoria: "Sandubas" },
    { _id: false, nome: true, preco: true }
).limit(5).pretty();

// LOOKUP, SET, SIZE, FILTER, COND, PROJECT
// Seta um novo field 'fora_do_combo' na collection 'combos' que é a soma dos preços individuais dos produtos no combo
db.combos.aggregate([
    {
        $lookup: {
            from: "produtos",
            localField: "produtos",
            foreignField: "_id",
            as: "produtos_lookup"
        }
    },
    {
        $set: {
            preco_fora_do_combo: {
                $reduce: {
                    input: "$produtos_lookup",
                    initialValue: 0.0,
                    in: { $add: [ "$$value", "$$this.preco" ] }
                }
            },
            bebidas: {
                $filter: {
                    input: "$produtos_lookup",
                    as: "produto",
                    cond: { $eq: [ "$$produto.categoria", "Bebidas" ] }
                 }
            }
        }
    },
    {
        $project: {
            _id: false,
            nome: true,
            preco: true,
            preco_fora_do_combo: true,
            quantidade_bebidas: { $size: "$bebidas" }
        }
    }
]).pretty();

/* Carlos */

// MATCH
// Retorna os produtos com precos entre 10 e 20 reais
db.produtos.aggregate( [
    { $match: { preco: { $gt: 10, $lt: 20} } }
]).pretty();

// TEXT, SEARCH
// Retorna todos os combos que tem a string pizza em seu nome
db.combos.createIndex({ nome: "text" }); /*Criando index para chamar a cláusula search */
db.combos.find( { $text: { $search: "pizza"} } ).pretty();

// MAPREDUCE
// Percorre todo os itens (produtos) de modo a ordená-los em ordem crescente de precos
var map = function () {
    emit (this.nome, this.preco);
};
db.produtos.mapReduce (
    map,
    { out: "mapReduce"}
);

db.mapReduce.find().sort({"value":-1});