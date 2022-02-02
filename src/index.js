const { response } = require('express');
const express = require('express')

const app = express();

app.use(express.json())

/**
 * Get - busca uma informação dentro do servidor
 * Post - Inserir uma informação no servidor
 * Put - Altera uma informação
 * Patcch - Altera uma informação especifica
 * Delete - Deleta uma informação do servidor
 */

/**
 * Tipos de Parâmetros
 * 
 * Routes params => Parâmetros na rota - Identificar um recurso editar, deletar ou buscar
 * Query Params => Paginação / Filtro
 * Body Params => Os objetos inserção/alteração (Json)
 */

app.get("/courses", (request, response) => {
    const query = request.query
    console.log(query)

    return response.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.post("/courses", (request, response) => {
    const body = request.body
    console.log(body)

    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
})

app.put("/courses/:id", (request, response) => {
    const { id } = request.params;
    console.log(id)

    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
})

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 2", "Curso 4"])
})

app.listen(3333)