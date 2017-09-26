'user strict'

module.exports = {

    survey: ( req, res, next ) => {
        res.send(req.body);
    }
}