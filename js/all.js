function play(){
    var audio = document.getElementById('music1'); 
    if(audio!==null){             
        //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
        if(audio.paused){                 
            audio.play();
            $(".music-line").removeClass("music-show")
            $(".music-play").css("animation","music 5s linear infinite")
        }else{
            audio.pause();
            $(".music-line").addClass("music-show")
            $(".music-play").css("animation","none")
        }
    } 
}
$(".music-play").click(function(){
    play()
})
var url = window.location.href
    var object = new Object, urls = document.location.search.substr(1).split("&");
        for (i = 0; i < urls.length; i++) {
        　　var url = urls[i].split("=");
        　　object[url[0]] = decodeURIComponent(url[1])
    }
console.log(object)
var boxOne = document.getElementById("boxOne")
var boxTWo = document.getElementById("boxTWo")
var boxThree = document.getElementById("boxThree")
var boxFoue = document.getElementById("boxFoue")
var boxFive = document.getElementById("boxFive")
var boxSix = document.getElementById("boxSix")
function touchSix(){
    // 添加向上轻扫手势
    touch.on(boxOne, "swipeup", function () {
        $("#boxOne").slideUp();
        $("#boxTwo").slideDown(500);
    })
    touch.on(boxTwo, "touchstart", function (e) {
        var event1 = window.event || e;
        event1.preventDefault();
    })
    touch.on(boxTwo, "swipeup", function () {
        $("#boxTwo").slideUp(500);
        $("#boxThree").slideDown();
    })
    touch.on(boxTwo, "swipedown", function () {
        $("#boxTwo").slideUp(500);
        $("#boxOne").slideDown();
    })
    touch.on(boxThree, "touchstart", function (e) {
        var event1 = window.event || e;
        event1.preventDefault();
    })
    touch.on(boxThree, "swipeup", function () {
        $("#boxThree").slideUp(500);
        $("#boxFour").slideDown();
    })
    touch.on(boxThree, "swipedown", function () {
        $("#boxThree").slideUp(500);
        $("#boxTwo").slideDown();
    })
    touch.on(boxFour, "touchstart", function (e) {
        var event1 = window.event || e;
        event1.preventDefault();
    })
    touch.on(boxFour, "swipeup", function () {
        $("#boxFour").slideUp(500);
        $("#boxFive").slideDown();
    })
    touch.on(boxFour, "swipedown", function () {
        $("#boxFour").slideUp(500);
        $("#boxThree").slideDown();
    })
    touch.on(boxFive, "touchstart", function (e) {
        var event1 = window.event || e;
        event1.preventDefault();
    })
    touch.on(boxFive, "swipeup", function () {
        $("#boxFive").slideUp(500);
        $("#boxSix").slideDown();
    })
    touch.on(boxFive, "swipedown", function () {
        $("#boxFive").slideUp(500);
        $("#boxFour").slideDown();
    })
    touch.on(boxSix, "touchstart", function (e) {
        var event1 = window.event || e;
        event1.preventDefault();
    })
    touch.on(boxSix, "swipedown", function () {
        $("#boxSix").slideUp(500);
        $("#boxFive").slideDown();
    })
}
function touchFive(){
    // 添加向上轻扫手势
    touch.on(boxOne, "swipeup", function () {
        $("#boxOne").slideUp();
        $("#boxTwo").slideDown(500);
    })
    touch.on(boxTwo, "touchstart", function (e) {
        var event1 = window.event || e;
        event1.preventDefault();
    })
    touch.on(boxTwo, "swipeup", function () {
        $("#boxTwo").slideUp(500);
        $("#boxThree").slideDown();
    })
    touch.on(boxTwo, "swipedown", function () {
        $("#boxTwo").slideUp(500);
        $("#boxOne").slideDown();
    })
    touch.on(boxThree, "touchstart", function (e) {
        var event1 = window.event || e;
        event1.preventDefault();
    })
    touch.on(boxThree, "swipeup", function () {
        $("#boxThree").slideUp(500);
        $("#boxFour").slideDown();
    })
    touch.on(boxThree, "swipedown", function () {
        $("#boxThree").slideUp(500);
        $("#boxTwo").slideDown();
    })
    touch.on(boxFour, "touchstart", function (e) {
        var event1 = window.event || e;
        event1.preventDefault();
    })
    touch.on(boxFour, "swipeup", function () {
        $("#boxFour").slideUp(500);
        $("#boxFive").slideDown();
    })
    touch.on(boxFour, "swipedown", function () {
        $("#boxFour").slideUp(500);
        $("#boxThree").slideDown();
    })
    touch.on(boxFive, "touchstart", function (e) {
        var event1 = window.event || e;
        event1.preventDefault();
    })
    touch.on(boxFive, "swipedown", function () {
        $("#boxFive").slideUp(500);
        $("#boxFour").slideDown();
    })
}
$("#start-make").click(function(){
    $(".show-bg").show()
    $(".alert").show()
})
$("#alert-no").click(function(){
    $(".show-bg").hide()
    $(".alert").hide()
    $(".alert1").hide()
})
$(".immediately-make").click(function(){
    $(".show-bg").show()
    $(".alert1").show()
})