const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');
const { MongoClient,ServerApiVersion,ObjectId } = require('mongodb');
const SSLCommerzPayment = require('sslcommerz-lts')
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
app.use(express.json());
app.use(cors());
// const path = require('path');
const multer = require('multer')
const imageModel = require('./models/image.models');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sundialcluster.nmgilo7.mongodb.net/?retryWrites=true&w=majority`)
//         console.log('MongoDB Connected...');
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// }

// const BBQProducts = new mongoose.Schema({
//     name: String,
//     price: Number,
//     description: String,
//     category: String,
//     images: [String],
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// const Product = mongoose.model('Product',ProductSchema);

// const addToCartDb = require('./routes/addToCartDb');
const store_id = 'webdc5f47477bc4df2'
const store_passwd = 'webdc5f47477bc4df2@ssl'
const is_live = false //true for live, false for sandbox

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sundialcluster.nmgilo7.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri,{ useNewUrlParser: true,useUnifiedTopology: true,serverApi: ServerApiVersion.v1 });
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sundialcluster.nmgilo7.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri,{ useNewUrlParser: true,useUnifiedTopology: true,serverApi: ServerApiVersion.v1 });
// EKwhhKufsF25zKVV

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

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null,'./uploads/')
    },
    filename: function (req,file,cb) {
        cb(null,file.originalname)
    }

})
const upload = multer({ storage: storage })

// app.post('/upload',upload.array('images',12),async (req,res) => {

//     const saveImages =  await imageModel.insertMany(req.files.map((file) => ({ ...file,name: file.originalname })));





//     // try {
//     //     const saveImages
//     //     const collection = ImgDb;
//     //     await Image.insertMany(req.files.map((file) => ({ ...file,name: file.originalname })));
//     //     const result = await ImgDb.find().toArray((err,data) => {
//     //         if (err) throw err;
//     //         res.status(200).json({
//     //             //file path and name
//     //             path: req.files.map((file) => file.path)

//     //         });
//     //         // res.download(req.files.map((file) => file.path));
//     //     });
//     //     console.log(result);
//     // } catch (err) {
//     //     console.error(err);
//     //     res.status(500).json({ error: 'something went wrong' });
//     // }
//     //insert into db
//     // const result =await ImgDb.find().toArray((err,data) => {
//     //     if (err) throw err;
//     //     res.status(200).json({ images: data });
//     // });
//     //get images from uploads and send as response

//     // const imagesFromDb = await ImgDb.find({
//     //     images: req.files.map((file) => file.originalname)
//     // }).toArray();



//     // send images as response
//     // console.log(result);
//     // const imagesFromDb =await ImgDb.find({ 
//     //     images: req.files.map((file) => file.originalname)
//     // }).toArray();
//     // console.log(imagesFromDb);
//     // const data = {  
//     //     images: req.files.map((file) => file.originalname),

//     // }
//     // // console.log(err);
//     // console.log(data);
//     // res.status(200).json({ message: 'Files uploaded successfully' });
// });


async function run() {
    // connect to the MongoDB cluster
    const UserList = client.db('SundialDb').collection('UserList');
    // const Categories = client.db('ResaleCycle').collection('categories');
    const BBQProducts = client.db('SundialDb').collection('BBQProducts');
    const CartDb = client.db('SundialDb').collection('CartProducts');
    const OrdersDb = client.db('SundialDb').collection('OrdersDb');
    const ImgDb = client.db('SundialDb').collection('ImgDb');
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
            console.log(result);
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
                const updateData = await CartDb.updateOne(query,{ $set: data },{ upsert: true })
                console.log(updateData);
                return res.send(updateData)
            }
            const result = await CartDb.insertOne(data);
            return res.send(result);
        });

        app.get('/addToCartDb',async (req,res) => {
            const email = req.query.email;
            const query = { email: email }
            const userEmail = email === undefined ? false : email
            if (userEmail) {
                const dbCartData = await CartDb.findOne(query)
                if (dbCartData) {
                    return res.send(dbCartData.cartData)
                }
            }
        })

        app.get('/AllBBQProducts',async (req,res) => {
            const BBQproducts = await BBQProducts.find({}).toArray()
            res.send(BBQproducts)
        })

        app.get('/AllBBQProducts/:id',async (req,res) => {
            const id = req.params.id;
            const BBQproducts = await BBQProducts.findOne({ _id: ObjectId(id) })
            res.send(BBQproducts)
        })


        app.post('/orderBbq',async (req,res) => {
            const orderData = req.body;
            // console.log(orderData.cartData.totalPrice);
            // const result = await OrdersDb.insertOne(orderData);
            // console.log(result);
            // return res.send(result);
            const data = {
                total_amount: 100,
                currency: 'BDT',
                tran_id: 'REF123', // use unique tran_id for each api call
                success_url: 'http://localhost:3030/success',
                fail_url: 'http://localhost:3030/fail',
                cancel_url: 'http://localhost:3030/cancel',
                ipn_url: 'http://localhost:3030/ipn',
                shipping_method: 'Courier',
                product_name: 'Computer.',
                product_category: 'Electronic',
                product_profile: 'general',
                cus_name: '',
                cus_email: 'customer@example.com',
                cus_add1: 'Dhaka',
                cus_add2: 'Dhaka',
                cus_city: 'Dhaka',
                cus_state: 'Dhaka',
                cus_postcode: '1000',
                cus_country: 'Bangladesh',
                cus_phone: '01711111111',
                cus_fax: '01711111111',
                ship_name: 'Customer Name',
                ship_add1: 'Dhaka',
                ship_add2: 'Dhaka',
                ship_city: 'Dhaka',
                ship_state: 'Dhaka',
                ship_postcode: 1000,
                ship_country: 'Bangladesh',
            };
            const sslcz = new SSLCommerzPayment(store_id,store_passwd,is_live)
            sslcz.init(data).then(apiResponse => {
                // Redirect the user to payment gateway
                let GatewayPageURL = apiResponse.GatewayPageURL
                res.send({ url: GatewayPageURL })

            });

        })

    } finally {

    }

}
run().catch(console.dir);


app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
    // connectDB();
})