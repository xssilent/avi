/*from tccdn minify at 2016-12-8 9:06:15,file：/cn/s/2016/pc/scenery/final/sFinal.3.5.js?v=20162025222226*/
var hf_SceneryId=fish.all("#hf_SceneryId").val(),hf_SceneryName=fish.all("#hf_SceneryName").val(),sceneryCode=fish.one("#hf_sceneryType").val(),DPNum=Number(fish.one("#DPNum").val());function toNewSrc(e,c){var b,f,a;if(c){f=c.split("_")[0];a=c.split("_")[1]}if(e.indexOf("http://pic3.40017.cn/")===0){var d=e.slice(e.length-4,e.length);if(c){b=e.slice(0,e.length-4)+"_"+f+"x"+a+"_00"+e.slice(e.length-4,e.length)}else{b=e}}else{if(e.indexOf("http://upload.17u.com/")===0){b=e}else{if(e.indexOf("http://")===0){b=e}else{if(c){b="http://upload.17u.com/uploadfile/scenerypic_common/"+f+"_"+a+"/"+e}else{b="http://upload.17u.com/uploadfile/"+e}}}}return b}var tabFn={init:function(f,d,a,b){var e=fish.all(f),c=fish.all(d);e.each(function(g,h){g.onclick=function(){var i=fish.one(this);if(!i.hasClass(a)){e.removeClass(a);i.addClass(a);c.addClass("none");fish.one(c[h]).removeClass("none")}}})}};var priceCaseFn={ajaxBackFn:function(a,d){var c=["SelfList","YRYList","NjlList"],e=c[Number(a)],b="";if(Number(a)==0){for(var g=0;g<d[e].length;g++){var l=d[e][g],m="",h="",f="",j=l.AmtAdv-l.AmtDT,k="";h=l.AdultCT>0?l.AdultCT+"成人 ":"";h=l.ChildCT>0?h+l.ChildCT+"儿童":h;k=j>0?"<span><i>省</i><b>¥"+j+"</b></span>":"&nbsp;";f=l.RetPrize>0?"<span><i>返</i><b>¥"+l.RetPrize+"</b></span>":"&nbsp;";m='<li><div class="tst-1" style="width:908px;"><a md_data = "scenery_detail_jdjjjxlbt|详情页酒加景线路标题点击事件|'+(g+1)+"|"+l.Id+'" href="'+l.Orderurl+'" target="_blank" title="'+l.SubTitle+'">'+l.SubTitle+'</a></div><div class="tst-4" style="width: 138px">¥<b>'+l.AmtDT+'</b></div><div class="tst-6"><a md_data = "scenery_detail_jdjjjxlan|详情页酒加景按钮点击事件|'+(g+1)+"|"+l.Id+'" href="'+l.Orderurl+'" target="_blank" class="tst-book">预订</a></div></li>';b=b+m}}else{if(Number(a)==1){for(var g=0;g<d[e].length;g++){var l=d[e][g],m="",j=Number(l.Amount)-Number(l.AmountAdvice),k="";k=j>0?"<span><i>省</i><b>¥"+j+"</b></span>":"&nbsp;";m='<li><div class="tst-1"><a md_data = "scenery_detail_jdzbgtxlbt|详情页周边跟团线路标题点击事件|'+(g+1)+"|"+l.ProductUnit+'" href="'+l.OrderUrl+'" target="_blank" title="'+l.TicketName+'">'+l.TicketName+'</a></div><div class="tst-2">'+(l.StartCityName?l.StartCityName:"&nbsp;")+'</div><div class="tst-4">¥<b>'+l.AmountAdvice+'</b></div><div class="tst-6"><a md_data = "scenery_detail_jdzbgtxlan|详情页周边跟团线路按钮点击事件|'+(g+1)+"|"+l.ProductUnit+'" href="'+l.OrderUrl+'" target="_blank" class="tst-book">预订</a></div></li>';b=b+m}}else{if(Number(a)==2){for(var g=0;g<d[e].length;g++){var l=d[e][g];var n=l.IsYiyuan==1?'<span class="y_th">1元特惠</span>':"&nbsp;";m='<li><div class="tst-1" style="width: 800px"><a href="/scenery/BookSceneryTicket_'+l.Sid+'.html" target="_blank" title="'+l.SceneryName+'">'+l.SceneryName+'</a></div><div class="tst-2" style="width: 155px">直线距离约'+l.Distant+'公里</div><div class="tst-4">¥<b>'+l.TcAmount+'</b></div><div class="tst-6"><a href="/scenery/BookSceneryTicket_'+l.Sid+'.html" target="_blank" class="tst-book">预订</a></div></li>';b=b+m}}}}return b},priceAjaxFn:function(b,a){fish.ajax({url:b,type:"json",fn:function(j){if(!fish.dom(".tics-ban")){return}if(j.state==100&&hf_SceneryId!="254"){var d=["酒店+景点","跟团游","附近玩乐"],n=document.createElement("li");n.innerHTML="<span>"+d[Number(a)]+"</span>";fish.dom(".tics-ban").appendChild(n);var f=document.createElement("div"),h=document.createElement("div"),e=document.createElement("div"),i=document.createElement("ul"),m="";f.className="tic-con none";h.className="tic-set";e.className="tic-set-top";i.className="tic-set-con";e.innerHTML=' <div class="tst-1">套餐名称</div><div class="tst-2">出发城市</div><div class="tst-4">同程价</div><div class="tst-6">操作</div>';if(a==2){e.innerHTML=' <div class="tst-1" style="width: 800px">商家名称</div><div class="tst-2" style="width: 155px">距离</div><div class="tst-4">同程价</div><div class="tst-6">操作</div>';i.className="tic-set-con wl_list"}else{if(a==0){e.innerHTML=' <div class="tst-1" style="width: 908px">套餐名称</div><div class="tst-4" style="width: 138px">同程价</div><div class="tst-6">操作</div>'}}h.appendChild(e);m=priceCaseFn.ajaxBackFn(a,j);i.innerHTML=m;h.appendChild(i);f.appendChild(h);fish.dom(".tics").appendChild(f);var c=fish.all(".tic-con .tst-1 a,.tic-con .tst-6 a");var k=fish.one("#cityIdByIp").val();c.each(function(p,q){var o=fish.one(p);p.onclick=function(){var r=o.attr("md_data");r=r&&r.split("|");r&&marketTrackEvent(r[0],r[1],"PC景区产品详情页","^"+r[2]+"^"+r[3]+"^"+k+"^"+hf_SceneryId+"^")}});var l=fish.all(".tics-ban li"),g=fish.all(".tics .tic-con");l.each(function(o,p){o.onclick=function(){var s=fish.one(this);var r=fish.one("span",s).html();var q=fish.one("#cityIdByIp").val();if(r=="酒店+景点"){marketTrackEvent("scenery_detail_jdjjjtab","详情页酒加景tab点击事件","PC景区产品详情页","^"+q+"^"+hf_SceneryId+"^")}else{if(r=="跟团游"){marketTrackEvent("scenery_detail_jdzbgttab","详情页页周边跟团tab点击事件","PC景区产品详情页","^"+q+"^"+hf_SceneryId+"^")}}if(!s.hasClass("tic-at")){l.removeClass("tic-at");s.addClass("tic-at");g.addClass("none");fish.one(g[p]).removeClass("none")}}})}}})},yryTic:function(){if(fish.one("#hf_IsCanBook").val()=="1"){var b="/scenery/AjaxHelper/SceneryPriceFrame.aspx?action=GETSCENERYYRY&Id="+hf_SceneryId+"&sceneryCityId="+fish.one("#hf_CityId").val(),a=1;priceCaseFn.priceAjaxFn(b,a)}},packTic:function(){if(fish.one("#hf_IsCanBook").val()=="1"){var b="/scenery/AjaxHelper/SceneryPriceFrame.aspx?action=GetScenerySelf&pageSize=5&id="+hf_SceneryId,a=0;priceCaseFn.priceAjaxFn(b,a)}},wlTic:function(){if(fish.one("#hf_jqpjk").val()=="0"){return}var c=fish.one("#mapLat").val(),d=fish.one("#mapLng").val();var b="/scenery/AjaxHelper/SceneryPriceFrame.aspx?action=GETLASTWANLE&lat="+c+"&lon="+d+"&sceneryId="+hf_SceneryId,a=2;priceCaseFn.priceAjaxFn(b,a)},createNewTab:function(){fish.one(".api_item div").each(function(){if(fish.all(".fjwl_channel").length>0){var b=document.createElement("li");b.innerHTML="<span>附近玩乐</span>";fish.dom(".tics-ban").appendChild(b)}if(fish.all(".jj_channel").length>0){var b=document.createElement("li");b.innerHTML="<span>酒店+景点</span>";fish.dom(".tics-ban").appendChild(b)}if(fish.all(".zbgt_channel").length>0){var b=document.createElement("li");b.innerHTML="<span>周边跟团</span>";fish.dom(".tics-ban").appendChild(b)}});var a=fish.all(".tics-ban li");a.each(function(b,c){b.onclick=function(){var e=b.firstChild.innerHTML;var d="";switch(e){case"酒店+景点":d="jj_channel";break;case"周边跟团":d="zbgt_channel";break;case"附近玩乐":d="fjwl_channel";break}document.body.scrollTop=fish.one("."+d).offset().top}})},init:function(){var a=this;setTimeout(function(){a.createNewTab()},600)}};var imgAlbum={mouseoverFn:function(b,e,a,d){var f=fish.one("img",b).attr("bigsrc");e.attr("src",f);d.removeClass(a);fish.one(b).addClass(a);var c=b.getAttribute("pic_num");fish.one(".order_w i").html(c)},projectionFn:function(b,c,a){b.on("mouseover",function(){imgAlbum.mouseoverFn(this,c,a,b)})},bigImgProjection:function(){var a=fish.one(".info_l .img_w  img"),b=fish.all(".info_l .img_slider li");imgAlbum.projectionFn(b,a,"a-at");b.on("click",function(){bigAlbum.showAlbum(0)})},init:function(){imgAlbum.bigImgProjection()}};var bigAlbum={nowNum:1,tolNum:1,phoSlider:null,setImgAlbumFn:function(a,g,c){bigAlbum.nowNum=0;bigAlbum.tolNum=a.length;var e=fish.one(".photo-album .mSlider_photo ul");e.html("");var h="",b="";b=g==0?bigAlbum.getDescStr(g):bigAlbum.getDescStr(g,c,c[4]);for(var d=0;d<a.length;d++){var j=a[d];h=g==0?j.AbsoluteImagePath:j;var f=document.createElement("li");f.setAttribute("picnum",d+1);f.innerHTML=' <img nsrc="'+h+'">';e[0].appendChild(f)}loadWebp({attr:"nsrc",img:fish.all("img",e),replace:true});fish.one(".dp_detail_w .detail_l").html(b);fish.one(".dp_detail_w .tol").html(bigAlbum.tolNum);setTimeout(function(){var i=fish.one("#slider_pho_w").mSlider({autoScroll:false,canvas:"#slider_pho_w .mSlider_photo ul",content:"#slider_pho_w .mSlider_photo ul li",arrows:true,circle:true,showNav:false,prevBtnDisabled:"disabled",nextBtnDisabled:"disabled",prevBtn:"#pho_left",nextBtn:"#pho_right",prevFn:function(){var k=fish.one(fish.one(".mSlider_photo li")[0]).attr("picnum");fish.one(".dp_detail_w .now").html(k)},nextFn:function(){var k=fish.one(fish.one(".mSlider_photo li")[0]).attr("picnum");fish.one(".dp_detail_w .now").html(k)}})},300)},showAlbum:function(b,a){if(b==0){fish.ajax({url:"/scenery/SceneryWeb/Detail.aspx",data:"action=GetSceneryPic&sId="+hf_SceneryId+"&pageSize=39",type:"json",fn:function(d){if(d&&d.LstImages&&d.LstImages.length){bigAlbum.setImgAlbumFn(d.LstImages,b,a)}}})}else{if(b==1){var c=a[3].split(",");bigAlbum.setImgAlbumFn(c,b,a)}}fish.mPop({content:fish.one("#popOut .photo-album"),transition:"elastic",speed:10,afterOpen:function(){fish.one(".pho_close").on("click",function(){fish.mPop.close();fish.one(".photo-album .mSlider_photo ul").html("");fish.one("#pho_left").removeClass("disabled");fish.one("#pho_right").removeClass("disabled");fish.one(".dp_detail_w .now").html(1)})}})},getDescStr:function(c,b,d){var a="";if(c==0){a+='<p class="pho_same">图片均由网友上传</p>'}else{if(c==1){if(b[1].length>60){b[1]=b[1].substring(0,60)+"..."}a+="<p>"+b[0]+"用户上传于"+d+"</p><p>"+b[1]+"</p>"}}return a},getPicH:function(b){var a=fish.one(b).height();if(a>=550){fish.one(b).css("height:550px")}else{fish.one(b).css("margin-top:"+(550-a)/2+"px")}}};var bookDesFn={hoverFn:function(c,a,e){var b=fish.all(c),d=e?fish.all(e):b,f=null;b.hover(function(){clearTimeout(f);d=e?fish.all(e):fish.one(this);d.addClass(a)},function(){f=setTimeout(function(){d.removeClass(a)},200)});d.hover(function(){clearTimeout(f);d.addClass(a)},function(){d.removeClass(a)})},hoverThisFn:function(c,a){var b=fish.all(c);b.each(function(d,e){var f=fish.one(d);f.hover(function(){f.addClass(a)},function(){f.removeClass(a)})})},showTipTxt:function(a){var b;switch(a){case"s_tag sup-ensu":b="预订景区门票后，因同程原因无法入园且协调处理10分钟未解决，可买门市价票入园，同程将赔付双倍差价。<a href='/zhuanti/fxd/' class='see_more' target='_blank'>查看详情&gt;&gt;</a>";break;case"s_tag sup-fast":b="同程订门票，预订支付成功后，无需排队直接快速取票/验证入园。<a href='/zhuanti/fxd/' class='see_more' target='_blank'>查看详情&gt;&gt;</a>";break;case"s_tag sup-quit":b="登录客户端提交退款申请，优先审核办理，退款更高效。<a href='http://shouji.17u.cn/' class='see_more' target='_blank'>下载同程旅游客户端&gt;&gt;</a>";break;case"s_tag sup-gjp":b="贵就赔是同程旅游为同程会员提供的价格保障服务。预订景区门票并在线支付成功后，发现同一出游日期同一常规票型在其他正规网络渠道的价格比同程价低（如：携程，途牛、驴妈妈、景区官网；不含淘宝、天猫、去哪儿、去啊、美团等网站，仅限B2C网站），可在客户端订单详情页申请，核实后同程双倍赔差价。客户端版本需为V8.1.4及以上。";break;default:b=""}return b},showTipPopFn:function(c,f,d){var e=fish.all(f),b=fish.all(c),a,h,g=null;b.hover(function(){if(bookDesFn.showTipTxt(this.className)==""){return}fish.one(".info_r .st-con").html(bookDesFn.showTipTxt(this.className));clearTimeout(g);a=fish.one(this).offset(".info_r").left+0;h=fish.one(this).offset(".info_r").top+d;e.css("display:block;");e.anim("left:"+a+"px;top:"+h+"px;opacity:1;")},function(){if(bookDesFn.showTipTxt(this.className)==""){return}g=setTimeout(function(){e.css("display:none;opacity:0;")},300)});e.hover(function(){clearTimeout(g);e.css("display:block;");e.anim("left:"+a+"px;top:"+h+"px;opacity:1;")},function(){e.css("display:none;opacity:0;")})},ajaxFn:function(){fish.ajax({url:"/scenery/AjaxHelper/SceneryPriceFrame.aspx?action=GetSceneryBookKnowsNew&id="+hf_SceneryId,type:"json",fn:function(a){if(a&&a[0]&&a[0].Notice){var a=a[0].Notice;var k='<table class="res_con_box">',g,h="",f;for(var c=0,e=a.length;c<e;c++){g=a[c],h="";h=g.Type=="1"?"预订限制":g.Type=="0"?"活动提醒":g.TypeName;k+='<tr>                                        <td class="td_type1">'+h+'</td>                                        <td class="td_type2">';for(var d=0,b=g.BItem.length;d<b;d++){f=g.BItem[d];if(g.Type=="1"||g.Type=="2"){k+='<div class="td_i_w td_i_z">                                            <p>'+f.Cont+"</p>                                         </div>"}else{k+='<div class="td_i_w">                                                <h4>'+f.Name+"</h4>                                                <p>"+f.Cont+"</p>                                             </div>"}}k+="    </td>                                    </tr>"}k+="</table>";fish.one("#book_note_con .b_i_m").html(k)}}})},init:function(){this.showTipPopFn(".service_w span i","#st-pop",23);this.ajaxFn();if(fish.one(".open_time").hasClass("canhover")){fish.one(".open_time").hover(function(){fish.one(".s-tShow").css("display:block")},function(){fish.one(".s-tShow").css("display:none")})}else{fish.one(".open_time span i").html("remove")}fish.one(".s-tShow").hover(function(){fish.one(".s-tShow").css("display:block")},function(){fish.one(".s-tShow").css("display:none")})}};var comRocomFn={recGetScript:function(e,a,b){var c=Math.floor(Math.random()*1000000000000),d=document.createElement("script");d.type="text/javascript";d.async=true;if(typeof a==="function"){d.onload=d.onreadystatechange=function(){if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){d.onload=d.onreadystatechange=null;a()}}}else{b=a}d.src=e+(b?("?v="+(c++)):"");document.getElementsByTagName("script")[0].parentNode.appendChild(d);return d},recommendSpm:function(b,c){var a=fish.one(b);var d=setInterval(function(){var e=fish.all("li",a);if(e.length>0){clearInterval(d);e.each(function(f,g){var h=g+1;fish.all("a",f).each(function(){var i=fish.one(this).attr("href");if(i.indexOf("?")>0){i=i+"&spm="+c+h}else{i=i+"?spm="+c+h}fish.one(this).attr("href",i)})})}},200)},recomAjaxFn:function(a,d){var c=window._tccip,e=window._tclk,j=window._tcq[3][1],f=fish.cookie.get("MAIF"),g=fish.cookie.get("MAIH"),h=fish.cookie.get("MAHL"),i=fish.cookie.get("MAIS"),b="_dAjax&quanlity=6&cid="+a+"&ipint="+c+"&lkey="+e+"&userid="+j+"&rid="+hf_SceneryId+"&maif="+f+"&maih="+g+"&maihl="+h+"&mais="+i;fish.ajax({url:"http://tctj.ly.com/jrec/rec",openType:"get",type:"jsonp",data:b,fn:function(k){dataJson=k;comRocomFn.recomBackFn(a,k,d)}})},recomBackFn:function(a,b,e){var h=b.length>4?4:b.length;if(a==25){if(b.length>0){fish.one("#nearby_view_con .b_i_m .inf-rec-con").html("");for(var d=0;d<h;d++){var l=b[d],k=document.createElement("a"),c;c=b[d].distance==0?"":(b[d].distance<1000?"距离"+b[d].distance+"米":"距离"+parseFloat(b[d].distance/1000).toFixed(2)+"公里");k.className="recom-link";k.title=l.name;k.target="_blank";k.href="http://www.ly.com/HotelInfo-"+l.resId+".html#Resys="+l.batchNo+"?spm=8.71820098.747."+(d+1);k.innerHTML='<img nsrc="'+l.photo+'" alt=""><p> '+l.name+'</p><p class="inf-range">'+c+'</p><div class="r-price"><span class="r-p-n"><i>¥</i><b>'+parseFloat(b[d].lowerPrice)+'</b>起</span><span class="r-p-bto">去看看</span></div>';fish.one(k).attr("md_data",l.resId+"|"+l.distance+"|"+b[d].lowerPrice);fish.one("#nearby_view_con .b_i_m .inf-rec-con").html("bottom",k);var f=fish.all("#nearby_view_con img");loadWebp({attr:"nsrc",img:f,fn:function(){f.lazyLoad({attr:"nsrc"})}})}fish.all("#nearby_view_con .b_i_m a").each(function(n,o){fish.one(n).on("click",function(){var i=fish.one(n).attr("md_data").split("|");marketTrackEvent("scenery_detail_jdzbjdxl","景点详情页附近酒店点击事件","PC景区产品详情页","^"+(o+1)+"^"+i[0]+"^"+i[1]+"^"+i[2]+"^")})})}else{fish.one("#nearby_view_con").html("remove");fish.one("#nearby_view").html("remove")}}else{if(a==26){if(!e){fish.one(".r_b_r .con_near ul").html("");for(var d=0;d<h;d++){var l=b[d],g=document.createElement("li");var j="http://www.ly.com/scenery/BookSceneryTicket_"+l.resId+".html#Resys="+l.batchNo+"?spm=8.71820098.746."+(d+1);g.innerHTML='<a href="'+j+'" target="_blank">                                            <img nsrc="'+l.photo+'" alt="">                                            </a>                                            <p>'+l.name+'</p>                                            <div class="re_detail clearfix">                                                <span class="z_price">                                                    <i>&yen;<b>'+parseFloat(b[d].lowerPrice)+'</b></i>起                                                </span>                                                 <a class="z_btn" href="'+j+'" target="_blank">去看看</a>                                            </div>';fish.one(".r_b_r .con_near ul").html("bottom",g);var f=fish.all(".r_b_r .con_near img");loadWebp({attr:"nsrc",img:f,fn:function(){f.lazyLoad({attr:"nsrc"})}})}}else{fish.one(".s-nb").html("");for(var d=0;d<h;d++){var l=b[d],k=document.createElement("li"),c,m;c=b[d].distance==0?"&nbsp;":(b[d].distance<1000?'直线距离约<i class="org">'+b[d].distance+"</i>米":'直线距离约<i class="org">'+parseFloat(b[d].distance/1000).toFixed(2)+"</i>公里");k.className=((d+1)%2==0)?"s-nb-r":"";m="http://www.ly.com/scenery/BookSceneryTicket_"+l.resId+".html#Resys="+l.batchNo+"?spm=8.71820098.746."+(d+1);k.innerHTML='<a href="'+m+'" target="_blank" class="s-nb-linkt">'+l.name+'</a><span class="s-nb-cash"><b class="org"><i>&yen;</i>'+parseFloat(b[d].lowerPrice)+'</b>起</span><span class="s-nb-des">'+c+'</span><a href="'+m+'" target="_blank" class="s-nb-link">查看</a>';fish.one(".s-nb").html("bottom",k)}}}}},mayAjax:function(){if(fish.one(".s-nb").length>0){comRocomFn.recomAjaxFn(26,true)}else{comRocomFn.recomAjaxFn(26)}if(fish.dom("#nearby_view_con")){comRocomFn.recomAjaxFn(25)}},init:function(){comRocomFn.recGetScript("http://js.40017.cn/cn/min/???/cn/public/module/recommend/f.js,/cn/public/module/recommend/TCRecommend.js",comRocomFn.mayAjax,true)}};var toolFn={getMemId:function(){var b=0;if(fish.cookie.get("cnUser")){var c=fish.cookie.get("cnUser").split("&");for(var a=0;a<c.length;a++){if(c[a].indexOf("userid")>=0){if(c[a].replace("userid=","")){b=c[a].replace("userid=","")}}}}return b}};var pickFn={getDataFn:function(c,b){var a=c.attr("data-url");fish.all(".scenery,.bustour,.zizhuyou").addClass("none");if(b.children("li").length>0){b.removeClass("none")}else{fish.ajax({url:a,data:"",type:"json",fn:function(d){if(d.content&&d.content.length){b.html("");var e=d.content.length;var l="";for(var f=0;f<e;f++){var j=d.content[f];var k="";var h="";var g="";if(j.productId==14){k="/bustour/ProductDetail_"+j.resId+".html";g="tab跟团^"+j.resId}else{if(j.productId==5){k="//zby.ly.com/zizhuyou/"+j.cityNamePinyin+j.cityId+"/"+j.resId+"-xianlu/";g="tab酒景"+j.resId}else{if(j.productId==3){k="/scenery/BookSceneryTicket_"+j.resId+".html";g="tab景区"+j.resId}}}k+="?spm=8.71820098.743."+(f+1);h=j.name.length>30?(j.name.substr(0,30)+"..."):j.name;l+='<li>                                        <a href="'+k+"\" target=\"_blank\" onclick=\"pickFn._tcTrackEvent('PC^景区^老终页','猜你喜欢^线路模块','"+g+"','')\">                                            <img nsrc=\""+j.photo+'">                                        </a>                                        <p>'+h+'</p>                                        <div class="re_detail clearfix">                                            <span class="z_price">                                                <i>&yen;<b>'+j.pcPrice+'</b></i>起                                            </span>                                            <a class="z_btn" href="'+k+"\" target=\"_blank\" onclick=\"pickFn._tcTrackEvent('PC^景区^老终页','猜你喜欢^线路模块','"+g+"','')\">去看看</a>                                        </div>                                    </li>"}b.html(l);b.removeClass("none");loadWebp({attr:"nsrc",fn:function(){b.children("img").lazyLoad({attr:"nsrc"})}})}else{fish.one(".r_b_r .con_like").html("remove")}}})}},_tcTrackEvent:function(b,a,d,f){try{_tcTraObj._tcTrackEvent(b,a,d,f)}catch(c){}},init:function(){pickFn.getDataFn(fish.all(".s_btn"),fish.all(".scenery"));fish.all(".con_like_tab span").on("click",function(){fish.all(".con_like_tab span").removeClass("active");fish.one(this).addClass("active");pickFn.getDataFn(fish.one(this),fish.all("."+fish.one(this).attr("showlist")));pickFn._tcTrackEvent("PC^景区^老终页","猜你喜欢^"+fish.one(this).html()+"tab",1,"")})}};var dpFn;dpFn={first:false,mon:"0",isImg:"0",tagNum:"0",pageType:null,sortStr:"默认排序",tabStr:"全部",typeStr:"全部",newTabId:"1",sortId:"0",createEle:function(e){fish.one("#tour_comment span").html(e.totalNum);dpFn.gradeCon(e);var b=document.getElementById("dp_content"),h=document.getElementById("pageNum_title"),c=document.createElement("div"),f=document.createElement("div"),d=document.createElement("div");c.className="dp-sort";f.className="dp-con";f.id="dp-con";d.className="dp-type";d.id="dpType";var j="";var k=e.dpTagList.length;k=k>=5?5:k;for(var g=0;g<k;g++){var a=e.dpTagList[g];if(g==0){j+='<div class="dp-type-s dp-type-at" typeid="'+a.tagId+'" tag_type="'+a.tagType+'" typename="'+a.tagName+'"><i></i>'+a.tagName+"</div>"}else{j+='<div class="dp-type-s" typeid="'+a.tagId+'" tag_type="'+a.tagType+'" typename="'+a.tagName+'"><i></i>'+a.tagName+"</div>"}}d.innerHTML=j;c.appendChild(d);b.insertBefore(c,h);b.insertBefore(f,h);dpFn.commentClick()},gradeCon:function(f){var l=f.dpTagList;var g=(parseFloat(f.goodNum/f.totalNum).toFixed(3)*100).toFixed(1);var n=(parseFloat(f.midNum/f.totalNum).toFixed(3)*100).toFixed(1);var e=(parseFloat(f.badNum/f.totalNum).toFixed(3)*100).toFixed(1);fish.one(".hpl_grade span").html(f.degreeLevel.replace(/%/,"")+"<i>%</i>");var j='<span>好评率：<b><i style="width:'+g+'%"></i></b><em>'+g+'%</em></span><span>中评率：<b><i style="width:'+n+'%"></i></b><em>'+n+'%</em></span><span class="bad">差评率：<b><i style="width:'+e+'%"></i></b><em>'+e+"%</em></span>";fish.one(".hpl").html("bottom",j);fish.one(".impress_ul").html("");var o="";if(l.length>=11){var m=l.length>=14?14:l.length;for(var k=6;k<m;k++){var a=l[k];o+='<li typeid="'+a.tagId+'" tag_type = "'+a.tagType+'"><a href="javascript:;">'+a.tagName+"</a></li>"}fish.one(".impress_ul").html(o);var p=fish.all(".impress_ul li");p.on("click",function(){if(!fish.one(this).hasClass("at")){dpFn.resetStateFn();fish.one(this).addClass("at");dpFn.newTabId=fish.one(this).attr("typeid");dpFn.pageType="tabClick";dpFn.pageFn();dpFnTrackEvent("dppage_sel","^jingqu^"+hf_SceneryId+"^"+dpFn.newTabId+"^a,"+fish.one(this).attr("tag_type")+"^1^")}})}else{fish.one(".impress_box").html("");o='<div class="grade">                        <div class="grade_grade">                            <span></span>                            <p>综合得分</p>                        </div>                        <div class="grade_all"></div>                    </div>                    <div class="grade_why">                        <p>                            您可对已购订单立刻发表点评                            <a href="/newhelp/questionlist/5-7-22.html#anchor01" class="why">如何点评&gt;&gt;                            </a>                        </p>                        <a href="http://member.ly.com/center" class="btn">立即点评</a>                    </div>';fish.one(".impress_box").html(o);var c=f.serviceScoreAvgList;var b=0;var h="";for(var k=0;k<=2;k++){b+=Number(c[k].score);h+="<span>"+c[k].serviceName+"&nbsp;&nbsp;"+c[k].score+"</span>"}var d=Math.round(b/3*10)/10;fish.one(".grade_grade span").html(d+"<i>分</i>");fish.one(".grade_all").html(h)}},secendBanCreate:function(){var a=document.getElementById("dpValue");a.innerHTML='<div sortid="0" class="dp-v-s dp-v-at">默认排序</div><div sortid="3" class="dp-v-s dp-c">时间排序 ↓</div>';fish.all("#dpValue .dp-v-s").on("click",function(c){var b=fish.one(this);if(!b.hasClass("dp-v-at")){dpFn.resetStateFn();fish.all("#dpValue .dp-v-s").removeClass("dp-v-at");b.addClass("dp-v-at");dpFn.newTabId=1;dpFn.sortId=b.attr("sortid");dpFn.sortStr=b.html().split("<")[0];_tcTraObj._tcTrackEvent("scenery_dp","dp_detail",hf_SceneryId,toolFn.getMemId()+"|"+dpFn.typeStr+"|"+dpFn.tabStr+"|"+dpFn.isImg+"|"+dpFn.sortStr);dpFn.pageType="tabClick";dpFn.pageFn()}})},dpTripPurpose:["","商务出差","亲子出游","家庭出游","朋友出游","独自出游","代人预订","情侣出游","其他","旅游度假","探亲访友","活动组织应酬","返乡","求学"],dpTripMode:["","自驾车","公交","大巴","高铁/动车","租车"],dpPlat:["","同程旅游手机客户端","同程旅游网页版","同程旅游网页版","二维码","携程","同程旅游微信端"],dpConCreate:function(d){var a=this;var e=d.dpList,i=document.getElementById("dp-con");for(var f=0,g=e.length;f<g;f++){var J=e[f],u=document.createElement("div"),E=document.createElement("span"),k=document.createElement("div");u.className="info_list mtop";E.className="list_left";k.className="down_mid";var D=J.DPUserLevel==0?1:J.DPUserLevel;var F=J.dpUserName;E.innerHTML='<img src="http://img1.40017.cn/cn/s/2016/pc/scenery/final/new_vip'+D+'.png?v=22"><span class="tel">'+F+"</span>";var s=document.createElement("div"),p=document.createElement("div"),j=document.createElement("div"),o=document.createElement("div"),h="";s.className="dp-c-name";p.className="dright";j.className="dpImg";o.className="dphf";var q=document.createElement("p"),r=document.createElement("div");q.className="dpdetail";r.className="tag_info";var c=J.dpContent.replace(/\#LYSTART\#/g,"<i>").replace(/\#LYEND\#/g,"</i>");if(J.dpContent.length>150){q.innerHTML="<span>"+c.substr(0,150)+'...</span><b class="none">'+c+'</b><a href="javascript:void(0)" class="unfold">展开全部<font></font></a>'}else{q.innerHTML=c}s.appendChild(q);if(J.dpContent!==""){var I=document.createElement("div"),A=document.createElement("ul"),B=document.createElement("span"),b="";I.className="dp_main";B.className="none pho_info";fish.one(B).attr("pho_time",J.dpDate);var H=J.dpImgUrl;fish.one(B).attr("pic_len",H.length);for(var v=0,x=H.length;v<x;v++){var z=H[v];if(v<6){var y=document.createElement("li"),w=document.createElement("img");w.setAttribute("big-nsrc",z.imgUrl);w.setAttribute("nsrc",z.smallImgUrl);w.setAttribute("data-showimg","y");y.appendChild(w);if(v==5){y.innerHTML='<a href="javascript:;" class="i_more">查看更多</a>'}A.appendChild(y)}b+=z.imgUrl+","}B.innerHTML=b.substring(0,b.length-1);I.appendChild(B);I.appendChild(A);j.appendChild(I)}else{j.className="dpImg none"}var t=J.zanCount==""?0:J.zanCount;var l=document.createElement("div");l.className="useful";J.dpTripPurpose=J.dpTripPurpose?J.dpTripPurpose:"0";J.dpTripMode=J.dpTripMode?J.dpTripMode:"0";l.innerHTML="<i>"+J.dpDate+" 发表于"+a.dpPlat[J.DPSite]+'</i><a href="javascript:void(0)" class="usebtn dp_useful" pid="'+J.DPItemId+'" PraiseID="'+J.dpId+'" pc="'+J.zanCount+'"><em></em><b class="vleNum">'+t+"</b>有用</a>";if(J.csReplyList.length>0){var n=document.createElement("div");n.className="tcreply";n.innerHTML="<p>"+J.csReplyList[0].replyContent+"</p>"}if(J.FromSite==20402){h='<div class="dp-client"><span class="time">'+J.DPTime+'</span><a class="touch" target="_blank" href="http://shouji.17u.cn/"><span>发表于</span><i></i><span>同程旅游APP</span></a></div>'}else{h='<div class="dp-client"><span class="time">'+J.DPTime+'</span><a class="pc" target="_blank" href="javascript:;"><span>发表于</span><i></i><span>同程旅游网页版</span></a></div>'}k.appendChild(s);k.appendChild(j);k.appendChild(l);if(J.csReplyList.length>0){k.appendChild(n)}u.appendChild(E);u.appendChild(k);i.appendChild(u);fish.one(u).attr("dp_index",f);var C=fish.all(".down_mid img");loadWebp({attr:"nsrc",img:C,fn:function(){C.lazyLoad({attr:"nsrc"})}})}fish.all(".unfold").each(function(){fish.one(this).on("click",function(){var K=fish.one(this).getParent(".dpdetail");if(!fish.one("font",this).hasClass("close")){fish.one(this).html('收起<font class="close"></font>');fish.one("span",K).html(fish.one("b",K).html())}else{fish.one(this).html("展开全部<font></font>");fish.one("span",K).html(fish.one("b",K).html().substr(0,150)+"...")}})});var m=document.createElement("div"),G=sceneryCode=="20301"?"景点":"消费";m.id="dpPop";m.className="cmtPolicyTip none";m.innerHTML='<span class="cmtPolicyTip_head_R"></span><div class="cmtPolicyTip_mit"><div class="cmtPolicyTip_top">使用现金券预订'+G+'返点评奖金</div><p class="cmtPolicyTip_p">使用现金券成功预订，通过同程旅游客户端发表点评后获现金返还，可通过客户端提现<br><a title="查看详情" href="/zhuanti/yytx/" rel="nofollow" target="_blank">查看详情&gt;&gt;</a></p></div>';i.appendChild(m);dpFn.valueFn();fish.on("click",function(){var P=fish.one(this).getParent(".info_list"),M=fish.one(".usebtn",P).attr("PraiseID"),K=parseInt(fish.one(".usebtn",P).attr("ads")),U=fish.all(".dp-con img",P).length,N=[],O=fish.one(".tel",P).html(),Q=fish.one(".dp-c-name p",P).html(),L=fish.one(".down_mid",P).attr("dp_index");var S=fish.one(".pho_info",fish.one(this).getParent(".dp_main"));var V=S.html();var T=S.attr("pho_time");var R=fish.dom(".impress_ul .at")||fish.dom("#dpType .dp-type-at");R=fish.one(R);N.push(O);N.push(Q);N.push(M);N.push(V);N.push(T);bigAlbum.showAlbum(1,N);dpFnTrackEvent("dppage_pic","^jingqu^1^"+M+"^"+P.attr("dp_index")+"^"+hf_SceneryId+"^"+R.attr("typeid")+"^a,"+R.attr("tag_type")+"^"+S.attr("pic_len")+"^")},"#dp-con .dpImg img,#dp-con .dpImg .i_more")},valueFn:function(){var a=fish.all("#dp-con .dp_useful"),c=fish.one("#recoDp"),d=null;for(var b=0;b<a.length;b++){if(fish.cookie.get("dpid"+a[b].getAttribute("praiseid"))=="true"){fish.all(a[b].parentNode).addClass("dped")}}fish.on("click",function(){var g=this,h=this.getAttribute("praiseid");var i=(this.className=="dp_useful"?"1":"0");var e=parseInt(this.getAttribute("ads"));var f=fish.dom(".impress_ul .at")||fish.dom("#dpType .dp-type-at");f=fish.one(f);dpFnTrackEvent("dppage_zan","^jingqu^1^"+h+"^"+fish.one(this).parent(".info_list").attr("dp_index")+"^"+hf_SceneryId+"^"+f.attr("typeid")+"^a,"+f.attr("tag_type")+"^");if(fish.cookie.get("dpid"+h)!="true"&&!fish.one(fish.one(this).parent()).hasClass("dped")){fish.ajax({url:"/scenery/AjaxHelper/ZhuanTiHelp/ZTAjaxCall.aspx",data:"action=MemberPraise&dpId="+h,type:"json",fn:function(j){var k=fish.one("#dp_tip");var m=fish.one(g).offset().left+40,n=fish.one(g).offset().top,o=30,p=400;if(j.Status=="1"||j.Status==1){k.html("+1");k.css("top:"+n+"px;left:"+m+"px;display:block;opacity:0;filter:alpha(opacity=0)");k.anim("top:"+(parseInt(n,10)-o)+"px;left:"+(parseInt(m,10))+"px;opacity:1;filter:alpha(opacity=100)",p,{fn:function(){k.css("display:none;top:;left:;opacity:;filter:;")},easeing:function(){}});fish.cookie.set({name:"dpid"+h,value:"true"});var q=fish.one(".vleNum",g),l=parseInt(q.html(),10)+1;q.html(l);g.parentNode.className="dpjz useful dped"}else{if(j.Status=="2"||j.Status==2){fish.mLogin({show:false,showSignup:true,onLogin:function(){},onPassBoxOpen:function(){},onResetBoxOpen:function(){},onClose:function(){}},function(r){})}else{k.html("已点赞");k.css("top:"+n+"px;left:"+m+"px;display:block;opacity:0;filter:alpha(opacity=0)");k.anim("top:"+(parseInt(n,10)-o)+"px;left:"+(parseInt(m,10))+"px;opacity:1;filter:alpha(opacity=100)",p,{fn:function(){k.css("display:none;top:;left:;opacity:;filter:;")},easeing:function(){}});fish.cookie.set({name:"dpid"+h,value:"true"});g.parentNode.className="dpjz useful dped"}}}})}},"#dp-con .dp_useful");fish.one("body").on("click",function(f){var h=fish.one(fish.getTarget(f)),g=h.getParent(".dpjz");if(h.getParent(".recover_pop").length>0||h.hasClass("recover_pop")||(h.hasClass("dp_useless")&&!g.hasClass("dped"))){c.css("display:block;")}else{c.css("display:none;")}})},commentClick:function(){var a=fish.all("#dpType .dp-type-s");a.on("click",function(){if(!fish.one(this).hasClass("dp-type-at")){dpFn.resetStateFn();a.removeClass("dp-type-at");fish.one(this).addClass("dp-type-at");dpFn.sortId=0;dpFn.newTabId=fish.one(this).attr("typeid");dpFn.typeStr=fish.one(this).attr("typename");dpFn.pageType="tabClick";dpFn.pageFn();dpFnTrackEvent("dppage_sel","^jingqu^"+hf_SceneryId+"^"+dpFn.newTabId+"^a,"+fish.one(this).attr("tag_type")+"^1^")}})},resetStateFn:function(){var a=fish.all("#dpType .dp-type-s");a.removeClass("dp-type-at");fish.one(a[0]).addClass("dp-type-at");var b=fish.all(".impress_ul li");b.removeClass("at")},pageFn:function(){var b=hf_SceneryId=="180534"?"1360":hf_SceneryId;var a="/scenery/AjaxHelper/DianPingAjax.aspx?action=GetDianPingList&sid="+b+"&page={pagenum}&pageSize=10&labId="+(dpFn.newTabId)+"&sort="+(dpFn.sortId);if(!fish.dom("#pageNum_title .pageNum_page")){return}fish.one("#pageNum_title").addClass("business_style_page");fish.all("#pageNum_title .pageNum_page").mPage({url:a,ajaxType:"json",style:"green",startWithAjax:true,skip:true,callback:function(f){if(f){setTimeout(function(){if(!fish.dom("#pageNum_title label")){fish.one("#pageNum_title .current_page").html("before","<label>跳转到</label>")}fish.one("#pageNum_title .page_btn").val("GO")},300);f.dpList=f.dpList||[];if(f.dpList.length>0){var j=[];for(var g=0;g<f.dpTagList.length;g++){var d=f.dpTagList[g];var c=parseInt(d.tagId);j[c]=d.tagNum}var h=j[dpFn.newTabId];var e=fish.one("#tour_comment_con").offset().top,l=Math.ceil(h/10);if(dpFn.first){document.documentElement.scrollTop=document.body.scrollTop=e}dpFn.first=true;this.build(l);fish.one("#pageNum_title .totalpage_show").html(l);if(dpFn.pageType=="first"){var k=fish.one(".s_comment").length&&fish.one(".s_comment").html();if(k&&k===""){dpFn.topDpFn(f)}fish.one(".s_com_more").html("<p><i></i>"+f.totalNum+'条用户点评 <a markid="tour_comment" href="javascript:;">查看</a></p>');fish.all(".s_comment a,.s_com_more a").on("click",function(){dpFnTrackEvent("Scendet_dpclick","^jingqu^"+hf_SceneryId+"^0^"+fish.one("#cityIdByIp").val()+"^");var m=fish.one(this),i=m.attr("markid");document.documentElement.scrollTop=document.body.scrollTop=fish.one("#"+i+"_con").offset().top-46});dpFn.createEle(f);dpFn.dpConCreate(f)}else{fish.dom("#dp-con").innerHTML="";dpFn.dpConCreate(f)}fish.all("#pageNum_title a,#pageNum_title input.page_btn").on("click",function(){dpFn.pageType="secondBan"});fish.one("#pageNum_title").removeClass("none");fish.all("#pageNum_title .pageNum_page a").each(function(){var i=fish.one(this),m=1;if(i.hasClass("page_btn")){m=fish.one(".current_page").html()}else{if(i.hasClass("indexNormal")){m=1}else{if(i.hasClass("lastNormal")){m=l}else{if(i.hasClass("prevNormal")){m=fish.one(".currentpage").html()-1}else{if(i.hasClass("nextNormal")){m=fish.one(".currentpage").html()+1}else{m=i.html()}}}}}fish.one(this).on("click",function(){var n=fish.dom(".impress_ul .at")||fish.dom("#dpType .dp-type-at");n=fish.one(n);dpFnTrackEvent("dppage_load","^jingqu^"+n.attr("typeid")+"^a,"+n.attr("tag_type")+"^"+m+"^")})})}else{if(f.dpList.length==0){if(dpFn.pageType=="first"){fish.one("#tour_comment_con").html("remove");fish.one("#tour_comment").html("remove")}else{fish.one("#dp-con").html("<p style='text-align: center;margin-top:26px;'>没找到结果</p>");fish.one("#pageNum_title").addClass("none")}}}}}})},topDpFn:function(a){if(a&&a.dpList&&a.dpList.length){fish.one(".s_comment").html('<div class="s_comment_i"><em>精彩点评：</em>'+a.dpList[0].dpContent.substring(0,60)+'...<a markid="tour_comment" href="javascript:;">更多</a></div>')}},init:function(){if(!fish.dom("#dp_tip")){var a=document.createElement("div");a.className="dp_tip";a.style.display="none";a.id="dp_tip";a.innerHTML="+1";fish.dom("body").appendChild(a)}dpFn.pageType="first";this.pageFn();fish.one("#tour_comment").on("click",function(){dpFnTrackEvent("Scendet_dpclick","^jingqu^"+hf_SceneryId+"^1^"+fish.one("#cityIdByIp").val()+"^")})}};var bannerFn={bannerBox:fish.one(".r_tit"),bannerLis:fish.all(".r_tit .nav_w li"),winHeight:document.documentElement.clientHeight||document.body.clientHeight,z_timer:null,dp_flag:true,bindClickFn:function(){fish.one(".markIcon").on("click",function(){var b=fish.one(this),a=b.attr("markid");document.documentElement.scrollTop=document.body.scrollTop=fish.one("#"+a+"_con").offset().top-46});bannerFn.bannerLis.each(function(a,b){fish.one(a).on("click",function(){var e=fish.one(this),d=e.attr("id");var c=bannerFn.bannerLis;document.documentElement.scrollTop=document.body.scrollTop=fish.one("#"+d+"_con").offset().top-46})})},scrollFn:function(){var b,a,d;var c=bannerFn.bannerLis;fish.one(window).on("scroll",function(){b=fish.all(".res_box_i");a=fish.one(".res_box_w").offset().top;d=document.documentElement.scrollTop||document.body.scrollTop;if(d>=fish.one("#tour_comment_con").offset().top&&d<=fish.one("#traffic_route_con").offset().top&&bannerFn.dp_flag){bannerFn.dp_flag=false;dpFnTrackEvent("Scendet_dpclick","^jingqu^"+hf_SceneryId+"^1^"+fish.one("#cityIdByIp").val()+"^")}if(d<fish.one("#tour_comment_con").offset().top||d>fish.one("#traffic_route_con").offset().top){bannerFn.dp_flag=true}if(d>=a){bannerFn.bannerBox.addClass("fixed")}else{bannerFn.bannerBox.removeClass("fixed")}for(var f=b.length-1;f>=0;f--){var e=fish.one(b[f]);c.removeClass("inf-at");fish.one(c[0]).addClass("inf-at");if(d>e.offset().top-bannerFn.winHeight/4){c.removeClass("inf-at");fish.one(c[f]).addClass("inf-at");break}}})},scrollMoveFn:function(a){bannerFn.z_timer=clearInterval(bannerFn.z_timer);bannerFn.z_timer=setInterval(function(){var e=document.documentElement.scrollTop||document.body.scrollTop;var c=document.documentElement.scrollHeight||document.body.scrollHeight;var b=a-e;var d=b/6;if(d>0){d=Math.ceil(d)}else{d=Math.floor(d)}if(d===0||bannerFn.winHeight+e===c){document.documentElement.scrollTop=document.body.scrollTop=a;bannerFn.z_timer=clearInterval(bannerFn.z_timer)}else{document.documentElement.scrollTop=document.body.scrollTop=e+d}},30)},init:function(){bannerFn.bindClickFn();bannerFn.scrollFn()}};loadWebp({attr:"nsrc",img:fish.all(".info_l img"),replace:true});function bindClick(){var a=fish.one(".z_warn ");if(a.length){fish.one(".z_warn s").on("click",function(){a.css("display:none")})}}function init(){dpFn.init();priceCaseFn.init();comRocomFn.init();bannerFn.init();imgAlbum.init();pickFn.init();bookDesFn.init();bindClick();seoFn.init();var a=fish.all("#scenery_intro_con .LAZYLOADIMG");loadWebp({attr:"orisrc",img:a,fn:function(){a.lazyLoad({attr:"orisrc"})}});zyk_icon_fn()}var seoFn={bindClick:function(){fish.all(".chain_box .line_tit .more").each(function(c,d){var a=fish.one(c);var b=fish.one("ul",a.parent(".chain_line"));a.on("click",function(){if(a.hasClass("at")){b.removeClass("show");a.removeClass("at")}else{b.addClass("show");a.addClass("at")}})})},init:function(){seoFn.bindClick()}};function zyk_icon_fn(){var a;fish.one(".zyk_icon_wrap").hover(function(){console.log(1);a&&clearTimeout(a);fish.one(".zyk_dialog").removeClass("none")},function(){a=setTimeout(function(){fish.one(".zyk_dialog").addClass("none")},100)})}fish.loaded(function(){init();fish.require("mSlider",function(){var a=fish.all("#comSlide_main1 .linka");fish.all("#slide_main_top1").mSlider({moveTime:4000,content:"#comSlide_main1 a",canvas:"#comSlide_main1",aniType:"fade",fn:function(){a.each(function(b,c){b.innerHTML='<img src="'+b.getAttribute("nsrc")+'" alt="'+b.getAttribute("title")+'" />'})}})})});function dpFnTrackEvent(b,c){try{_tcTraObj._tcTrackEvent("304","6",b,c)}catch(a){}}function marketTrackEvent(c,b,d,e){try{_tcTraObj._tcTrackEvent(c,b,d,e)}catch(a){}}function sTrackEvent(c,e){var b=fish.one("#hf_attribute").val();var d="/scenery/detail";if(b=="24702"){d="/wanle/detail"}try{_tcTraObj._tcTrackEvent("search",d,c,e)}catch(a){}}function getUrlParam(a){var c=new RegExp("(^|&)"+a+"=([^&]*)(&|$)");var d=window.location.search.substr(1);var b=d.match(c);if(b!=null){return decodeURIComponent(b[2])}return null}window.onload=function(){if(getUrlParam("track")){var a="|*|resId:"+fish.one("#hf_SceneryId").val()+"|*|ab:1|*|";sTrackEvent("/show",a)}fish.one(".r_tit_i .order_btn").on("click",function(){var b=fish.one("#hf_SceneryId").val();sTrackEvent("/book","|*|pos:1|*|locCId:|*|pjId:2003|*|cityId:"+fish.one("#hf_CookieCityId").val()+"|*|resId:"+b+"|*|ab:1|*|")})};(function(c){var a;var e=0;var d=c.one(".box");var b=d.children("ul").width();if(c.one(".box").children("span").width()>=1000){a=setInterval(function(){e++;if(e>=b){e=0}c.one(".oul").css("margin-left: "+-e+"px")},30)}})(fish);fish.one(".Tclose").on("click",function(){fish.one(".notice_box").css("display: none")});