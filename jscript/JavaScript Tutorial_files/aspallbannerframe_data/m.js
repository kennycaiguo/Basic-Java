if(LqmAds===undefined){var LqmAds={GetQueryTerms:function(){var f=[{d:"www.google.",q:"q="},{d:"www.bing.com",q:"q="},{d:"search.live.com",q:"q="},{d:"search.yahoo.com",q:"p="},{d:"codeproject.com",q:"q="},{d:"msdn.microsoft.com",q:"query="},{d:"localhost",q:"q="}];function b(j){var m="";for(var k=0;k<f.length;k++){var l=f[k];if(j.indexOf(l.d)>=0){m=l.q;break}}return m}function g(i,k){var j=k.toLowerCase().indexOf(i);if((j<0)||(j+i.length>=k.length)){return""}var m=k.indexOf("&",j);if(m<0){m=k.length}var l=k.substring(j+i.length,m);l=decodeURIComponent(l);l=l.replace(/\"/gi,"");return l}function d(k){if(k==undefined){return""}var i=/\bAND\b|\bNOT\b|^NOT\b|\bOR\b|[^A-Z0-9\+\-\#\._\s]+|\b[A-Z0-9]+:/gi;var j=k.replace(/^\s+|\s+$/gi,"");if(j){j=j.replace(i," ");j=j.replace(/\s+/g," ");return j}else{return""}}var c=document.URL;var a="";var h=b(c);if(h!=""){a=d(g(h,c))}if(a==""){c=document.referrer.toLocaleLowerCase();if(!c){return""}h=b(c);if(h!=""){a=d(g(h,c))}}return a},GetRandom:function(c,d){var a,f,b;a="";for(b=0;b<c;b++){f=Math.floor(Math.random()*d).toString(d).toUpperCase();a=a+f}return a},PageRandomNumber:null,PageSearchTerms:null,Tile:1,BuildIFrameTag:function(b){var a='<iframe id="lqmad{tile}" ';if(b&&b.width&&b.width>1){a=a+'width="{width}" '}else{a=a+'width="100%" '}if(b&&b.height&&b.height>0){a=a+'height="{height}" '}else{a=a+'height="0" '}a=a+'marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe>';return this.ReplacePlaceholders(a,b)},BuildJavaScriptTag:function(b){var a='<script language="JavaScript" src="http://ad.doubleclick.net/adj/{sitename}/{zonename};{searchterm}sz={format};{type}tile={tile};ord={timestamp}?" type="text/javascript"></script>';return this.ReplacePlaceholders(a,b)},ReplacePlaceholders:function(a,b){a=a.replace(/\{sitename\}/g,b.sitename);a=a.replace(/\{zonename\}/g,b.zonename);if(b.tags){a=a.replace(/\{searchterm\}/g,"kw="+encodeURIComponent(this.EscapeSpecialCharacters(b))+";")}else{a=a.replace(/\{searchterm\}/g,"")}a=a.replace(/\{tile\}/g,b.tile.toString());a=a.replace(/\{format\}/g,b.format);a=a.replace(/\{width\}/g,b.width);a=a.replace(/\{height\}/g,b.height);a=a.replace(/\{target\}/g,b.target);a=a.replace(/\{timestamp\}/g,this.PageRandomNumber);if(b.type){a=a.replace(/\{type\}/g,"type="+encodeURIComponent(b.type)+";")}else{a=a.replace(/\{type\}/g,"")}return a},EscapeSpecialCharacters:function(b){var a=b.tags;a=a.replace(/\+/gi,"{plus}");a=a.replace(/\#/gi,"{sharp}");a=a.replace(/\./gi,"{dot}");a=a.replace(/[\#\*\.\(\)\+\<\>\[\]]/gi,"");return a},tagInfo:[{id:1,n:"Standard Banner",h:60,w:468},{id:2,n:"Product Spotlight",h:2,w:1},{id:3,n:"Hosting Spotlight",h:2,w:1},{id:4,n:"Skyscraper",h:600,w:120},{id:5,n:"Square",h:125,w:125},{id:6,n:"Medium Rectangle",h:250,w:300},{id:7,n:"Large Rectangle",h:280,w:336},{id:8,n:"Leaderboard",h:90,w:728},{id:9,n:"HTML Ad",h:0,w:0},{id:10,n:"Fixed Square",h:125,w:125},{id:11,n:"Fixed Banner",h:60,w:468},{id:12,n:"Half Skyscraper",h:300,w:120},{id:13,n:"IAB Button",h:90,w:120},{id:14,n:"Rectangle",h:120,w:150},{id:15,n:"Thin Horizontal",h:27,w:408},{id:16,n:"Button",h:30,w:100},{id:17,n:"DogEar",h:0,w:0},{id:18,n:"Wide Skyscraper",h:600,w:160},{id:19,n:"Tracking Only",h:1,w:1},{id:20,n:"Mixed 120x90-Text",h:5,w:1},{id:21,n:"Home page top left (150 X 80)",h:80,w:150},{id:22,n:"SponsorEmail",h:0,w:0},{id:23,n:"Email",h:60,w:60},{id:24,n:"TextLinks",h:0,w:0},{id:25,n:"Zone",h:0,w:0},{id:26,n:"Goal group",h:0,w:0},{id:27,n:"Article",h:0,w:0},{id:28,n:"Search Sponsor Box",h:30,w:120},{id:29,n:"Microbar",h:31,w:88},{id:30,n:"Sponsor Link",h:1,w:0}],DetermineTagSize:function(b){if(b.format){if(isNaN(b.format)){var d=b.format.split("x");if(d.length==2){if(isFinite(d[0])){b.width=d[0]}if(isFinite(d[1])){b.height=d[1]}}}else{var c=false;var f=0;while(f<this.tagInfo.length&&!c){var a=this.tagInfo[f];if(a.id==b.format){if(a.w!=0){b.width=a.w}if(a.h!=0){b.height=a.h}b.type=a.name;c=true;b.format=""+a.w+"x"+a.h}f++}}}},lqmIdToDartMap:[{id:782,n:"youvebeenhacked"}],MapLqmIdsToDart:function(a){if(a.publisher){if(isNaN(a.publisher)){a.sitename=a.publisher}else{var b=false;var c=0;while(c<this.lqmIdToDartMap.length&&!b){if(this.lqmIdToDartMap[c].id==a.publisher){a.sitename="lqm."+this.lqmIdToDartMap[c].n+".site";b=true}c++}if(!b){a.sitename="lqm.pub"+a.publisher+".site"}}this.MapLqmZoneToDartZone(a)}else{if(a.site){a.sitename="lqm.codeplex.site";if(a.charity){a.zonename="donated2charity"}else{a.zonename=a.site.toLowerCase()}}}},zoneInfo:[{id:1,n:"ron"},{id:51,n:"it"},{id:52,n:"designer"},{id:2,n:"above_the_fold"},{id:9,n:"wpf"},{id:14,n:"silverlight"},{id:3,n:"reportingservices"},{id:4,n:"sql"},{id:5,n:"whitepaper"},{id:6,n:"featuredwhitepaper"},{id:7,n:"crystalreports"},{id:10,n:"vs2005video"},{id:11,n:"ros_dogear"},{id:12,n:"homepage_dogear"},{id:13,n:"excludehomepage_dogear"},{id:15,n:"lqm_dogear"},{id:17,n:"mvc"},{id:18,n:"ajax"},{id:38,n:"devexpress_video"},{id:39,n:"devmavens_sidebar"},{id:40,n:"devmavens_offer"},{id:44,n:"silverlight"},{id:45,n:"wpf"},{id:54,n:"csharp_articles"}],MapLqmZoneToDartZone:function(a){if(a.zone){var b=false;var c=0;while(c<this.zoneInfo.length&&!b){if(this.zoneInfo[c].id==a.zone){a.zonename=this.zoneInfo[c].n;b=true}c++}if(!b){if(isNaN(a.zone)){a.zonename=a.zone.toLowerCase()}else{a.zonename="ron"}}}else{a.zonename="ron"}},GetDocHeight:function(a){return a.height||a.body&&a.body.scrollHeight},HideRefs:function(h,g,j){var c=this;var d;if(j.format.indexOf("1x")===0){g.innerHTML=h.body.innerHTML;d=g}else{d=h}var f=d.getElementsByTagName("a");var b=function(l){var i=l.href;var k="http://a.lakequincy.com/"+c.GetRandom(4,16)+"-"+c.GetRandom(7,16);l.href=k;var n=function(){l.href=i};var m=function(){l.href=k};if(l.addEventListener){l.addEventListener("mousedown",n,false);l.addEventListener("mouseover",m,false)}else{try{l.attachEvent("onmousedown",n);l.attachEvent("onmouseover",m)}catch(o){}}};for(var a=0;a<f.length;a++){b(f[a])}}}}if(typeof LqmAds.CreateAds!=="function"){LqmAds.CreateAds=function(){this.PageRandomNumber=this.GetRandom(32,16);if(this.PageSearchTerms==null){this.PageSearchTerms=this.GetQueryTerms()}var f=this.PageSearchTerms;var d=this;var a=function(o,t,p){var u=new Array();if(t==null){t=document}if(p==null){p="*"}var w=t.getElementsByTagName(p);var v=w.length;var q=new RegExp("(^|\\s)"+o+"(\\s|$)");for(var r=0,s=0;r<v;r++){if(q.test(w[r].className)){u[s]=w[r];s++}}return u};var c=function(s,t,o,q){var p=50;var r=0;var i=window.setInterval(function(){var u=d.GetDocHeight(s);if(u>0){if(--p==0||u===r){window.clearInterval(i);d.HideRefs(s,q,t)}r=u}},100)};var g=function(y){var D=k[y];var B,v;var A={height:0,width:0};var r=D.attributes;var q=r.length;for(var w=0;w<(q);w++){var x=r.item(w);if(x.nodeName.indexOf("lqm_")==0){var u=x.nodeName.slice(4);A[u]=x.nodeValue}}A.tile=y+1;A.target="_blank";if(A.tags){A.tags=decodeURIComponent(A.tags)}if(f&&f!=""){if(A.tags){A.tags=A.tags+","+f}else{A.tags=f}}d.DetermineTagSize(A);d.MapLqmIdsToDart(A);D.innerHTML=d.BuildIFrameTag(A);var s=D.getElementsByTagName("iframe")[0];s.onerror=function(){return true};var t=s.contentDocument||s.contentWindow.document||s.contentWindow.window.document;var p=function(){if(A.height<=1){this.height=d.GetDocHeight(t)}d.HideRefs(t,D,A)};if(s.addEventListener){s.addEventListener("load",p,false)}else{try{s.attachEvent("onload",p)}catch(z){}}var o=navigator.userAgent&&navigator.userAgent.indexOf("MSIE")>=0;var C=navigator.userAgent&&navigator.userAgent.indexOf("Opera")>=0;t.write(d.BuildJavaScriptTag(A));if(!o&&!C&&t.close){t.close()}if(o){c(t,A,s,D)}};var h=function(p){var q=p.getBoundingClientRect();var o=0,i=0;if(typeof(window.innerWidth)=="number"){o=window.innerWidth;i=window.innerHeight}else{if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){o=document.documentElement.clientWidth;i=document.documentElement.clientHeight}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){o=document.body.clientWidth;i=document.body.clientHeight}}}return(q.top<=i&&q.bottom>=0)};var l=function(){for(var o=0;o<k.length;o++){if(m[o]===false&&h(k[o])){m[o]=true;g(o)}}};var k=a("lqm_ad",document,"div");var m=new Array();for(var b=0;b<k.length;b++){m[b]=false;var j=k[b].getAttribute("lqm_loadOnView");if(j==="true"){}else{g(b);m[b]=true}}l();if(window.addEventListener){window.addEventListener("scroll",l,false)}else{try{window.attachEvent("onscroll",l)}catch(n){}}}}if(typeof(jQuery)!=="undefined"){jQuery.LqmAds=function(){}}if(document.readyState==="complete"){LqmAds.CreateAds()}else{if(window.addEventListener){window.addEventListener("load",function(){LqmAds.CreateAds()},false)}else{try{window.attachEvent("onload",function(){LqmAds.CreateAds()})}catch(e){}}};