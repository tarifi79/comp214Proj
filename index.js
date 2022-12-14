// express backend
const data = [
  {"IDPRODUCT": 123, "PRODUCTNAME": "Columbia", "DESCRIPTION": "Columbian Beans","PRODUCTIMAGE": "url", "ACTIVE": 1, "PRICE": 10.42},
  { "IDPRODUCT": 125, "PRODUCTNAME": "Ethiopia", "DESCRIPTION": "Ethiopian Beans", "PRODUCTIMAGE": "url", "ACTIVE": 1, "PRICE": 10.00},
];
const data2 = [ {"IDBASKET": 3, "DTSTAGE": "", "NOTES": "Customer called to confirm shipment", "SHIPPER": "UPS","SHIPPINGNUM":"X2S5LL902G"}]
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res) {
  res.render('productList', {title: 'Product List', items: data});
});
app.get('/editproduct', function(req, res) {
  res.render('editProduct', {title: 'Edit Product', items: data[0]});
});
app.get('/createproduct', function(req, res) {
  res.render('createProduct', {title: 'Create Product', items: data});
});
app.get('/basket', function(req, res) {
  res.render('basket', {title: 'basket', items: data});
});
app.get('/updatestatus', function(req, res) {
  res.render('updateStatus', {title: 'Update Status', items: data2});
});
app.get('/reports', function(req, res) {
  res.render('reports', {title: 'Reports'});
});
app.listen(3000);
console.log('Server is listening on port 3000');