var Zepto = require("./lib/zepto");
var PageSlider =  require("./lib/PageSlider");
var anime = require("./lib/anime");
var animeObj = window.animeObj =  {};
var pageSlider;

//resource init
var resource = {
    count: 0,
    ele: $("#resource"),
    image: [
        "city.png",
        "logo.png",
        "map.png",
        "music.png",
        "sprite.png",
        "wheel-base.png",
        "wheel-circle.png"
        ]    
};
resource.image.forEach(function(item){
   var img = new Image();
   img.src = "./dist/static/" + item;
   resource.ele.append(img);
   img.onload = function(){
        ++ resource.count;
        if (resource.count > resource.image.length-1){
            resource.ele.remove();
            sliderStart();
        }
   }
});


//init slider
function sliderStart(){
    pageSlider = new PageSlider({
        pages: $(".page-wrap .page"),
        dev: false,
        oninit: oninit,
        onbeforechange: onbeforechange,
        onchange: onchange
    });
};

//oninit callback
function oninit(){
    
    //remove loading
    setTimeout(function(){
        $(".loading").remove();
    }, 0);
    //bind index animation
    indexAnimation()
    
};

//onbeforechange callback
function onbeforechange(index){
    switch (index) {
        case 0:
            indexAnimation();
            break;
        case 1:
            suzhouAnimation();
            break;
        case 2:
            hongkongAnimation();
            break;
        case 3:
            klAnimation();    
        case 4:
            photoAnimation();                
    }
};

//onchange callback
function onchange(index){ 

};
function indexAnimation(){
    if (animeObj.indexCloud) {
        return;
    }
    // animeObj.indexWe = anime({
    //     targets: [".page-index .we"],
    //     bottom: {
    //         value: 388,
    //         duration: 12000,
    //         delay: 120
    //     }
    // });
    animeObj.indexCloud = anime({
        targets: [".page-index .cloud"],
        delay: function(el, index){
            return index*80
        },
        duration: 8000,
        loop: true,
        direction: 'alternate',
        translateX: "5rem"
    });
    animeObj.indexHeart = anime({
        targets: [".pop-heart span"],
        opacity: {
            value: [1,0],
            delay: function(el, index){
                return 80*index;
            },
            duration: 5000
        },
        scale: {
           value: [0.1,0.8],
           delay: function(el, index){
              return 80*index;
           },
           duration: 3000
        },
        marginTop: {
            value: function(){
                return anime.random(-100,-200)
            },
            delay: function(el, index){
                return 80*index;
            },
            duration: 3000
        },
        marginLeft: {
           value: function(){
                return anime.random(-20,20);
           },
           delay: function(el, index){
            return 80*index;
           },
           duration: 3000
        },
        loop: true
    })
};
function suzhouAnimation(){
    
};
function shanghaiAnimation(){

    
};
function hongkongAnimation(){
   
};
function klAnimation(){
    if (animeObj.fire) {
        clearTimeout(animeObj.fireTime);
        animeObj.fireTime = setTimeout(function(){
           animeObj.fire.restart();
        },2000)
        
        return;
    }
    setTimeout(function(){
        animeObj.fire = anime({
            targets: ".page-kl .fire",
            opacity: {
                delay: function(el, index){
                    return index * 500 + 1000;
                },
                value: [1,0],
                duration: 1000,
                easing: "easeInBounce"
            },
            translateX: {
                value: function(){
                    return anime.random(10,50)
                }
            },
            scale: {
                delay: function(el, index){
                    return index * 100 + 1000;
                },
                value: [0,1],
                duration: 2000
            },
            loop: 3
        })
    },2000)
      
};
function photoAnimation(){
    if (animeObj.photo) {
        animeObj.photo.restart();
        return;
    }
    animeObj.photo = anime({
        targets: ".photo-item",
        translateY: {
            delay: function(el, index) {
                 return index*200
            },
            value: [-1000, 0]
        }
    })
}
function commentAnimation(){

};
function mapAnimation(){

};


//bind event
(function(){
    var backEle = $("#rsvp-back"),
        sendEle = $("#rsvp-send"),
        openEle = $("#rsvp-open"),
        commentEle = $(".page-comment");

    openEle.tap(function(){
        commentEle.addClass("open")
    });
    backEle.tap(function(e){
        commentEle.removeClass("open");
        e.preventDefault();
    })
    sendEle.click(function(e) {
        
        e.preventDefault();
        $.get("http://v2.xiandusi.com:3030/insert?" + $("#rsvp-form").serialize(), function(response){
            if(response.err){
                alert("噢噢，好像填的有点不对")
            }else{
                $("#rsvp-form")[0].reset();
                commentEle.removeClass("open");
                alert("祝福成功！")
            }
        })
    });
    var audioStatus;
    var audio = $("audio")[0];
    var musicBtn = $(".music");
    audio.addEventListener("playing", function(){
        audioStatus = "playing";
        musicBtn.addClass("playing");
    });
    audio.addEventListener("pause", function(){
        audioStatus = "paused";
        musicBtn.removeClass("playing");
    });
    musicBtn.on("touchstart", function() {
        if (audioStatus==="playing"){
            audio.pause();
        }else{
            audio.play();
        }
    })
    $("body").on("touchstart", function(){
        if (!audioStatus){
            audio.play();
        }
    });
    $("body").on("click", ".modal", function() {
        $(this).remove();
    })
    $("#photo-list").on("click", "img", function() {
        modal($(this).attr("src"));
    });

    function modal(src) {
        var html = ['<div class="modal">',
                         '<div class="modal-background"></div>',
                         '<div class="modal-content">',
                         '<img src="'+ src +'">',
                         '</div>',
                    '</div>'].join("");
        $(html).appendTo("body");            
    };
    
        
})()
