
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('actions').insert([
        {action_description: 'An action', notes: 'Some notes', action_completed: false, project_id: 1}
    
      ]);
};
