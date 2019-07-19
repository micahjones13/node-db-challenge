
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Special Project', description: "A special description", completed: false}
      ]);
};
