var Zepto = require("./lib/zepto");
var PageSlider =  require("./lib/PageSlider");
var anime = require("./lib/anime");
var animeObj = window.animeObj =  {};

//init slider
var pageSlider = new PageSlider({
    pages: $(".page-wrap .page"),
    dev:false,
    oninit: oninit,
    onbeforechange: onbeforechange,
    onchange: onchange
});


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
            shanghaiAnimation();
            break;
        case 3:
            hongkongAnimation();
            break;
        case 4:
            klAnimation();                
    }
};

//onchange callback
function onchange(index){ 

};
function indexAnimation(){
    if (animeObj.indexWe || animeObj.indexCloud) {
        return;
    }
    animeObj.indexWe = anime({
        targets: [".page-index .we"],
        bottom: {
            value: 388,
            duration: 12000,
            delay: 120
        }
    });
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
    if (animeObj.suzhouWe){
        animeObj.suzhouWe.restart();
    }
    animeObj.suzhouWe = anime({
        targets:  ".page-suzhou .we",
        delay: 120,
        bottom: 388,
        duration: 12000   
    })
};
function shanghaiAnimation(){
    if (animeObj.shanghaiWe){
        animeObj.shanghaiWe.restart();
    }
    animeObj.shanghaiWe = anime({
        targets:  ".page-shanghai .we",
        delay: 120,
        bottom: 388,
        duration: 12000  
    })
};
function hongkongAnimation(){
    if (animeObj.hongkongWe){
        animeObj.hongkongWe.restart();
    }
    animeObj.hongkongWe = anime({
        targets:  ".page-hongkong .we",
        delay: 120,
        bottom: 388,
        duration: 12000  
    })
};
function klAnimation(){
    if (animeObj.klWe){
        animeObj.klWe.restart();
    }
    animeObj.klWe = anime({
        targets:  ".page-kl .we",
        delay: 120,
        bottom: 388,
        duration: 12000   
    })
};
function commentAnimation(){

};
function mapAnimation(){

}
