const config = require('config');

function paginacao(obj, pag){
  const limite = config.get("api.limite");
  const resultados = {};

  if(pag>=1){
    resultados.previous = {
      page: pag-1
    }
  }

  if(Object.keys(obj).length==limite){
    resultados.next = {
      page: pag+1
    }
  }

  resultados.registros = obj;

  return resultados;
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