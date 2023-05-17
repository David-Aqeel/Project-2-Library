const ReadList = require('../models/read-list')

function index(req, res, next)  {
    ReadList.find({user: req.user._id})
        .then(readLists => {
            res.render('read-lists/index',  {
                readLists,
                title: 'Reading Lists'
            })
        })
        .catch(next)
}

function newReadList (req, res) {
    res.render('read-lists/new', {title: ' New Read List'})
}

function create (req, res, next)    {
    req.body.user = req.user._id
    ReadList.create(req.body)
        .then(() => res.redirect('/read-lists'))
        .catch(next)
}

function show (req, res, next) {
    ReadList.findById(req.params.id)
        // .then(console.log)
        .then(readList => {
            res.render('read-lists/show', {
                readList,
                title: 'Reading List Details'
            })
        }) 
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

module.exports= {
    index,
    newReadList,
    create,
    show,
    updateReadListForm,
    update,
    deleteReadList,
}