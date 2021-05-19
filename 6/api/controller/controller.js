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
}


