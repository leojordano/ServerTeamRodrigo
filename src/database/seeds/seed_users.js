
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'leandro', email: 'leandro@mail.com', wpp: '4444-4444', img: '', defic: 'todos', problems: 'tods', city: 'São Paulo', uf: 'SP'},
        {name: 'jessica', email: 'jessica@mail.com', wpp: '2222-2222', img: '', defic: '', problems: 'dor de cabeça, resp', city: 'Rio', uf: 'RJ'},
        {name: 'Lucas', email: 'lucas@mail.com', wpp: '3333-3333', img: '', defic: [''], problems: [''], city: 'Minas', uf: 'SPatos de Minas'},
      ]);
    });
};
