// const oracledb = require('oracledb');


// async function run() {

//   let connection;

//   try {

//     connection = await oracledb.getConnection({ user: "demonode", password: "XXXX", connectionString: "localhost/xepdb1" });

//     console.log("Successfully connected to Oracle Database");

//   } catch (err) {
//     console.error(err);
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   }
// }

// run();
const data = [
  {"id": 123, "Name": "Columbia", "Options": "1 lb. Whole Bean", "Description": "Columbian Beans","Image": "url", "Status":"In stock", "Qty": 1, "Price": 10.42, "Total": 10.42},
  {
      "id": 125, "Name": "Ethiopia", "Options": "1 lb. Whole Bean", "Description": "Ethiopian Beans", "Image": "url", "Status":"Out of stock", "Qty": 1, "Price": 10.00, "Total": 10.00
  }
];
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res) {
  res.render('home', {title: 'Home', items: data});
});
app.get('/editproduct/:id', function(req, res) {
  res.render('editProduct', {title: 'Edit Product', items: data[0]});
});
app.get('/createproduct', function(req, res) {
  res.render('createProduct', {title: 'Create Product', items: data});
});
app.get('/checkout', function(req, res) {
  res.render('checkout', {title: 'Checkout', items: data});
});

app.listen(3000);
console.log('Server is listening on port 3000');