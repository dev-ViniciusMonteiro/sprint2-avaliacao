const conexao = require("../banco-de-dados/conexao");

class Registros{

  listarTudo(res){

    const sql = 'SELECT * FROM STORE_REGISTRARION';
    conexao.query(sql, (erro, result)=>{
      if(erro){
        res.send(400).json(erro);
      }else{
        res.send(200).json(result);
      }
    }) 
  }
}

module.exports = new Registros;