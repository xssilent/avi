;!function(e){function t(e){if(u===!1&&!e.replace)return void(e.fn&&e.fn());var t=r({},e),o=Object.prototype.toString.call(t.img);"[object Array]"!==o&&"[object Object]"!==o&&(t.img=document.getElementsByTagName("img")),p.push(t),n()}function n(){if(null!==u)for(;p.length;){var e=p[0];u===!0||e.replace?o(e):e.fn&&e.fn(),p.shift()}}function o(e){for(var t=e.attr,n=e.replace,o=0;o<e.img.length;o++){var r=e.img[o],i=r.getAttribute(t);if(i){var c=i.split("?"),a=c[0],f=a.length,p=a.substring(f-4,f);-1===a.indexOf("pic3.40017.cn")&&-1===a.indexOf("pic4.40017.cn")||!u||"webp"===p||".gif"===p?c=i:(c[0]=c[0]+".webp",c=c.length>1?c.join("?"):c[0]),n?r.src=c:r.setAttribute(t,c)}}e.fn&&e.fn()}function r(e,t){if(t&&e){var n,o;for(o in t)null!=(n=t[o])&&(e[o]=n);return e}}function i(e){if(!f){f=!0;var t=new Image;t.onload=t.onerror=function(){var n=0;2==t.height&&(n=1),e&&e(n)},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}}var c=function(){function e(e){return u.raw?e:encodeURIComponent(e)}function t(e){return u.raw?e:decodeURIComponent(e)}function n(t){return e(u.json?JSON.stringify(t):String(t))}function o(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(a," ")),u.json?JSON.parse(e):e}catch(t){}}function i(e,t){var n=u.raw?e:o(e);return c(t)?t(n):n}function c(e){return"function"==typeof e}var a=/\+/g,f={},u=f.dos=function(o,a,f){if(void 0!==a&&!c(a)){if(f=r(u.defaults,f),"number"==typeof f.expires){var p=f.expires,s=f.expires=new Date;s.setTime(+s+864e5*p)}return document.cookie=[e(o),"=",n(a),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var d=o?void 0:{},l=document.cookie?document.cookie.split("; "):[],g=0,m=l.length;m>g;g++){var v=l[g].split("="),A=t(v.shift()),h=v.join("=");if(o&&o===A){d=i(h,a);break}o||void 0===(h=i(h))||(d[A]=h)}return d};return u.defaults={},f.remove=function(e,t){return void 0===f.dos(e)?!1:(f.dos(e,"",$.extend({},t,{expires:-1})),f.dos(e))},f}(),a={get:function(e){if(!e)return"";var t="";try{t=localStorage.getItem(e),null===t&&(t=c.dos(e))}catch(n){t=c.dos(e)}return t=t||"",decodeURIComponent(t)},set:function(e,t){if(e&&(t||0===t))try{localStorage.setItem(e,encodeURIComponent(t))}catch(n){c.dos(e,t,{path:"/",expires:30})}},remove:function(e){try{localStorage.removeItem(e)}catch(t){c.dos(e,{path:"/"})}}},f=!1,u=null,p=[],s=a.get("isSupportWebp");"1"===s?u=!0:"0"===s?u=!1:i(function(e){u=e?!0:!1,n(),a.set("isSupportWebp",e)}),e.loadWebp=t}(window);