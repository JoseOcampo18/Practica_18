let express = require('express'); //Inyección dependencia express
let router = express.Router(); //Instanciación del router 

router.get('/person', (req,res) => {
    res.send('Has solicitado el listado de personas');
})

module.exports = router;