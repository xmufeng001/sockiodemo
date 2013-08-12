var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.createConnection('localhost','yasewang'); //创建一个数据库连接

var RequestSchema = mongoose.Schema({
    type:String,
    url:String,
    postData:String,
    lastUpdateTime: { type: Date, required: true ,default:new Date()}
});
var RequestModel = db.model('request',RequestSchema);

var AccountSchema = mongoose.Schema({
    account:String,
    password:String,
    requests: [{ type: Schema.Types.ObjectId, ref: 'request' }]

});
var AccountModel = db.model('account',AccountSchema);

/*
 * GET users listing.
 */


exports.addOrUpdate = function(req, res){

    var type="changeCard";
    var type="login";
    var account="111";
//    res.send("respond with a resource");
//    var query = { accout: account };
//    AccountModel.findOneAndUpdate(query, { name: 'jason borne' }, options, callback)
//    Model.findByIdAndUpdate(id, { name: 'jason borne' }, options, callback)

    AccountModel.findOne({ account:account }).populate('request').exec(function (err, account) {

            console.log('"%s" request _id: %s', account.name, account.request[0]);

        })
};

var great=function(request){
    RequestModel.create({
        type: 'changeCard'
        , url: '/connect/app/cardselect/savedeckcard?cyt=1'
        , postData: 'C=K5be7Wjs47Hvw6%2B568j9QOnXyeflHVe1cfrTryQgotmMe68PtL1Cqf6XPjftrBR98xnjB5zyZME4%0Acd3AxG31V7Ud7OgXFbvcLSk8HTXvh3o%3D%0A&lr=ylqA6lGioh6yAeM%2BoBYxmQ%3D%3D%0A'
    }, function (err, request) {

        AccountModel.create({
            account:"111",
            password:"222",
            requests: [request]
        }, function (err) {
            AccountModel.findOne({ account:"111" }).populate('requests').exec(function (err, account) {
                var requests=account.requests;
                var isExisting=false;
                for(var i= 0;i++;requests&&i<requests.length){
                    if(requests[i].type==request.type){
                        isExisting=true;
                        RequestModel.findByIdAndUpdate(requests[i]["_id"],request,function(err, request){
                            console.dir(request) ;
                        });
                        break;
                    }
                }
                if(!isExisting){
                    AccountModel.create(request);

                }

            })
        })
    })
};
function done (err) {
    RequestModel.remove(function () {
        AccountModel.remove(function () {
            mongoose.disconnect();
        })
    })
}
//var test=function(){
//    var type="changeCard";
//    var type="login";
//    var account="111";
////    res.send("respond with a resource");
////    var query = { accout: account };
////    AccountModel.findOneAndUpdate(query, { name: 'jason borne' }, options, callback)
////    Model.findByIdAndUpdate(id, { name: 'jason borne' }, options, callback)
//
//    AccountModel.findOne({ account:account }).populate('request').exec(function (err, account) {
//
//        console.log('"%s" request _id: %s', account.name, account.request[0]);
//
//    })
//};
great();
//test();

