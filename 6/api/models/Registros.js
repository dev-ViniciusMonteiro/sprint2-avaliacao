const { json } = require("express");
const config = require("config");
const conexao = require("../banco-de-dados/conexao");
const paginacao = require("../controller/paginacao");
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

  listarTudo(res, page){
    const limite = config.get("api.limite");
    const sql = `SELECT * FROM STORE_REGISTRATION LIMIT ${limite} OFFSET ${page*limite}`;
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

  listarVenda(res, dono, tipo){

    const sql = `SELECT * FROM STORE_REGISTRATION WHERE OWNER=${dono} AND BUSINESS_TYPE=${tipo}`;

    conexao.query(sql, (erro, result)=>{
      if(erro){
        res.status(400).json(erro);
      }else{
        res.status(200).json(result);
      }
    });
  }

  deletarRegistro(res, id){
    const sql = `DELETE FROM STORE_REGISTRATION WHERE ID=${id}`;

    conexao.query(sql, (erro, result)=>{
      if(erro){
        res.status(400).json(erro);
      }else{
        res.status(200).json(result);
      }
    })
  }
  
  atualizar(res, id, registro){

    const sql = `UPDATE STORE_REGISTRATION SET ? WHERE ID=${id} `;

    conexao.query(sql, registro, (erro,result)=>{
      
      if(erro){
        res.status(400).json(erro);
      }else{
        res.status(200).json(result);
      }
    });
      
  }
}

module.exports = new Registros;