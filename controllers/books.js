const Book = require('../models/book')

function index(req, res, next)  {
    Book.find({user: req.user._id})
        .then(books => {
            res.render('books/index',  {
                books,
                title: 'Book List'
            })
        })
        .catch(next)
}


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

function create (req, res, next)    {
    req.body.user = req.user._id
    Book.create(req.body)
        .then(() => res.redirect('/read-lists'))
        .catch(next)
}


function addBook (req, res, next)    {
   ReadList.findById(req.params.listId)
   .then (readList => {
        readList.books.push(req.body)

        return readList.save()
   })
   .then(() => res.redirect(`read-lists/${req.params.listId}`))
   .catch(next)
}

function updateReadListForm(req, res, next) {
    ReadList.findById(req.params.id)
    .then(readList => {
        res.render('read-lists/edit', {
            readList,
            title: 'Reading List Edit Details'
        })
    })
   
        
}

function update(req, res, next) {
    ReadList.findById(req.params.id)
    .then(readList => {
        if (!readList.user.equals(req.user._id)) throw new Error('Unauthorized')
        return readList.updateOne(req.body)
    })
    .then(() => res.redirect(`/read-lists/${req.params.id}`))
    .catch(next)
}

function deleteReadList(req, res, next) {
     ReadList.findById(req.params.id)
     .then(readList => {
        if (!readList.user.equals(req.user._id)) throw new Error('Unauthorized')
        return readList.deleteOne(req.body)
    })
    .then(() => res.redirect(`/read-lists/`))
    .catch(next)
}


module.exports = {
    index,
    show,
    addBook
}