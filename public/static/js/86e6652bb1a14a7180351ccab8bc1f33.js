/*from tccdn minify at 2016-12-4 8:13:33,file：/cn/s/index/2015/toolbar/scroll_new.js?v=3214532*/
(function(){var a=null;var b=function(c){var h=this;var i;this.wheelNum=(c.wheelNum&&c.wheelNum>0)?c.wheelNum:10;this.clickspeed=(c.clickspeed&&c.clickspeed>1)?c.clickspeed:1;this.container=fish.dom(c.container);this.shower=fish.dom(c.shower);this.scroller=fish.dom(c.scroller);if(c.scroll_up){this.scroll_up=fish.dom(c.scroll_up);fish.all(this.scroll_up).addClass("msp_scroller_up").css("position:absolute;")}else{this.scroll_up=false}if(c.scroll_down){this.scroll_down=fish.dom(c.scroll_down);fish.all(this.scroll_down).addClass("msp_scroller_down").css("position:absolute;")}else{this.scroll_down=false}this.scroll_bar=fish.dom(c.scroll_bar);if(c.scrollerx){this.scrollerX=fish.dom(c.scrollerx);if(c.scroll_upx){this.scroll_upX=fish.dom(c.scroll_upx);fish.all(this.scroll_upX).css("position:absolute;")}else{this.scroll_upX=false}if(c.scroll_downx){this.scroll_downX=fish.dom(c.scroll_downx);fish.all(this.scroll_downX).css("position:absolute;")}else{this.scroll_downX=false}this.scroll_barX=fish.dom(c.scroll_barx);fish.all([this.scrollerX,this.scroll_barX]).css("position:absolute;");fish.one(c.scrollerx).addClass("msp_sc_select")}this.clearselect=window.getSelection?function(){window.getSelection().removeAllRanges()}:function(){document.selection.empty()};fish.all([this.scroller,this.scroll_bar,this.shower,this.container]).css("position:absolute;");fish.all(this.container).addClass("msp_container");fish.all(this.shower).addClass("msp_shower msp_sc_select");fish.all(this.scroller).addClass("msp_scroller");fish.all(this.scroll_bar).addClass("msp_scroller_bar");var f=this.scroll_up?h.scroll_up.offsetHeight:0,d=this.scroll_down?h.scroll_down.offsetHeight:0,g=this.scroll_upX?h.scroll_upX.offsetWidth:0,e=this.scroll_downX?h.scroll_downX.offsetWidth:0;if(c.defaultStyle){fish.one(c.scroll_bar).addClass(" msp_scroll_radiusX");if(c.scrollerx){fish.one(c.scroll_barx).addClass(" msp_scroll_radiusY")}}h.scrollHeight=100;if((this.shower.offsetHeight/fish.one(this.container).height())>1){h.scrollHeight=Math.floor(fish.one(this.scroller).height()/(this.shower.offsetHeight/fish.one(this.container).height()));h.scrollHeight=(h.scrollHeight<30)?30:h.scrollHeight}if(c.scrolly){h.scrollHeight=c.scrolly}fish.one(this.scroll_bar).css("height:"+h.scrollHeight+"px;left:"+((fish.one(this.scroller).width()-fish.one(this.scroll_bar).width())/2)+"px;");if(c.scrollerx){h.scrollWidth=100;if((this.shower.offsetWidth/fish.one(this.container).width())>1){h.scrollWidth=Math.floor(fish.one(this.scrollerX).width()/(this.shower.offsetWidth/fish.one(this.container).width()));h.scrollWidth=(h.scrollWidth<30)?30:h.scrollWidth}if(c.scrollx){h.scrollWidth=c.scrollx}fish.one(this.scroll_barX).css("width:"+h.scrollWidth+"px;top:"+((fish.one(this.scrollerX).height()-fish.one(this.scroll_barX).height())/2)+"px;")}this.is_bottom=function(){if(h.shower.offsetTop<=h.container.offsetHeight-h.shower.offsetHeight){return true}return false};this.resetright=function(){var j=h.shower.offsetTop/(h.shower.offsetHeight-h.container.offsetHeight);var k=h.scroller.offsetHeight-d-h.scroll_bar.offsetHeight-f;var l=f+(0-k*j);h.scroll_bar.style.top=l+"px"};this.resetleft=function(){var j=(h.scroll_bar.offsetTop-f)/(h.scroller.offsetHeight-f-d-h.scroll_bar.offsetHeight);var k=h.shower.offsetHeight-h.container.offsetHeight;var l=0-(k*j);h.shower.style.top=l+"px"};this.move=function(j){if(h.shower.offsetTop+j<=0&&h.shower.offsetTop+j>=h.container.offsetHeight-h.shower.offsetHeight){h.shower.style.top=(h.shower.offsetTop+j)+"px"}else{if(h.shower.offsetTop+j>0){h.shower.style.top=0+"px"}else{if(h.shower.offsetTop+j<h.container.offsetHeight-h.shower.offsetHeight){h.shower.style.top=h.container.offsetHeight-h.shower.offsetHeight+"px"}}}h.resetright()};this.upper=function(){h.clear();i=window.setInterval(function(){h.move(h.clickspeed)},5)};this.downer=function(){h.clear();i=window.setInterval(function(){h.move(-h.clickspeed)},5)};this.clear=function(){window.clearInterval(i)};this.test_bar=function(){if(h.container.offsetHeight<h.shower.offsetHeight){h.scroller.style.display="block"}else{h.scroller.style.display="none";h.shower.style.top=0}};this.gotobottom=function(){var j=(h.shower.offsetHeight>h.container.offsetHeight)?h.container.offsetHeight-h.shower.offsetHeight:0;h.shower.style.top=j+"px";h.test_bar();h.resetright()};this.wheel=function(){if(h.container.offsetHeight<h.shower.offsetHeight){h.scroller.style.display="block"}else{h.scroller.style.display="none";h.shower.style.top=0;return false}var j=(h.shower.offsetHeight>h.container.offsetHeight)?h.container.offsetHeight-h.shower.offsetHeight:0;if(a==null){a=j}if(a==j){var l=arguments[0]||window.event;var k=l.wheelDelta?l.wheelDelta/120:(0-l.detail/3);h.clear();h.move(h.wheelNum*k);try{l.preventDefault()}catch(l){}}window.setTimeout(function(){h.end_wheel()},1);return false};this.end_wheel=function(){a=null};this.barmove=function(){h.clearselect;var j=this;this.can_move_top=h.scroll_bar.offsetTop-f;this.can_move_bottom=h.scroller.offsetHeight-h.scroll_bar.offsetTop-d-h.scroll_bar.offsetHeight;this.e=arguments[0]||window.event;this.starts=this.e.clientY;this.starttop=h.scroll_bar.offsetTop;this.drag=function(){this.e=arguments[0]||window.event;this.ends=this.e.clientY;this.dis=this.ends-j.starts;if(this.dis<(0-j.can_move_top)){this.dis=0-j.can_move_top}if(this.dis>j.can_move_bottom){this.dis=j.can_move_bottom}h.scroll_bar.style.top=(j.starttop+this.dis)+"px";h.resetleft();h.clearselect};this.cleardrag=function(){if(window.removeEventListener){document.removeEventListener("mousemove",j.drag,true)}else{document.detachEvent("onmousemove",j.drag)}h.clearselect};this.add_listener=function(){if(window.addEventListener){document.addEventListener("mousemove",j.drag,true);document.addEventListener("mouseup",j.cleardrag,true)}else{document.attachEvent("onmousemove",j.drag);document.attachEvent("onmouseup",j.cleardrag)}};this.add_listener()};this.outbar=function(){var j=arguments[0]||window.event;var l=j.srcElement?j.srcElement:j.target;if(l.id==h.scroller.id){var m=j.offsetY||j.layerY;var k=m-0.5*h.scroll_bar.offsetHeight;if(m-f<0.5*h.scroll_bar.offsetHeight){k=f}if(h.scroller.offsetHeight-m-d<0.5*h.scroll_bar.offsetHeight){k=h.scroller.offsetHeight-d-h.scroll_bar.offsetHeight}h.scroll_bar.style.top=k+"px";h.resetleft()}};this.outbarx=function(){var j=arguments[0]||window.event;var l=j.srcElement?j.srcElement:j.target;if(l.id==h.scrollerX.id){var m=j.offsetX||j.layerX;var k=m-0.5*h.scroll_barX.offsetWidth;if(m-g<0.5*h.scroll_barX.offsetWidth){k=g}if(h.scrollerX.offsetWidth-m-h.scroll_downX.offsetWidth<0.5*h.scroll_barX.offsetWidth){k=h.scrollerX.offsetWidth-h.scroll_downX.offsetWidth-h.scroll_barX.offsetWidth}h.scroll_barX.style.left=k+"px";h.resetleftx()}};this.resetleftx=function(){var j=(h.scroll_barX.offsetLeft-g)/(h.scrollerX.offsetWidth-g-h.scroll_downX.offsetWidth-h.scroll_barX.offsetWidth);var k=h.shower.offsetWidth-h.container.offsetWidth;var l=0-(k*j);h.shower.style.left=l+"px"};this.resetrightx=function(){var j=h.shower.offsetLeft/(h.shower.offsetWidth-h.container.offsetWidth);var k=h.scrollerX.offsetWidth-h.scroll_downX.offsetWidth-h.scroll_barX.offsetWidth-g;var l=g+(0-k*j);h.scroll_barX.style.left=l+"px"};this.upperx=function(){h.clear();i=window.setInterval(function(){h.movex(-h.clickspeed)},5)};this.downerx=function(){h.clear();i=window.setInterval(function(){h.movex(h.clickspeed)},5)};this.movex=function(j){var j=j;if(-h.shower.offsetLeft+j>=0&&-h.shower.offsetLeft+j<=h.shower.offsetWidth-h.container.offsetWidth){h.shower.style.left=(-j+h.shower.offsetLeft)+"px"}else{if(h.shower.offsetLeft>=0){h.shower.style.left=0+"px"}else{if(-h.shower.offsetLeft+j<0){h.shower.style.left=h.shower.offsetWidth-h.container.offsetWidth+"px"}else{if(h.shower.offsetLeft<0&&j>0&&-h.shower.offsetLeft+j>=(h.shower.offsetWidth-h.container.offsetWidth)){h.shower.style.left=h.container.offsetWidth-h.shower.offsetWidth+"px"}}}}h.resetrightx()};this.barmovex=function(){h.clearselect;var j=this;this.can_move_left=h.scroll_barX.offsetLeft-g;this.can_move_width=h.scrollerX.offsetWidth-h.scroll_barX.offsetLeft-h.scroll_downX.offsetWidth-h.scroll_barX.offsetWidth;this.e=arguments[0]||window.event;this.starts=this.e.clientX;this.startleft=h.scroll_barX.offsetLeft;this.drag=function(){this.e=arguments[0]||window.event;this.ends=this.e.clientX;this.dis=this.ends-j.starts;if(this.dis<(0-j.can_move_left)){this.dis=0-j.can_move_left}if(this.dis>j.can_move_width){this.dis=j.can_move_width}h.scroll_barX.style.left=(j.startleft+this.dis)+"px";h.resetleftx();h.clearselect};this.cleardrag=function(){if(window.removeEventListener){document.removeEventListener("mousemove",j.drag,true)}else{document.detachEvent("onmousemove",j.drag)}h.clearselect};this.add_listener=function(){if(window.addEventListener){document.addEventListener("mousemove",j.drag,true);document.addEventListener("mouseup",j.cleardrag,true)}else{document.attachEvent("onmousemove",j.drag);document.attachEvent("onmouseup",j.cleardrag)}};this.add_listener()};this.scroll_bar.ondrag=function(){return false};this.scroll_bar.oncontextmenu=function(){return false};this.scroll_bar.onselectstart=function(){return false};this.init=function(){if(window.addEventListener){this.scroll_up?this.scroll_up.addEventListener("mousedown",this.upper,false):"";this.scroll_down?this.scroll_down.addEventListener("mousedown",this.downer,false):"";this.scroll_bar.addEventListener("mousedown",this.barmove,false);this.scroller.addEventListener("mousedown",this.outbar,false);if(this.scrollerX){this.scroll_upX?this.scroll_upX.addEventListener("mousedown",this.upperx,false):"";this.scroll_downX?this.scroll_downX.addEventListener("mousedown",this.downerx,false):"";this.scroll_barX.addEventListener("mousedown",this.barmovex,false);this.scrollerX.addEventListener("mousedown",this.outbarx,false)}this.container.parentNode.addEventListener("DOMMouseScroll",this.wheel,false);this.container.parentNode.addEventListener("mousewheel",this.wheel,false);document.addEventListener("mouseup",this.clear,false)}else{this.scroll_up?this.scroll_up.attachEvent("onmousedown",this.upper):"";this.scroll_down?this.scroll_down.attachEvent("onmousedown",this.downer):"";this.scroll_bar.attachEvent("onmousedown",this.barmove);this.scroller.attachEvent("onmousedown",this.outbar);if(this.scrollerX){this.scroll_upX?this.scroll_upX.attachEvent("onmousedown",this.upperx):"";this.scroll_downX?this.scroll_downX.attachEvent("onmousedown",this.downerx):"";this.scroll_barX.attachEvent("onmousedown",this.barmovex);this.scrollerX.attachEvent("onmousedown",this.outbarx)}this.container.parentNode.attachEvent("onmousewheel",this.wheel);document.attachEvent("onmouseup",this.clear);try{window.event.cancelBubble=true}catch(j){}}this.test_bar();fish.one(window).on("resize",function(){h.test_bar()})};this.init();fish.one(window).on("resize",function(){})};fish.extend({mScrollpane:function(c){return new b(c)}})})();