
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('lies').del()
    .then(function () {
      // Inserts seed entries
      return knex('lies').insert([
        {id: 1, colName: 'A booming casino industry means jobs for our Native Americans.'},
        {id: 2, colName: 'I say we need climate change for the benefit of our American sailing community.'},
        {id: 3, colName: 'God buried fossil fuels “because he loves to see us find them.'},
        {id: 4, colName: 'rowValue1'},
        {id: 5, colName: 'rowValue2'},
      ]);
    });
};
