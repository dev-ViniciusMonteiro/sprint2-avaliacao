const Registros = require("../models/Registros");
const regis = require("../models/Registros");

module.exports = app =>{

  app.get('/api/registros', (req, res) =>{

    regis.listarTudo(res);
  });

  app.get('/api/registros/:id', (req, res) =>{

    regis.listarId(res, parseInt(req.params.id));
  });

  app.get('/api/registros/:nome', (req, res) =>{

    regis.listaNome(res, req.params.nome);
  });

  app.post('/api/registros/', (req, res)=>{
    
    let registro = req.body;
    if(registro.REGISTRATION_DATE == null){
      registro.REGISTRATION_DATE = new Date();
    }
    
    regis.adicionar(registro, res);
  })
}


