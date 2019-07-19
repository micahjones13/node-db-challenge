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
    .first()
    .innerJoin('actions as a', 'p.action_id', 'a.id')
    .where({'p.id': id});
}

function addProject(body) {
    return db('projects')
    .insert(body)
}

function addAction(body) {
    return db('actions')
    .insert(body)
}