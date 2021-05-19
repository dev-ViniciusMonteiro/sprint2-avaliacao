const conexao = require("./conexao");

class Evaluation{
  
  init(conexao){

    this.conexao = conexao;
  }

  criarEvaluation(){
    const sql = "CREATE TABLE IF NOT EXISTS STORE_REGISTRATION (ID INT NOT NULL AUTO_INCREMENT, NAME VARCHAR(100) NOT NULL, OWNER VARCHAR(100) NOT NULL, REGISTRATION_DATE DATE NOT NULL, BUSINESS_TYPE VARCHAR(100) NOT NULL, PRIMARY KEY (ID))"

    this.conexao.query(sql, error=>{
      if(error){
        console.log(error);
      } 
    })
  }
}

module.exports = new Evaluation();