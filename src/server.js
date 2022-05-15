let express = require('express'); //Inyectar dependendencia express

let app = express(); //Funcionar el servidor

let personsRoute = require('./routes/person');//Router que viene de personas

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public'));

let PORT = process.env.PORT || 3000; //Puerto de escucha

app.listen(PORT), () => {
    console.log('escuchando en elpuerto 3000')
}