!function(t){function e(a){if(s[a])return s[a].exports;var n=s[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var s={};return e.m=t,e.c=s,e.i=function(t){return t},e.d=function(t,s,a){e.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=s(0);a(i);!function(t,e,s,a){function i(t,e){for(var s=0,a=t.length;s<a;s++)e(s,t[s])}function o(t){return t>=0?t-1:t}function r(t){return Number(t.getAttribute("data-skeletabs-index"))}var l={animation:null,autoplay:!1,autoplayInterval:3e3,classes:{container:"skltbs",tabGroup:"skltbs-tab-group",tabItem:"skltbs-tab-item",tab:"skltbs-tab",panelGroup:"skltbs-panel-group",panel:"skltbs-panel",accordionHeading:"skltbs-panel-heading",isActive:"is-active",isDisabled:"is-disabled",isGettingIn:"is-getting-in",isGettingOut:"is-getting-out",hasAnimation:"has-animation"},defaultTab:1,disableTab:null,equalHeights:!1,extendedKeyboard:!0,responsive:{breakpoint:640,headingTagName:"div"},triggerEvent:"click",updateUrl:!0},c="webkitAnimationEnd oanimationend MSAnimationEnd animationend",u=u||function(a,n){var i=this;if(i.options={},s.extend(i.options,l,n),i.layout=0,i.rotationQueue=void 0,i.eventType=/^hover$/.test(i.options.triggerEvent)?"mouseenter focus":"click focus",i._getDomReferences(a),i.currentIndex=i._getIndexByHash(t.location.hash)||o(i.options.defaultTab),e.documentMode<9&&(i.options.updateUrl=!1,console.info("Skeletabs URL hash update has been disabled due to the browser's spec.")),i._setDomAttributes(),i._initializeEvents(),i.options.responsive&&i._setAccordion(),i.disabledCount=0,"number"==typeof i.options.disableTab)i._disableTab(o(i.options.disableTab));else if(i.options.disableTab instanceof Array)for(var r=i.options.disableTab.length;r--;)i._disableTab(o(i.options.disableTab[r]));i._showTab(i.currentIndex),i.options.autoplay&&i.startRotation(),i.animation=i.options.animation},d=u.prototype;d._getDomReferences=function(t){var e=this;e.$container=s(t),e.$tabGroup=e.$container.find("."+e.options.classes.tabGroup),e.$tabItems=e.$tabGroup.find("."+e.options.classes.tabItem),e.$tabs=[],e.$tabs[0]=e.$tabGroup.find("."+e.options.classes.tab),e.$panelGroup=e.$container.find("."+e.options.classes.panelGroup),e.$panels=e.$panelGroup.find("."+e.options.classes.panel),e.master=[],i(e.$panels,function(t,s){e.master[t]={},e.master[t].tabId=e.$tabs[0][t].id||s.id+"Tab",e.master[t].panelId=s.id,e.master[t].disabled=!1})},d._setDomAttributes=function(){var e=this;e.$container.addClass(e.options.classes.container).attr("aria-live","polite"),e.$tabs[0].attr("tabindex","0").attr("aria-controls",function(){return this.hash.slice(1)}).attr("aria-selected","false").each(function(t,s){s.id=e.master[t].tabId,s.setAttribute("data-skeletabs-index",t)}),e.$panels.attr("tabindex","-1").attr("aria-hidden","true").each(function(t,s){s.setAttribute("aria-labelledby",e.master[t].tabId),s.setAttribute("data-skeletabs-index",t)}),e.options.equalHeights&&(e._equalHeights(),s(t).on("resize",function(){e._equalHeights()})),e.options.animation?0===e.layout&&e._prepareAnimation():e.$panels.css("display","none")},d._prepareAnimation=function(){var t=this;t.animation&&t.$container.addClass(t.options.classes.hasAnimation),t.$container.addClass(t.options.animation),t.$panelGroup.css("position","relative"),t.$panels.css({position:"absolute",width:"100%"}),t.animationPhase=0},d._unprepareAnimation=function(){var t=this;t.$container.removeClass(t.options.classes.hasAnimation+" "+t.options.animation),t.$panelGroup.css({position:"static",height:"auto"}),t.$panels.css("position","static").removeClass(t.options.classes.isGettingIn)},d._initializeEvents=function(){var e=this,s="."+e.options.classes.tab,a=function(s){e.rotationQueue&&e.stopRotation(),e._goTo(r(s)),e.options.updateUrl&&(t.history&&t.history.replaceState?history.replaceState(null,null,s.hash):t.location.hash=s.hash)};e.$container.on(e.eventType,s,function(t){t.preventDefault(),a(t.target)}),e.options.extendedKeyboard&&e.$container.on("keydown",function(t){e._onKeydown(t)===!1&&t.preventDefault()})},d._setAccordion=function(){var e=this,a="<"+e.options.responsive.headingTagName+" />";e.$accordionHeadings=[],e.$tabs[1]=[],i(e.$tabs[0],function(t,n){var i=s(n).clone().removeAttr("id"),o=s(a,{class:e.options.classes.accordionHeading,"aria-hidden":"true"}).css("display","none").append(i).insertBefore(e.$panels.eq(t));e.$accordionHeadings[t]=o[0],e.$tabs[1][t]=i[0]}),e.$accordionHeadings=s(e.$accordionHeadings),e.$tabs[1]=s(e.$tabs[1]),s(t).on("load",function(){e._toggleLayout()}),s(t).on("resize",function(){e._toggleLayout()})},d._toggleLayout=function(){var e=this;s(t).width()>e.options.responsive.breakpoint?e._toTabs():e._toAccordion()},d._toAccordion=function(){var t=this;1!==t.layout&&(t.options.equalHeights&&(t.$panelGroup.css("height",""),t.$panels.css("height","")),t.layout=1,t.$tabGroup.css("display","none").attr("aria-hidden","true"),t.$tabItems.eq(t.currentIndex).removeClass(t.options.classes.isActive).trigger("blur"),t.$tabs[0].removeAttr("id"),t.$tabs[1].each(function(e,s){s.id=t.master[e].tabId}),t.$accordionHeadings.css("display","block").attr("aria-hidden","false").eq(t.currentIndex).addClass(t.options.classes.isActive).trigger("focus"),t.animation&&(t.$container.removeClass(t.options.classes.hasAnimation),t.$panelGroup.css("height",""),t.$panels.css("position","static").not(":eq("+t.currentIndex+")").css("display","none")))},d._toTabs=function(){var t=this;t.options.equalHeights?t._equalHeights():t.options.animation&&t.$panelGroup.css("height",t._getCurrentPanelHeight()+"px"),0!==t.layout&&(t.layout=0,t.$tabGroup.css("display","block").attr("aria-hidden","false"),t.$tabItems.eq(t.currentIndex).addClass(t.options.classes.isActive).trigger("focus"),t.$tabs[0].each(function(e,s){s.id=t.master[e].tabId}),t.$tabs[1].removeAttr("id"),t.$accordionHeadings.css("display","none").attr("aria-hidden","true").eq(t.currentIndex).removeClass(t.options.classes.isActive).trigger("blur"),t.animation&&(t.$container.addClass(t.options.classes.hasAnimation),t.$panels.css({display:"block",position:"absolute"})))},d._onKeydown=function(t){var e=this,s=t.which||t.keycode;if(e.animation&&e.animationPhase>0)return!1;switch(s){case 35:var a=e._getLastIndex();e.$tabs[e.layout].eq(a).trigger("focus");break;case 36:var n=e._getFirstIndex();e.$tabs[e.layout].eq(n).trigger("focus");break;case 37:e._moveFocusLeftRight(-1);break;case 38:e._moveFocusUpDown(-1,t.target);break;case 39:e._moveFocusLeftRight(1);break;case 40:e._moveFocusUpDown(1,t.target);break;default:return}return!1},d._moveFocusLeftRight=function(t){var e=this;if(1!==e.layout){var s=e._getClosestIndex(t);null!==s&&e.$tabs[e.layout].eq(s).trigger("focus")}},d._moveFocusUpDown=function(t,e){var s=this;if(e.className.indexOf(s.options.classes.tab)>-1)1===t&&s.$panels.eq(s.currentIndex).trigger("focus");else if(t===-1)s.$tabs[s.layout].eq(s.currentIndex).trigger("focus");else if(1===s.layout){var a=s._getClosestIndex(t);null!==a&&(s._goTo(a),s.$panels.eq(a).trigger("focus"))}},d._hideTab=function(t){var e=this;if(!e.master[t].disabled){0===e.layout?e.$tabItems.eq(t).removeClass(e.options.classes.isActive):e.$accordionHeadings.eq(t).removeClass(e.options.classes.isActive),e.$tabs[e.layout].eq(t).attr("aria-selected","false");var s=e.$panels.eq(t);if(s.attr("tabindex","-1").attr("aria-hidden","true"),e.$panels.eq(t),e.animation)if(0===e.layout){e.animationPhase=2;var a=function t(){s.removeClass(e.options.classes.isGettingOut+" "+e.options.classes.isActive).off(c,t),e.animationPhase--};s.addClass(e.options.classes.isGettingOut).on(c,a)}else e.animationPhase=2,s.slideUp(300,function(){s.removeClass(e.options.classes.isActive),e.animationPhase=0});else s.removeClass(e.options.classes.isActive).css("display","none")}},d._showTab=function(t){var e=this;if(!e.master[t].disabled){e.currentIndex=t,0===e.layout?e.$tabItems.eq(t).addClass(e.options.classes.isActive):e.$accordionHeadings.eq(t).addClass(e.options.classes.isActive),e.$tabs[e.layout].eq(t).attr("aria-selected","true");var s=e.$panels.eq(t);if(s.attr("tabindex","0").attr("aria-hidden","false"),e.options.animation)if(e.options.equalHeights||0!==e.layout||e.$panelGroup.css("height",e._getCurrentPanelHeight()+"px"),e.animation)if(0===e.layout){e.animationPhase=2;var a=function t(){s.removeClass(e.options.classes.isGettingIn).addClass(e.options.classes.isActive).off(c,t),e.animationPhase--};s.addClass(e.options.classes.isGettingIn).on(c,a)}else e.animationPhase=2,s.slideDown(300,function(){s.addClass(e.options.classes.isActive),e.animationPhase=0});else e.$container.addClass(e.options.classes.hasAnimation),s.addClass(e.options.classes.isActive);else s.css("display","block").addClass(e.options.classes.isActive);e.$container.trigger("tabswitch")}},d._disableTab=function(t){var e=this;e.master[t].disabled=!0,e.$tabItems.eq(t).removeClass(e.options.classes.isActive).addClass(e.options.classes.isDisabled),e.$tabs[0].eq(t).attr("tabindex","-1").attr("aria-disabled","true").attr("aria-selected","false").attr("focusable","false"),e.$tabs[1].eq(t).attr("tabindex","-1").attr("aria-disabled","true").attr("aria-selected","false").attr("focusable","false"),e.$accordionHeadings.eq(t).addClass(e.options.classes.isDisabled),e.$panels.eq(t).removeClass(e.options.classes.isActive).addClass(e.options.classes.isDisabled).attr("tabindex","-1").attr("aria-hidden","true"),e.disabledCount++},d._goTo=function(t){var e=this;e.currentIndex!==t&&(e.master[t].disabled||(e._hideTab(e.currentIndex),e._showTab(t)))},d._equalHeights=function(){var e=this;if(!(e.options.responsive&&s(t).width()<e.options.responsive.breakpoint)){var a=0,n={};e.$panels.each(function(t,e){n.display=e.style.display,n.visibility=e.style.visibility,e.style.display="block",e.style.height="auto",e.style.visibility="hidden",a=Math.max(a,s(e).outerHeight()),e.style.display=n.display,e.style.visibility=n.visibility}),e.$panelGroup.css("height",a+"px"),e.$panels.css("height",a+"px")}},d._getClosestIndex=function(t,e){var s=this,a=s.currentIndex+t;if(e&&a===s.master.length&&(a=0),!s.master[a])return null;if(!s.master[a].disabled)return a;for(;0<a&&a<s.master.length;)if(a+=t,!s.master[a].disabled)return a},d._getFirstIndex=function(){for(var t=this,e=0;e<t.master.length;e++)if(!t.master[e].disabled)return e;return null},d._getLastIndex=function(){for(var t=this,e=t.master.length;e--;)if(!t.master[e].disabled)return e;return null},d._getIndexByHash=function(t){if(t){var e,s=this;return i(s.$tabs[s.layout],function(s,a){a.hash==t&&(e=s)}),e}},d._getCurrentPanelHeight=function(){var t=this;return t.$panels.eq(t.currentIndex).outerHeight()},d.getCurrentTab=function(){var t=this;return t.$tabs[t.layout].eq(t.currentIndex)},d.getCurrentPanel=function(){var t=this;return t.$panels.eq(t.currentIndex)},d.startRotation=function(){var t=this;t.master.length-t.disableCount<2||(t.rotationQueue=setInterval(function(){t._goTo(t._getClosestIndex(1,!0))},t.options.autoplayInterval))},d.stopRotation=function(){var t=this;clearInterval(t.rotationQueue),t.rotationQueue=void 0},s.fn.skeletabs=function(){var t,e=this,s=arguments[0];this.length;return i(e,function(e,a){"object"!==(void 0===s?"undefined":n(s))&&s?"string"==typeof s&&a.skeletabs&&s in a.skeletabs&&0!==s.indexOf("_")&&(t=a.skeletabs[s]()):a.skeletabs=new u(a,s)}),t||e}}(window,document,jQuery)}]);