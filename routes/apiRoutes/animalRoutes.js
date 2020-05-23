const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals.json');
// MiddleWare
const router = require('express').Router();


router.get('/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
})

router.get('/animals/:id', (req, res) => {
    const results = findById(req.params.id, animals);
   if (results) {
       res.json(results);
   } else {
       res.send(404);
   }

}); 

router.post('/animals', (req, res) => {
    
    req.body.id = animals.length.toString();
    if (!validateAnimal(req.body)) {
        res.status(400).send('the animal is not properly formatted');
    } else {
        const animal = createNewAnimal(req.body, animals);
        res.json(req.body);
    }
});

module.exports = router;