

// var express = require('express');
// var router = express.Router();

// router.use('/AllBBQProducts',require('./routes/AllBBQProducts'));
// // router.use('/v2',require('./v2'));


// module.exports = router;

// const express = require('express');
// const router = express.Router();

// // router.use('/addToCartDb',require('./routes/addToCartDb'));

// module.exports = router;


// var express = require('express');
// var router = express.Router();

// router.get('/',async (req,res) => {
//     console.log('AllBBQProducts');
//     const BBQproducts = await BBQProducts.find({}).toArray()
//     res.send(BBQproducts)
// })
// module.exports = router;

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');
const { MongoClient,ServerApiVersion,ObjectId } = require('mongodb');
const SSLCommerzPayment = require('sslcommerz-lts')
const app = express();

var router = express.Router();
app.use(express.json());
app.use(cors());
// const addToCartDb = require('./routes/addToCartDb');
const store_id = 'webdc5f47477bc4df2'
const store_passwd = 'webdc5f47477bc4df2@ssl'
const is_live = false //true for live, false for sandbox

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sundialcluster.nmgilo7.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri,{ useNewUrlParser: true,useUnifiedTopology: true,serverApi: ServerApiVersion.v1 });

async function run() {
    // connect to the MongoDB cluster
    const UserList = client.db('SundialDb').collection('UserList');
    // const Categories = client.db('ResaleCycle').collection('categories');
    const BBQProducts = client.db('SundialDb').collection('BBQProducts');

    app.use('/AllBBQProducts',require('./routes/AllBBQProducts'));


    router.get('/',async (req,res) => {

        const BBQproducts = await BBQProducts.find({}).toArray()
        res.send(BBQproducts)
    })
    module.exports = router;
}
run().catch(console.dir);