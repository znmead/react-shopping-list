const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


// GET 

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


// DELETE URL list/id


module.exports = router;