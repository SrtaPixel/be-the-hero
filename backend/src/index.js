const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP:
 * 
 * GET: buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DEETE: Deletar uma informação no backend
 */

 /**
  * Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
  * Route Params: Paramêtros ultilizados para identificar recursos
  * Request Body: corpo da requisição, ultilizado para criar ou alterar recursos
  */

  /**
   * Bancos de dados: 
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */




app.listen(3333);


