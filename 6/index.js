const express = require('express');
const app = express();

const config = require('config');

app.listen(config.get("api.porta"), ()=>{
  console.log(`O servidor está rodando na porta ${config.get("api.porta")}`)
})