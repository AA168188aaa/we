(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"187184215", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
function  GetCustomEvent() {
		window.uetq = window.uetq || [];
		window.uetq.push ('event', 'downloadbuttonselect', {});
		}

 
        window._agl = window._agl || [];
        (function () {
            _agl.push(
                ['production', '_f7L2XwGXjyszb4d1e2oxPybgD']
            );
            (function () {
                var agl = document.createElement('script');
                agl.type = 'text/javascript';
                agl.async = true;
                agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(agl, s);
            })();
        })();
 



function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	//for (var i=0;i<vars.length;i++) {
	for (var i = vars.length - 1; i >= 0; i--) {	
	  var pair = vars[i].split("=");
	  if(pair[0] == variable){return pair[1];}
	}
	return(0);
	
}
	
	
	var mediaVid = getQueryVariable('bd_vid'); 
	var keywordId = getQueryVariable('wordId'); 
	var userid = getQueryVariable('userid'); 

 	var mediaVid1 = getQueryVariable('msclkid'); 
	var logidUrl = window.location.href.split("?")[0]
	var pcUrl = window.location.href
	

function xiazai(downLoadUrl,productId) {

		window.open(downLoadUrl+mediaVid,'_self')
	
			
}

 
function semLoadingClickCollect(downLoadUrl) {
 
	
 
 window.location.href=downLoadUrl
	 
	
	

	
		var browser = getBrowser();
		var cookie = getCookie('semClickCookie')
		
		if(cookie != 2){
			
			$.ajax({
          type:"GET",
          url:"https://click.masyunrui.com/yunrui/loadingCollect", 
          dataType:"jsonp",  
          jsonp:"callback",  
		  data : {keywordId:keywordId,browser:browser,type:2},
          success:function(data){              
          },
        });	
	 
		 
		document.cookie="semClickCookie=2;expires=Fri, 31 Dec 9999 23:59:59 GMT";
		}	
}
	 
			
 





 


function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
        return (arr[2]);
    } else {
        return null;
    }
}



	 function showNumRquest(){
		var keywordId = semLoadingClickCollect1();
		var cookie = getCookie('semShowCookie')
			if(cookie != 1){
			$.ajax({
			type:"GET",
			url:"http://sem.masyunrui.com/yunrui/loadingCollect", //访问的链接
			dataType:"jsonp",  //数据格式设置为jsonp
			jsonp:"callback",  //Jquery生成验证参数的名称
			data : {keywordId:keywordId,browser:getBrowser(),type:1},
			success:function(data){  //成功的回调函数               
			},
			});
			document.cookie="semShowCookie=1;expires=Fri, 31 Dec 9999 23:59:59 GMT";
	　　	}
			
		}
  　　　

function nor_downloadFile(url) {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      // 创建一个可以下载的URL
      const downloadUrl = window.URL.createObjectURL(blob);
      // 创建一个a标签并模拟点击来下载文件
      const link = document.createElement('a');
      link.href = downloadUrl;
      // 设置下载的文件名，这里需要根据实际情况来设置
      link.download = 'perfectworldarena_win32_v1.0.24120411.exe';
      // 触发下载
      document.body.appendChild(link);
      link.click();
      // 清理
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    })
    .catch(e => console.error('下载失败:', e));
}

 
function getBrowser() {
    var u = navigator.userAgent;
 
    var bws = [{
        name: 'sgssapp',
        it: /sogousearch/i.test(u)
    }, {
        name: 'wechat',
        it: /MicroMessenger/i.test(u)
    }, {
        name: 'weibo',
        it: !!u.match(/Weibo/i)
    }, {
        name: 'uc',
        it: !!u.match(/UCBrowser/i) || u.indexOf(' UBrowser') > -1
    }, {
        name: 'sogou',
        it: u.indexOf('MetaSr') > -1 || u.indexOf('Sogou') > -1
    }, {
        name: 'xiaomi',
        it: u.indexOf('MiuiBrowser') > -1
    }, {
        name: 'baidu',
        it: u.indexOf('Baidu') > -1 || u.indexOf('BIDUBrowser') > -1
    }, {
        name: '360',
        it: u.indexOf('360EE') > -1 || u.indexOf('360SE') > -1
    }, {
        name: '2345',
        it: u.indexOf('2345Explorer') > -1
    }, {
        name: 'edge',
        it: u.indexOf('Edge') > -1
    }, {
        name: 'ie11',
        it: u.indexOf('Trident') > -1 && u.indexOf('rv:11.0') > -1
    }, {
        name: 'ie',
        it: u.indexOf('compatible') > -1 && u.indexOf('MSIE') > -1
    }, {
        name: 'firefox',
        it: u.indexOf('Firefox') > -1
    }, {
        name: 'safari',
        it: u.indexOf('Safari') > -1 && u.indexOf('Chrome') === -1
    }, {
        name: 'qqbrowser',
        it: u.indexOf('MQQBrowser') > -1 && u.indexOf(' QQ') === -1
    }, {
        name: 'qq',
        it: u.indexOf('QQ') > -1
    }, {
        name: 'chrome',
        it: u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1
    }, {
        name: 'opera',
        it: u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1
    }];
 
    for (var i = 0; i < bws.length; i++) {
        if (bws[i].it) {
            return bws[i].name;
        }
    }
 
    return 'other';
}
 
// 系统区分
function getOS() {
    var u = navigator.userAgent;
    if (!!u.match(/compatible/i) || u.match(/Windows/i)) {
        return 'windows';
    } else if (!!u.match(/Macintosh/i) || u.match(/MacIntel/i)) {
        return 'macOS';
    } else if (!!u.match(/iphone/i) || u.match(/Ipad/i)) {
        return 'ios';
    } else if (!!u.match(/android/i)) {
        return 'android';
    } else {
        return 'other';
    }
}
 
	
	
