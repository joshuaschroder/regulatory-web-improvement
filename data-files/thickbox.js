/* the following variables are included for backwards compatibility 
   with the current Ektron Library
*/
var ektjq = $ektron;
var ektj$ = $ektron;

/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 * 
 * Ektron
 * To Avoid conflicts Ektron replaced 'tb_' to 'ektb_' and 'TB_' to 'EkTB_'
*/
		  
var ektb_pathToImage = "";
var ektb_refreshWindow = "false";

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call ektb_init
try
{
ektj$(document).ready(function(){   
	ektb_init('a.ek_thickbox, area.ek_thickbox, input.ek_thickbox');//pass where to apply thickbox
	imgLoader = new Image();// preload image
	if (ektb_pathToImage && ektb_pathToImage.length)
	    imgLoader.src = ektb_pathToImage;
});
}
catch(e)
{
    ; // need this for Ektron Explorer pages
}

//add thickbox to href & area elements that have a class of .thickbox
function ektb_init(domChunk){
	ektj$(domChunk).unbind('click').click(function(){
	var t = this.title || this.name || null;
	var a = this.href || this.alt;
	var g = this.rel || false;
	ektb_show(t,a,g);
	this.blur();
	return false;
	});
}

function ektb_show(caption, url, imageGroup, closeText, hideCaptionBar) {//function called when the user clicks on a thickbox link
	try {
        var ct = ("undefined" != typeof closeText) ? closeText : "close";
	    ektj$("object").hide();
        ektj$("embed").hide();
        
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			ektj$("body","html").css({height: "100%", width: "100%"});
			ektj$("html").css("overflow","hidden");
			if (document.getElementById("EkTB_HideSelect") === null) {//iframe to hide select elements in ie6
				ektj$("body").append("<iframe id='EkTB_HideSelect'></iframe><div id='EkTB_overlay'></div><div id='EkTB_window'></div>");
				ektj$("#EkTB_overlay").click(ektb_remove);
			}
		}else{//all others
			if(document.getElementById("EkTB_overlay") === null){
				ektj$("body").append("<div id='EkTB_overlay'></div><div id='EkTB_window'></div>");
				ektj$("#EkTB_overlay").click(ektb_remove);
			}
		}
		
		if(ektb_detectMacXFF()){
			ektj$("#EkTB_overlay").addClass("EkTB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			ektj$("#EkTB_overlay").addClass("EkTB_overlayBG");//use background and opacity
		}
		
		if(caption===null){caption="";}
		// can't cache because of rotate image case where it would be a stale cached image if you do view/rotate/view/refresh/view
		if(imgLoader.src != "")
		{
		    if (imgLoader.src.indexOf('?') == -1)
		    {
		        ektj$("body").append("<div id='EkTB_load'><img src='"+ imgLoader.src+"?n=" +Math.random()+"' /></div>");//add loader to the page
		    }
		    else
		    {
		        ektj$("body").append("<div id='EkTB_load'><img src='"+ imgLoader.src+"&n=" +Math.random()+"' /></div>");//add loader to the page
		    }
		}
		ektj$('#EkTB_load').show();//show loader
		
		var baseURL;
        if(url.indexOf("?")!==-1){ //ff there is a query string involved
		    baseURL = url.substr(0, url.indexOf("?"));
        }else{ 
   		    baseURL = url;
        }

	    var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	    var urlType = baseURL.toLowerCase().match(urlString);
		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images
            //Ektron Customized
            if (typeof caption == 'object' && (caption.tagName == 'SPAN' || caption.tagName == 'DIV')) {
			    caption = caption.innerHTML;
            }
			else if (typeof caption != 'string') {
			    caption = caption.value;
			}

			EkTB_PrevCaption = "";
			EkTB_PrevURL = "";
			EkTB_PrevHTML = "";
			EkTB_NextCaption = "";
			EkTB_NextURL = "";
			EkTB_NextHTML = "";
			EkTB_imageCount = "";
			EkTB_FoundURL = false;
			if(imageGroup){
				EkTB_TempArray = ektj$("a[@rel="+imageGroup+"]").get();
				for (EkTB_Counter = 0; ((EkTB_Counter < EkTB_TempArray.length) && (EkTB_NextHTML === "")); EkTB_Counter++) {
					var urlTypeTemp = EkTB_TempArray[EkTB_Counter].href.toLowerCase().match(urlString);
						if (!(EkTB_TempArray[EkTB_Counter].href == url)) {						
							if (EkTB_FoundURL) {
							    //Ektron Customized
							    var objTeaserField = ektj$("#" + EkTB_TempArray[EkTB_Counter].id + "_Teaser")[0];
							    if (typeof objTeaserField == 'object' && (objTeaserField.tagName == 'SPAN' || objTeaserField.tagName == 'DIV')) {
							        EkTB_NextCaption = objTeaserField.innerHTML;
							    }
							    else if (objTeaserField != null && typeof objTeaserField == 'object') {
							        EkTB_NextCaption = objTeaserField.value;
							    } else {
								    EkTB_NextCaption = EkTB_TempArray[EkTB_Counter].title;
								}
								EkTB_NextURL = EkTB_TempArray[EkTB_Counter].href;
								EkTB_NextHTML = "<span id='EkTB_next'>&nbsp;&nbsp;<a href='javascript://'>Next &gt;</a></span>";
							} else {
							    var objTeaserField = ektj$("#" + EkTB_TempArray[EkTB_Counter].id + "_Teaser")[0];
							    //Ektron Customized
							    if (typeof objTeaserField == 'object' && (objTeaserField.tagName == 'SPAN' || objTeaserField.tagName == 'DIV')) {
							        EkTB_PrevCaption = objTeaserField.innerHTML;
							    }
							    else if (objTeaserField != null && typeof objTeaserField == 'object') {
							        EkTB_PrevCaption = objTeaserField.value;
							    } else {
								    EkTB_PrevCaption = EkTB_TempArray[EkTB_Counter].title;
								}
								EkTB_PrevURL = EkTB_TempArray[EkTB_Counter].href;
								EkTB_PrevHTML = "<span id='EkTB_prev'>&nbsp;&nbsp;<a href='javascript://'>&lt; Prev</a></span>";
							}
						} else {
							EkTB_FoundURL = true;
							EkTB_imageCount = "Image " + (EkTB_Counter + 1) +" of "+ (EkTB_TempArray.length);											
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){		
			imgPreloader.onload = null;
				
			// Resizing large images - orginal by Christian Montoya edited by me.
			var pagesize = ektb_getPageSize();
			var x = pagesize[0] - 150;
			var y = pagesize[1] - 150;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth); 
				imageWidth = x; 
				if (imageHeight > y) { 
					imageWidth = imageWidth * (y / imageHeight); 
					imageHeight = y; 
				}
			} else if (imageHeight > y) { 
				imageWidth = imageWidth * (y / imageHeight); 
				imageHeight = y; 
				if (imageWidth > x) { 
					imageHeight = imageHeight * (x / imageWidth); 
					imageWidth = x;
				}
			}
			// End Resizing
			
			EkTB_WIDTH = imageWidth + 30;
			EkTB_HEIGHT = imageHeight + 60;
			var divCaption = '';

			if (caption != '') 
			    divCaption="<div id=\"ekt_caption\" class=\"ekt_caption\"><div style=\"text-align:right\"><a style=\"cursor:pointer;\" onclick=\"ektj$('#ekt_caption').hide()\">X</a></div><div class=\"ekt_caption_text\">"+caption+"</div></div>";
			    ektj$("#EkTB_window").append("<div id=\"EkTB_container-page\"><div id=\"EkTB_container-image\" style=\"height:"+imageHeight+"px;width:"+imageWidth+"px;\"><img src=\"" + url + "?n="+Math.random()+ "\" width=\""+imageWidth+"\" height=\"" + imageHeight + "\"/><div class=\"ekt_captionWrapper\"><div class=\"ekt_captionInnerWrapper\">" + divCaption + "</div></div></div></div><div id='EkTB_caption'><div id='EkTB_secondLine'>" + EkTB_imageCount + EkTB_PrevHTML + EkTB_NextHTML + "</div></div><div id='EkTB_closeWindow'><a href='javascript://' id='EkTB_closeWindowButton' title='" + ct + "'>" + ct + "</a></div>"); 		
						
			ektj$("#EkTB_closeWindowButton").click(ektb_closeClick);
			
			if (!(EkTB_PrevHTML === "")) {
				function goPrev(){
					if(ektj$(document).unbind("click",goPrev)){ektj$(document).unbind("click",goPrev);}
					ektj$("#EkTB_window").remove();
					ektj$("body").append("<div id='EkTB_window'></div>");
					ektb_show(EkTB_PrevCaption, EkTB_PrevURL, imageGroup);
					return false;	
				}
				ektj$("#EkTB_prev").click(goPrev);
			}
			
			if (!(EkTB_NextHTML === "")) {		
				function goNext(){
					ektj$("#EkTB_window").remove();
					ektj$("body").append("<div id='EkTB_window'></div>");
					ektb_show(EkTB_NextCaption, EkTB_NextURL, imageGroup);				
					return false;	
				}
				ektj$("#EkTB_next").click(goNext);
				
			}

			document.onkeydown = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					ektb_remove();
				} else if(keycode == 190){ // display previous image
					if(!(EkTB_NextHTML == "")){
						document.onkeydown = "";
						goNext();
					}
				} else if(keycode == 188){ // display next image
					if(!(EkTB_PrevHTML == "")){
						document.onkeydown = "";
						goPrev();
					}
				}	
			};
			
			ektb_position();
			ektj$("#EkTB_load").remove();
			ektj$("#EkTB_ImageOff").click(ektb_remove);
			ektj$("#EkTB_window").css({display:"block"}); //for safari using css instead of show
			};
			
			imgPreloader.src = url + "?n=" + Math.random(); // can't cache because of rotate image case where it would be use the wrong height from stale cached image
		}else{//code to show html
			
			var queryString = url.replace(/^[^\?]+\&#167;/,'');
			var params = ektb_parseQuery( queryString );
			
			if(params['refreshCaller'] && params['refreshCaller'] != 'undefined')
			    ektb_refreshWindow = params['refreshCaller'];

			EkTB_WIDTH = (params['width']*1) + 30 || 630; //defaults to 630 if no paramaters were added to URL
			EkTB_HEIGHT = (params['height']*1) + 40 || 440; //defaults to 440 if no paramaters were added to URL
		    
		    var pgSize = ektb_getPageSize();
			if(EkTB_WIDTH >  pgSize[0] || EkTB_HEIGHT > pgSize[1]){
					EkTB_WIDTH =  pgSize[0]-100; 
			        EkTB_HEIGHT = pgSize[1]-150; 
			}
			if(url.indexOf('EkTB_iframe') != -1){// either iframe or ajax window
			        ajaxContentW = EkTB_WIDTH - 30;
			        ajaxContentH = EkTB_HEIGHT - 45;		
					urlNoQuery = url.split('EkTB_');
					ektj$("#EkTB_iframeContent").remove();
					ektj$("#EkTB_window").empty();
					var scrolling = "";
					if(params['scrolling'] == "false")
					    scrolling = "scrolling='no'";
					if(params['modal'] != "true"){//iframe no modal
						ektj$("#EkTB_window").append("<div id='EkTB_title'><div id='EkTB_ajaxWindowTitle'>"+caption+"</div><div id='EkTB_closeAjaxWindow'><a href='javascript://'  id='EkTB_closeWindowButton' title='" + ct + "'></a></div></div><iframe " + scrolling + " frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='EkTB_iframeContent' name='EkTB_iframeContent"+Math.round(Math.random()*1000)+"' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 67)+"px;' > </iframe>");
					}else{//iframe modal
					    ektj$("#EkTB_overlay").unbind();
						ektj$("#EkTB_window").append("<div id='EkTB_title'><div id='EkTB_ajaxWindowTitle'>"+caption+"</div><div id='EkTB_closeAjaxWindow'><a href='javascript://'  id='EkTB_closeWindowButton' onclick='ektb_remove();' title='" + ct + "'></a></div></div><iframe " + scrolling + " frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='EkTB_iframeContent' name='EkTB_iframeContent"+Math.round(Math.random()*1000)+"' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 67)+"px;'> </iframe>");
					}
			        ektb_showIframe();
			}else{// not an iframe, ajax
			        ajaxContentW = EkTB_WIDTH;
			        ajaxContentH = EkTB_HEIGHT;
					if(ektj$("#EkTB_window").css("display") != "block"){
						if(params['modal'] != "true"){//ajax no modal
						ektj$("#EkTB_window").append("<div id='EkTB_title'><div id='EkTB_ajaxWindowTitle'>"+caption+"</div><div id='EkTB_closeAjaxWindow'><a href='javascript://' id='EkTB_closeWindowButton'>" + ct + "</a></div></div><div id='EkTB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						    ektj$("#EkTB_overlay").unbind();
						    if ( (params['caption'] != null && params['caption'] == 'false') || (hideCaptionBar != null || hideCaptionBar == true) )
						    {
						        ektj$("#EkTB_window").append("<div id='EkTB_ajaxContent' class='EkTB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");	
						    } 
						    else
						    {
						        ektj$("#EkTB_window").append("<div id='EkTB_title'><div id='EkTB_ajaxWindowTitle'>"+caption+"</div><div id='EkTB_closeAjaxWindow'><a href='javascript://' id='EkTB_closeWindowButton'>" + ct + "</a></div></div><div id='EkTB_ajaxContent' class='EkTB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");	
						    }
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						ektj$("#EkTB_ajaxContent")[0].style.width = ajaxContentW +"px";
						ektj$("#EkTB_ajaxContent")[0].style.height = ajaxContentH +"px";
						ektj$("#EkTB_ajaxContent")[0].scrollTop = 0;
						ektj$("#EkTB_ajaxWindowTitle").html(caption);
					}
			}
					
			ektj$("#EkTB_closeWindowButton").click(ektb_closeClick);
			
				if(url.indexOf('EkTB_inline') != -1){	
					ektj$("#EkTB_ajaxContent").append(ektj$('#' + params['inlineId']).children());
					ektj$("#EkTB_window").unload(function () {
						ektj$('#' + params['inlineId']).append( ektj$("#EkTB_ajaxContent").children() ); // move elements back when you're finished
					});
					ektb_position();
					ektj$("#EkTB_load").remove();
					ektj$("#EkTB_window").css({display:"block"}); 
				}else if(url.indexOf('EkTB_iframe') != -1){
					ektb_position();
					if(ektj$.browser.safari){//safari needs help because it will not fire iframe onload
						ektj$("#EkTB_load").remove();
						ektj$("#EkTB_window").css({display:"block"});
					}
				}else{
					ektj$("#EkTB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
						ektb_position();
						ektj$("#EkTB_load").remove();
						ektb_init("#EkTB_ajaxContent a.ek_thickbox");
						ektj$("#EkTB_window").css({display:"block"});
					});
				}
			
		}

		if(!params['modal']){
			document.onkeyup = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					ektb_remove();
				}	
			};
		}
		
	} catch(e) {
		//nothing here
	}
}
/*********************************************************
*
*   Added by k. gray for plain blocking overlay with no "window"
*   This is used in the workarea when uploading docs to block clicks
*   on different folders during upload.
*
**********************************************************/
function ektb_show_no_url() {

	try {
	    ektj$("object").hide();
        ektj$("embed").hide();
        
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			ektj$("body","html").css({height: "100%", width: "100%"});
			ektj$("html").css("overflow","hidden");
			if (document.getElementById("EkTB_HideSelect") === null) {//iframe to hide select elements in ie6
				ektj$("body").append("<iframe id='EkTB_HideSelect'></iframe><div id='EkTB_overlay'></div><div id='EkTB_window'></div>");
			}
		}else{//all others
			if(document.getElementById("EkTB_overlay") === null){
				ektj$("body").append("<div id='EkTB_overlay'></div><div id='EkTB_window'></div>");
			}
		}
		
		if(ektb_detectMacXFF()){
			ektj$("#EkTB_overlay").addClass("EkTB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			ektj$("#EkTB_overlay").addClass("EkTB_overlayBG");//use background and opacity
		}
		
	} catch(e) {
		alert(e.message);
	}
}

