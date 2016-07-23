var Zepto = require("./lib/zepto");
var PageSlider =  require("./lib/PageSlider");
var anime = require("./lib/anime");
var animeObj = {}, index;

var setDashoffset = function(el) {
    var l = el.getTotalLength();
    el.setAttribute('stroke-dasharray', l);
    return [l,0];
  };
[].slice.call(document.querySelectorAll("#s-name path")).forEach(function(item){
    var l = item.getTotalLength();
    item.setAttribute('stroke-dasharray', l);
    item.setAttribute('stroke-dashoffset', l);
    item.style.opacity = "1";
  })  

var c1 = anime({
   targets: "#XMLID_5_",
   rotate: 720,
   duration: 3000,
   begin: function(animation){
         animation.animatables.forEach(function(item){
            item.target.style.fill = "#13AE67"
         })
   },
   complete: function(){
        anime({
            //枝
            targets: "#XMLID_2_ .st0",
            opacity: 1,
            duration: 2000,
            delay: function(el, index) {
                el.style.fill = "#13AE67"
                 return index * 120
            }
        });
        anime({
            //叶
            targets: "#XMLID_7_ .st0",
            opacity: 1,
            scale: [0.1,1],
            duration: 2000,
            delay: function(el, index) {
                el.style.fill = "#13AE67";
                return index * 30
            },
        });
        anime({
            //花
            targets: "#s-flower path",
            scale: [0.1,1],
            rotate: function(){
                return anime.random(0,45);
            },
            opacity: 1,
            duration: 1000,
            delay: function(el,index) {
                switch (el.getAttribute("class")) {
                    case "st2":
                         el.style.fill = "#FCF4DD";
                         break;
                    case "st3":
                         el.style.fill = "#FADBD4";
                         break;
                    case "st4":
                         el.style.fill = "#C891A0"; 
                         break;
                    case "st4": 
                         el.style.fill = "#BC7C8D";
                         break;
                    case "st5":
                         el.style.fill = "#C891A0";
                         break;
                    case "st6":
                         el.style.fill = "#747D7A";
                         break;
                    case "st7": 
                         el.style.fill = "#FCE4E3";
                         break;
                    case "st8": 
                         el.style.fill = "#595757";
                         break;
                    case "st9": 
                         el.style.fill = "#727171";
                         break;
                    case "st10":
                         el.style.fill = "#9BA19F";         
                }
                return index * 25
            },
            complete: function(){
                anime({
                    //name
                    targets: ["#s-name path", "#s-line path", "#s-date path"],
                    opacity: [0.9,1],
                    fill: {
                        value: "#727171"
                    },
                    strokeDashoffset: {
                      value: setDashoffset,
                      duration: 1000,
                      easing: 'easeOutQuad'
                    },
                    delay: function(el, index){
                        el.setAttribute("fill", "#727171");
                        return index * 120
                    }
                })
            }
        })
   }
})

function boomStart(animation){
    

}

function removeLoading(){
    
}


//init slider
var pageSlider = new PageSlider({
    pages: $(".page-wrap .page"),
    dev:false,
    oninit: oninit,
    onbeforechange: onbeforechange,
    onchange: onchange
});

$("body").on("tap", ".back", function(){
    pageSlider.prev();
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
    console.log(index);
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
    }else if(index==4){
        $(".map")[0].src="http://j.map.baidu.com/1papC";
    }
}
