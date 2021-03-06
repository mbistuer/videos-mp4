'use strict'

const mongoose = require('mongoose');
const app = require('./app');

let port = process.env.PORT || 3600;
app.set('port', port);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mat:1234@ds161713.mlab.com:61713/videomateo', { useMongoClient: true })
.then(() => {
  console.log("la conexion se ha realizado correctamente..");
}).catch(err => console.log(err))
app.listen(port, () => {
  console.log("servidor local corriendo");
})
