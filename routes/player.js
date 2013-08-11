var mongoose = require('mongoose');
//var app_conf = require('./../app-conf');

/*
 * GET users listing.
 */
var db = mongoose.createConnection('localhost','yasewang'); //创建一个数据库连接

/*
 * account db setting
 */
var AccountSchema = mongoose.Schema({
    account:String,
    password:String
});
var AccountModel = db.model('account',AccountSchema);

/*
 * business db setting
 */
var BusinessSchema = mongoose.Schema({
    money:String,
    startTime:Date,
    remark:String
});
var BusinessModel = db.model('business',BusinessSchema);


/*
 * setting db setting
 */
var SettingSchema = mongoose.Schema({
    money:String,
    startTime:Date,
    remark:String
});
var SettingModel = db.model('setting',SettingSchema);

/*
 * setting db setting
 */
var SettingSchema = mongoose.Schema({
    minAP:Number,
    minBC:Number,
    cron:String
});
var SettingModel = db.model('setting',SettingSchema);

/*
 * assistant db setting
 */
var AssistantSchema = mongoose.Schema({
    phone:Number,
    groupId:Number,
    serverNo:Number,
    userId:Number
});
var AssistantModel = db.model('assistant',AssistantSchema);

/*
 * userInfo db setting
 */
var UserInfoSchema = mongoose.Schema({
    groupId:Number,
    AP:String,
    BC:String,
    maxAP:String,
    maxBC:String,
    lastAPUpdate:String,
    lastBCUpdate:String,
    exp:String,
    role:String,
    level:String,
    country:String,
    gold:String,
    point:String,
    active:String
});
var UserInfoModel = db.model('userInfo',UserInfoSchema);

/*
 * userInfo db setting
 */
var RequestSchema = mongoose.Schema({
    type:String,
    url:String,
    postData:String,
    lastUpdateTime:Date
});
var RequestModel = db.model('request',RequestSchema);



exports.list = function(req, res){
    res.send("respond with a resource");
};

exports.findAll = function(req, res){
    var query = PlayerModel.find({ 'account' : '111'}, null, { skip: 10 })
    query.exec(function (err, docs) {console.log("444"+docs)});
};

exports.add = function(req, res){
    var account=req.param("account");
    var password= req.param("password");
    var nickname= req.param("nickname");
    var encodeAccount=req.param("encodeAccount");
    var encodePassword=req.param("encodePassword");
    var data=req.param("data");
    var playerEntity = new PlayerModel({account:account});
    playerEntity.save();
    res.send(playerEntity);
};




exports.update = function(req, res){
    req.getParameter("account");
    req.getParameter("password");
    req.getParameter("nickname");

    res.send("respond with a resource");
};


exports.updateCard = function(req, res){
    res.send("respond with a resource");
};

exports.start = function(req, res){
    res.send("respond with a resource");
};

//var test=function(){
//    //var db = mongoose.createConnection();
//    var db = mongoose.createConnection('localhost','yasewang'); //创建一个数据库连接
//    //db.openSet("mongodb://admin:abc123@192.168.86.66:27017/marketing?replicaSet=test");
//    var PersonSchema = new mongoose.Schema({
//        name:String   //定义一个属性name，类型为String
//    });
//    var PersonModel = db.model('Person',PersonSchema);
//    var personEntity = new PersonModel({name:'Krouky'});
//    console.log(personEntity.name); //Krouky
//    personEntity.save();
//}
//test();

//var findAll = function(req, res){
////    PlayerModel.find({},function(err,result){
////        res.send(result);
////    });
////    PlayerModel.find({account:"111"}, function (err, docs) {
////       console.log(docs) ;
////    });
////    PlayerModel.find({}).exec(function(err, docs){
////        console.log(docs) ;
////    });
////   PlayerModel.find({},function(err, docs){
////        console.log(docs)
////    });
//    //  PlayerModel.$where('this.comments.length &gt; 5').exec(function (err, docs) {console.log("111"+docs)});
//    // PlayerModel.find({ account: '111'}, function (err, docs) {console.log("222"+docs)});
//    // PlayerModel.find({ account: '111'}, null, {}, function (err, docs) {console.log("333"+docs)});
//    var query = PlayerModel.find({ 'account' : '111'}, null, { skip: 10 })
//    query.exec(function (err, docs) {console.log("444"+docs)});
//};
//findAll();