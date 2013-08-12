var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//var app_conf = require('./../app-conf');

/*
 * GET users listing.
 */
var db = mongoose.createConnection('localhost','yasewang'); //创建一个数据库连接

/*
 * account db setting
 */
var AccountSchema = mongoose.Schema({
    account:{ type: String, required: true },
    password:{ type: String, required: true },
    lastUpdateTime: { type: Date, required: true ,default:new Date()} ,
    business:[{ type: Schema.Types.ObjectId, ref: 'business' }],
    setting: { type: Schema.Types.ObjectId, ref: 'setting' },
    assistant: { type: Schema.Types.ObjectId, ref: 'assistant' },
    userInfo :{ type: Schema.Types.ObjectId, ref: 'userInfo' },
    requests: [{ type: Schema.Types.ObjectId, ref: 'request' }]
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