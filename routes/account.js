var db=require('./db');
/*
 * GET users listing.
 */

exports.add = function(req, res){
    var data = req.body["account"];
    var account = JSON.parse(data);

    AccountModel.create(account, function (err, account) {
        res.send("respond with a resource");

    });
};

exports.update = function(req, res){
    var data = req.body["account"];
    var account = JSON.parse(data);

    AccountModel.findByIdAndUpdate(account._id, function (err, account) {
        res.send("respond with a resource");

    });
};