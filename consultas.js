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
