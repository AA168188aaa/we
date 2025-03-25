﻿import{f as I,j as L,V as R}from"./vendor.f7a20131.js";import{reactive as V,onMounted as g,toRefs as q,ref as w,defineComponent as E,openBlock as h,createElementBlock as m,createElementVNode as t,toDisplayString as s,Fragment as k,renderList as C,normalizeClass as f,createTextVNode as N}from"https://wegame.gtimg.com/g.55555-r.c4663/lib/vue/3.4.31/dist/vue.runtime.esm-browser.prod.js";const A=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}};A();function W(){const e=window.homeConfigRequester;if(e)return e;const i=I({data_names:"wegame_home_configs"}).then(a=>(a==null?void 0:a.items)||[]).catch(()=>[]);return window.homeConfigRequester=i,i}function O(){const e=V({allDownloads:[],allLinks:[],allDownloadUrls:{}});return g(()=>{const i={},a=sessionStorage.getItem("promote_id")||"",c=sessionStorage.getItem("promote_in_client")==="1";W().then(o=>{o.forEach(n=>{i[n.name]=JSON.parse(n.value)}),i.new_downloads.length&&i.new_downloads.forEach(n=>{if(n.type==="pc")a&&i.promoters&&i.promoters[a]&&(n.url=i.promoters[a]),e.allDownloads.push(n),e.allDownloadUrls[n.type]=n.url;else if(!c){e.allDownloads.push({name:n.name,type:n.type,url:"mac"});const r=n.url;e.allDownloadUrls.mac_intel=r.mac_intel,e.allDownloadUrls.mac_m=r.mac_m}}),e.allLinks=i.links||[]})}),q(e)}function U(){const e=w(null);return g(()=>{e.value=WeLibReport.init({main:"fragments",sub:"wegame_footer",keys:["block","action","ext1","ext2"]})}),{report:e}}var M="https://wegame.gtimg.com/g.55555-r.c4663/rail/fragments/footer/wechat-video-qrcode.cc3285b2.jpg",B="https://wegame.gtimg.com/g.55555-r.c4663/rail/fragments/footer/record.a20583c8.png",j=(e,i)=>{const a=e.__vccOpts||e;for(const[c,o]of i)a[c]=o;return a};let b="",y=!1;const G=E({name:"wegame-footer",setup(){const e=new Date().getFullYear(),{allLinks:i,allDownloads:a,allDownloadUrls:c}=O(),{report:o}=U(),n=w(!1),r=l=>{l.type==="mac"?setTimeout(()=>{n.value=!0},0):y?window.open(`/store/launcher.html?promote=${b}&action=download`):v("pc"),o.value(["download_link",l.type],{download_name:l.name})},u=(l,d)=>{o.value(["friend_link","click",{link_name:l,link_url:d}])},p=w(!1),P=()=>{p.value||(p.value=!0)},T=()=>{p.value&&(p.value=!1),n.value&&(n.value=!1)},S=l=>{l==="wechat"&&P(),o.value(["channel","click"],{channel:l})};g(()=>{b=sessionStorage.getItem("promote_id")||"",y=sessionStorage.getItem("promote_in_client")==="1",document.body.addEventListener("click",T),document.getElementById("wechat-popup").addEventListener("click",l=>{l.stopPropagation()}),document.getElementById("footer-mac-popup").addEventListener("click",l=>{l.stopPropagation()}),/macintosh|mac os x/i.test(navigator.userAgent)?o.value(["show","mac-env"]):o.value(["show","pc-env"])});const D=()=>{n.value=!1},v=l=>{const d=document.createElement("a");d.id="expertFile",d.href=c.value[l],document.body.appendChild(d),d.click(),document.body.removeChild(d),n.value=!1,o.value(["to_download",l],{download_url:c.value[l]})};return{showMenuClass:p,currentYear:e,allLinks:i,allDownloads:a,handleClickDownloadLink:r,handleClickChannel:S,handleClickFriendLink:u,closePopbox:D,downloadInstallPkg:v,allDownloadUrls:c,showPopbox:n}}}),H={class:"wgfooter"},z={class:"wgfooter-inner"},F=t("h3",{class:"wglogo"},"WeGame",-1),Q={class:"wgsite"},Y={class:"wgsite-item wgsite-item--wg"},K={class:"wgsite-tit"},Z={class:"wgsite-cont"},J=["onClick"],X={class:"wgsite-link-txt"},x={class:"mac-popup-box"},ee={class:"mac-popup-tit"},te={class:"mac-popup-tips"},oe={class:"mac-popup-tips-item"},ne={class:"mac-popup-tips-item"},se={class:"wgsite-item wgsite-item--og"},ie={class:"wgsite-tit"},re={class:"wgsite-cont"},ae=t("span",{class:"wgsite-link-icon icon-wechat"},null,-1),le={class:"wgsite-link-txt"},ce={class:"wgsite-popup"},de={class:"wgsite-popup-inner"},pe=t("img",{class:"wgsite-qrcode",src:"https://wegame.gtimg.com/g.55555-r.c4663/oss-images/oss_6107a332759fb.jpg"},null,-1),he={class:"wgsite-tips"},me={class:"wgsite-popup-inner"},fe=t("img",{class:"wgsite-qrcode",src:M},null,-1),ue={class:"wgsite-tips"},ge=t("span",{class:"wgsite-link-icon icon-sina"},null,-1),we={class:"wgsite-link-txt"},_e={class:"wgsite-item wgsite-item--fr"},ve={class:"wgsite-tit"},ke={class:"wgsite-cont"},Ce=["href","onClick"],be={class:"wgsite-link-txt"},ye={class:"wg-copyright"},$e={class:"wg-copyright-link"},Pe={href:"https://www.tencent.com/zh-cn/index.html",target:"_blank",rel:"noopener noreferrer"},Te={href:"https://www.qq.com/contract.shtml",target:"_blank",rel:"noopener noreferrer"},Se={href:"/contract",target:"_blank",rel:"noopener noreferrer"},De={href:"/privacy",target:"_blank",rel:"noopener noreferrer"},Ie={href:"https://privacy.qq.com/privacy-children.htm",target:"_blank",rel:"noopener noreferrer"},Le={href:"https://game.qq.com/self-discipline_pact.shtml",target:"_blank",rel:"noopener noreferrer"},Re={href:"https://developer.wegame.com/developer/static/infringement.html",target:"_blank",rel:"noopener noreferrer"},Ve={href:"http://www.tencentmind.com/",target:"_blank",rel:"noopener noreferrer"},qe={href:"https://hr.tencent.com/",target:"_blank",rel:"noopener noreferrer"},Ee={href:"https://kf.qq.com/index.html",target:"_blank",rel:"noopener noreferrer"},Ne={href:"https://www.qq.com/map/",target:"_blank",rel:"noopener noreferrer"},Ae={href:"/contact-us/",target:"_blank",rel:"noopener noreferrer"},We={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener noreferrer"},Oe=t("a",{target:"_blank",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502008701"},[t("img",{src:B,style:{display:"inline-block",width:"16px",height:"16px",position:"relative",top:"-1px"}}),N(" \u7CA4\u516C\u7F51\u5B89\u5907 44030502008701\u53F7 ")],-1),Ue={class:"wg-copyright-info"},Me={class:"wg-copyright-owner"},Be={href:"https://www.tencent.com/law/mo_law.shtml?/law/copyright.htm",target:"_blank",rel:"noopener noreferrer"};function je(e,i,a,c,o,n){return h(),m("div",H,[t("div",z,[F,t("div",Q,[t("dl",Y,[t("dt",K,s(e.$t("download")),1),t("dd",Z,[(h(!0),m(k,null,C(e.allDownloads,r=>(h(),m("a",{href:"javascript:void(0);",class:f([{disabled:!r.url},"wgsite-link"]),key:r.name,onClick:u=>e.handleClickDownloadLink(r)},[t("span",{class:f(`wgsite-link-icon icon-${r.type}`)},null,2),t("span",X,s(r.name),1)],10,J))),128)),t("div",{id:"footer-mac-popup",class:f(["mac-popup",{show:e.showPopbox}])},[t("div",x,[t("h3",ee,s(e.$t("macDownloadTips")),1),t("div",{class:"mac-popup-button",onClick:i[0]||(i[0]=r=>e.downloadInstallPkg("mac_intel"))},[t("span",null,s(e.$t("interVersion")),1)]),t("div",{class:"mac-popup-button",onClick:i[1]||(i[1]=r=>e.downloadInstallPkg("mac_m"))},[t("span",null,s(e.$t("m1Version")),1)]),t("p",te,[t("span",oe,s(e.$t("macVersionTips")),1),t("span",ne,s(e.$t("chipType")),1)])])],2)])]),t("dl",se,[t("dt",ie,s(e.$t("officialChannel")),1),t("dd",re,[t("a",{class:f(["wgsite-link",{"show-menu":e.showMenuClass}]),id:"wechat-popup",onClick:i[2]||(i[2]=r=>e.handleClickChannel("wechat"))},[ae,t("span",le,s(e.$t("wechat")),1),t("div",ce,[t("div",de,[pe,t("p",he,[t("span",null,s(e.$t("scanQrCode")),1),t("span",null,s(e.$t("followWeChatOfficial")),1)])]),t("div",me,[fe,t("p",ue,[t("span",null,s(e.$t("scanQrCode")),1),t("span",null,s(e.$t("followWeChatVideoAccount")),1)])])])],2),t("a",{class:"wgsite-link",target:"_blank",href:"https://weibo.com/u/6068787464",onClick:i[3]||(i[3]=r=>e.handleClickChannel("weibo"))},[ge,t("span",we,s(e.$t("weibo")),1)])])]),t("dl",_e,[t("dt",ve,s(e.$t("links")),1),t("dd",ke,[(h(!0),m(k,null,C(e.allLinks,r=>(h(),m("a",{href:r.url,class:"wgsite-link",target:"_blank",key:r.url,onClick:u=>e.handleClickFriendLink(r.name,r.url)},[t("span",be,s(r.name),1)],8,Ce))),128))])])]),t("div",ye,[t("div",$e,[t("a",Pe,s(e.$t("aboutTencent")),1),t("a",Te,s(e.$t("serviceProtocol")),1),t("a",Se,s(e.$t("contract")),1),t("a",De,s(e.$t("privacy")),1),t("a",Ie,s(e.$t("privacyChildren")),1),t("a",Le,s(e.$t("selfDisciplinePact")),1),t("a",Re,s(e.$t("infringement")),1),t("a",Ve,s(e.$t("adService")),1),t("a",qe,s(e.$t("tencentCareers")),1),t("a",Ee,s(e.$t("customerService")),1),t("a",Ne,s(e.$t("siteNavigation")),1),t("a",Ae,s(e.$t("contactUs")),1),t("a",We,s(e.$t("icp")),1),Oe]),t("div",Ue," COPYRIGHT \xA9 2017 \u2013 "+s(e.currentYear)+" TENCENT. ALL RIGHTS RESERVED. ",1),t("div",Me,[t("a",Be,s(e.$t("allRightsReserved")),1)])])])])}var Ge=j(G,[["render",je]]),He={download:"\u4E0B\u8F7D\u5BA2\u6237\u7AEF",officialChannel:"\u5B98\u65B9\u6E20\u9053",weibo:"\u5FAE\u535A",wechat:"\u5FAE\u4FE1",bilibili:"bilibili",scanQrCode:"\u626B\u63CF\u4E8C\u7EF4\u7801",followWeChatOfficial:"\u5173\u6CE8\u5FAE\u4FE1\u516C\u4F17\u53F7",followWeChatVideoAccount:"\u5173\u6CE8\u5FAE\u4FE1\u89C6\u9891\u53F7",links:"\u53CB\u60C5\u94FE\u63A5",aboutTencent:"\u5173\u4E8E\u817E\u8BAF",serviceProtocol:"\u670D\u52A1\u6761\u6B3E",contract:"\u8F6F\u4EF6\u8BB8\u53EF\u53CA\u670D\u52A1\u534F\u8BAE",privacy:"\u9690\u79C1\u4FDD\u62A4\u6307\u5F15",privacyChildren:"\u513F\u7AE5\u9690\u79C1\u4FDD\u62A4\u6307\u5F15",selfDisciplinePact:"\u7F51\u7EDC\u6E38\u620F\u884C\u4E1A\u9632\u6C89\u8FF7\u81EA\u5F8B\u516C\u7EA6",infringement:"\u4FB5\u6743\u901A\u77E5",adService:"\u5E7F\u544A\u670D\u52A1",tencentCareers:"\u817E\u8BAF\u62DB\u8058",customerService:"\u5BA2\u670D\u4E2D\u5FC3",siteNavigation:"\u7F51\u7AD9\u5BFC\u822A",contactUs:"\u8054\u7CFB\u6211\u4EEC",icp:"ICP\u5907\u6848\u53F7\uFF1A\u7CA4B2-20090059-376",allRightsReserved:"\u817E\u8BAF\u516C\u53F8 \u7248\u6743\u6240\u6709",macDownloadTips:"\u8BF7\u6839\u636EMac\u82AF\u7247\u9009\u62E9\u5BF9\u5E94\u7248\u672C",interVersion:"\u4E0B\u8F7D Intel \u7248",m1Version:"\u4E0B\u8F7D M1 \u7248",macVersionTips:"\u5DE6\u4E0A\u89D2\u82F9\u679C\u56FE\u6807-\u5173\u4E8E\u672C\u673A-\u5904\u7406\u5668",chipType:"\u53EF\u67E5\u770B\u82AF\u7247\u7C7B\u578B"},ze={download:"\u4E0B\u8F09\u5BA2\u6236\u7AEF",officialChannel:"\u5B98\u65B9\u6E20\u9053",weibo:"\u5FAE\u535A",wechat:"\u5FAE\u4FE1",bilibili:"bilibili",scanQrCode:"\u6383\u63CF\u4E8C\u7DAD\u78BC",followWeChatOfficial:"\u95DC\u6CE8\u5FAE\u4FE1\u516C\u773E\u865F",followWeChatVideoAccount:"\u95DC\u6CE8\u5FAE\u4FE1\u8996\u983B\u865F",links:"\u53CB\u60C5\u93C8\u63A5",aboutTencent:"\u95DC\u65BC\u9A30\u8A0A",serviceProtocol:"\u670D\u52D9\u689D\u6B3E",contract:"\u8EDF\u4EF6\u8A31\u53EF\u53CA\u670D\u52D9\u5354\u8B70",privacy:"\u96B1\u79C1\u4FDD\u8B77\u6307\u5F15",privacyChildren:"\u5152\u7AE5\u96B1\u79C1\u4FDD\u8B77\u6307\u5F15",selfDisciplinePact:"\u7DB2\u7D61\u904A\u6232\u884C\u696D\u9632\u6C88\u8FF7\u81EA\u5F8B\u516C\u7D04",infringement:"\u4FB5\u6B0A\u901A\u77E5",adService:"\u5EE3\u544A\u670D\u52D9",tencentCareers:"\u9A30\u8A0A\u62DB\u8058",customerService:"\u5BA2\u670D\u4E2D\u5FC3",siteNavigation:"\u7DB2\u7AD9\u5C0E\u822A",contactUs:"\u806F\u7E6B\u6211\u5011",icp:"ICP \u5099\u6848\u865F\uFF1A\u7CA4B2-20090059-376",allRightsReserved:"\u9A30\u8A0A\u516C\u53F8 \u7248\u6B0A\u6240\u6709",macDownloadTips:"\u8ACB\u6839\u64DAMac\u82AF\u7247\u9078\u64C7\u5C0D\u61C9\u7248\u672C",interVersion:"\u4E0B\u8F09 Intel \u7248",m1Version:"\u4E0B\u8F09 M1 \u7248",macVersionTips:"\u5DE6\u4E0A\u89D2\u860B\u679C\u5716\u6A19-\u95DC\u65BC\u672C\u6A5F-\u8655\u7406\u5668",chipType:"\u53EF\u67E5\u770B\u82AF\u7247\u985E\u578B"},Fe={download:"Download",officialChannel:"Official Channels",weibo:"Weibo",wechat:"WeChat",bilibili:"Bilibili",scanQrCode:"Scan QR code",followWeChatOfficial:"To follow WeChat official",followWeChatVideoAccount:"To follow WeChat video",links:"Links",aboutTencent:"About Tencent",serviceProtocol:"Terms of Service",contract:"Software License and Services Agreement",privacy:"Privacy Protection Guide",privacyChildren:"Children's Privacy Protection Guide",selfDisciplinePact:"The Convention on Anti-Addiction and Self-Regulation in China's Online Game Industry",infringement:"Notice of Infringement",adService:"Advertising Services",tencentCareers:"Tencent Careers",customerService:"Customer Service",siteNavigation:"Navigation",contactUs:"Contact Us",icp:"ICP\uFF1A\u7CA4B2-20090059-376",allRightsReserved:"Tencent. All Rights Reserved.",macDownloadTips:"Select the version proper for your Mac CPU.",interVersion:"Download Intel version",m1Version:"Download M1 version",macVersionTips:"Click the Apple icon on the top left corner - About This Mac - Processor",chipType:"You can find the processor type here"};const $={zh_CN:He,zh_HK:ze,en_US:Fe},_=L.exports.get("language");function Qe({locale:e,fallbackLocale:i,messages:a}){let c=e;return{$t:o=>{const n=a[c],r=a[i];return n[o]||r[o]},set locale(o){c=o},get locale(){return c},install(o){o.config.globalProperties.$t=this.$t}}}const Ye=Qe({locale:_&&$[_]?_:"zh_CN",fallbackLocale:"zh_CN",messages:$});R(Ge,({app:e})=>{e.use(Ye)},{useHead:!1,rootContainer:"#widget-footer"});
