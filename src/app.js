var Zepto = require("../node_modules/zepto/zepto.min");
var PageSlider =  require("./lib/PageSlider");
new PageSlider({
    pages: $(".page-wrap .page")
});
