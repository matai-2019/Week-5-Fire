
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('lies').del()
    .then(function () {
      // Inserts seed entries
      return knex('lies').insert([
        {id: 1, lie: 'A booming casino industry means jobs for our Native Americans.'},
        {id: 2, lie: 'I say we need climate change for the benefit of our American sailing community.'},
        {id: 3, lie: 'God buried fossil fuels “because he loves to see us find them.'},
        {id: 4, lie: 'I\m going to decrease NASA funding until they can prove to me the Earth is indeed, round.'},
        {id: 5, lie: 'I only hire Women to look at them, otherwise why would you not hire a Man?'},
      ]);
    });
};
