const db = require('../data/db-config.js');

module.exports = {
    findById,
    addProject,
    find,
    addAction
}

function find() {
    return db('projects');
}
function findById(id) {

    return db('projects as p ')
    
    .innerJoin('actions as a', 'p.id', 'a.project_id')
    .where('a.project_id', id)
    
    // .select('p.id', 'p.name', 'p.description', 'p.completed', 'a.id', 'a.action_description');
    .select('p.name', 'p.description', 'p.completed', 'a.id as actionID', 'a.action_description', 'a.notes', 'a.action_completed')
}

function addProject(body) {
    return db('projects')
    .insert(body)
}

function addAction(body) {
    return db('actions')
    .insert(body)
}