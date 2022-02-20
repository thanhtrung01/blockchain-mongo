const router = require("express").Router();
const Item = require('../models/Item');

router.post('/create', async (req, res) => {
    const newProduct = new Item(req.body);
        try {
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
});

router.put('/:id', async (req, res) => {
    try {
        const product = await Item.findById(req.params.id);
        await product.updateOne({ $set: req.body });
        res.status(200).json(req.body);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: err.message });
    }
});

router.get('/', async (req, res) => {
    try{
        const resData = await Item.find();
        res.status(200).json(resData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports = router;
