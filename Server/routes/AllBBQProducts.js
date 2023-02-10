const express = require('express')
const router = express.Router()

router.get('/',async (req,res) => {

    const BBQproducts = await BBQProducts.find({}).toArray()
    res.send(BBQproducts)
})
router.get('/:id',async (req,res) => {
    const id = req.params.id;

    const BBQproducts = await BBQProducts.findOne({ _id: ObjectId(id) })

    res.send(BBQproducts)
})

module.exports= router