const { response } = require('express');
const express = require('express')

const app = express();

/**
 * Get - busca uma informação dentro do servidor
 * Post - Inserir uma informação no servidor
 * Put - Altera uma informação
 * Patcch - Altera uma informação especifica
 * Delete - Deleta uma informação do servidor
 */

app.get("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.post("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
})

app.put("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
})

app.patch("/courses/:id", (request, reponse) => {
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (request, response) => {
    return reponse.json(["Curso 6", "Curso 2", "Curso 4"])
})

app.listen(3333)