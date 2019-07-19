const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.post('/', async (req, res) => {
    // console.log(req.body);
    // Projects.addProject(req.body)
    // .then(project => {
    //     res.status(201).json(project);
    // })
    // .catch(err => {
    //     res.status(500).json({ message: "Could not add project" });
    // })
    try {
        const newProject = await Projects.addProject(req.body);
        res.status(201).json(newProject);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/actions', (req, res) => {
    
    Projects.addAction(req.body)
    .then(action => {
        res.status(201).json(action);
    })
    .catch(err => {
        res.status(500).json({ message: "Could not add action" });
    })
});

router.get('/', (req, res) => {
    Projects.find()
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id', async (req, res) => {
    // const { id } = req.params;
    // console.log(id);
    // Projects.findById(id)
    // .then(project => {
    //     res.status(200).json(project);
    // })
    // .catch(err => {
    //     res.status(500).json(err)
    // })  
    try{
        console.log('inside get');
        const project = await Projects.findById(req.params.id);
        if(project) {
        res.status(200).json(project);
        } else {
            res.status(404).json({ message: "could not find that " });
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
})






module.exports = router;