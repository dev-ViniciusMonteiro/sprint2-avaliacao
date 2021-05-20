const conexao = require("../banco-de-dados/conexao");

class Registros{

  adicionar(registro, res){
    const sql = 'INSERT INTO STORE_REGISTRATION SET ?';

    conexao.query(sql, registro, (erro, result)=>{

      if(erro){
        res.status(400).json(erro);
      }else{
        res.status(201).json(result);
      }
    });
  }

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

  listarNome(res, nome){
    const sql = `SELECT * FROM STORE_REGISTRATION WHERE NAME=${nome}`

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