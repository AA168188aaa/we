var content='';

// 通过类名'banner-info'获取div元素
var bannerDiv = document.querySelector('.banner-info');

// 检查是否找到了该元素
if (bannerDiv) {
    // 查找h1标签下的span元素
    var spanElement = bannerDiv.querySelector('h1 > span');
    
    // 检查是否找到了span元素
    if (spanElement) {
        // 获取span元素的文本内容
         content = spanElement.textContent || spanElement.innerText;
     } else {
        
    }
} else {
   content=document.title;
}
 
 
 
 
 
        if(window.location.host.includes('hmapps2')){
  
 document.writeln('应用名称：'+content+ '   版本号：v25.11.3'+ '   上海和迈网络科技有限公司   <br>Copyright 2019-2022 All Rights Reserved.<img src="ga.png" alt="公安网监备案" style="vertical-align: middle;margin-left: 3px;width: 16px">  <a href="https://beian.miit.gov.cn" target="_blank">  沪ICP备2021008865号-3 <a href="../yszc.html" target="_blank">隐私政策</a> | <a href="../yhqx.html" target="_blank">用户权限</a>');

 }
 
 
 
        if(window.location.host.includes('jyw09')){
  
 document.writeln('应用名称：'+content+ '   版本号：v25.11.3'+ '   重庆今友网络科技有限公司徐州分公司  电话：4008505475 <br>Copyright 2019-2022 All Rights Reserved.<img src="ga.png" alt="公安网监备案" style="vertical-align: middle;margin-left: 3px;width: 16px">  <a href="https://beian.miit.gov.cn" target="_blank">  渝ICP备2023000157号-1 <a href="../yszc.html" target="_blank">隐私政策</a> | <a href="../yhqx.html" target="_blank">用户权限</a>');

 }
 
        if(window.location.host.includes('njlhg')){
  
 document.writeln('应用名称：'+content+ '   版本号：v25.11.3'+ '   南京蓝弘广网络科技有限公司  电话：4008505475 <br>Copyright 2019-2022 All Rights Reserved.<img src="ga.png" alt="公安网监备案" style="vertical-align: middle;margin-left: 3px;width: 16px">  <a href="https://beian.miit.gov.cn" target="_blank">  苏ICP备2025163648号-1 <a href="../yszc.html" target="_blank">隐私政策</a> | <a href="../yhqx.html" target="_blank">用户权限</a>');

 }
 
 
 
 
 
  document.addEventListener('DOMContentLoaded', function() {
    // 创建logo-container div
    var logoContainer = document.createElement('div');
    logoContainer.className = 'logo-container';

    // 创建a标签
    var link = document.createElement('a');
    link.href = '../../kaituo/index.html';
    link.target = '_blank';

    // 创建img标签
    var img = document.createElement('img');
    img.src = 'https://png.masyunrui.com/kaituo.png';
    img.alt = 'Logo';
    img.className = 'download_station_logo';

    // 将img标签插入到a标签中
    link.appendChild(img);

    // 将a标签插入到logo-container div中
    logoContainer.appendChild(link);

    // 将logo-container div插入到body的首行
    document.body.insertBefore(logoContainer, document.body.firstChild);
});