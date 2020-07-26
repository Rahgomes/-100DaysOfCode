// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")
var cors = require("cors")
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
// Server port
var HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => {
    console.log(`Servidor rodando na porta ${HTTP_PORT}`)
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({ "message": "Online" })
});


//Lista todos os autores
app.get("/api/autor", (req, res, next) => {

    var sql = "select * from autor"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});
//Lista livros
app.get("/api/autor/livro", (req, res, next) => {
    var sql = "select * from autor"
    var params = []
    db.all(sql, params, (err, rows) => {
        var resp = rows.map((autor) => {

        return {
           livro: autor.livro,
           id:autor.id
            }
        }
    );
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": resp
        })
    });
});
//Lista nomes
app.get("/api/autor/nome", (req, res, next) => {
    var sql = "select * from autor"
    var params = []
    db.all(sql, params, (err, rows) => {
        var resp = rows.map((autor) => {

            return {
               nome: autor.nome,
               id:autor.id
                }
            }
        );
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": resp
        })
    });
});

//Retorna o autor específico para aquele id, caso contrário, retorna uma mensagem de erro
app.get("/api/autor/:id", (req, res, next) => {
    var sql = "select * from autor where id = ?";
    var params = [req.params.id];
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        if (row != null) {
            res.json({
                "message": "success",
                "data": row
            })
        } else {
            res.json({
                "message": "Não existe autor para esse id"
            })
        }
    });
});

//Cria um autor
app.post("/api/autor", (req, res, next) => {
    var errors = []
    if (!req.body.preco) {
        errors.push("preço não especificado");
    }
    if (!req.body.livro) {
        errors.push("livro não especificado");
    }
    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }
    var data = {
        nome: req.body.nome,
        livro: req.body.livro,
        preco: req.body.preco
    }
    var sql = 'INSERT INTO autor (nome, livro, preco) VALUES (?,?,?)'
    var params = [data.nome, data.livro, data.preco]
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        data.id = this.lastID;
        res.json({
            "message": "success",
            "data": data,
        })
    });
})

//Atualiza um autor
app.patch("/api/autor/:id", (req, res, next) => {
    var data = {
        name: req.body.nome,
        email: req.body.livro,
        password: req.body.preco
    }

    db.run(
        `UPDATE autor set 
           nome = COALESCE(?,nome), 
           livro = COALESCE(?,livro), 
           preco = COALESCE(?,preco) 
           WHERE id = ?`,
        [data.nome, data.livro, data.preco, req.params.id],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.json({
                message: "success",
                data: data
            })
        });
})

//Remove um autor
app.delete("/api/autor/:id", (req, res, next) => {
    db.run(
        'DELETE FROM autor WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.json({ "message": "deleted", changes: this.changes })
        });
})

// Insira outros endpoints aqui!


app.use(function (req, res) {
    res.status(404).json({"message": "url não encontrada"});
});
