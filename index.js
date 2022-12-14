//express backend
// const data = [
//   {"id": 123, "Name": "Columbia", "Options": "1 lb. Whole Bean", "Description": "Columbian Beans","Image": "url", "Status":"In stock", "Qty": 1, "Price": 10.42, "Total": 10.42},
//   {
//       "id": 125, "Name": "Ethiopia", "Options": "1 lb. Whole Bean", "Description": "Ethiopian Beans", "Image": "url", "Status":"Out of stock", "Qty": 1, "Price": 10.00, "Total": 10.00
//   }
// ];
// const data2 = [ {"IDBASKET": 3, "DTSTAGE": "", "NOTES": "Customer called to confirm shipment", "SHIPPER": "UPS","SHIPPINGNUM":"X2S5LL902G"}]
// var express = require('express');
// var app = express();

// // set the view engine to ejs
// app.set('view engine', 'ejs');
// app.use(express.static("public"));

// app.get('/', function(req, res) {
//   res.render('productList', {title: 'Product List', items: data});
// });
// app.get('/editproduct', function(req, res) {
//   res.render('editProduct', {title: 'Edit Product', items: data[0]});
// });
// app.get('/createproduct', function(req, res) {
//   res.render('createProduct', {title: 'Create Product', items: data});
// });
// app.get('/basket', function(req, res) {
//   res.render('basket', {title: 'basket', items: data});
// });
// app.get('/updatestatus', function(req, res) {
//   res.render('updateStatus', {title: 'Update Status', items: data2});
// });
// app.get('/reports', function(req, res) {
//   res.render('reports', {title: 'Reports'});
// });
// app.listen(3000);
// console.log('Server is listening on port 3000');