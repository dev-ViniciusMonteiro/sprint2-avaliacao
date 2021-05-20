const config = require('config');

function paginacao(registro){
  return(req, res, next) =>{
    const pagina = parseInt(req.query.pagina);
    const limite  = config.get("api.limite")


    const indexInicial = (pagina-1)*limite;
    const indexFinal = pagina*limite;

    const resultados = {};
    
    if(indexFinal < registro.lenght){

      resultados.next = {
        page: page+1
      }
    };

    if(indexInicial>0){
      resultados.previous = {
        page: page-1
      }
    };

    resultados.registro = registro.slice(indexInicial, indexFinal);
  }
}

function definirPagina(bodyPagina){

  let pagina = bodyPagina;
    if(pagina==undefined){
      pagina=0;
    }else{
      pagina = parseInt(bodyPagina);
    }
  return pagina;
}

module.exports = {paginacao, definirPagina};