const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');
const { MongoClient,ServerApiVersion,ObjectId } = require('mongodb');

const app = express();

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sundialcluster.nmgilo7.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri,{ useNewUrlParser: true,useUnifiedTopology: true,serverApi: ServerApiVersion.v1 });


// verify token
// const verifyJWT = (req,res,next) => {
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//         return res.status(401).send({ message: 'Unauthorize Access' })
//     }
//     const token = authHeader.split(' ')[1];
//     jwt.verify(token,process.env.ACCESS_SECRET_TOKEN,function (err,decoded) {
//         if (err) {
//             res.status(403).send({ message: "Forbidden Access" })
//         }
//         req.decoded = decoded;
//         next();
//     })
// }


async function run() {
    // connect to the MongoDB cluster
    const UserList = client.db('SundialDb').collection('UserList');
    // const Categories = client.db('ResaleCycle').collection('categories');
    const BBQProducts = client.db('SundialDb').collection('BBQProducts');
    const CartDb = client.db('SundialDb').collection('CartProducts');
    // const AdvertisedProducts = client.db('ResaleCycle').collection('advertised');
    // const Bookings = client.db('ResaleCycle').collection('bookings');
    // const ReportedItems = client.db('ResaleCycle').collection('reportedItems');
    // const Payments = client.db('ResaleCycle').collection('payments');


    // verify admin
    const verifyAdmin = async (req,res,next) => {
        const email = req.query.email;

        const user = await UserList.findOne({ email: email });
        if (user.role === 'admin') {

            next();
        } else {
            return res.status(403).send({ message: 'Forbidden Access' })
        }
    }
    try {
        app.post('/users',async (req,res) => {
            const user = req.body;
            const query = { email: user.email }
            const existUser = await UserList.find(query).toArray();

            if (existUser.length === 0) {
                const result = await UserList.insertOne(user);

                return res.send(result);
                // console.log(result);
            }
        });
        app.post('/addBBQ',async (req,res) => {
            const product = req.body;
            const result = await BBQProducts.insertOne(product);
            return res.send(result);
            // console.log(result);

        });
        app.post('/addToCartDb',async (req,res) => {
            const email = req.query.email;
            const cartData = req.body;
            const query = { email: email }

            const data = {
                email: email,
                cartData,
            }
            const userProducts = await CartDb.findOne(query);
           
            if (userProducts) {
                const updateData = await CartDb.updateOne(query,{ $set: data })
                console.log(updateData);
                return res.send(updateData)
            }
            const result = await CartDb.insertOne(data);
           
            return res.send(result);

        });

        app.get('/addToCartDb',async (req,res) => {
            const email = req.query.email;
            const query = { email: email }
            const userEmail = email === 'undefined' ? false : email
            if (userEmail) {
                const dbCartData = await CartDb.findOne(query)
                if (dbCartData) {

                    return res.send(dbCartData.cartData)
                }
                else {
                    return
                }
            }
        })
        app.get('/AllBBQProducts',async (req,res) => {

            const BBQproducts = await BBQProducts.find({}).toArray()
            res.send(BBQproducts)
        })

    } finally {

    }

}
run().catch(console.dir);


app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
})