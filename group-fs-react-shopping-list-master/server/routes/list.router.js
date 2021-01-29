const express = require('express');
const { query } = require('../modules/pool.js');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


// GET 

router.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM list ORDER BY purchased, name ASC;`;
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
router.post('/', (req, res) => {
    console.log(`req body is: `,req.body);
    const newItem = req.body;
    const sqlText = `INSERT INTO list (name, quantity, unit)
                     VALUES ($1, $2, $3)`;
    pool.query(sqlText, [newItem.name, newItem.quantity, newItem.unit])
        .then((result) => {
            console.log(`Added New item to the database`, newItem);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// PUT - URL list
router.put('/', (req, res) => {
    let id = req.body.id;
    console.log('changing item with ID of: ', id);
    let queryText = ''
    if (id === 'all'){
        queryText = `UPDATE "list" SET "purchased" = false WHERE "purchased" = true;`
        pool.query(queryText).then(result => {
            console.log('Successfully updated all items')
            res.sendStatus(200);
        }).catch(error => {
            console.log(`Error updating item`, error);
            res.sendStatus(500);
        });
    }
    else {
     queryText = `UPDATE "list" SET "purchased" = true WHERE id = $1;`;
     pool.query(queryText, [id]).then(result => {
        console.log('Successfully updated item')
        res.sendStatus(200);
    }).catch(error => {
        console.log(`Error updating item`, error);
        res.sendStatus(500);
    });
    }
});


// DELETE URL list/id
router.delete('/', (req, res) => {
    let id = req.body.id;
    console.log('Delete router called with id of', id);
    let queryText = '';
    if (id === 'all'){
        queryText = 'TRUNCATE TABLE "list";';
        pool.query(queryText).then(result => {
            console.log('Successfully removed list item')
            res.sendStatus(204);
        }).catch(error => {
            console.log(`Error deleting item`, error);
            res.sendStatus(500);
        });
    } 
    else {
    queryText= `DELETE FROM "list" WHERE id = $1;`;
    pool.query(queryText, [id]).then(result => {
        console.log('Successfully removed list item')
        res.sendStatus(204);
    }).catch(error => {
        console.log(`Error deleting item`, error);
        res.sendStatus(500);
    });
}
});



module.exports = router;