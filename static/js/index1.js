import config from './config.js';

let listData = [
    {
        "id": 133,
        "navi_type_id": 5,
        "image": "https://www.17119.com/uploads/20241129/ad5a5bfe7c9d91e7df77d6982e1c5eef.jpg",
        "name": "豆包AI",
        "seo_title": "你的全能 AI 助手，助力每日工作学习",
        "keywords": "",
        "description": "豆包是由字节跳动公司依托云雀模型精心打造的一款AI人工智能应用程序。该应用不仅具备回答历史、文化、地理、科学等多领域问题的能力，还能够详尽解释词语含义及概念定义，展现出强大的知识解析能力。",
        "tag_name": "",
        "tag_color": null,
        "web_url": "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao_pc/1.27.7/203/Doubao_installer.exe",
        "admin_url": null,
        "siteswitch": 1,
        "info": "版本  1.27.7.0\r\n\r\n大小  207 MB\r\n\r\n开发者  字节跳动\r\n\r\n最后更新  2024-11-20",
        "weigh": 133,
        "createtime": 1732872292,
        "updatetime": 1733119937
    },
    {
        "id": 130,
        "navi_type_id": 5,
        "image": "https://www.17119.com/uploads/20241129/d729866dfdd6a2805e4c2a505fb238c8.jpg",
        "name": "网易云音乐",
        "seo_title": "超好用，超好听的音乐播放器",
        "keywords": "网易云音乐电脑版,网易云音乐电脑版下载,网易云音乐电脑版官方下载,网易云音乐电脑版最新版,网易云音乐电脑版电脑版",
        "description": "网易云音乐是一款专注于发现与分享的音乐产品，依托专业音乐人、DJ、好友推荐及社交功能，为用户打造全新的音乐生活。",
        "tag_name": "",
        "tag_color": null,
        "web_url": "https://d1.music.126.net/dmusic/NeteaseCloudMusic_Music_official_3.0.5.203232_kuruan2.exe",
        "admin_url": null,
        "siteswitch": 1,
        "info": "版本  3.0.19.203232\r\n\r\n大小  141 MB\r\n\r\n开发者  网易公司\r\n\r\n最后更新  2024-11-20",
        "weigh": 130,
        "createtime": 1732863995,
        "updatetime": 1732872453
    },
    {
        "id": 129,
        "navi_type_id": 5,
        "image": "https://www.17119.com/uploads/20241129/06ede580b61dbb97408d7d00383feb6c.png",
        "name": "腾讯视频",
        "seo_title": "中国领先的在线视频媒体平台",
        "keywords": "腾讯视频,腾讯视频下载,腾讯视频官方下载,腾讯视频最新版,腾讯视频电脑版",
        "description": "腾讯视频播放器是腾讯视频旗下的客户端产品，支持丰富内容的在线点播及电视台直播，提供列表管理、视频音量放大、色彩画质调整、自动关机等等更强大的功能服务。",
        "tag_name": "",
        "tag_color": null,
        "web_url": "http://dldir1.qq.com/qqtv/qt/QQliveSetup_20_860.exe",
        "admin_url": null,
        "siteswitch": 1,
        "info": "版本  11.105.4486.0\r\n\r\n大小  122 MB\r\n\r\n开发者  腾讯公司\r\n\r\n最后更新  2024-11-21",
        "weigh": 129,
        "createtime": 1732863733,
        "updatetime": 1732872478
    },
    {
        "id": 128,
        "navi_type_id": 5,
        "image": "https://www.17119.com/uploads/20241129/f948f2626128ba56c5719248b5f7744e.jpeg",
        "name": "夸克浏览器",
        "seo_title": "夸克，AI全能助手",
        "keywords": "夸克浏览器,夸克浏览器官方版,夸克浏览器最新版,夸克浏览器官方版最新下载,夸克浏览器免费下载",
        "description": "夸克是一款集智能搜索、隐私保护、快速稳定、多功能于一体的移动浏览器，是移动用户的理想选择。它集成了多种先进技术和功能，为用户提供了快速、智能和便捷的浏览体验。",
        "tag_name": "",
        "tag_color": null,
        "web_url": "https://download.quark.cn/download/quarkpc?platform=pc&ch=pcquark@other_web_onlinedownpckk_cpa6",
        "admin_url": null,
        "siteswitch": 1,
        "info": "版本  1.9.5.161\r\n\r\n大小  211 MB\r\n\r\n开发者  阿里巴巴集团\r\n\r\n最后更新  2024-11-18",
        "weigh": 128,
        "createtime": 1732863405,
        "updatetime": 1732872570
    },
    {
        "id": 126,
        "navi_type_id": 5,
        "image": "https://www.17119.com/uploads/20241129/74fabd448bdd14d67c5368102ce02428.jpeg",
        "name": "爱奇艺",
        "seo_title": "海量正版高清视频在线观看",
        "keywords": "爱奇艺视频,爱奇艺视频官方下载,爱奇艺视频电脑版,爱奇艺视频最新版下载,爱奇艺视频免费下载",
        "description": "爱奇艺秉承“悦享品质”的品牌口号，坚持“让人们平等便捷地获得更多、更好的视频”的企业愿景，奉行“简单想，简单做”的企业文化，积极推动产品、技术、内容、营销等全方位创新，为用户提供更丰富、高清、流畅的专业视频服务。",
        "tag_name": "",
        "tag_color": null,
        "web_url": "https://mesh.if.iqiyi.com/player/upgrade/file/last/IQIYIsetup_ryxt@xt054.exe",
        "admin_url": null,
        "siteswitch": 1,
        "info": "版本  12.11.0.8812\r\n\r\n大小  57.3 MB\r\n\r\n开发者  北京爱奇艺科技有限公司\r\n\r\n最后更新  2024-11-08",
        "weigh": 126,
        "createtime": 1732851283,
        "updatetime": 1732872615
    },
    {
        "id": 119,
        "navi_type_id": 5,
        "image": "https://www.17119.com/uploads/20241129/06a56f09e89575f33602c92c3b5349c6.png",
        "name": "WPS Office",
        "seo_title": "一站式办公服务平台 新升级，无广告，AI办公更高效",
        "keywords": "2024年,WPS Office下载,WPS Office免费下载,WPS Office官方正式版,WPS Office官方下载,WPS Office官网",
        "description": "安装WPS最新版本，获得更清爽简洁的办公体验。WPS AIAI 办公的神奇体验。申请加入智能办公体验官，就有机会体验 AI 生成方案、提出妙想、制作精美的 PPT等能力。全新视觉设计视觉设计焕然一新，带给你更具家族一致性的视觉体验。",
        "tag_name": "",
        "tag_color": "#e74c3c",
        "web_url": "https://pc-package.wpscdn.cn/wps/download/W.P.S.20.3064.exe",
        "admin_url": null,
        "siteswitch": 1,
        "info": "版本  20.3064\r\n\r\n大小  224 MB\r\n\r\n开发者  北京金山办公软件股份有限公司\r\n\r\n最后更新  2024-11-19",
        "weigh": 125,
        "createtime": 1732848923,
        "updatetime": 1732872651
    },
    {
        "id": 125,
        "navi_type_id": 5,
        "image": "https://www.17119.com/uploads/20241129/f4d4a3d1268429099af3bc89261b37a9.png",
        "name": "搜狗输入法",
        "seo_title": "全面升级，让输入框变身搜索框",
        "keywords": "搜狗输入法,搜狗输入法官方版,搜狗输入法最新版,搜狗输入法官方版最新下载,搜狗输入法免费下载",
        "description": "搜狗拼音输入法，一款Windows平台下的汉字拼音输入法软件。搜狗拼音输入法是基于搜索引擎技术的、特别适合网民使用的、新一代的输入法产品，用户可以通过互联网备份自己的个性化词库和配置信息。",
        "tag_name": "",
        "tag_color": null,
        "web_url": "http://cd001.www.duba.net/duba/install/packages/partner/_sogou_pinyin_[release]_14.6.0.9606_7047.exe",
        "admin_url": null,
        "siteswitch": 1,
        "info": "版本  14.6.0.9606\r\n\r\n大小  149 MB\r\n\r\n开发者  北京搜狗科技发展有限公司\r\n\r\n最后更新  2024-11-08",
        "weigh": 125,
        "createtime": 1732850972,
        "updatetime": 1732872782
    },
    {
        "id": 120,
        "navi_type_id": 5,
        "image": "https://www.17119.com/uploads/20241129/56e7418dae117e7d5c6e9ccc60ddc602.png",
        "name": "QQ游戏",
        "seo_title": "经典游戏  新体验 尽在QQ游戏",
        "keywords": "2024年,QQ游戏下载,QQ游戏免费下载,QQ游戏官方正式版,QQ游戏官方下载,QQ游戏官网",
        "description": "QQ游戏21周年，经典游戏翻新来袭，海量游戏任你畅玩，超多福利登录即领，更多精彩等你体验！",
        "tag_name": "",
        "tag_color": null,
        "web_url": "https://dldir3.qq.com/minigamefile/webdownloads/QQGame_5.56.58139.0_silent_1080001357_cid0.exe",
        "admin_url": null,
        "siteswitch": 1,
        "info": "版本  5.56.58139.0\r\n\r\n大小  103 MB\r\n\r\n开发者  腾讯公司\r\n\r\n最后更新  2024-09-20",
        "weigh": 124,
        "createtime": 1732849332,
        "updatetime": 1732872838
    },
    {
        "id": 124,
        "navi_type_id": 5,
        "image": "https://www.17119.com/uploads/20241129/05c7af992df2ac82e76015ef0f6c1f93.png",
        "name": "360压缩",
        "seo_title": "快速轻巧、兼容性好、更安全、更漂亮，永久免费",
        "keywords": "360压缩,360压缩下载,360压缩官方下载,360压缩最新版,360压缩电脑版",
        "description": "360压缩官方版是360推出的一款十分好用的压缩软件。360压缩官方版操作方便快捷，满足各种格式的文件压缩的需求，支持更多、更全面的压缩格式。360压缩官方版还内置木马扫描功能，能够时刻保护你的电脑安全。",
        "tag_name": "",
        "tag_color": null,
        "web_url": "https://urlqh.cn/o8t5J",
        "admin_url": null,
        "siteswitch": 1,
        "info": "版本  4.0.0.1540\r\n\r\n大小  14.9 MB\r\n\r\n开发者  360公司\r\n\r\n最后更新  2024-10-23",
        "weigh": 124,
        "createtime": 1732850600,
        "updatetime": 1732872891
    },
    {
        "id": 121,
        "navi_type_id": 5,
        "image": "https://www.17119.com/uploads/20241129/dcd3383950e8208d89cf0b22f9576929.png",
        "name": "360安全浏览器",
        "seo_title": "全面保护上网安全,4亿用户共同选择",
        "keywords": "360安全浏览器,360安全浏览器官方下载,360安全浏览器电脑版,360安全浏览器最新版下载,360安全浏览器免费下载",
        "description": "360安全浏览器应该说是360公司主打的浏览器产品，以安全、稳定、全面的特点，深受广大网友的喜爱，是现在国内使用人数众多的浏览器之一。",
        "tag_name": "",
        "tag_color": null,
        "web_url": "http://dl.360safe.com/pclianmeng/s/3__5000565__3f7372633d6c6d266c733d6e32626435373637333938__68616f2e3336302e636e__0c47.exe",
        "admin_url": null,
        "siteswitch": 1,
        "info": "版本  14.1.1224.0\r\n\r\n大小  106 MB\r\n\r\n开发者  360公司\r\n\r\n最后更新  2024-08-27",
        "weigh": 123,
        "createtime": 1732849823,
        "updatetime": 1732872917
    },
    {
        "id": 123,
        "navi_type_id": 5,
        "image": "https://www.17119.com/uploads/20241129/3d36d1e082dae15fd7615746a4d660fb.jpg",
        "name": "360杀毒",
        "seo_title": "专业防护 专心为您",
        "keywords": "360杀毒,360杀毒下载,360杀毒官方下载,360杀毒最新版,360杀毒电脑版",
        "description": "360杀毒是一款免费的云安全杀毒软件。360杀毒整合了五大领先查杀引擎，包括国际知名的BitDefender病毒查杀引擎、小红伞病毒查杀引擎、360云查杀引擎、360主动防御引擎以及360第二代QVM人工智能引擎，为用户带来安全、专业、有效、新颖的查杀防护体验。",
        "tag_name": "",
        "tag_color": null,
        "web_url": "https://urlqh.cn/o8ta3",
        "admin_url": null,
        "siteswitch": 1,
        "info": "版本  7.0.0.1057\r\n\r\n大小  68.4 MB\r\n\r\n开发者  360公司\r\n\r\n最后更新  2024-11-26",
        "weigh": 123,
        "createtime": 1732850396,
        "updatetime": 1732872954
    },
    {
        "id": 122,
        "navi_type_id": 5,
        "image": "https://www.17119.com/uploads/20241129/5ac705ce439cae3cb33bc0f5fa64bfa8.jpg",
        "name": "360安全卫士",
        "seo_title": "360安全卫士14.0 防护全面升级！",
        "keywords": "360安全卫士,360安全卫士下载,360安全卫士官方下载,360安全卫士最新版,360安全卫士电脑版",
        "description": "360安全卫士是一款电脑杀毒软件，可以对电脑进行安全检测、漏洞修复、磁盘体检、垃圾清理等。360安全卫士除了可以对电脑进行安全检测、杀毒清理外，还可以对电脑资料进行云备份，不怕电脑资料丢失。",
        "tag_name": "",
        "tag_color": null,
        "web_url": "https://dl.360safe.com/netunion/20140425/360safe+5000564+n2bd5767398.exe",
        "admin_url": null,
        "siteswitch": 1,
        "info": "版本  13.1.0.1710\r\n\r\n大小  91.9 MB\r\n\r\n开发者  360公司\r\n\r\n最后更新  2024-10-23",
        "weigh": 122,
        "createtime": 1732850057,
        "updatetime": 1732872996
    },
    {
        "id": 127,
        "navi_type_id": 5,
        "image": "https://www.17119.com/uploads/20241129/08aa9be0b660456594dfafbc0ead8bd2.png",
        "name": "驱动人生",
        "seo_title": "全新交互体验，强劲驱动引擎，护航系统优化",
        "keywords": "驱动人生,驱动人生官方下载,驱动人生电脑版,驱动人生最新版下载,驱动人生免费下载",
        "description": "以全新的软件结构，深度优化基本功能，实现程序性能的全面提升；焕然一新的软件界面，突出驱动核心功能，操作更趋简单、流畅。全新设计的外设驱动，更可为手机、打印机等外设提供清晰、方便的安装和管理。",
        "tag_name": "",
        "tag_color": null,
        "web_url": "https://file1.updrv.com/soft/DriveTheLife/8_16_39_98/DriveTheLife_36987_S_8_16_39_98.exe",
        "admin_url": null,
        "siteswitch": 1,
        "info": "版本  8.16.39.98\r\n\r\n大小  66.4 MB\r\n\r\n开发者  深圳市驱动人生科技股份有限公司\r\n\r\n最后更新  2024-02-10",
        "weigh": 121,
        "createtime": 1732851782,
        "updatetime": 1732873029
    },
    {
        "id": 131,
        "navi_type_id": 5,
        "image": "https://www.17119.com/uploads/20241129/2a7431fbee36eed70d0b9b342398c066.jpg",
        "name": "元气壁纸",
        "seo_title": "2024爆火超清4k电脑壁纸",
        "keywords": "元气壁纸,元气壁纸官方下载,元气壁纸电脑版,元气壁纸最新版下载,元气壁纸免费下载",
        "description": "元气壁纸是一款桌面主题美化软件，可以一键美化桌面布局，提供千万级别的壁纸库供用户选择。壁纸的分类涵盖风景、动物、动漫、美食、美女等多个品类，满足用户的各种需求。",
        "tag_name": "",
        "tag_color": null,
        "web_url": "https://softdl.www.duba.net/softmgr/package/infoflow/package/kdesk_u18796034_189_8.exe",
        "admin_url": null,
        "siteswitch": 1,
        "info": "版本  2024.9.5.895\r\n\r\n大小  62.8 MB\r\n\r\n开发者  珠海海鸟科技有限公司\r\n\r\n最后更新  2024-11-12",
        "weigh": 120,
        "createtime": 1732866401,
        "updatetime": 1732873067
    },
    {
        "id": 132,
        "navi_type_id": 5,
        "image": "https://www.17119.com/uploads/20241129/24643927783ff2f33c9adfe7d6f972db.png",
        "name": "驱动修复大师",
        "seo_title": "百万级驱动库资源 全面覆盖Nvidia,Amd,Intel等产品",
        "keywords": "",
        "description": "驱动修复大师是一款由3DM出品，帮助用户解决打印机驱动、显卡驱动，声卡驱动，网卡驱动安装、修复游戏和系统运行库组件错误问题的工具。提供驱动，directx，dll修复，vc/.net运行库等系统组件的安装。",
        "tag_name": "",
        "tag_color": null,
        "web_url": "https://file-cdn.greatsoftman.com/package/DriverMaster_21101_tg.exe",
        "admin_url": null,
        "siteswitch": 1,
        "info": "版本  2.1.1.22\r\n\r\n大小  75.3 MB\r\n\r\n开发者  3DM\r\n\r\n最后更新  2024-11-01",
        "weigh": 120,
        "createtime": 1732867866,
        "updatetime": 1732873148
    }
]
new Vue({
    el: '#app-wrap',
    data: function() {
        return {

            centerDialogVisible: false, // 软件弹窗详情
            softData:"", // 软件信息

        }
    },
    mounted() {


        this.softClick()

    },
    methods:{
        down(name,url){
            $.ajax({
                type:'get',
                url:`${config.apiUrl}?name=${name}&url=${url}`,
                dataType:'JSON',
                success:function (data,status) {
                    if (data.code === 200){
                        window.location.href= data.data
                    }else {
                        console.log('下载错误')
                    }
                }
            });
        },
        // 软件数据点击
        softClick(){
            $(".soft-pop-app").show();
            let that = this;
            $(".tool-list-container").on("click",".extension-btn1",function () {
                let index1 = $(this).attr('data-type1')
                let index2 = $(this).attr('data-type2')

                that.softData = listData[index2]
                that.softData.index = index2
                that.softData.info = JSON.stringify(that.softData.info).replace(/\\r\\n\\r\\n/g,'<br>').replace(/"/g,'')
                that.centerDialogVisible = true
                return false
            })
            $("#app-wrap").on("click",".download-button",function (event) {
                let index = $(this).prev().attr('data-type2')

                // window.location.href = $(this).attr('data-href')
                that.down(listData[index].name,listData[index].web_url)
                return false
            })
        },
        dialogDownload(){
            let index = this.softData.index
            this.down(listData[index].name,listData[index].web_url)
        },
        // banner下载
        buttonDown(type){
            if (String(type) === "360"){
                this.down('WPS Office','https://pc-package.wpscdn.cn/wps/download/W.P.S.20.3064.exe')
            }else {
                this.down('17119工具箱','https://soft-10-0.xiaoguaniu.com/soft/202412/17119GJX.exe')
            }

        }
    }
})
