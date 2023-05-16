const ReadList = require('../models/read-list')

function index(req, res, next)  {
    ReadList.find({user: req.user._id})
        .then(readList => {
            res.render('read-lists/index',  {
                readList,
                title: 'Reading Lists'
            })
        })
        .catch(next)
}


module.exports= {
    index
}