var express = require('express');
var app = express();
var fs = require("fs");
var path = require('path');
var uuid = require('uuid');
var formidable = require('formidable');
app.use('/public',express.static('public'));
app.post('/file_upload',function (req, res) {
    //创建表单
    var form = new formidable.IncomingForm();
    //设置编码格式
    form.encoding = 'utf-8';
    //设置文件存储路径
    form.uploadDir = "public/img";
    //保留后缀
    form.keepExtensions = true;
    //设置单文件大小限制 2m
    form.maxFieldsSize = 2 * 1024 * 1024;
    //form.maxFields = 1000;  设置所以文件的大小总和
    form.parse(req, function (err, fields, files) {
        var file = files.files;
        let picName = uuid.v1() + path.extname(file.name);
        fs.rename(file.path, 'public\\img\\' + picName, function (err) {
            if (err) return res.send({ "error": 403, "message": "图片保存异常！" });
            res.send({ "picAddr": picName });
        });
    });
})
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 https://", host, port)
})