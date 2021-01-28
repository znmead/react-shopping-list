const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


// GET 

// POST

// PUT - URL list


// DELETE URL list/id
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log('Delete router called with id of', id);
    const queryText = `DELETE FROM "list" WHERE id = $1;`;
    pool.query(queryText, [id]).then(result => {
        console.log('Successfully removed list item')
        res.sendStatus(204);
    }).catch(error => {
        console.log(`Error deleting item`, error);
        res.sendStatus(500);
    });
});



module.exports = router;