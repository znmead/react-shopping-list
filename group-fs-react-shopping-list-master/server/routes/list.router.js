const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


// GET 

router.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM list ORDER BY name, purchased DESC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})



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