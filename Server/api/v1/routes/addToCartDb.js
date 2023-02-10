const express = require('express');


const router = express.Router();

router.post('/addToCartDb',async (req,res) => {
    const email = req.query.email;
    const cartData = req.body;
    const query = { email: email }

    const data = {
        email: email,
        cartData,
    }
    const userProducts = await CartDb.findOne(query);

    if (userProducts) {
        const updateData = await CartDb.updateOne(query,{ $set: data },{ upsert: true })
        console.log(updateData);
        return res.send(updateData)
    }
    const result = await CartDb.insertOne(data);

    return res.send(result);
});

router.get('/addToCartDb',async (req,res) => {
    const email = req.query.email;
    console.log(email);
    const query = { email: email }
    const userEmail = email === undefined ? false : email
    if (userEmail) {
        const dbCartData = await CartDb.findOne(query)
        if (dbCartData) {
            return res.send(dbCartData.cartData)
        }
    }
})

// router.get('/',async (req,res) => {

//     const BBQproducts = await BBQProducts.find({}).toArray()
//     res.send(BBQproducts)
// })
module.exports = router;


