const Registros = require("../models/Registros");
const regis = require("../models/Registros");
const pag = require("./paginacao");

module.exports = app =>{

  app.get('/api/registros', (req, res) =>{
    const pagina = pag.definirPagina(req.query.pagina);
    regis.listarTudo(res, pagina);
  });

  app.get('/api/registros/:id', (req, res) =>{

    regis.listarId(res, parseInt(req.params.id));
  });

  app.get('/api/registros/nome/:nome', (req, res) =>{
    
    regis.listarNome(res, JSON.stringify(req.params.nome));
  });

  app.get('/api/registros/:dono/:tipo', (req, res) =>{

    regis.listarVenda(res, JSON.stringify(req.params.dono), JSON.stringify(req.params.tipo));
  });

  app.post('/api/registros/', (req, res)=>{
    
    let registro = req.body;
    if(registro.REGISTRATION_DATE == null){
      registro.REGISTRATION_DATE = new Date();
    }
    
    regis.adicionar(registro, res);
  });

  app.delete('/api/registros/:id', (req, res)=>{

    regis.deletarRegistro(res, parseInt(req.params.id));
  })

  app.patch('/api/registros/:id', (req, res) =>{

    regis.atualizar(res, parseInt(req.params.id), req.body);
  });
}


