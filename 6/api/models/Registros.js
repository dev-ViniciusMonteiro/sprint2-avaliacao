const conexao = require("../banco-de-dados/conexao");

class Registros{

  listarTudo(res){

    const sql = 'SELECT * FROM STORE_REGISTRATION';
    conexao.query(sql, (erro, result) => {
      if(erro){
        res.status(400).json(erro);
      }else{
        res.status(200).json(result);
      }
    }); 
  }

  listarId(res, id){
    const sql = `SELECT * FROM STORE_REGISTRATION WHERE ID=${id}`

    conexao.query(sql, (erro, result) => {
      if(erro){
        res.status(400).json(erro);
      }else{
        res.status(200).json(result);
      }
    });
  }
}

module.exports = new Registros;