(function(e,t,n,r){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.5.3",settings:{open_method:"move",close_on_click:!1},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=t.S,r="",i="",s="",o="",u="";this.settings.open_method==="move"?(r="move-",i="right",s="left",o="top",u="bottom"):this.settings.open_method==="overlap_single"?(r="offcanvas-overlap-",i="right",s="left",o="top",u="bottom"):this.settings.open_method==="overlap"&&(r="offcanvas-overlap"),n(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(s){t.click_toggle_class(s,r+i),t.settings.open_method!=="overlap"&&n(".left-submenu").removeClass(r+i),e(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(s){var o=t.get_settings(s),u=n(this).parent();o.close_on_click&&!u.hasClass("has-submenu")&&!u.hasClass("back")?(t.hide.call(t,r+i,t.get_wrapper(s)),u.parent().removeClass(r+i)):n(this).parent().hasClass("has-submenu")?(s.preventDefault(),n(this).siblings(".left-submenu").toggleClass(r+i)):u.hasClass("back")&&(s.preventDefault(),u.parent().removeClass(r+i)),e(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(i){t.click_toggle_class(i,r+s),t.settings.open_method!=="overlap"&&n(".right-submenu").removeClass(r+s),e(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(i){var o=t.get_settings(i),u=n(this).parent();o.close_on_click&&!u.hasClass("has-submenu")&&!u.hasClass("back")?(t.hide.call(t,r+s,t.get_wrapper(i)),u.parent().removeClass(r+s)):n(this).parent().hasClass("has-submenu")?(i.preventDefault(),n(this).siblings(".right-submenu").toggleClass(r+s)):u.hasClass("back")&&(i.preventDefault(),u.parent().removeClass(r+s)),e(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".top-off-canvas-toggle",function(i){t.click_toggle_class(i,r+u),t.settings.open_method!=="overlap"&&n(".top-submenu").removeClass(r+u),e(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".top-off-canvas-menu a",function(i){var s=t.get_settings(i),o=n(this).parent();s.close_on_click&&!o.hasClass("has-submenu")&&!o.hasClass("back")?(t.hide.call(t,r+u,t.get_wrapper(i)),o.parent().removeClass(r+u)):n(this).parent().hasClass("has-submenu")?(i.preventDefault(),n(this).siblings(".top-submenu").toggleClass(r+u)):o.hasClass("back")&&(i.preventDefault(),o.parent().removeClass(r+u)),e(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-toggle",function(i){t.click_toggle_class(i,r+o),t.settings.open_method!=="overlap"&&n(".bottom-submenu").removeClass(r+o),e(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-menu a",function(i){var s=t.get_settings(i),u=n(this).parent();s.close_on_click&&!u.hasClass("has-submenu")&&!u.hasClass("back")?(t.hide.call(t,r+o,t.get_wrapper(i)),u.parent().removeClass(r+o)):n(this).parent().hasClass("has-submenu")?(i.preventDefault(),n(this).siblings(".bottom-submenu").toggleClass(r+o)):u.hasClass("back")&&(i.preventDefault(),u.parent().removeClass(r+o)),e(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(o){t.click_remove_class(o,r+s),n(".right-submenu").removeClass(r+s),i&&(t.click_remove_class(o,r+i),n(".left-submenu").removeClass(r+s)),e(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(n){t.click_remove_class(n,r+s),e(".left-off-canvas-toggle").attr("aria-expanded","false"),i&&(t.click_remove_class(n,r+i),e(".right-off-canvas-toggle").attr("aria-expanded","false"))}).on("click.fndtn.offcanvas",".exit-off-canvas",function(i){t.click_remove_class(i,r+o),n(".bottom-submenu").removeClass(r+o),u&&(t.click_remove_class(i,r+u),n(".top-submenu").removeClass(r+o)),e(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(n){t.click_remove_class(n,r+o),e(".top-off-canvas-toggle").attr("aria-expanded","false"),u&&(t.click_remove_class(n,r+u),e(".bottom-off-canvas-toggle").attr("aria-expanded","false"))})},toggle:function(e,t){t=t||this.get_wrapper(),t.is("."+e)?this.hide(e,t):this.show(e,t)},show:function(e,t){t=t||this.get_wrapper(),t.trigger("open.fndtn.offcanvas"),t.addClass(e)},hide:function(e,t){t=t||this.get_wrapper(),t.trigger("close.fndtn.offcanvas"),t.removeClass(e)},click_toggle_class:function(e,t){e.preventDefault();var n=this.get_wrapper(e);this.toggle(t,n)},click_remove_class:function(e,t){e.preventDefault();var n=this.get_wrapper(e);this.hide(t,n)},get_settings:function(e){var t=this.S(e.target).closest("["+this.attr_name()+"]");return t.data(this.attr_name(!0)+"-init")||this.settings},get_wrapper:function(e){var t=this.S(e?e.target:this.scope).closest(".off-canvas-wrap");return t.length===0&&(t=this.S(".off-canvas-wrap")),t},reflow:function(){}}})(jQuery,window,window.document);