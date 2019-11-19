
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: 'A0123BCD4567EFGH',
          Make: 'Acura',
          Model: 'MDX',
          Mileage: '400',
        },
        {
          VIN: 'I89012JKLMN3332L',
          Make: 'BMW',
          Model: '323i',
          Mileage: '10',
        },
      ]);
    });
};
