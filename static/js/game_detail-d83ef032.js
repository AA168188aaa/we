﻿import{L as se}from"./day-6b123b17.js";import{T as x,G as B,_ as N,C as oe,g as ie,c as ae,a as ne,b as re,t as le,d as W}from"./page-duration-a38fd991.js";/* empty css              *//* empty css                           */import{createApp as ce,h as de}from"https://wegame.gtimg.com/g.55555-r.c4663/lib/vue/3.4.31/dist/vue.runtime.esm-browser.prod.js";import{r as me,g as pe,a as ge,q as F,b as ue,c as _e,d as fe,i as u,e as be,f as we,s as ve,h as V,j as ye,k as Ee,l as he,m as $,n as Pe,o as Ge,p as Ae,t as R,u as Ie,v as Te,w as De,x as U,P as Se,y as ke,z as Ce,M as m,D as Me,A as Oe,B as Le}from"./pv-32f7d509.js";import{L as Ne}from"./index-59f84ee5.js";import"./oss-api-f26736c0.js";import{g as We,r as Re}from"./url-1564cdd9.js";var je=Object.defineProperty,xe=Object.defineProperties,Be=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,z=(o,e,a)=>e in o?je(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,$e=(o,e)=>{for(var a in e||(e={}))Fe.call(e,a)&&z(o,a,e[a]);if(q)for(var a of q(e))Ve.call(e,a)&&z(o,a,e[a]);return o},Ue=(o,e)=>xe(o,Be(e));const H=window.WEGAME.env.isWeGameMain,qe=window.WEGAME.env.isWeGameMac,ze=window.WEGAME.login.queryTgpId,He=window.WEGAME.login.getTgpId,Ke=window.WEGAME.jsbridge.client,Qe=window.WEGAME.report.perf,Ye=window.WEGAME.report.report,v=(o,e)=>{var a;const d={name:o};e&&(d.duration=e),(a=Qe)==null||a.reportTime(d)};["start-html","start-body","start-script"].forEach(o=>{const[e]=performance.getEntriesByName(o);v(o,e.startTime)});v("start-js");me();const s=pe();window.VIPICON?window.VIPICON.DEVGAMEID=s:window.VIPICON={DEVGAMEID:s};const{no_permission:Xe,from:K="",unionsite:Je,web_load_from:Ze,preview_token:et,is_preview:tt,client_env:st,tgp_user_type:ot}=We();let _=Ze==="game";_&&(sessionStorage==null?void 0:sessionStorage.getItem("is_in_game"))!=="1"&&sessionStorage.setItem("is_in_game","1");!_&&(sessionStorage==null?void 0:sessionStorage.getItem("is_in_game"))==="1"&&(_=!0);_&&document.body.classList.add("game-detail-plugin");const it=Xe==="1",Q=et&&tt==="1",T=qe||st==="mac";T&&document.body.classList.add("game-detail-plugin-mac");let t={},M="0",n;v("start-fetch-data");Promise.all([ze(),ge({game_ids:[s],filters:Me}),F({game_ids:[s],filters:["game_id","detailpage_enabled"]}),ue(s),_e(),fe(s)]).then(([o,e,a,d,f,O])=>{var y;o?.ID&&(M=o.ID),M==="0"&&(M=He()||"0"),n=((y=e?.items)==null?void 0:y[0])||{};const E=a?.[s];if(!n?.game_id||!Q&&E?.detailpage_enabled==="0"){let l=u.t("entry.noService");throw Q&&(l=u.t("entry.previewError")),be(l,"/store"),new Error(`no base info: ${l}`)}we(n.e_game_name);const c=n.game_name||"",D=`${c},${n.slogan},${n.comments}`;let h=u.t("entry.title",{name:c});u.locale===se.zh_CN&&n.e_game_name&&(h+=`,${n.e_game_name}`),ve({title:h,keywords:c,description:D});const b=n.is_testing===1;b&&window.postMessage({type:"WIDGET_HEADER_UPDATE",targetId:"header-test"},"*");const P=[x.MMOG,x.WEB_GAME].indexOf(n.top_class)>-1,G=n.game_type===B.BUNDLE,S=!!n.is_wing_project,A=b||S,w=n.game_type===B.DLC&&Number(n.master_game_id)>0;t={tgpId:M,gameId:s,isMmog:P,isAlbum:G,isDLC:w,isTesting:b,isWings:S,isTestingState:A,isMac:T,isWeGameMain:H,from:K,unionsite:Je,isInGame:_,bodyClass:[],pageClass:["fr-wrapper"],liveDetail:d,pvInfo:O},H||t.bodyClass.push("page-out-client"),_&&t.bodyClass.push("game-detail-plugin");const L=A?W.TESTPHASE:W.FORMAL,k=[V({gameIds:[s],appid:L})];A||k.push(V({gameIds:[s],appid:W.TESTPHASE}));const p=[Ke.getClientInfo(),ye(s,w),Ee(s),Promise.all(k),he(s)];if(P)p.push(N(()=>import("./console-ed41e3a9.js").then(l=>l.c),["assets/console-ed41e3a9.js","assets/page-duration-a38fd991.js","assets/day-6b123b17.js","assets/pv-32f7d509.js","assets/url-1564cdd9.js","assets/index-59f84ee5.js","assets/oss-api-f26736c0.js","assets/index-abf868a8.js","assets/page-name-cce4340b.js","assets/promote-id-0891595e.js","assets/index-9a9ddcf8.css","assets/index-b2a10865.js","assets/index-d0ff06a1.js","assets/index-ab081f35.css","assets/index-a7480c20.js","assets/useGuessPrice-98ad7c91.js","assets/index-3e52591d.js","assets/index-8c5d872e.js","assets/console-42413132.css","assets/widget-game-letter-5828f757.css"]),{},{},$([s])),t.bodyClass.push("body-frame-gamedetail");else{G?t.bodyClass.push("body-dlc-collection"):(t.bodyClass.push("body-frame-gamedetail"),w&&t.bodyClass.push("body-dlc-detail"));const l=[s];w&&l.push(n.master_game_id);const I={game_ids:[s],filters:Le};f?.account_id&&(I.login_info=f),p.push(N(()=>import("./console-ed41e3a9.js").then(C=>C.c),["assets/console-ed41e3a9.js","assets/page-duration-a38fd991.js","assets/day-6b123b17.js","assets/pv-32f7d509.js","assets/url-1564cdd9.js","assets/index-59f84ee5.js","assets/oss-api-f26736c0.js","assets/index-abf868a8.js","assets/page-name-cce4340b.js","assets/promote-id-0891595e.js","assets/index-9a9ddcf8.css","assets/index-b2a10865.js","assets/index-d0ff06a1.js","assets/index-ab081f35.css","assets/index-a7480c20.js","assets/useGuessPrice-98ad7c91.js","assets/index-3e52591d.js","assets/index-8c5d872e.js","assets/console-42413132.css","assets/widget-game-letter-5828f757.css"]),Pe(I,!0),Ge(l,{detail:!0}),$([s]))}T&&(t.bodyClass.push("game-detail-plugin-mac"),p[5]=N(()=>import("./mac-e935c54c.js"),["assets/mac-e935c54c.js","assets/index-abf868a8.js","assets/page-duration-a38fd991.js","assets/day-6b123b17.js","assets/pv-32f7d509.js","assets/url-1564cdd9.js","assets/index-59f84ee5.js","assets/oss-api-f26736c0.js","assets/page-name-cce4340b.js","assets/promote-id-0891595e.js","assets/index-9a9ddcf8.css"])),t.isAlbum&&!t.isAlbumGold?t.pageClass.push("page-dlc-collection"):t.pageClass.push("page-store-details"),t.bodyClass.forEach(l=>{document.body.classList.add(l)});const i=n.dlc_list;return Array.isArray(i)&&i.length&&p.push(F({game_ids:i.map(l=>l.id),filters:["game_id","detailpage_enabled"]})),Promise.all(p)}).then(([o,e={},a,[d,f],O,y,E,c,D,h={}])=>{var b,P;v("end-fetch-data");const G=((b=E?.object)==null?void 0:b[s])||{},S=c?.[s]||{},A=d?.[s]||{},w=f?.[s],L=((P=D?.[s])==null?void 0:P.tags)||[],k=c?.errStatus||0,p=c?.timeGap||0,i=Ae({base:n,detail:G,price:S,state:e,remarks:A,remarksTest:w,tags:L,timeGap:p}),l=i.category===oe.GAME?u.t("entry.categoryNameGame"):u.t("entry.categoryNameApp");i.categoryName=l,i.installer_size_ajax=i.installer_size,it&&(Ne.info({message:u.t("entry.noAccessToThisGame",{categoryName:l})}),Re("no_permission"));const I=ie("tgp_user_type")||ot,C=i.prop_account===0,Y=I==="1"&&C,X=!t.isTesting&&Number(i.activity_state)===1,J=Oe(G,p);T&&(i.can_donate=0,i.big_version_detail=null);const Z=(i.rels_super_bundle||[]).map(r=>({name:r.name,game_id:r.id,img_cover:r.poster_url_h,comments:r.comments,game_list:r.composed_game_list,isGolden:!0}));i.double_bundle=[...Z,...i.double_bundle||[]];const j=Object.keys(h).map(r=>h[r]).filter(r=>r.detailpage_enabled==="0").map(r=>r.game_id);if(j.length&&(i.dlc_list=i.dlc_list.filter(r=>j.indexOf(r.id)===-1)),t=Ue($e({},t),{priceErrorStatus:k,timeGap:p,gameInfo:i,detailDisplay:a,clientInfo:o,userType:I,userAccountTypeCanNotBuy:Y,notForWXUser:C,isLimitOpen:X,isLimitPre:J,gameLabel:O,isEarlyTest:ae(i)}),i.installed_game&&(t.downloadState="installed"),t.isDLC){const r=c?.[i.master_game_id]||{},{isOwner:ee,isOwnerTemp:te}=ne({},r);t.masterPriceInfo=r,t.masterIsQualified=ee,t.masterIsQualifiedTemp=te>0}t.navigatorModules=at(),v("start-vue");const g=ce({render(){return de(y?.default)}});g.config.globalProperties.$doReport=R,g.provide(Ie,u),g.provide(Te,R),g.provide(De,U),g.provide("emitter",U),g.use(u),g.use(Se),g.use(ke()),Ce().$patch(t),g.mount("#app"),R(["pv",s,T?"mac":""],{from:K,ingame:_?1:0,colorScheme:re()},{realTimeAnalysis:!0})});v("end-js");function at(){return[{id:m.testingPhase,isShow:!1},{id:m.album,isShow:!1},{id:m.dlc,isShow:!1},{id:m.gameDetail,isShow:!1},{id:m.testingQa,isShow:!1},{id:m.updateActivity,isShow:!1},{id:m.moreInfo,isShow:!0},{id:m.afterSale,isShow:!1},{id:m.eliteComment,isShow:!1},{id:m.userReview,isShow:!0}]}le(({duration:o,scrollTop:e,type:a})=>{var d;(d=Ye)==null||d.reportEvent("page_duration",{block:"store_detail",duration:o,scroll_top:e,type:a},{sendBeacon:!0})});
