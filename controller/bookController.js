const connection = require("../data/db")

//INDEX
function index(req, res) {
    const sql = "SELECT *FROM product"
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                error: err.message,
                message: "Database query failed"
            })
        }
        const products = results.map(product => {
            return {
                ...product,
                image: req.imagePath + movie.image
            }
        })
        res.json(movies)
    })
}

//SHOW
function show(req, res) {
    const { id } = req.params
    const sql = `
    SELECT * FROM product 
    LEFT JOIN review on product.id = review.pruduct_id
    WHERE id=?
    `
    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                error: err.message,
                message: "Database query failed"
            })
        }
        const product = results[0];
        if (!product || product.id == null) {
            return res.status(404).json({
                message: "Product not founds"
            })
        }
        const reviewSql = "SELECT * FROM review WHERE product_id=?"
        connection.query(reviewSql, [id], (err, reviewResults) => {
            if (err) {
                return res.status(500).json({
                    error: err.message,
                    message: "Database query failed"
                })
            }
            if (reviewResults) {
                product.review = reviewResults

            }
            res.json(product)({
                ...product,
                image: req.imagePath + movie.image
            })
        })
    })
}