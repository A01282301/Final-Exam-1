function errorHandler(error, req, res) {
        
        if(error)
            return res.status(error).end();
}

module.exports = errorHandler;