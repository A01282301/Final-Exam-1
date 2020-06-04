function errorHandler(error, req, res) {
        if(req.error)
            return res.status(error).end();
}

module.exports = errorHandler;