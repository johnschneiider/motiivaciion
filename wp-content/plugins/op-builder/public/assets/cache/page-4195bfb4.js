;window.OP3={"Meta":{"pageId":4195,"homeUrl":"https:\/\/www.millonlatino.com","siteUrl":"https:\/\/www.millonlatino.com","facebookAppId":"194675843900357","facebookLang":"es_CO"},"GoogleRecaptcha":{"googleRecaptchaSiteKey":false}};
!function(t,e,a){"use strict";var i=function(a){if(function(){var e=!1,a=t(this).find("input.op3-element-input-edit-text");return a.parent(".op3-element-input-edit").siblings(".op3-element-input-edit-error").remove(),a.each(function(a,i){var o=t(i);if("text"===o.attr("type")&&o.attr("required")&&""===o.val()||"checkbox"===o.attr("type")&&o.attr("required")&&!o.is(":checked")){var n=o.attr("data-op3-validation-message")||o.attr("data-op-validation-message");o.closest(".op3-element-input-wrapper").append('<p class="op3-element-input-edit-error">'+n+"</p>"),e=!0}}),e}.call(this))a.preventDefault();else{if(this.checkValidity()){var i=t(this).find("[name]:not(:disabled)").attr("disabled","disabled"),o=function(){var a={};return t(this).each(function(){var e=t(this).attr("name");if("op3-dummy"!==e&&"optin-gdpr-activate"!==e&&!/^optin-post-action/.test(e)){var i=t(this).val();if("checkbox"===t(this).attr("type")){var o=t(this).is(":checked"),n=t(this).is(":visible");!o&&n?i=!1:o||n||(i=null)}a[e]=i,"optin-gdpr-consent-1"===e&&(a["optin-gdpr-message-1"]=t(this).closest("label").text()),"optin-gdpr-consent-2"===e&&(a["optin-gdpr-message-2"]=t(this).closest("label").text())}}),a["optin-button-message"]=t(this).closest("form").find('.op3-element[data-op3-element-type="button"] .op3-text-container').text(),e.OPFunnelStats&&e.OPFunnelStats.pageview_record_id&&(a.pageview_record_id=e.OPFunnelStats.pageview_record_id),a}.call(i);t(this).find('[data-op3-element-type="button"] a').removeAttr("href").blur(),t.ajax({url:t(this).attr("action"),type:"post",data:o,success:n.bind(i),error:r.bind(i),beforeSend:s.bind(this)})}else t(this).find('[type="submit"]').click();a.preventDefault()}},o=function(e){t(this).attr("href")&&t(this).closest("form").submit(),e.preventDefault()},n=function(a,i,o){var n={},r="";t(this).each(function(){var e=t(this);n[e.attr("name")]=e.val();var a="";a=e.data("op-url-mapping")?e.data("op-url-mapping")?e.data("op-url-mapping"):e.attr("name"):e.data("op3-url-mapping")?e.data("op3-url-mapping"):e.attr("name"),e.is(":visible")&&(r+="&"+a+"="+encodeURIComponent(e.val()))});var s=t(this.context).find('.op3-element[data-op3-element-type="button"]');if(p(s),t(this.context).closest(".op3-element ").find(".op3-form-notification").remove(),"notification"===n["optin-post-action"]&&n["optin-post-action-notification-text"]){var c=t(this).parent("form");t("<div />").text(n["optin-post-action-notification-text"]).addClass("op3-form-notification").insertBefore(c),c.remove()}else if("redirect"===n["optin-post-action"]&&n["optin-post-action-redirect-url"]){var l=n["optin-post-action-redirect-url"];1*n["optin-post-action-redirect-autofill"]&&(l+=l.split("?").length>1?"&":"?",l+=r.substring(1)),e.location.href=l}else if("popoverlay"===n["optin-post-action"]){var d=n["optin-post-action-popoverlay-trigger"];t(this).closest(".op3-popoverlay-wrapper").find(".op3-popoverlay-close").trigger("click"),OP3.PopOverlay.open(d)}else if("hidePopoverlay"===n["optin-post-action"])t(this).closest(".op3-popoverlay-wrapper").find(".op3-popoverlay-close").trigger("click");else if("nextFunnelStep"===n["optin-post-action"]){(f=!!(a&&a.data&&a.data.redirect_url)&&a.data.redirect_url)&&(e.location.href=f)}else if("goToFunnelStep"===n["optin-post-action"]){var f;(f=!!(a&&a.data&&a.data.redirect_url)&&a.data.redirect_url)&&(e.location.href=f)}},r=function(e,a,i){var o={},n=e.status;t(this).each(function(){var e=t(this);o[e.attr("name")]=e.val();var a="";a=e.data("op-url-mapping")?e.data("op-url-mapping")?e.data("op-url-mapping"):e.attr("name"):e.data("op3-url-mapping")?e.data("op3-url-mapping"):e.attr("name"),e.is(":visible")&&"&"+a+"="+encodeURIComponent(e.val())});var r=t(this).parent("form"),s=t("<div />"),c=t(this.context).find('.op3-element[data-op3-element-type="button"]'),l=e.responseJSON,d="Something went wrong.";p(c),t(this.context).closest(".op3-element ").find(".op3-form-notification").remove(),409==n?(d=l&&l.message?l.message:"You are already subscribed.",s.text(d).addClass("op3-form-notification").addClass("warning-notification")):401==n||403==n?(d="API authorization error.",s.text(d).addClass("op3-form-notification").addClass("error-notification")):(d=l&&l.message?l.message:"Something went wrong.",s.text(d).addClass("op3-form-notification").addClass("error-notification")),s.insertBefore(r).animate({left:"-4px"},120).animate({left:"4px"},120).animate({left:"-4px"},120).animate({left:"4px"},120).animate({left:"0px"},120),r.find("[name]:disabled").removeAttr("disabled"),r.find('[data-op3-element-type="button"] a').attr("href","#").focus()},p=function(t){t.find('[data-op3-background="overlay"]').css("opacity",""),t.find(".submitting").remove(),t.find(".op3-text-container, .op3-subtext").css("display","")},s=function(){var e=t(this);e.find('[data-op3-background="overlay"]').css("opacity",.65),e.find(".op3-text-container, .op3-subtext").css("display","none"),e.find("a").append('<div class="submitting"></div>')};e.op3GrecaptchaInit=function(){var e=OP3.GoogleRecaptcha.googleRecaptchaSiteKey;e&&t('[data-op3-element-type="form"] form').each(function(){var a=t(this);grecaptcha.ready(function(){grecaptcha.execute(e,{action:"op3optin"}).then(function(e){t("<input>").attr({type:"hidden",name:"op3-grecaptcha-token",value:e}).appendTo(a);var i=t(".grecaptcha-badge");i.show(),i.css("visibility","visible")})})})},t(function(){var e=OP3.GoogleRecaptcha.googleRecaptchaSiteKey;if(e&&"undefined"==typeof grecaptcha){var n=a.getElementsByTagName("script")[0],r=a.createElement("script");r.async=!0,r.src="https://www.google.com/recaptcha/api.js?onload=op3GrecaptchaInit&render="+e,n.parentNode.insertBefore(r,n)}else op3GrecaptchaInit();t('[data-op3-element-type="form"] form').each(function(){t(this).on("submit",i).find('[data-op3-element-type="button"] a').on("click",o)})})}(jQuery,window,document);!function(e,t){"use strict";e.EXITINTENT_OFFSET=24;t.addEventListener("mouseout",function(n){if(!(n.relatedTarget||n.clientY>EXITINTENT_OFFSET)){var c=function(n){n&&"object"==typeof n||(n={});var c=null,i={altKey:n.altKey||!1,bubbles:!1,button:n.button||0,buttons:n.buttons||0,cancelable:!1,clientX:n.clientX||0,clientY:n.clientY||0,ctrlKey:n.ctrlKey||!1,metaKey:n.metaKey||!1,offsetX:n.offsetX||0,offsetY:n.offsetY||0,pageX:n.pageX||0,pageY:n.pageY||0,relatedTarget:n.relatedTarget||null,screenX:n.screenX||0,screenY:n.screenY||0,shiftKey:n.shiftKey||!1,view:n.view||null,which:n.which||0,x:n.x||0,y:n.y||0};try{c=new MouseEvent("exitintent",i)}catch(n){(c=t.createEvent("MouseEvent")).initMouseEvent("exitintent",i.bubbles,i.cancelable,e,0,i.screenX,i.screenY,i.clientX,i.clientY,i.ctrlKey,i.altKey,i.shiftKey,i.metaKey,i.button,i.relatedTarget)}return c}(n);this.dispatchEvent(c)}})}(window,document);!function(e,t){"use strict";var o=function(){if(!(this instanceof o))throw"OP3_Cookie: OP3_Cookie is a constructor."};o.prototype={_defaults:{expires:null,"max-age":null,domain:null,path:"/",secure:null,samesite:null},_encodeKey:function(e){return e.replace(/[^\x10-\x7E]+/g,"").replace(/[\x20\(\)<>@,;:\\"\/\[\]\?={}]+/g,"")},_encodeValue:function(e){return encodeURIComponent(e)},_decodeValue:function(e){return decodeURIComponent(e)},get:function(e){var t=this.toObject();return e in t?t[e]:null},set:function(e,o,i){if(void 0!==e&&""!==e){if(e=this._encodeKey(e),o=this._encodeValue(o),!e||!o)throw"OP3.Cookie: key/value arguments are mandatory.";for(var n in i=i||{}){var r=i[n];delete i[n],i[n.toLowerCase()]=r}for(var n in this._defaults)n in i||(i[n]=this._defaults[n]);if(i.expires){if(!isNaN(1*i.expires)){var s=new Date;s.setTime(s.getTime()+24*i.expires*60*60*1e3),i.expires=s}i.expires instanceof Date&&(i.expires=i.expires.toUTCString())}var a="";for(var n in i)null!==i[n]&&!1!==i[n]&&(a+=";"+n,!0!==i[n]&&(a+="="+i[n]));t.cookie=e+"="+o+a}},del:function(e){this.set(e,"",{expires:-1})},toObject:function(){var e={};return(t.cookie?t.cookie.split("; "):[]).forEach(function(t){var o=t.split("="),i=o[0],n=o.slice(1).join("=");n=(n=this._decodeValue(n)).replace(/^"(.*)"$/,"$1"),e[i]=n}.bind(this)),e}},o.prototype.constructor=o,e.OP3=e.OP3||{},e.OP3.Cookie=new o}(window,document);!function(t,e,o){"use strict";var i=function(t){if(!(this instanceof i))throw"OP3_PopOverlay: OP3_PopOverlay is a constructor.";if(!((t||e)instanceof Window))throw"OP3_PopOverlay: parent argument must be of type Window.";this._parent=t||e,this._wrapper=null,this._elements=null,this._current=null,this._init()};i.prototype={_isDevice:!!(navigator.maxTouchPoints||"ontouchstart"in o.documentElement),_init:function(){this.refresh(),this.bind()},destroy:function(){this.unbind(),this._parent=null,this._wrapper=null,this._elements=null,this._current=null},get parent(){return this._parent},get wrapper(){return this._wrapper||(this._wrapper=this.$("#op3-designer-element").get(0)),this._wrapper},get $(){return this.parent.jQuery},get current(){return this._current},refresh:function(){this._elements={},this.$('#op3-designer-element .op3-element[data-op3-element-type="popoverlay"]').each(function(t,e){var o=this._getConfig(e);this._elements[o.uuid]=o}.bind(this))},unbind:function(){this.$(null).add(this.parent).add(this.parent.document).add(this.parent.document.body).off(".op3popoverlay")},bind:function(){this.unbind(),this.$(this.parent.document.body).on("click.op3popoverlay",'[data-op3-action="popoverlay"],[data-op-action="popoverlay"]',this._handleOpenClick.bind(this)).on("click.op3popoverlay",".op3-popoverlay-background,.op3-popoverlay-close",this._handleCloseClick.bind(this)),Object.keys(this._elements).forEach(function(t){var e=this._elements[t],o=e.triggerEvent,i=e.useOnDevices,n=e.delayTimer;"load"===o||"load_delay"===o||"exitintent"===o&&this._isDevice&&i?this.$(this.parent).on("load.op3popoverlay",function(e){setTimeout(this._handleAutoTrigger.bind(this,this._elements[t]),n)}.bind(this)):"exitintent"!==o||this._isDevice||this.$(this.parent.document).on("exitintent.op3popoverlay",this._handleAutoTrigger.bind(this,this._elements[t]))}.bind(this))},open:function(t,e){if(this.current)return this._call(e,null);var o=this._elements[t];if(!o)return this._call(e,null);this._modalShow(o,e)},close:function(t){var e=this.current;e?this._modalHide(this._elements[e],t):this._call(t,null)},_call:function(t){if("function"==typeof t){var e=Array.prototype.slice.call(arguments,1);t.apply(this,e)}},_getConfig:function(t){var e,o=this.$(t),i=o.find(".op3-popoverlay-content"),n=o.find('[data-op3-element-type="video"] iframe').toArray(),a=o.index(),r=o.attr("data-op3-uuid"),s=i.attr("data-op3-text"),p=i.attr("data-op3-animation"),l=i.attr("data-op3-animation-trigger")||"none",h=!!(1*i.attr("data-op3-use-on-devices")),d=0,c=1*i.attr("data-op3-cookie-expires")||0;if(o.removeClass(function(t,e){return(e.match(/\bop3-popoverlay-effect-\S+/g)||[]).join(" ")}).addClass("op3-popoverlay-effect-"+p),e=parseFloat(i.css("animation-duration"))||parseFloat(i.css("transition-duration"))||0,"load_delay"===l){var u=i.attr("data-op3-timer")||"0sec";u.indexOf("sec")>-1?d=1e3*parseInt(u):u.indexOf("min")>-1&&(d=1e3*parseInt(u)*60)}return{element:o.get(0),content:i.get(0),videoElements:n,index:a,uuid:r,name:s,animationStyle:p,animationDuration:e,triggerEvent:l,useOnDevices:h,delayTimer:d,cookieExpires:c}},_modalShow:function(t,e){var o=this.$(t.element),i=this.$(this.wrapper),n=function(i){i&&this.$(i.currentTarget).off(".op3popoverlay"),o.addClass("op3-popoverlay-show"),this._call(e,t)}.bind(this);this._current=t.uuid,i.addClass("op3-popoverlay-active"),o.removeClass("op3-popoverlay-hide").removeClass("op3-popoverlay-show").css("display","block"),o.get(0).offsetHeight,o.addClass("op3-popoverlay-show"),t.animationDuration&&o.parent().length?this.$(t.content).one("transitionend.op3popoverlay animationend.op3popoverlay",n):n(),this._videoStart()},_modalHide:function(t,e){var o=this.$(t.element),i=this.$(this.wrapper),n=function(n){n&&this.$(n.currentTarget).off(".op3popoverlay"),o.removeClass("op3-popoverlay-show").css("display","none"),i.removeClass("op3-popoverlay-active"),this._current=null,this._call(e,t)}.bind(this);o.removeClass("op3-popoverlay-show").addClass("op3-popoverlay-hide"),t.animationDuration&&o.parent().length?this.$(t.content).one("transitionend.op3popoverlay animationend.op3popoverlay",n):n(),this._videoStop()},_videoStart:function(){var t=this.current,e=this._elements[t];e&&e.videoElements&&e.videoElements.length&&this.$(e.videoElements).each(function(t,e){var o=this.$(e),i=o.closest(".op3-video-wrapper"),n=o.attr("src"),a=i.attr("data-op3-src");!n&&a&&o.attr("src",a)}.bind(this))},_videoStop:function(){var t=this.current,e=this._elements[t];e&&e.videoElements&&e.videoElements.length&&this.$(e.videoElements).each(function(t,e){var o=this.$(e),i=o.closest(".op3-video-wrapper");o.attr("src");i.attr("data-op3-src")&&o.attr("src","")}.bind(this))},_handleAutoTrigger:function(t){var e="op3-popoverlay-"+OP3.Meta.pageId+"-"+t.uuid;OP3.Cookie.get(e)||(t.cookieExpires&&OP3.Cookie.set(e,"1",{expires:t.cookieExpires}),this.open(t.uuid))},_handleOpenClick:function(t){t.preventDefault();var e=this.$(t.currentTarget),o=e.attr("data-op-popoverlay-trigger")||e.attr("data-op3-popoverlay-trigger");this._elements[o]&&this.close(function(){this.open(o)}.bind(this))},_handleCloseClick:function(t){t.preventDefault(),this.$(t.currentTarget).closest('[data-op3-element-type="popoverlay"]').attr("data-op3-uuid")===this.current&&this.close()}},i.prototype.constructor=i,e.OP3=e.OP3||{},OP3.PopOverlay=new i}(jQuery,window,document);!function(t,a,e){var n=function(t){var a=t.attr("data-op3-animation-trigger");if("none"!==a){var e=a.indexOf("load")>-1?"load":"scroll",n=t.closest(".op3-element").attr("data-op3-animation-state","enter").attr("data-op3-animation-style",t.attr("data-op3-animation-style")),o=0,r=parseFloat(t.attr("data-op3-timer-minutes")),s=parseFloat(t.attr("data-op3-timer-seconds"));r=isNaN(r)?0:r,s=isNaN(s)?0:s,a.indexOf("delay")>-1&&(o=1e3*(60*r+s)),n.attr("data-op3-timeout",o),i[e](n,o),"load"===a&&"1"===t.attr("data-op3-animation-loop")&&i.scroll(n,o)}},i={load:function(t,a){setTimeout(function(){t.attr("data-op3-element-hidden",0),t.get(0).offsetHeight,t.attr("data-op3-animation-state","enter").attr("data-op3-visibility-hidden",0),t.get(0).offsetHeight,t.attr("data-op3-animation-state","enter enter-active")},a)},scroll:function(t,e){!1 in a&&!1 in a&&!1 in a.IntersectionObserverEntry.prototype?i.load(t,e):OP3.AnimationsDelay.observer.observe(t.get(0))}},o=function(a,e){a.forEach(function(a){var e=t(a.target),n="1"===e.find(" > [data-op3-animation-loop]").attr("data-op3-animation-loop"),i=parseFloat(e.attr("data-op3-timeout"));a.isIntersecting?(setTimeout(function(){e.attr("data-op3-animation-state","enter enter-active").attr("data-op3-visibility-hidden",0)},i),n||OP3.AnimationsDelay.observer.unobserve(a.target)):n&&a.intersectionRatio<=0&&"enter enter-active"===e.attr("data-op3-animation-state")&&(OP3.AnimationsDelay.observer.unobserve(a.target),e.attr("data-op3-animation-state","enter").attr("data-op3-visibility-hidden",1),setTimeout(function(){OP3.AnimationsDelay.observer.observe(e.get(0))},700))})};t(e).ready(function(){OP3.AnimationsDelay={},OP3.AnimationsDelay.observer=new IntersectionObserver(o),t("[data-op3-animation-trigger]").each(function(){n(t(this))})})}(jQuery,window,document);!function(t,e,i){"use strict";var h=function(e){if("contain"!==e&&"cover"!==e)throw"jQuery.objectFit: observer must be initialized with contain or cover argument.";if(t(this).attr("data-object-fit",e).attr("data-object-ratio",this.offsetWidth/this.offsetHeight),-1===f.indexOf(this)){if(f.push(this),s){var i=this.parentElement;t(i).data("jquery-object-fit-target",this),s.observe(i)}o.call(this)}},a=function(){if(s){var e=this.parentElement;t(e).removeData("jquery-object-fit-target").removeData("jquery-object-fit-adjust-height"),s.unobserve(e)}var i=f.indexOf(this);-1!==i&&f.splice(i,1),t(this).removeAttr("data-object-fit-ratio").removeAttr("data-object-fit"),o.call(this)},o=function(e,i){var h=t(this),a=h.attr("data-object-fit"),o=1*h.attr("data-object-ratio"),r=r||this.parentElement.offsetWidth,n=n||this.parentElement.offsetHeight,c=null,s={width:"",height:""};"contain"===a?c=o>r/n?"height":"width":"cover"===a&&(c=o>r/n?"width":"height"),"width"===c?(s.height=n+(n%2==0?0:1),s.width=Math.ceil(s.height*o)):"height"===c&&(s.width=r+(r%2==0?0:1),s.height=Math.ceil(s.width/o)),h.data("jquery-object-fit-adjust-height")&&(s.height=s.height+h.data("jquery-object-fit-adjust-height"),s.width=Math.ceil(s.height*o)),h.css(s).trigger("objectfit",{target:this.parentElement,fit:a,ratio:o,width:s.width,height:s.height})},r=function(){h.call(this,"contain")},n=function(t){h.call(this,"cover")},c=function(t){f.forEach(function(t){o.call(t)})},s="function"==typeof e.ResizeObserver?new ResizeObserver(function(e){e.forEach(function(e){var i=t(e.target).data("jquery-object-fit-target"),h=e.width,a=e.height;o.call(i,h,a)})}):null,f=[];s||(t(e).on("resize",c),t(e).on("load",c)),t.fn.objectFit=function(e,i){if("destroy"===e)t(this).each(a);else if("refresh"===e)t(this).each(o);else if("contain"===e)t(this).each(r);else{if("cover"!==e)throw"fill"===e?"jQuery.objectFit: fill method not supported (use css instead).":0===arguments.length?"jQuery.objectFit: method missing (cover|contain|refresh|destroy)":"jQuery.objectFit: unknown method "+e+".";t(this).each(n)}i&&t(this).each(function(){t(this).data("jquery-object-fit-adjust-height",i)})}}(window.jQuery,window,document);!function(e,o,a){var t=function(){var e=a.createElement("script");e.id="op3-youtube-api",e.src="https://www.youtube.com/iframe_api";var o=a.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o)};o.onYouTubeIframeAPIReady=function(){e('[data-op3-background="video"][data-op3-video-source="youtube"][data-op3-src!=""][data-op3-video-url-youtube!=""]').each(function(){e(this).closest(".op3-element").attr("id");new YT.Player(e(this).find("iframe").get(0),{playerVars:{modestbranding:0,controls:0,showinfo:0,wmode:"transparent",branding:0,rel:0,autohide:1},events:{onReady:onVideoBackgroundPlayerReady,onStateChange:onVideoBackgroundPlayerStateChange}})})},o.onVideoBackgroundPlayerReady=function(e){e.target.mute(),e.target.playVideo()},o.onVideoBackgroundPlayerStateChange=function(e){var o=e.target;if(1===e.data){var a=o.getDuration()-o.getCurrentTime();this.rewindTO&&clearTimeout(this.rewindTO),this.rewindTO=setTimeout(function(){o.seekTo(0)},1e3*(a-.5))}},e(a).ready(function(){var o;(o=e('[data-op3-background="video"][data-op3-video-source="youtube"][data-op3-src!=""]')).length>0&&t(o),e('[data-op3-background="video"][data-op3-video-source!="youtube"][data-op3-src!=""] [data-op3-code]').objectFit("cover"),e('[data-op3-background="video"][data-op3-video-source="youtube"][data-op3-src!=""] [data-op3-code]').objectFit("cover",130)})}(jQuery,window,document);