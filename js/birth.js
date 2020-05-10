function imgshow() {
    setTimeout(function () {
        $(".birth-item1").animate({
            opacity: "1",
        }, 2000, function () {
            $(".birth-item2").animate({
                opacity: "1",
                // transform: "scale(1.5) rotate(30deg) translate(.5rem,2rem)"
            }, 2000, function () {
                $(".birth-item3").animate({ 
                    opacity: "1" ,
                    // transform: "scale(1.5) rotate(30deg) translate(.5rem,2rem)"
                }, 2000)
            });
        })
    })
}
imgshow()

var boxOne = document.getElementById("boxOne")
var boxTWo = document.getElementById("boxTWo")
var boxThree = document.getElementById("boxThree")
var boxFoue = document.getElementById("boxFoue")
var boxFive = document.getElementById("boxFive")
var boxSix = document.getElementById("boxSix")
// 关闭系统默认触摸效果
touch.on(boxOne, "touchstart", function (e) {
    var event1 = window.event || e;
    event1.preventDefault();
})
// 添加向上轻扫手势
touch.on(boxOne, "swipeup", function () {
    $("#boxOne").slideUp();
    $("#boxTwo").slideDown(500);
    imgshow()
})
touch.on(boxTwo, "touchstart", function (e) {
    var event1 = window.event || e;
    event1.preventDefault();
})
touch.on(boxTwo, "swipeup", function () {
    $("#boxTwo").slideUp(500);
    $("#boxTwo").find('li').css("opacity","0")
    $("#boxThree").slideDown();
})
touch.on(boxTwo, "swipedown", function () {
    $("#boxTwo").slideUp(500);
    $("#boxTwo").find('li').css("opacity","0")
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
    imgshow()
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