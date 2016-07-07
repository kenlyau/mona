var Zepto = require("./lib/zepto");
var PageSlider =  require("./lib/PageSlider");
var anime = require("./lib/anime");

var animeObj = {}, index;
//init slider
new PageSlider({
    pages: $(".page-wrap .page"),
    dev:false,
    oninit: oninit,
    onbeforechange: onbeforechange,
    onchange: onchange
});

//oninit callback
function oninit(){

};

//onbeforechange callback
function onbeforechange(){

};

//onchange callback
function onchange(){

    index = $(".page").index(".current");
    if (index==1){
        if (animeObj.one){
            animeObj.one.restart();
            return;
        }
        animeObj.one = anime({
            targets: ".current .title",
            translateX: "13rem",
            rotate: {
                value: 80,
                duration: 1500,
                easing: "easeInOutQuad"
            },
            scale: {
                value: 2,
                delay: 150,
                duration: 850,
                easing: "easeInOutExpo"
            },
            direction: "alternate",
            loop: true
        })
    }
}
