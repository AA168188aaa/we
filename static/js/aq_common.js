﻿!function(){var e,t,f=["https://aq.qq.com/cn2/manage/mbtoken/hijack_sec_js_report","https://zyjc.sec.qq.com/dom","https://sv.aq.qq.com/cn2/manage/mbtoken/hijack_pv_report","https://sv.aq.qq.com/cn2/manage/mbtoken/hijack_xss_report","https://aq.qq.com/cn2/manage/mbtoken/hijack_mv_js_report"],r=1,c=.01,i=!1;function g(e,t){for(var n=new Array,o=0;o<e.length;o++)if("&"==e.charAt(o)){var a,r=[3,4,5,9],c=0;for(a in r){var i=r[a];if(o+i<=e.length){var m=e.substr(o,i).toLowerCase();if(t[m]){n.push(t[m]),o=o+i-1,c=1;break}}}0==c&&n.push(e.charAt(o))}else n.push(e.charAt(o));return n.join("")}function q(e){return document.createElement(e)}function v(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function u(e){var t,n,o,a,r,c,i,m,p,s,d=e.url,u=e.data,h="aq_form"+1e17*Math.random(),l=(t=d,n=h,o="post",(a=q("form")).action=t,a.method=o,a.target=n,a.style.display="none",a),f=(r=h,(c=q("iframe")).name=r,c.src="javascript:void(0);",c.style.display="none",c);for(i in document.body.appendChild(f),f.contentWindow.name=h,u)l.appendChild((p=u[m=i],s=void 0,(s=q("input")).name=m,s.value=p,s));document.body.appendChild(l),l&&l.submit(),setTimeout(function(){v(l),v(f)},2e3)}function x(e){(new Image).src=e}!function(){for(var e=new Object,t="'\"<>`script:daex/hml;bs64,",n=0;n<t.length;n++){for(var o=t.charAt(n),a=o.charCodeAt(),r=a,c=a.toString(16),i=0;i<7-a.toString().length;i++)r="0"+r;e["&#"+a+";"]=o,e["&#"+r]=o,e["&#x"+c]=o}e["&lt"]="<",e["&gt"]=">",e["&quot"]='"';var m,p,s,d,u=location.href,h=document.referrer,u=decodeURIComponent(g(u,e)),h=decodeURIComponent(g(h,e)),l=new RegExp("['\"<>`]|script:|data:text/html;base64,");(l.test(u)||l.test(h))&&(m=f[1],p=new Image,Math.random()<.1&&x(f[3]+"?v=2&u="+encodeURIComponent(u)+"&r="+encodeURIComponent(h)),p.src=m+"?v=2&u="+encodeURIComponent(u)+"&r="+encodeURIComponent(h),s=location.host,(/(\.|^)(wegame|tgp\.qq)\.com$/i.test(d=s)||/(\.|^)we\.game$/i.test(d))&&!/(\.|^)developer\.wegame\.com$/i.test(d)||(u=(u=u.replace(/['\"<>`]|script:/gi,"M")).replace(/data:text\/html;base64,/gi,"data:text/plain;base64,"),location.href=encodeURI(u)))}(),function(m,p,s){function e(e,t,n){var o,a,r,c={bid:t,childUrl:"",parentUrl:""};try{c.childUrl=s.href}catch(i){}try{c.parentUrl=parent.location.href}catch(i){}if(1==n)try{parent!=m&&d(parent.document,"datapp",c)}catch(i){}else{try{d(p,"datapt",c),parent!=m&&(o=parent.document,a="datapp",v((r=c).parentUrl)&&d(o,a,r))}catch(i){}try{parent!=m&&function(e){{var t;v(e.parentUrl)&&((t=[]).push("beframed::url"),g(t,"beframed",e))}}(c)}catch(i){}}}function g(e,t,n){var o;f[0],new Image;if(e.push("childUrl::"+encodeURIComponent(n.childUrl)),e.push("parentUrl::"+encodeURIComponent(n.parentUrl)),!i&&r<c&&(o=e.join("|"),x(f[2]+"?host="+encodeURIComponent(location.host)+"&data="+o+"&hp=1&tk="+ +new Date),i=!0),!(Math.random()<.9)){var a={id:n.bid,imark:t,data:e.join("|")};return Math.random()<1&&(a.dom=encodeURIComponent(document.documentElement.outerHTML),a.plgs=encodeURIComponent(function(){var e=navigator.plugins,t="";if(e&&e.length){t=[];for(var n=0;n<e.length;n++){var o=e[n].name,a=e[n].description;t.push(o+"::"+a)}t=t.join(";")}return t}())),u({data:a,url:f[0]}),1}}function d(e,t,n){var o,a,r,c,i=function(e){for(var t,n,o,a,r=e.getElementsByTagName("script"),c=[],i=0;i<r.length;i++)t=r[i],(n=t.src)&&c.push(n);return o=q(c,v),a=y("script"),w(o,a)}(e),m=(o=y("iframe"),b(e,"IFRAME",function(e){return e.src},v,o)),p=(a=y("frame"),b(e,"FRAME",function(e){return e.src},v,a)),s=(r=y("embed"),b(e,"EMBED",function(e){return e.src},v,r)),d=(c=y("img"),b(e,"IMG",function(e){return e.src},v,c)),u=function(e){for(var t,n,o,a,r=e.getElementsByTagName("source"),c=[],i=0;i<r.length;i++)t=r[i],(n=t.src)&&c.push(n);return o=q(c,v),a=y("source"),w(o,a)}(e),h=function(e){for(var t,n,o,a,r=e.getElementsByTagName("video"),c=[],i=0;i<r.length;i++)t=r[i],(n=t.src)&&c.push(n);return o=q(c,v),a=y("video"),w(o,a)}(e),l=function(e){for(var t,n,o,a,r=e.getElementsByTagName("object"),c=[],i=0;i<r.length;i++)t=r[i],(n=t.data)&&c.push(n);return o=q(c,v),a=y("object"),w(o,a)}(e),f=i.concat(m,p,d,s,u,h,l);if(f.length<=0)return!1;g(function(e){var t=e.slice(0),n=[];t.sort(),n.push(t[0]);for(var o=1;o<t.length;o+=1)t[o]!=t[o-1]&&n.push(t[o]);return n}(f),t,n)}function q(e,t){for(var n=[],o=0;o<e.length;++o){var a=e[o];t(a)&&n.push(a)}return n}function v(e){var t,n,o,a,r,c=(r=/^https?:\/\/([\w\-]+\.[\w\-.]+)/i.exec(e))?r[1]:void 0;return!!c&&(t=/(\.|^)(hm\.baidu|fyeds[0-9]|cpcwe|qq|paipai|soso|wenwen|tenpay|macromedia|gtimg|qstatic|qqmail|paipaiimg|qqgames|pengyou|foxmail|qzoneapp|qzone|qplus|imqq|tqapp|tencent|3366|21mmo|taotao|imrworldwide|idqqimg|17roco|expo2010china|fangqq|tencentmind|tencity|yingkebicheng|zhangzhongxing|expovol|otaworld|gzyunxun|heyyo|himoral|himorale|myrtx|qqwinner|redian|sjkx|rtxonline|nbaso|paipai\.500wan|qqjapan|qq\.salewell|sogou|weiyun|flzhan|wechat|webplat\.ied|qcloud)\.com$/i,n=/(\.|^)(qgsk\.yximg|flzhan|qq\.com|gtimg|gtimg\.com|qlogo|foxmail\.com|gtimg\.com|url|qpic|tencent\.com|expo2010|expo|himorale\.com|nbaso\.com|qqtest\.com|qq\.ucar|rtx\.com|soso\.com|tcimage|taoche)\.cn$/i,o=/(\.|^)(5999|gongyi)\.net$/i,a=/(\.|^)(himorale\.com\.hk|api\.cpcwe\.com|tencent\.com\.hk|qq\.chinacache\.net|qq\.com\.fastcdn\.com|qq\.com\.lxdns\.com|qq\.fastcdn\.com|soso\.com\.lxdns\.com|motu\.pagechoice\.net|ope\.tanx\.com|dap\.gentags\.net|widget\.weibo\.com|wegame\.com\.cn)$/i,!(/^xui.ptlogin2?\.?$/i.test(c)||t.test(c)||n.test(c)||o.test(c)||a.test(c)))}function y(t){return function(e){return t+"::"+encodeURIComponent(e)}}function w(e,t){for(var n,o=[],a=0;a<e.length;++a)n=t(e[a]),o.push(n);return o}function b(e,t,n,o,a){var r=w(e.getElementsByTagName(t),n);return w(q(r,o),a)}try{setTimeout(function(){e(0,100,0)},5e3),function(e){function t(e){var t=document.createElement("script");document.body?document.body.appendChild(t):document.head.appendChild(t),t.onload=function(){TencentKepler&&TencentKepler.predict()},t.defer=!0,t.onerror=e||function(){},t.src="https://kepler-cn.captcha.qcloud.com/tencent-kepler.js?appId=9403497"}try{var n=location.host;if(/fyeds.*\.com/.test(n)){if(Math.random()>e)return;t(function(){t()})}}catch(o){}}(-1)}catch(t){}}(window,document,location),r<c&&(e=location.protocol,t="",t=0<=e.indexOf("https")||0<=e.indexOf("HTTPS")?"https":0<=e.indexOf("http")||0<=e.indexOf("HTTP")?"http":e,x(f[2]+"?host="+encodeURIComponent(location.host)+"&p="+encodeURIComponent(t)+"&hp=0&tk="+ +new Date))}();