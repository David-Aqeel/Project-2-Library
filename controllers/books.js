

function show (req, res, next) {
    Book.findById(req.params.id)
        .then(book => {
            res.render('library/show', {
                book,
                title: 'Book Details'
            })
        }) 
        .catch(next)
}



module.exports = {
    show
}