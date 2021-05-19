const express = require('express');
const app = express();
app.use(express.json());

const conexao = require("./api/banco-de-dados/conexao");
const tabela = require("./api/banco-de-dados/Evaluation");

const config = require('config');

conexao.connect(erro =>{
  
  if(erro){

    console.log(erro);
  }
  else{
  
    console.log("conectado com a db com sucesso");
    tabela.init(conexao);
    app.listen(config.get("api.porta"), ()=>{
      console.log(`O servidor está rodando na porta ${config.get("api.porta")}`)
    });
  }
});