//helper functions below
function ektb_showIframe(){
	ektj$("#EkTB_load").remove();
	ektj$("#EkTB_window").css({display:"block"});
}

function ektb_remove() {
    ektj$("object").show();
    ektj$("embed").show();
    
 	ektj$("#EkTB_imageOff").unbind("click");
	ektj$("#EkTB_closeWindowButton").unbind("click");
	ektj$("#EkTB_window").fadeOut("fast",function(){ektj$('#EkTB_window,#EkTB_overlay,#EkTB_HideSelect').trigger("unload").unbind().remove();});
	ektj$("#EkTB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		ektj$("body","html").css({height: "auto", width: "auto"});
		ektj$("html").css("overflow","");
	}
	document.onkeydown = "";
	document.onkeyup = "";
	try
	{
	    if(ektb_refreshWindow != "true")
	        return false;
	        
	    ektb_refreshWindow = "false";
	       
         if(top.frames["ek_main"] != null)
         {
            var buffer = '';
            try {
                buffer = new String( top.frames["ek_main"].location.href );
            }
            catch( ex ) {
            }
            if (buffer.indexOf("#") != -1)
            {
	            var sUrl = top.frames["ek_main"].location.pathname;
	            var taxonomyId = "";
	            if(document.getElementById('taxonomyselectedtree') != null)
		            taxonomyId = document.getElementById('taxonomyselectedtree').value;
	            if(taxonomyId != "")
		            sUrl = sUrl + "?__taxonomyid=" +taxonomyId;
    	        if (parent != null) {
                    parent.location.href = sUrl;
                } else {
                   top.location.href = sUrl; 
                }
            }
            else
                top.frames["ek_main"].location.href = top.frames["ek_main"].location.href;
         }
         else
         {
 	        var buffer = '';
            try {
                buffer = new String( top.opener.location );
            }
            catch( ex ) {
            }
            if (buffer.indexOf("#") != -1)
            {
	            var sUrl = parent.location.pathname;
	            var taxonomyId = "";
	            if(document.getElementById('taxonomyselectedtree') != null)
		            taxonomyId = document.getElementById('taxonomyselectedtree').value;
	            if(taxonomyId != "")
		            sUrl = sUrl + "?__taxonomyid=" +taxonomyId;
    	            //alert(window.location.pathname);
    	        if (parent != null) {
                    parent.location.href = sUrl;
                } else {
                   top.location.href = sUrl; 
                }
            }
            else
            {
    	        if (parent != null) {
	                parent.location.href=parent.location.pathname+parent.location.search;
	            } else {
                   top.location.href = top.location.href; 
	            }
	        }
	    }
	    
	    if(top.DisplayUploadingBox)
	    {
                top.DisplayUploadingBox(false);
        }
	 }
	 catch(e)
	 {
	    ;
	 }
	return false;
}

function ektb_position() {
ektj$("#EkTB_window").css({marginLeft: '-' + parseInt((EkTB_WIDTH / 2),10) + 'px', width: EkTB_WIDTH + 'px'});
	if ( !(ektjq.browser.msie && ektjq.browser.version < 7)) { // take away IE6
		ektj$("#EkTB_window").css({marginTop: '-' + parseInt((EkTB_HEIGHT / 2),10) + 'px'});
	}
}

function ektb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function ektb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function ektb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}

function ektb_closeClick() {
    var obj = ektj$("#EkTB_closeWindowButton");
    if (obj != null) {
        obj.focus();
    }
    ektb_remove();
}