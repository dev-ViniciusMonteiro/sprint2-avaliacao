const regis = require("../models/Registros");

module.exports = app =>{

  app.get('/registros', (req, res) =>{
    res.send("teste");
  });

}


