// Consultas de Bruna 
/*- [ ] GTE
- [ ] EXISTS
- [ ] PRETTY
- [ ] UPDATE
- [ ] ADDTOSET */

// Update e add to set - Atualizar o combo vegeteriano para conter um suco nos seus produtos
db.combos.update(
    { _id: "fgm3" },
    { $addToSet: { produtos:  db.produtos.findOne({id_produto: "777b"})._id } }
);

//gte e pretty - produtos que possuem preço maior que 30 reais, formatados na saída
db.produtos.find({ preco: { $gte: 30.00 } } ).pretty();

//exists - verificar quais produtos veganos existem no cardápio
db.produtos.find({ veg : {$exists: true } });