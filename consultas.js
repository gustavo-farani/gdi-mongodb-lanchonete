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