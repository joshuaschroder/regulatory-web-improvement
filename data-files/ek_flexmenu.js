/*
 * JSMin
 * Javascript Compressor
 * http://www.crockford.com/
 * http://www.smallsharptools.com/
*/

function ekFlexMenu_classNames(){}
ekFlexMenu_classNames.button="ekflexmenu_button";ekFlexMenu_classNames.buttonHover="ekflexmenu_button_hover";ekFlexMenu_classNames.buttonSelected="ekflexmenu_button_selected";ekFlexMenu_classNames.buttonSelectedHover="ekflexmenu_button_selected_hover";ekFlexMenu_classNames.submenuItems="ekflexmenu_submenu_items";ekFlexMenu_classNames.submenuItemsHidden="ekflexmenu_submenu_items_hidden";ekFlexMenu_classNames.submenu="ekflexmenu_submenu";ekFlexMenu_classNames.submenuHover="ekflexmenu_submenu_hover";ekFlexMenu_classNames.submenuParent="ekflexmenu_submenu_parent";ekFlexMenu_classNames.submenuParentHover="ekflexmenu_submenu_parent_hover";ekFlexMenu_classNames.btnLink="ekflexmenu_accessible_submenu_btnlink";ekFlexMenu_classNames.link="ekflexmenu_link";ekFlexMenu_classNames.linkSelected="ekflexmenu_link_selected";ekFlexMenu_classNames.slaveBranchSelected="ekflexmenu_slave_branch_sel";ekFlexMenu_classNames.slaveContainer="ekflexmenu_slavecontainer";var ekFlexMenu=function(menuObjectIdString){this.menuId=__ekFlexMenu_returnMenuId;this.hashCode=__ekFlexMenu_returnHashCode;this.isSubmenuSelected=__ekFlexMenu_isSubmenuSelected;this.selectSubmenu=__ekFlexMenu_selectSubmenu;this.unSelectSubmenu=__ekFlexMenu_unSelectSubmenu;this.hoverButton=__ekFlexMenu_hoverButton;this.selectMenuItem=__ekFlexMenu_ekFlexMenu_selectMenuItem;this.initializeWithServerVariables=__ekFlexMenu_initializeWithServerVariables;this.showRootMenu=__ekFlexMenu_showRootMenu;this.buildMenuSubmenuId=__ekFlexMenu_buildMenuSubmenuId;this.getFolderButtonObject=__ekFlexMenu_getFolderButtonObject;this.getSubmenuItemsObject=__ekFlexMenu_getSubmenuItemsObject;this.getSubmenuObject=__ekFlexMenu_getSubmenuObject;this.getParentLevelSubmenuId=__ekFlexMenu_getParentLevelSubmenuId;this.getMenuLevel=__ekFlexMenu_getMenuLevel;this.getEkFlexMenuContainerElement=__ekFlexMenu_getEkFlexMenuContainerElement;this.selectSubmenuHelper=__ekFlexMenu_selectSubmenuHelper;this.collapseSiblingSubmenus=__ekFlexMenu_collapseSiblingSubmenus;this.collapseAllOpenSubmenus=__ekFlexMenu_collapseAllOpenSubmenus;this.collapseUnselectedStartLevelSubmenus=__ekFlexMenu_collapseUnselectedStartLevelSubmenus;this.markParentSubmenu=__ekFlexMenu_markParentSubmenu;this.unMarkParentSubmenu=__ekFlexMenu_unMarkParentSubmenu;this.hoverSubmenu=__ekFlexMenu_hoverSubmenu;this.unHoverSubmenu=__ekFlexMenu_unHoverSubmenu;this.getEkFlexMenuElementsByTagName=__ekFlexMenu_getEkFlexMenuElementsByTagName;this.getElementsByClassName=__ekFlexMenu_getElementsByClassName;this.getElementsByClassNameAndTagName=__ekFlexMenu_getElementsByClassNameAndTagName;this.getEkFlexMenuElementsByName=__ekFlexMenu_getEkFlexMenuElementsByName;this.getDirectChildIds=__ekFlexMenu_getDirectChildIds;this.mouseIn=__ekFlexMenu_mouseIn;this.mouseInHelper=__ekFlexMenu_mouseInHelper;this.mouseOut=__ekFlexMenu_mouseOut;this.mouseOutHelper=__ekFlexMenu_mouseOutHelper;this.disableAllEventHandlers=__ekFlexMenu_disableAllEventHandlers;this.disableElementEventHandlers=__ekFlexMenu_disableElementEventHandlers;this.updateNoScriptLinks=__ekFlexMenu_updateNoScriptLinks;this.initializeMouseOverPopUp=__ekFlexMenu_initializeMouseOverPopUp;this.getSlaveControlObject=__ekFlexMenu_getSlaveControlObject;this.convertIdToSlaveControlId=__ekFlexMenu_convertIdToSlaveControlId;this.callSlave__showSubmenuBranch=__ekFlexMenu_callSlave__showSubmenuBranch;this.showSubmenuBranch=__ekFlexMenu_showSubmenuBranch;this.unSelectSubmenuList=__ekFlexMenu_unSelectSubmenuList;this.initializeSlaveMenu=__ekFlexMenu_initializeSlaveMenu;this.initializeMasterMenu=__ekFlexMenu_initializeMasterMenu;this.isTopLevelUI=__ekFlexMenu_isTopLevelUI;this.recordLastSlaveStartLevelMenu=__ekFlexMenu_recordLastSlaveStartLevelMenu;this.getLastSlaveStartLevelMenu=__ekFlexMenu_getLastSlaveStartLevelMenu;this.unHideSlaveMenu=__ekFlexMenu_unHideSlaveMenu;this.isSlaveMenuHiding=__ekFlexMenu_isSlaveMenuHiding;this.topLevelUI=null;this.lastSelectedStartLevelSlaveMenuId=null;this.ekFlexMenu_defaultMenuIdString=false;this.ekFlexMenu_slaveStartLevelIds=null;this.ekFlexMenu_slaveStartLevel=null;this.loadXMLDoc=__ekFlexMenu_ajax_loadXMLDoc;this.DecodeHTML=__ekFlexMenu_ajax_DecodeHTML;this.getPayload=__ekFlexMenu_ajax_getPayload;this.appendText=__ekFlexMenu_ajax_appendText;this.appendXml=__ekFlexMenu_ajax_appendXml;this.removeMenuFragmentContainer=__ekFlexMenu_ajax_removeMenuFragmentContainer;this.callService=__ekFlexMenu_ajax_callService;this.callAjaxForUserClick=__ekFlexMenu_ajax_callAjaxForUserClick;this.userAjaxParentId1=""
this.private_menuIdString=__ekFlexMenu_parseMenuId(menuObjectIdString);this.private_serverControlHash=__ekFlexMenu_static_parseServerControlHash(menuObjectIdString);this.private_autoCollapseSubmenus=true;this.private_startWithRootFolderCollapsed=false;this.private_startCollapsed=true;this.private_ajaxEnabled=true;this.ekFlexMenu_ajaxWSPath="";this.ekFlexMenu_displayXslt="";this.ekFlexMenu_cacheInterval="";this.private_masterControlIdHash="";this.private_subscriberList="";this.private_slaveControl="";this.private_isMasterControl=false;this.private_isSlaveControl=false;this.private_preventHidingSlaveMenu=false;this.private_lastSelectedMenuItemObj=null;this.private_selectionChanged=false;this.private_selectedMenuList="";this.private_swRevision="0";this.enableMouseOverPopUp=false;this.private_enableMouseOverSubmenuActivation=false;this.private_mouseEventTimer=null;this.private_mouseEventEnteringElementId=null;this.private_mouseEventExitingElementId=null;}
ekFlexMenu.getMenuObj=__ekFlexMenu_static_getMenuObj;ekFlexMenu.parseMenuSubmenuIdString=__ekFlexMenu_static_parseMenuSubmenuIdString;ekFlexMenu.parseServerControlHash=__ekFlexMenu_static_parseServerControlHash;ekFlexMenu.menuBtnClickHdlr=__ekFlexMenu_static_menuButtonClickEventHandler;ekFlexMenu.menuBtnKeyHdlr=__ekFlexMenu_static_menuButtonKeyDownEventHandler;ekFlexMenu.menuBtnMouseOverHdlr=__ekFlexMenu_static_menuButtonMouseOverEventHandler;ekFlexMenu.menuBtnMouseOutHdlr=__ekFlexMenu_static_menuButtonMouseOutEventHandler;ekFlexMenu.menuBtnFocusHdlr=__ekFlexMenu_static_menuButtonFocusEventHandler;ekFlexMenu.menuBtnBlurHdlr=__ekFlexMenu_static_menuButtonBlurEventHandler;ekFlexMenu.menuBtnLinkFocusHdlr=__ekFlexMenu_static_menuButtonLinkFocusEventHandler;ekFlexMenu.menuBtnLinkBlurHdlr=__ekFlexMenu_static_menuButtonLinkBlurEventHandler;ekFlexMenu.itemLinkClickHdlr=__ekFlexMenu_static_menuItemLinkClickEventHandler;ekFlexMenu.mouseIn=__ekFlexMenu_static_mouseIn;ekFlexMenu.mouseOut=__ekFlexMenu_static_mouseOut;ekFlexMenu.mouseIn_empty=function(event){return(true);}
ekFlexMenu.private_isValidMenuSubmenuIdString=__ekFlexMenu_static_isValidMenuSubmenuIdString
ekFlexMenu.private_serverHelper_initialize=__ekFlexMenu_static_serverHelper_initialize;ekFlexMenu.private_startupAllSmartMenus=__ekFlexMenu_static_serverHelper_startupAllSmartMenus;ekFlexMenu.private_shutdownAllSmartMenus=__ekFlexMenu_static_serverHelper_shutdownAllSmartMenus;ekFlexMenu.private_getMenuId=__ekFlexMenu_static_getMenuId;ekFlexMenu.private_getMenuIdString=__ekFlexMenu_static_getMenuIdString;ekFlexMenu.private_getSubmenuId=__ekFlexMenu_static_getSubmenuId;ekFlexMenu.private_getSubmenuIdString=__ekFlexMenu_static_getSubmenuIdString;ekFlexMenu.private_getEvent=__ekFlexMenu_static_getEvent;ekFlexMenu.private_getEventElement=__ekFlexMenu_static_getEventElement;ekFlexMenu.private_getIntNumber=__ekFlexMenu_static_getIntNumber;ekFlexMenu.private_isValidSubmenuObj=__ekFlexMenu_static_isValidSubmenuObj;ekFlexMenu.private_isValidSubmenuButton=__ekFlexMenu_static_isValidSubmenuButton;ekFlexMenu.private_isValidSubmenuItems=__ekFlexMenu_static_isValidSubmenuItems;ekFlexMenu.private_isValidSubmenu=__ekFlexMenu_static_isValidSubmenu;ekFlexMenu.private_isValidSubmenuLink=__ekFlexMenu_static_isValidSubmenuLink;ekFlexMenu.private_isValidEKMenu=__ekFlexMenu_static_isValidEKMenu;ekFlexMenu.private_isDefined=__ekFlexMenu_static_isDefined;ekFlexMenu.isDefinedNotNull=__ekFlexMenu_static_isDefinedNotNull;ekFlexMenu.hasClassName=__ekFlexMenu_static_hasClassName;ekFlexMenu.addClassName=__ekFlexMenu_static_addClassName;ekFlexMenu.removeClassName=__ekFlexMenu_static_removeClassName;ekFlexMenu.submenuIsTopLevel=__ekFlexMenu_static_submenuIsTopLevel;ekFlexMenu.clearSiblingButtons=__ekFlexMenu_clearSiblingButtons;ekFlexMenu.ajaxCallBack_stateChange=__ekFlexMenu_ajaxCallBack_stateChange;ekFlexMenu.ajaxGetMenuObj=__ekFlexMenu_ajaxGetMenuObj
ekFlexMenu.ajaxCancelServerCall=__ekFlexMenu_static_ajaxCancelServerCall;ekFlexMenu.static_userAjaxXmlHttp1=null;ekFlexMenu.private_menuPrefix="e";ekFlexMenu.private_hashLength=9;ekFlexMenu.private_namePrefix="ekmengrp_";ekFlexMenu.private_buttonElementIdPostFix="_button";ekFlexMenu.private_submenuItemsElementIdPostFix="_submenu_items";ekFlexMenu.private_parentIdElementIdPostFix="_parentid";ekFlexMenu.private_ekflexmenuContainerElementIdPostFix="_ekflexmenu"
function __ekFlexMenu_static_getMenuObj(elementId){var menuObj=null;var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(elementId);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){var menuHashCode=ekFlexMenu.parseServerControlHash(menuSubmenuId);if(("undefined"==typeof window.ekFlexMenu_MenuObjArray)||(null==window.ekFlexMenu_MenuObjArray)){var MenuObjArray=new Array;menuObj=new ekFlexMenu(menuSubmenuId);MenuObjArray[menuHashCode]=menuObj;window.ekFlexMenu_MenuObjArray=MenuObjArray;}
else if(null==window.ekFlexMenu_MenuObjArray[menuHashCode]){window.ekFlexMenu_MenuObjArray[menuHashCode]=menuObj=new ekFlexMenu(menuSubmenuId);}
else{menuObj=window.ekFlexMenu_MenuObjArray[menuHashCode];}}
return(menuObj);}
function __ekFlexMenu_static_parseMenuSubmenuIdString(elementId){var result="";if(elementId&&("undefined"!=typeof elementId)&&("undefined"!=typeof elementId.length)&&(elementId.length>0)&&("undefined"!=typeof elementId.indexOf)){var frag=elementId.split("_");if(frag[0]&&(ekFlexMenu.private_hashLength==frag[0].length)&&frag[1]&&frag[2]){result=frag[0]+"_"+frag[1]+"_"+frag[2];}}
return(result);}
function __ekFlexMenu_static_parseServerControlHash(id){var result="";if(id&&id.split){var frag=id.split("_");if(frag[0]&&(ekFlexMenu.private_hashLength==frag[0].length)){result=frag[0];}}
return(result);}
function __ekFlexMenu_static_getEvent(e){if(e)return(e);else return(window.event);}
function __ekFlexMenu_static_getEventElement(e){if(e)return((e.srcElement)?e.srcElement:e.target);else return(null);}
function __ekFlexMenu_static_menuButtonClickEventHandler(e){var ev=ekFlexMenu.private_getEvent(e);var result=true;if(ev){var el=ekFlexMenu.private_getEventElement(ev);if(el&&("undefined"!=el.id)){var menuObj=ekFlexMenu.getMenuObj(el.id);if(menuObj){var prevState=menuObj.isSubmenuSelected(el.id);if(prevState){menuObj.unSelectSubmenu(el.id);result=false;}
else{menuObj.selectSubmenu(el.id);result=false;if(menuObj.private_ajaxEnabled){if(menuObj.callAjaxForUserClick(el.id)){ev.returnValue=false;result=false;}
else{result=true;}}}}}
if(ekFlexMenu.isDefinedNotNull(el)){if(ekFlexMenu.isDefinedNotNull(el.href)){if(ekFlexMenu.isDefinedNotNull(el.href.indexOf)){if(0>el.href.indexOf("ekfxmen_noscript=1")){result=true;}}}}}
return(result);}
function __ekFlexMenu_static_menuButtonKeyDownEventHandler(e){var ev=ekFlexMenu.private_getEvent(e);if(ev){var el=ekFlexMenu.private_getEventElement(ev);if(el&&("undefined"!=el.id)){var key=ev.keyCode;if(key&&((key==32))){if(ev.preventDefault&&ev.stopPropagation){ev.preventDefault();ev.stopPropagation();}
else{ev.returnValue=false;}
ekFlexMenu.menuBtnClickHdlr(ev);return(false);}}}
return(true);}
function __ekFlexMenu_static_menuButtonMouseOverEventHandler(e){var ev=ekFlexMenu.private_getEvent(e);if(ev){var el=ekFlexMenu.private_getEventElement(ev);if(el&&("undefined"!=el.id)){var menuObj=ekFlexMenu.getMenuObj(el.id);if(menuObj){menuObj.hoverButton(el.id,true);menuObj.hoverSubmenu(el.id);return(false);}}}
return(true);}
function __ekFlexMenu_static_menuButtonMouseOutEventHandler(e){var ev=ekFlexMenu.private_getEvent(e);if(ev){var el=ekFlexMenu.private_getEventElement(ev);if(el&&("undefined"!=el.id)){var menuObj=ekFlexMenu.getMenuObj(el.id);if(menuObj){menuObj.hoverButton(el.id,false);menuObj.unHoverSubmenu(el.id);return(false);}}}
return(true);}
function __ekFlexMenu_static_menuButtonFocusEventHandler(e){var ev=ekFlexMenu.private_getEvent(e);if(ev){var el=ekFlexMenu.private_getEventElement(ev);if(el&&("undefined"!=el.id)){var menuObj=ekFlexMenu.getMenuObj(el.id);if(menuObj){menuObj.hoverButton(el.id,true);menuObj.hoverSubmenu(el.id);return(false);}}}
return(true);}
function __ekFlexMenu_static_menuButtonBlurEventHandler(e){var ev=ekFlexMenu.private_getEvent(e);if(ev){var el=ekFlexMenu.private_getEventElement(ev);if(el&&("undefined"!=el.id)){var menuObj=ekFlexMenu.getMenuObj(el.id);if(menuObj){menuObj.hoverButton(el.id,false);menuObj.unHoverSubmenu(el.id);return(false);}}}
return(true);}
function __ekFlexMenu_static_menuButtonLinkFocusEventHandler(e){var ev=ekFlexMenu.private_getEvent(e);if(ev){var el=ekFlexMenu.private_getEventElement(ev);if(el&&("undefined"!=el.id)){var menuObj=ekFlexMenu.getMenuObj(el.id);if(menuObj){menuObj.hoverButton(el.id,true);menuObj.hoverSubmenu(el.id);return(false);}}}
return(true);}
function __ekFlexMenu_static_menuButtonLinkBlurEventHandler(e){var ev=ekFlexMenu.private_getEvent(e);if(ev){var el=ekFlexMenu.private_getEventElement(ev);if(el&&("undefined"!=el.id)){var menuObj=ekFlexMenu.getMenuObj(el.id);if(menuObj){menuObj.hoverButton(el.id,false);menuObj.unHoverSubmenu(el.id);return(false);}}}
return(true);}
function __ekFlexMenu_static_getValidParentId(el){var topContainer="_ekflexmenu";var len=topContainer.length;while(el&&(el.parentNode)){if(el.id&&(el.id.length)){if(ekFlexMenu.private_isValidMenuSubmenuIdString(el.id)){return(el.id);}}
el=el.parentNode;}
return("");}
function __ekFlexMenu_static_mouseIn(e){var ev=ekFlexMenu.private_getEvent(e);if(ev){var el=ekFlexMenu.private_getEventElement(ev);if(el&&("undefined"!=el.id)){var elmtId=el.id;if(0==elmtId.length){elmtId=__ekFlexMenu_static_getValidParentId(el);}
var menuObj=ekFlexMenu.getMenuObj(elmtId);if(menuObj){menuObj.mouseIn(e,el);return(true);}}}
return(true);}
function __ekFlexMenu_static_mouseOut(e){var ev=ekFlexMenu.private_getEvent(e);if(ev){var el=ekFlexMenu.private_getEventElement(ev);if(el&&("undefined"!=el.id)){var elmtId=el.id;if(0==elmtId.length){elmtId=__ekFlexMenu_static_getValidParentId(el);}
var menuObj=ekFlexMenu.getMenuObj(elmtId);if(menuObj){menuObj.mouseOut(e,el);return(true);}}}
return(true);}
function __ekFlexMenu_static_menuItemLinkClickEventHandler(e){var linkIsAButton=false;var ev=ekFlexMenu.private_getEvent(e);if(ev){var el=ekFlexMenu.private_getEventElement(ev);if(el&&("undefined"!=el.id)){if(ekFlexMenu.isDefinedNotNull(el)&&ekFlexMenu.isDefinedNotNull(el.tagName)&&("IMG"==el.tagName)){if(ekFlexMenu.isDefinedNotNull(el.parentNode)&&ekFlexMenu.private_isValidSubmenuButton(el.parentNode)){el=el.parentNode;if(ekFlexMenu.isDefinedNotNull(el.click)){el.click(ev);return(false);}
linkIsAButton=true;}
else{return(true);}}
else if(ekFlexMenu.private_isValidSubmenuButton(el)){linkIsAButton=true;}
var menuObj=ekFlexMenu.getMenuObj(el.id);if(menuObj){if(linkIsAButton){var prevState=menuObj.isSubmenuSelected(el.id);if(prevState){menuObj.unSelectSubmenu(el.id);}
else{menuObj.selectSubmenu(el.id);}}
menuObj.selectMenuItem(el);return(false);}}}
return(true);}
function __ekFlexMenu_static_getIntNumber(val){var result=0;var tempResult=parseInt(val,10);if(NaN!=tempResult){result=tempResult;}
return(result);}
function __ekFlexMenu_static_getMenuId(elementId){var result=0;var idString=ekFlexMenu.private_getMenuIdString(elementId);if(idString.length){result=ekFlexMenu.private_getIntNumber(idString);}
return(result);}
function __ekFlexMenu_static_getMenuIdString(elementId){var result="";var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(elementId);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){var frag=elementId.split("_");if(frag[0]&&(ekFlexMenu.private_hashLength==frag[0].length)&&frag[1]&&frag[2]){result=frag[1];}}
return(result);}
function __ekFlexMenu_static_getSubmenuId(elementId){var result=0;var idString=ekFlexMenu.private_getSubmenuIdString(elementId);if(idString.length){result=ekFlexMenu.private_getIntNumber(idString);}
return(result);}
function __ekFlexMenu_static_getSubmenuIdString(elementId){var result="";if(ekFlexMenu.private_isValidMenuSubmenuIdString(elementId)){var frag=elementId.split("_");if(frag[0]&&(ekFlexMenu.private_hashLength==frag[0].length)&&frag[1]&&frag[2]){result=frag[2];}}
return(result);}
function __ekFlexMenu_static_isValidMenuSubmenuIdString(elementId){var result=false;if(elementId&&("undefined"!=typeof elementId)&&("undefined"!=typeof elementId.length)&&(elementId.length>0)&&("undefined"!=typeof elementId.indexOf)){var frag=elementId.split("_");if(frag[0]&&(ekFlexMenu.private_hashLength==frag[0].length)&&frag[1]&&frag[2]){result=true;}}
return(result);}
function __ekFlexMenu_static_isValidSubmenuObj(obj,classNameFrag){var result=false;if(obj&&("undefined"!=typeof obj.id)&&("undefined"!=typeof obj.className)&&("undefined"!=typeof obj.className.indexOf)&&(0<=obj.className.indexOf(classNameFrag))){result=true;}
return(result);}
function __ekFlexMenu_static_isValidSubmenuButton(obj){return(ekFlexMenu.private_isValidSubmenuObj(obj,ekFlexMenu_classNames.button));}
function __ekFlexMenu_static_isValidSubmenuItems(obj){return(ekFlexMenu.private_isValidSubmenuObj(obj,"submenu_items"));}
function __ekFlexMenu_static_isValidSubmenu(obj){return(ekFlexMenu.private_isValidSubmenuObj(obj,"submenu"));}
function __ekFlexMenu_static_isValidSubmenuLink(obj){return(ekFlexMenu.private_isValidSubmenuObj(obj,"link"));}
function __ekFlexMenu_static_isValidEKMenu(obj){return(ekFlexMenu.private_isValidSubmenuObj(obj,"ekflexmenu"));}
function __ekFlexMenu_static_isDefined(obj){return("undefined"!=typeof obj);}
function __ekFlexMenu_static_isDefinedNotNull(obj){return(ekFlexMenu.private_isDefined(obj)&&(null!=obj));}
function __ekFlexMenu_static_serverHelper_initialize(id){var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(id);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){var menuObj=ekFlexMenu.getMenuObj(menuSubmenuId);if(menuObj){menuObj.initializeWithServerVariables();}}}
function __ekFlexMenu_static_serverHelper_startupAllSmartMenus(){if(("undefined"!=typeof window.ekFlexMenu_ekflexmenuArray)&&(null!=window.ekFlexMenu_ekflexmenuArray)&&("undefined"!=typeof window.ekFlexMenu_ekflexmenuArray.length)&&(null!=window.ekFlexMenu_ekflexmenuArray.length)){for(var idx=0;idx<window.ekFlexMenu_ekflexmenuArray.length;idx++){var startMenu=window.ekFlexMenu_ekflexmenuArray[idx];if(startMenu.length)
ekFlexMenu.private_serverHelper_initialize(startMenu);}}}
function __ekFlexMenu_static_serverHelper_shutdownAllSmartMenus(){ekFlexMenu.ajaxCancelServerCall();}
function __ekFlexMenu_static_ajaxCancelServerCall(){if(ekFlexMenu.static_userAjaxXmlHttp1!=null){ekFlexMenu.static_userAjaxXmlHttp1.abort();ekFlexMenu.static_userAjaxXmlHttp1=null;}}
function __ekFlexMenu_static_hasClassName(obj,className){var idx,names;if(obj&&("undefined"!=typeof obj.className)&&("undefined"!=typeof obj.className.split)){names=obj.className.split(" ");for(idx=0;idx<names.length;idx++){if(names[idx]==className)
return true;}}
return false;}
function __ekFlexMenu_static_addClassName(obj,className){if(ekFlexMenu.hasClassName(obj,className))
return;if(obj&&("undefined"!=typeof obj.className)&&("undefined"!=typeof obj.className.length)){if(0==obj.className.length){obj.className=className;}
else{obj.className+=" "+className;}}}
function __ekFlexMenu_static_removeClassName(obj,className){var idx,matchId,names,result;if(obj&&("undefined"!=typeof obj.className)&&("undefined"!=typeof obj.className.split)){names=obj.className.split(" ");obj.className="";for(idx=0;idx<names.length;idx++){if(names[idx]!=className){if(idx>0)
obj.className+=" "+names[idx];else
obj.className+=names[idx];}}}}
function __ekFlexMenu_static_submenuIsTopLevel(elementId){var result=false;if(ekFlexMenu.private_isValidMenuSubmenuIdString(elementId)){var sub=ekFlexMenu.private_getSubmenuIdString(elementId);var ancestorId=ekFlexMenu.private_getMenuIdString(elementId);result=((0==sub)||(ancestorId==sub));}
return(result);}
function __ekFlexMenu_ajaxCallBack_stateChange(){if(ekFlexMenu.static_userAjaxXmlHttp1.readyState==4){if(ekFlexMenu.isDefinedNotNull(ekFlexMenu.static_userAjaxXmlHttp1.status)){if(200<=ekFlexMenu.static_userAjaxXmlHttp1.status<300){var menuObj=ekFlexMenu.ajaxGetMenuObj(ekFlexMenu.static_userAjaxXmlHttp1.responseText);if(menuObj){var resType=ekFlexMenu.static_userAjaxXmlHttp1.getResponseHeader('Content-Type');if(0>resType.indexOf("text/xml")){menuObj.appendText(menuObj.userAjaxParentId1);}
else{menuObj.appendXml(menuObj.userAjaxParentId1);}}}
else{}}}}
function __ekFlexMenu_ajaxGetMenuObj(reqStr){var result=null;var idx=reqStr.indexOf("ekflexmenu");if(idx>=0){var tempStr=reqStr.substr(idx);var matchStr=" id=";idx=tempStr.indexOf(matchStr);if(idx>=0){tempStr=tempStr.substr(idx+matchStr.length);idx=tempStr.indexOf(ekFlexMenu.private_menuPrefix);if(idx>=0){tempStr=tempStr.substr(idx);tempStr=ekFlexMenu.parseMenuSubmenuIdString(tempStr);result=ekFlexMenu.getMenuObj(tempStr);}}}
return(result);}
function __ekFlexMenu_clearSiblingButtons(obj){if(obj&&obj.parentNode&&obj.parentNode.parentNode&&obj.parentNode.parentNode.id)
$ektron("#"+obj.parentNode.parentNode.id+"> li.ekflexmenu_submenu").find("> ul").removeClass("ekflexmenu_submenu_items").addClass("ekflexmenu_submenu_items_hidden").end().find("> a.ekflexmenu_button_selected").removeClass("ekflexmenu_button_selected").addClass("ekflexmenu_button")
return(true);}
function __ekFlexMenu_returnMenuId(){return(this.private_menuIdString);}
function __ekFlexMenu_returnHashCode(){return(this.private_serverControlHash);}
function __ekFlexMenu_parseMenuId(id){var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(id);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){return(ekFlexMenu.private_getMenuIdString(menuSubmenuId));}
else{return(id);}}
function __ekFlexMenu_isSubmenuSelected(idString){var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(idString);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){var btnObj=this.getFolderButtonObject(menuSubmenuId);if(ekFlexMenu.private_isValidSubmenuButton(btnObj)){return(ekFlexMenu.hasClassName(btnObj,ekFlexMenu_classNames.buttonSelected)||ekFlexMenu.hasClassName(btnObj,ekFlexMenu_classNames.buttonSelectedHover));}}
return(false);}
function __ekFlexMenu_selectSubmenu(idString,optional_fromMouseIn){var defaultFromMouseIn=false;if(ekFlexMenu.isDefinedNotNull(optional_fromMouseIn)){defaultFromMouseIn=optional_fromMouseIn;}
var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(idString);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){if(this.private_autoCollapseSubmenus){if(this.private_isSlaveControl&&defaultFromMouseIn){this.collapseUnselectedStartLevelSubmenus();}
else{this.collapseAllOpenSubmenus(false);}}
this.private_selectedMenuList=menuSubmenuId;this.selectSubmenuHelper(menuSubmenuId);if(!defaultFromMouseIn){this.callSlave__showSubmenuBranch(idString);}
this.private_selectionChanged=true;}}
function __ekFlexMenu_getSlaveControlObject(){var result=null;if(this.private_isMasterControl&&ekFlexMenu.isDefinedNotNull(this.private_slaveControl)&&ekFlexMenu.isDefinedNotNull(this.private_slaveControl.length)&&(this.private_slaveControl.length>0)){var slaveId=this.private_slaveControl+"_"+this.menuId()+"_0";var slaveObj=ekFlexMenu.getMenuObj(slaveId);if(slaveObj){result=slaveObj;}}
return(result);}
function __ekFlexMenu_callSlave__showSubmenuBranch(idString){var slaveObj=this.getSlaveControlObject();var btnContainer;if(slaveObj){if(slaveObj.showSubmenuBranch(this.convertIdToSlaveControlId(slaveObj,idString))){for(var ui in this.topLevelUI){btnContainer=document.getElementById(ui);if(btnContainer){if(ekFlexMenu.hasClassName(btnContainer,ekFlexMenu_classNames.slaveBranchSelected)){ekFlexMenu.removeClassName(btnContainer,ekFlexMenu_classNames.slaveBranchSelected);}}}
var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(idString);var parentId=this.getParentLevelSubmenuId(menuSubmenuId);while((parentId!=menuSubmenuId)&&(0!=ekFlexMenu.private_getSubmenuId(parentId))){if(this.isTopLevelUI(parentId)){btnContainer=document.getElementById(parentId);if(btnContainer){if(!ekFlexMenu.hasClassName(btnContainer,ekFlexMenu_classNames.slaveBranchSelected)){ekFlexMenu.addClassName(btnContainer,ekFlexMenu_classNames.slaveBranchSelected);}}
break;}
parentId=this.getParentLevelSubmenuId(parentId);}}}}
function __ekFlexMenu_initializeSlaveMenu(){var isVisible=false;var firstObj=null;var menuSubmenuId;var inAr=this.getEkFlexMenuElementsByTagName("INPUT");for(var idx=0;idx<inAr.length;idx++){if(inAr[idx].value.indexOf(this.private_masterControlIdHash)==0){var localId=inAr[idx].id;var obj;if(localId.length>=ekFlexMenu.private_hashLength){localId=this.buildMenuSubmenuId(ekFlexMenu.private_getSubmenuIdString(localId))+ekFlexMenu.private_submenuItemsElementIdPostFix;obj=document.getElementById(localId);if(obj){if(null==firstObj){firstObj=obj;}
if(ekFlexMenu.hasClassName(obj,ekFlexMenu_classNames.submenuItems)){isVisible=true;}
if(null==this.topLevelUI){this.topLevelUI=new Array;}
menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(localId);if(!this.topLevelUI[menuSubmenuId]){this.topLevelUI[menuSubmenuId]=true;}}}}}
if((!isVisible)&&firstObj){ekFlexMenu.removeClassName(firstObj,ekFlexMenu_classNames.submenuItemsHidden);ekFlexMenu.addClassName(firstObj,ekFlexMenu_classNames.submenuItems);}
if(this.ekFlexMenu_defaultMenuIdString){this.ekFlexMenu_slaveStartLevel=this.getMenuLevel(this.ekFlexMenu_defaultMenuIdString);}
else if(this.ekFlexMenu_slaveStartLevelIds&&this.ekFlexMenu_slaveStartLevelIds.length>0){this.ekFlexMenu_slaveStartLevel=this.getMenuLevel(this.ekFlexMenu_slaveStartLevelIds[0]);}
else if(this.topLevelUI){this.ekFlexMenu_slaveStartLevel=this.getMenuLevel(this.topLevelUI[0]);}
if(this.private_preventHidingSlaveMenu&&this.isSlaveMenuHiding()){var menuId=this.getLastSlaveStartLevelMenu();this.selectSubmenuHelper(menuId);this.recordLastSlaveStartLevelMenu(menuId);}}
function __ekFlexMenu_initializeMasterMenu(){var menuSubmenuId=this.buildMenuSubmenuId(0)+ekFlexMenu.private_submenuItemsElementIdPostFix;if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){var node=document.getElementById(menuSubmenuId);if(node){var nodes=node.childNodes;for(var idx=0;idx<nodes.length;idx++){if(null==this.topLevelUI){this.topLevelUI=new Array;}
menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(nodes[idx].id);if(!this.topLevelUI[menuSubmenuId]){this.topLevelUI[menuSubmenuId]=true;}}}}}
function __ekFlexMenu_showSubmenuBranch(idString){var result=false;var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(idString);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){var id=menuSubmenuId;var obj=document.getElementById(id);if(obj){for(var ui in this.topLevelUI){this.unSelectSubmenu(ui,true);}
var lastId=this.getLastSlaveStartLevelMenu();if(lastId&&lastId.length>0){this.unSelectSubmenu(lastId,true);}
else if(this.private_isSlaveControl&&this.ekFlexMenu_defaultMenuIdString){this.unSelectSubmenu(this.ekFlexMenu_defaultMenuIdString);}
else if(this.private_isSlaveControl){this.collapseAllOpenSubmenus();}
if(this.private_preventHidingSlaveMenu&&this.getMenuLevel(menuSubmenuId)>=0&&this.getMenuLevel(menuSubmenuId)<this.ekFlexMenu_slaveStartLevel){menuSubmenuId=this.getLastSlaveStartLevelMenu();}
this.selectSubmenuHelper(menuSubmenuId);this.recordLastSlaveStartLevelMenu(menuSubmenuId);result=true;}}
return(result);}
function __ekFlexMenu_unHideSlaveMenu(){return;var targId=this.getLastSlaveStartLevelMenu();if(targId&&(targId.length>0)){this.selectSubmenuHelper(targId);}}
function __ekFlexMenu_recordLastSlaveStartLevelMenu(id){if(id&&this.ekFlexMenu_slaveStartLevelIds[id]){this.lastSelectedStartLevelSlaveMenuId=id;}}
function __ekFlexMenu_getLastSlaveStartLevelMenu(){if(this.lastSelectedStartLevelSlaveMenuId&&(this.lastSelectedStartLevelSlaveMenuId.length>0)){return(this.lastSelectedStartLevelSlaveMenuId);}
else if(this.ekFlexMenu_defaultMenuIdString&&this.ekFlexMenu_defaultMenuIdString.length>0){return(this.ekFlexMenu_defaultMenuIdString);}
else{return("");}}
function __ekFlexMenu_isSlaveMenuHiding(){var id=this.getEkFlexMenuContainerElement().id;var startLevel=this.ekFlexMenu_slaveStartLevel.toString();return($ektron("#"+id+" .ekflexmenu_menu_level_"+startLevel+" .ekflexmenu_submenu_items").length==0);}
function __ekFlexMenu_unSelectSubmenuList(menuList){var listAr=menuList.split(",");var idx;for(idx=0;idx<listAr.length;idx++){this.unSelectSubmenu(listAr[idx]);}}
function __ekFlexMenu_convertIdToSlaveControlId(slaveObj,idString){var result=idString;if(slaveObj&&idString&&idString.length&&(idString.length>=ekFlexMenu.private_hashLength)){result=slaveObj.hashCode()+idString.substr(ekFlexMenu.private_hashLength);}
return(result);}
function __ekFlexMenu_isTopLevelUI(idString){return(this.topLevelUI&&this.topLevelUI[ekFlexMenu.parseMenuSubmenuIdString(idString)]);}
function __ekFlexMenu_selectSubmenuHelper(idString){var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(idString);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){if(this.private_selectedMenuList.length){this.private_selectedMenuList+=","+menuSubmenuId;}
else{this.private_selectedMenuList=menuSubmenuId;}
var btnObj=this.getFolderButtonObject(menuSubmenuId);if(ekFlexMenu.private_isValidSubmenuButton(btnObj)){var wasHovering=(ekFlexMenu.hasClassName(btnObj,ekFlexMenu_classNames.buttonHover)||ekFlexMenu.hasClassName(btnObj,ekFlexMenu_classNames.buttonSelectedHover));if(wasHovering){ekFlexMenu.removeClassName(btnObj,ekFlexMenu_classNames.buttonHover);ekFlexMenu.addClassName(btnObj,ekFlexMenu_classNames.buttonSelectedHover);}
else{ekFlexMenu.removeClassName(btnObj,ekFlexMenu_classNames.button);ekFlexMenu.addClassName(btnObj,ekFlexMenu_classNames.buttonSelected);}}
var itmObj=this.getSubmenuItemsObject(menuSubmenuId);if(ekFlexMenu.private_isValidSubmenuItems(itmObj)){ekFlexMenu.removeClassName(itmObj,ekFlexMenu_classNames.submenuItemsHidden);ekFlexMenu.addClassName(itmObj,ekFlexMenu_classNames.submenuItems);}
if(!(this.private_isSlaveControl&&this.isTopLevelUI(menuSubmenuId))){var parentId=this.getParentLevelSubmenuId(menuSubmenuId);if(parentId!=menuSubmenuId){this.selectSubmenuHelper(parentId);}
this.markParentSubmenu(menuSubmenuId);}}}
function __ekFlexMenu_unSelectSubmenu(idString,topLevelUIOverride){if(idString&&idString.length){var overrideTopLevelUI=false;if(ekFlexMenu.isDefinedNotNull(topLevelUIOverride)){overrideTopLevelUI=topLevelUIOverride;}
var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(idString);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){if((ekFlexMenu.private_getSubmenuId(menuSubmenuId)==0)||((ekFlexMenu.private_getSubmenuId(menuSubmenuId)>0)&&(overrideTopLevelUI||!this.private_isSlaveControl||!this.isTopLevelUI(menuSubmenuId)))){var btnObj=this.getFolderButtonObject(menuSubmenuId);if(ekFlexMenu.private_isValidSubmenuButton(btnObj)){var wasHovering=(ekFlexMenu.hasClassName(btnObj,ekFlexMenu_classNames.buttonHover)||ekFlexMenu.hasClassName(btnObj,ekFlexMenu_classNames.buttonSelectedHover));if(wasHovering){ekFlexMenu.removeClassName(btnObj,ekFlexMenu_classNames.buttonSelectedHover);ekFlexMenu.addClassName(btnObj,ekFlexMenu_classNames.buttonHover);}
else{ekFlexMenu.removeClassName(btnObj,ekFlexMenu_classNames.buttonSelected);ekFlexMenu.addClassName(btnObj,ekFlexMenu_classNames.button);}}
var itmObj=this.getSubmenuItemsObject(menuSubmenuId);if(!(this.private_isSlaveControl&&(ekFlexMenu.submenuIsTopLevel(menuSubmenuId)||ekFlexMenu.hasClassName(itmObj,ekFlexMenu_classNames.slaveContainer)))){if(ekFlexMenu.private_isValidSubmenuItems(itmObj)){ekFlexMenu.removeClassName(itmObj,ekFlexMenu_classNames.submenuItems);ekFlexMenu.addClassName(itmObj,ekFlexMenu_classNames.submenuItemsHidden);}}
this.unMarkParentSubmenu(menuSubmenuId);}}}}
function __ekFlexMenu_collapseAllOpenSubmenus(showRootFlag){if(this.private_selectionChanged){this.unSelectSubmenuList(this.private_selectedMenuList);this.private_selectedMenuList=""}
else{var openMenusArray=this.getElementsByClassNameAndTagName(ekFlexMenu_classNames.submenuItems,"UL");for(var idx=0;idx<openMenusArray.length;idx++){this.unSelectSubmenu(openMenusArray[idx].id);}
var activeButtons=this.getElementsByClassNameAndTagName(ekFlexMenu_classNames.buttonSelected,"SPAN");for(idx=0;idx<activeButtons.length;idx++){this.unSelectSubmenu(activeButtons[idx].id);}}
if("undefined"!=typeof showRootFlag){if(showRootFlag)
this.showRootMenu();}
else{if(!this.private_startWithRootFolderCollapsed)
this.showRootMenu();}}
function __ekFlexMenu_collapseUnselectedStartLevelSubmenus(){var lastMenuId=this.getLastSlaveStartLevelMenu();var openMenusArray=this.getElementsByClassNameAndTagName(ekFlexMenu_classNames.submenuItems,"UL");for(var idx=0;idx<openMenusArray.length;idx++){if(lastMenuId!=ekFlexMenu.parseMenuSubmenuIdString(openMenusArray[idx].id)){this.unSelectSubmenu(openMenusArray[idx].id);}}
var activeButtons=this.getElementsByClassNameAndTagName(ekFlexMenu_classNames.buttonSelected,"SPAN");for(idx=0;idx<activeButtons.length;idx++){this.unSelectSubmenu(activeButtons[idx].id);}}
function __ekFlexMenu_collapseSiblingSubmenus(idString){var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(idString);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){var parentLevelId=this.getParentLevelSubmenuId(menuSubmenuId);if(ekFlexMenu.private_isValidMenuSubmenuIdString(parentLevelId)&&(parentLevelId!=menuSubmenuId)){var idArray=this.getDirectChildIds(parentLevelId)
for(var idx=0;idx<idArray.length;idx++){if(idArray[idx]!=menuSubmenuId){this.unSelectSubmenu(idArray[idx]);}}}}}
function __ekFlexMenu_markParentSubmenu(idString){var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(idString);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){var parentLevelId=this.getParentLevelSubmenuId(menuSubmenuId);if(ekFlexMenu.private_isValidMenuSubmenuIdString(parentLevelId)&&(parentLevelId!=menuSubmenuId)){var parentObj=this.getSubmenuObject(parentLevelId);if((ekFlexMenu.isDefinedNotNull(parentObj))&&(ekFlexMenu.private_isDefined(parentObj.className))){if(ekFlexMenu.hasClassName(parentObj,ekFlexMenu_classNames.submenu)){ekFlexMenu.removeClassName(parentObj,ekFlexMenu_classNames.submenu);ekFlexMenu.addClassName(parentObj,ekFlexMenu_classNames.submenuParent);}
else if(ekFlexMenu.hasClassName(parentObj,ekFlexMenu_classNames.submenuHover)){ekFlexMenu.removeClassName(parentObj,ekFlexMenu_classNames.submenuHover);ekFlexMenu.addClassName(parentObj,ekFlexMenu_classNames.submenuParentHover);}}}}}
function __ekFlexMenu_unMarkParentSubmenu(idString){var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(idString);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){var parentLevelId=this.getParentLevelSubmenuId(menuSubmenuId);if(ekFlexMenu.private_isValidMenuSubmenuIdString(parentLevelId)&&(parentLevelId!=menuSubmenuId)){var parentObj=this.getSubmenuObject(parentLevelId);if((ekFlexMenu.isDefinedNotNull(parentObj))&&(ekFlexMenu.private_isDefined(parentObj.className))){if(ekFlexMenu.hasClassName(parentObj,ekFlexMenu_classNames.submenuParent)){ekFlexMenu.removeClassName(parentObj,ekFlexMenu_classNames.submenuParent);ekFlexMenu.addClassName(parentObj,ekFlexMenu_classNames.submenu);}
else if(ekFlexMenu.hasClassName(parentObj,ekFlexMenu_classNames.submenuParentHover)){ekFlexMenu.removeClassName(parentObj,ekFlexMenu_classNames.submenuParentHover);ekFlexMenu.addClassName(parentObj,ekFlexMenu_classNames.submenuHover);}}}}}
function __ekFlexMenu_hoverSubmenu(idString){var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(idString);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){var menuObj=this.getSubmenuObject(menuSubmenuId);if((ekFlexMenu.isDefinedNotNull(menuObj))&&(ekFlexMenu.private_isDefined(menuObj.className))){if(ekFlexMenu.hasClassName(menuObj,ekFlexMenu_classNames.submenu)){ekFlexMenu.removeClassName(menuObj,ekFlexMenu_classNames.submenu);ekFlexMenu.addClassName(menuObj,ekFlexMenu_classNames.submenuHover);}
else if(ekFlexMenu.hasClassName(menuObj,ekFlexMenu_classNames.submenuParent)){ekFlexMenu.removeClassName(menuObj,ekFlexMenu_classNames.submenuParent);ekFlexMenu.addClassName(menuObj,ekFlexMenu_classNames.submenuParentHover);}}}}
function __ekFlexMenu_unHoverSubmenu(idString){var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(idString);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){var menuObj=this.getSubmenuObject(menuSubmenuId);if((ekFlexMenu.isDefinedNotNull(menuObj))&&(ekFlexMenu.private_isDefined(menuObj.className))){if(ekFlexMenu.hasClassName(menuObj,ekFlexMenu_classNames.submenuHover)){ekFlexMenu.removeClassName(menuObj,ekFlexMenu_classNames.submenuHover);ekFlexMenu.addClassName(menuObj,ekFlexMenu_classNames.submenu);}
else if(ekFlexMenu.hasClassName(menuObj,ekFlexMenu_classNames.submenuParentHover)){ekFlexMenu.removeClassName(menuObj,ekFlexMenu_classNames.submenuParentHover);ekFlexMenu.addClassName(menuObj,ekFlexMenu_classNames.submenuParent);}}}}
function __ekFlexMenu_getDirectChildIds(idString){var result=new Array;var elementName=ekFlexMenu.private_namePrefix+"submenu_items";var cmpId,elementArray;var parentMenuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(idString);if(ekFlexMenu.private_isValidMenuSubmenuIdString(parentMenuSubmenuId)){elementArray=this.getEkFlexMenuElementsByName(elementName);if(("undefined"!=typeof elementArray)&&(null!=elementArray)&&("undefined"!=typeof elementArray.length)&&(null!=elementArray.length)){for(var idx=0;idx<elementArray.length;idx++){cmpId=ekFlexMenu.parseMenuSubmenuIdString(elementArray[idx].id);if(ekFlexMenu.private_isValidMenuSubmenuIdString(cmpId)){if((parentMenuSubmenuId==this.getParentLevelSubmenuId(cmpId)&&(parentMenuSubmenuId!=cmpId))){result[result.length]=cmpId;}}}}}
return(result);}
function __ekFlexMenu_getEkFlexMenuElementsByName(elementName){var result=new Array;var divArray=this.getEkFlexMenuElementsByTagName("div");for(var idx=0;idx<divArray.length;idx++){if(elementName==divArray[idx].name){result[result.length]=divArray[idx];}}
return(result);}
function __ekFlexMenu_getEkFlexMenuElementsByTagName(tagName){var result=new Array;var ekflexmenuContainer=this.getEkFlexMenuContainerElement();if(ekflexmenuContainer&&("undefined"!=typeof ekflexmenuContainer.getElementsByTagName)){var divArray=ekflexmenuContainer.getElementsByTagName(tagName);if(("undefined"!=typeof divArray)&&(null!=divArray)){result=divArray;}}
return(result);}
function __ekFlexMenu_getElementsByClassName(className){var result=new Array;var divArray=this.getEkFlexMenuElementsByTagName("*");for(var idx=0;idx<divArray.length;idx++){if(("undefined"!=divArray[idx].className)&&(ekFlexMenu.hasClassName(divArray[idx],className))){result[result.length]=divArray[idx];}}
return(result);}
function __ekFlexMenu_getElementsByClassNameAndTagName(className,tagName){var result=new Array;var divArray=this.getEkFlexMenuElementsByTagName(tagName);for(var idx=0;idx<divArray.length;idx++){if(("undefined"!=divArray[idx].className)&&(ekFlexMenu.hasClassName(divArray[idx],className))){result[result.length]=divArray[idx];}}
return(result);}
function __ekFlexMenu_hoverButton(idString,hoverFlag){var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(idString);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){var btnObj=this.getFolderButtonObject(menuSubmenuId);if(ekFlexMenu.private_isValidSubmenuButton(btnObj)){var wasHovering=(ekFlexMenu.hasClassName(btnObj,ekFlexMenu_classNames.buttonHover)||ekFlexMenu.hasClassName(btnObj,ekFlexMenu_classNames.buttonSelectedHover));if(hoverFlag==wasHovering){return;}
var isSelected=(ekFlexMenu.hasClassName(btnObj,ekFlexMenu_classNames.buttonSelected)||ekFlexMenu.hasClassName(btnObj,ekFlexMenu_classNames.buttonSelectedHover));if(hoverFlag){ekFlexMenu.removeClassName(btnObj,((isSelected)?ekFlexMenu_classNames.buttonSelected:ekFlexMenu_classNames.button));ekFlexMenu.addClassName(btnObj,((isSelected)?ekFlexMenu_classNames.buttonSelectedHover:ekFlexMenu_classNames.buttonHover));}
else{ekFlexMenu.removeClassName(btnObj,((isSelected)?ekFlexMenu_classNames.buttonSelectedHover:ekFlexMenu_classNames.buttonHover));ekFlexMenu.addClassName(btnObj,((isSelected)?ekFlexMenu_classNames.buttonSelected:ekFlexMenu_classNames.button));}}}}
function __ekFlexMenu_mouseInHelperCaller(id){if(id){var menuObj=ekFlexMenu.getMenuObj(id);if(menuObj){menuObj.mouseInHelper();}}}
function __ekFlexMenu_mouseIn(e,el){if(this.private_mouseEventTimer){window.clearTimeout(this.private_mouseEventTimer);this.private_mouseEventTimer=null;}
this.private_mouseEventEnteringElementId=el.id;this.private_mouseEventTimer=window.setTimeout(function(){__ekFlexMenu_mouseInHelperCaller(el.id)},50);}
function __ekFlexMenu_mouseInHelper(){if(this.private_mouseEventEnteringElementId){var menuSubmenuId=ekFlexMenu.parseMenuSubmenuIdString(this.private_mouseEventEnteringElementId);if(ekFlexMenu.private_isValidMenuSubmenuIdString(menuSubmenuId)){if(this.private_isMasterControl){itemsObj=this.getSubmenuItemsObject(menuSubmenuId);if(!ekFlexMenu.isDefinedNotNull(itemsObj)){return;}}
this.selectSubmenu(menuSubmenuId,true);}}}
function __ekFlexMenu_mouseOutHelperCaller(id){if(id){var menuObj=ekFlexMenu.getMenuObj(id);if(menuObj){menuObj.mouseOutHelper();}}}
function __ekFlexMenu_mouseOut(e,el){if(this.private_mouseEventTimer){window.clearTimeout(this.private_mouseEventTimer);this.private_mouseEventTimer=null;}
var id=__ekFlexMenu_static_getValidParentId(el);this.private_mouseEventExitingElementId=id;this.private_mouseEventTimer=window.setTimeout(function(){__ekFlexMenu_mouseOutHelperCaller(id)},500);}
function __ekFlexMenu_mouseOutHelper(){if(this.private_autoCollapseSubmenus){if(this.private_isSlaveControl){this.collapseUnselectedStartLevelSubmenus();}
else{this.collapseAllOpenSubmenus();}}
else if(this.private_mouseEventEnteringElementId){this.unSelectSubmenu(this.private_mouseEventEnteringElementId);}}
function __ekFlexMenu_buildMenuSubmenuId(submenuId){return(this.hashCode()+"_"+this.menuId()+"_"+submenuId);}
function __ekFlexMenu_getFolderButtonObject(submenuId){var id=ekFlexMenu.parseMenuSubmenuIdString(submenuId);if(ekFlexMenu.private_isValidMenuSubmenuIdString(id)){id=id+ekFlexMenu.private_buttonElementIdPostFix;}
else{id=this.buildMenuSubmenuId(submenuId)+ekFlexMenu.private_buttonElementIdPostFix;}
return(document.getElementById(id));}
function __ekFlexMenu_getSubmenuItemsObject(submenuId){var id=ekFlexMenu.parseMenuSubmenuIdString(submenuId);if(ekFlexMenu.private_isValidMenuSubmenuIdString(id)){id=id+ekFlexMenu.private_submenuItemsElementIdPostFix;}
else{id=this.buildMenuSubmenuId(submenuId)+ekFlexMenu.private_submenuItemsElementIdPostFix;}
return(document.getElementById(id));}
function __ekFlexMenu_getSubmenuObject(submenuId){var id=ekFlexMenu.parseMenuSubmenuIdString(submenuId);var result=null;if(ekFlexMenu.private_isValidMenuSubmenuIdString(id)){result=document.getElementById(id);}
return(result);}
function __ekFlexMenu_getParentLevelSubmenuId(submenuId){var result=this.buildMenuSubmenuId("0");var id=ekFlexMenu.parseMenuSubmenuIdString(submenuId);if(ekFlexMenu.private_isValidMenuSubmenuIdString(id)){id=id+ekFlexMenu.private_parentIdElementIdPostFix;}
else{id=this.buildMenuSubmenuId(submenuId)+ekFlexMenu.private_parentIdElementIdPostFix;}
var hiddenObj=document.getElementById(id);if(hiddenObj&&("undefined"!=typeof hiddenObj.value)&&("undefined"!=typeof hiddenObj.value.length)&&(hiddenObj.value.length>0)){result=hiddenObj.value;}
return(result);}
function __ekFlexMenu_getMenuLevel(submenuId){var result=0;if(ekFlexMenu.private_isValidMenuSubmenuIdString(submenuId)){var obj=this.getSubmenuObject(submenuId);if(obj&&obj.className&&obj.className.length&&(obj.className.length>0)){var levelPrefix="ekflexmenu_menu_level_";var idx=obj.className.indexOf(levelPrefix);if(idx>=0){var val=obj.className.substr(idx+levelPrefix.length)
if(val.length){result=parseInt(val,10);}}}}
return(result);}
function __ekFlexMenu_getEkFlexMenuContainerElement(){var containerId=this.hashCode()+"_"
+this.menuId()
+"_"
+"0"
+ekFlexMenu.private_ekflexmenuContainerElementIdPostFix;var containerObj=document.getElementById(containerId);if(containerObj&&ekFlexMenu.private_isValidEKMenu(containerObj)){return(containerObj);}
else{return(null);}}
function __ekFlexMenu_ekFlexMenu_selectMenuItem(el){var elm=el;var isWrapper=false;if(ekFlexMenu.isDefinedNotNull(elm)&&ekFlexMenu.isDefinedNotNull(elm.parentNode)&&ekFlexMenu.isDefinedNotNull(elm.parentNode.tagName)&&("A"==elm.parentNode.tagName)){elm=elm.parentNode;isWrapper=true;}
if(elm&&("undefined"!=typeof elm.id)&&("undefined"!=typeof elm.href)){if(elm.href.indexOf("?")<0){elm.href+="?";}
else{elm.href+="&";}
var modId=elm.id;var matchVal="ekfxmensel_";if(modId.length>matchVal.length){var idx=modId.indexOf(matchVal);if(idx>=0){modId=modId.substr(idx+matchVal.length);}}
elm.href+=matchVal.substr(0,matchVal.length-1)+"="+modId;if((this.private_lastSelectedMenuItemObj!=null)&&(this.private_lastSelectedMenuItemObj!=elm)){ekFlexMenu.removeClassName(this.private_lastSelectedMenuItemObj,ekFlexMenu_classNames.linkSelected);ekFlexMenu.addClassName(this.private_lastSelectedMenuItemObj,ekFlexMenu_classNames.link);}
this.private_lastSelectedMenuItemObj=elm;if(!isWrapper){ekFlexMenu.removeClassName(elm.className,ekFlexMenu_classNames.link);ekFlexMenu.addClassName(elm.className,ekFlexMenu_classNames.linkSelected);}}}
function __ekFlexMenu_disableAllEventHandlers(){var elArray=this.getEkFlexMenuElementsByTagName("*");for(var idx=0;idx<elArray.length;idx++){this.disableElementEventHandlers(elArray[idx]);}
var el=this.getEkFlexMenuContainerElement();if(el){this.disableElementEventHandlers(el);}}
function __ekFlexMenu_disableElementEventHandlers(el){if(el){if(ekFlexMenu.isDefinedNotNull(el.onmouseout))
el.onmouseout=null;if(ekFlexMenu.isDefinedNotNull(el.onmouseover))
el.onmouseover=null;if(ekFlexMenu.isDefinedNotNull(el.onfocus))
el.onfocus=null;if(ekFlexMenu.isDefinedNotNull(el.onblur))
el.onblur=null;if(ekFlexMenu.isDefinedNotNull(el.onclick))
el.onclick=null;if(ekFlexMenu.isDefinedNotNull(el.ondblclick))
el.ondblclick=null;if(ekFlexMenu.isDefinedNotNull(el.onkeydown))
el.onkeydown=null;if(ekFlexMenu.isDefinedNotNull(el.onkeypress))
el.onkeypress=null;if(ekFlexMenu.isDefinedNotNull(el.onkeyup))
el.onkeyup=null;}}
function __ekFlexMenu_updateNoScriptLinks(){return;}
function __ekFlexMenu_initializeMouseOverPopUp(){var containerId="#"+this.buildMenuSubmenuId(0)+"_ekflexmenu";this.enableMouseOverPopUp=(null!=$ektron(containerId).attr("onmouseover"));if(this.enableMouseOverPopUp){$ektron(containerId+" a.ekflexmenu_link").mouseover(function(){if(ekFlexMenu_IsValid(ekFlexMenu)&&ekFlexMenu_IsValid(ekFlexMenu.clearSiblingButtons)){return(ekFlexMenu.clearSiblingButtons(this));}return(true);});}}
function __ekFlexMenu_initializeWithServerVariables(){var baseId=this.hashCode();if(baseId&&baseId.length){if((ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_autoCollapseBranches))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_autoCollapseBranches[baseId]))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_autoCollapseBranches[baseId].length))&&(0<window.ekFlexMenu_autoCollapseBranches[baseId].length)){this.private_autoCollapseSubmenus=("true"==window.ekFlexMenu_autoCollapseBranches[baseId]);}
if((ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_swRev))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_swRev[baseId]))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_swRev[baseId].length))&&(0<window.ekFlexMenu_swRev[baseId].length)){this.private_swRevision=window.ekFlexMenu_swRev[baseId];}
if((ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_startCollapsed))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_startCollapsed[baseId]))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_startCollapsed[baseId].length))&&(0<window.ekFlexMenu_startCollapsed[baseId].length)){this.private_startCollapsed=("true"==window.ekFlexMenu_startCollapsed[baseId]);}
if((ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_startWithRootFolderCollapsed))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_startWithRootFolderCollapsed[baseId]))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_startWithRootFolderCollapsed[baseId].length))&&(0<window.ekFlexMenu_startWithRootFolderCollapsed[baseId].length)){this.private_startWithRootFolderCollapsed=("true"==window.ekFlexMenu_startWithRootFolderCollapsed[baseId]);}
if((ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_masterControlIdHash))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_masterControlIdHash[baseId]))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_masterControlIdHash[baseId].length))&&(0<window.ekFlexMenu_masterControlIdHash[baseId].length)){this.private_masterControlIdHash=window.ekFlexMenu_masterControlIdHash[baseId];}
if((ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_ajaxEnabled))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_ajaxEnabled[baseId]))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_ajaxEnabled[baseId].length))&&(0<window.ekFlexMenu_ajaxEnabled[baseId].length)){this.private_ajaxEnabled=("true"==window.ekFlexMenu_ajaxEnabled[baseId]);}
if((ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_ajaxWSPath))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_ajaxWSPath[baseId]))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_ajaxWSPath[baseId].length))&&(0<window.ekFlexMenu_ajaxWSPath[baseId].length)){this.ekFlexMenu_ajaxWSPath=window.ekFlexMenu_ajaxWSPath[baseId];if(this.ekFlexMenu_ajaxWSPath.length&&this.ekFlexMenu_ajaxWSPath.lastIndexOf("/")!=(this.ekFlexMenu_ajaxWSPath.length-1)){this.ekFlexMenu_ajaxWSPath+="/";}}
if((ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_displayXslt))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_displayXslt[baseId]))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_displayXslt[baseId].length))&&(0<window.ekFlexMenu_displayXslt[baseId].length)){this.ekFlexMenu_displayXslt=window.ekFlexMenu_displayXslt[baseId];}
if((ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_cacheInterval))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_cacheInterval[baseId]))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_cacheInterval[baseId].length))&&(0<window.ekFlexMenu_cacheInterval[baseId].length)){this.ekFlexMenu_cacheInterval=window.ekFlexMenu_cacheInterval[baseId];}
if((ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_subscriberList))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_subscriberList[baseId]))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_subscriberList[baseId].length))&&(0<window.ekFlexMenu_subscriberList[baseId].length)){this.private_subscriberList=window.ekFlexMenu_subscriberList[baseId];if(this.private_subscriberList.length>0){var subList=this.private_subscriberList.split(",");if(subList&&subList[0]){this.private_slaveControl=subList[0];this.private_isMasterControl=true;}}}
if((ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_defaultMenuIdString))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_defaultMenuIdString[baseId]))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_defaultMenuIdString[baseId].length))&&(0<window.ekFlexMenu_defaultMenuIdString[baseId].length)){this.ekFlexMenu_defaultMenuIdString=window.ekFlexMenu_defaultMenuIdString[baseId];}
if((ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_slaveStartLevelIds))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_slaveStartLevelIds[baseId]))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_slaveStartLevelIds[baseId].length))&&(0<window.ekFlexMenu_slaveStartLevelIds[baseId].length)){var startLevelIds=window.ekFlexMenu_slaveStartLevelIds[baseId].split(",");if(null==this.ekFlexMenu_slaveStartLevelIds){this.ekFlexMenu_slaveStartLevelIds=new Array;}
for(var idx=0;idx<startLevelIds.length;idx++){if(!this.ekFlexMenu_slaveStartLevelIds[startLevelIds[idx]]){this.ekFlexMenu_slaveStartLevelIds[startLevelIds[idx]]=true;}}}
if((ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_startupSubmenuBranchId))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_startupSubmenuBranchId[baseId]))&&(ekFlexMenu.isDefinedNotNull(window.ekFlexMenu_startupSubmenuBranchId[baseId].length))&&(0<window.ekFlexMenu_startupSubmenuBranchId[baseId].length)){var id=ekFlexMenu.parseMenuSubmenuIdString(window.ekFlexMenu_startupSubmenuBranchId[baseId]);if(ekFlexMenu.private_isValidMenuSubmenuIdString(id)){this.selectSubmenu(id);}}
if(this.private_masterControlIdHash.length){this.private_isSlaveControl=true;this.initializeSlaveMenu();}
if(this.private_isMasterControl){this.initializeMasterMenu();}
this.updateNoScriptLinks();this.initializeMouseOverPopUp();}}
function __ekFlexMenu_showRootMenu(){var rootMenuId=this.buildMenuSubmenuId(0);this.selectSubmenu(rootMenuId);}
function __ekFlexMenu_ajax_loadXMLDoc(url){var result=false;ekFlexMenu.ajaxCancelServerCall();if(window.XMLHttpRequest){ekFlexMenu.static_userAjaxXmlHttp1=new XMLHttpRequest()}
else if(window.ActiveXObject){ekFlexMenu.static_userAjaxXmlHttp1=new ActiveXObject("Msxml2.XMLHTTP");if(null==ekFlexMenu.static_userAjaxXmlHttp1){ekFlexMenu.static_userAjaxXmlHttp1=new ActiveXObject("Microsoft.XMLHTTP");}}
if(ekFlexMenu.static_userAjaxXmlHttp1!=null){ekFlexMenu.static_userAjaxXmlHttp1.onreadystatechange=ekFlexMenu.ajaxCallBack_stateChange;ekFlexMenu.static_userAjaxXmlHttp1.open("POST",url,true);ekFlexMenu.static_userAjaxXmlHttp1.send('');result=true;}
return(result);}
function __ekFlexMenu_ajax_DecodeHTML(str){var result="";if(str){result=new String(str);result=result.replace(/\&amp;/gi,"&");result=result.replace(/\&lt;/gi,"<");result=result.replace(/\&gt;/gi,">");result=result.replace(/\&quot;/gi,"\"");result=result.replace(/\&#39;/gi,"'");}
return(result);}
function __ekFlexMenu_ajax_getPayload(response){var result=null;if(response){if(response.xml){result=response.xml;}
else if(response.childNodes&&("undefined"!=typeof XMLSerializer)){if(XMLSerializer){result=new XMLSerializer().serializeToString(response);}}}
return(result);}
function __ekFlexMenu_ajax_appendText(targId){var targ=document.getElementById(targId);if(targ&&("undefined"!=typeof targ.innerHTML)){targ.innerHTML=this.DecodeHTML(this.getPayload(ekFlexMenu.static_userAjaxXmlHttp1.responseXML));}}
function __ekFlexMenu_ajax_appendXml(targId){if(!ekFlexMenu.isDefinedNotNull(ekFlexMenu.static_userAjaxXmlHttp1)||!ekFlexMenu.isDefinedNotNull(ekFlexMenu.static_userAjaxXmlHttp1.responseXML)){return;}
var targ=document.getElementById(targId);if(targ&&("undefined"!=typeof targ.innerHTML)){if(ekFlexMenu.isDefinedNotNull(ekFlexMenu.static_userAjaxXmlHttp1.responseXML.text)){var menuFrag=this.removeMenuFragmentContainer(ekFlexMenu.static_userAjaxXmlHttp1.responseXML.text);if(menuFrag.length>0){targ.innerHTML=targ.innerHTML+menuFrag;}}
else{targ.innerHTML="";if(ekFlexMenu.isDefinedNotNull(ekFlexMenu.static_userAjaxXmlHttp1.responseXML.firstChild)&&ekFlexMenu.isDefinedNotNull(ekFlexMenu.static_userAjaxXmlHttp1.responseXML.firstChild.textContent)){targ.innerHTML=ekFlexMenu.static_userAjaxXmlHttp1.responseXML.firstChild.textContent;}else if("undefined"!=typeof XMLSerializer){result=new XMLSerializer().serializeToString(ekFlexMenu.static_userAjaxXmlHttp1.responseXML);targ.innerHTML=this.DecodeHTML(result);}
else if("undefined"!=typeof document.importNode){var src=document.importNode(ekFlexMenu.static_userAjaxXmlHttp1.responseXML.documentElement,true);var tempEl=document.createElement("span");tempEl.appendChild(src);targ.innerHTML=this.DecodeHTML(tempEl.innerHTML);tempEl=null;}}}
this.userAjaxParentId1="";}
function __ekFlexMenu_ajax_removeMenuFragmentContainer(menuStr){var result="";var idx=menuStr.indexOf("<ul");if(idx>=0){result=menuStr.substr(idx);idx=result.lastIndexOf("</li>");if(idx>0){result=result.substr(0,idx-1);}}
return(result);}
function __ekFlexMenu_ajax_callService(ctrlHash,menuId,submenuId,parentId,menuDepth){this.userAjaxParentId1="";if(parentId.length>0){this.userAjaxParentId1=parentId;return(this.loadXMLDoc(this.ekFlexMenu_ajaxWSPath+"WebServiceAPI/Navigation/FlexMenu.asmx/GetMenuFragment?ctrl_hash="+ctrlHash+"&menu_depth="+menuDepth+"&menu_id="+menuId+"&submenu_id="+submenuId+"&menu_xslt="+this.ekFlexMenu_displayXslt+"&cache_interval="+this.ekFlexMenu_cacheInterval));}
return false}
function __ekFlexMenu_ajax_callAjaxForUserClick(btnId){var result=false;var containerId=ekFlexMenu.parseMenuSubmenuIdString(btnId);var si=this.getSubmenuItemsObject(containerId);if(si){result=true;}
else{var ctrlHash=this.hashCode();var menuId=ekFlexMenu.private_getMenuIdString(btnId);var submenuId=ekFlexMenu.private_getSubmenuIdString(btnId);var parentId=this.getFolderButtonObject(btnId).parentNode.id;result=this.callService(ctrlHash,menuId,submenuId,parentId,1);}
return(result);}
ekFlexMenu_loadEventConfigured=false;function ekFlexMenu_addLoadEvent(){if(ekFlexMenu_loadEventConfigured)
return;ekFlexMenu_loadEventConfigured=true;var oldOnload=window.onload;window.onload=function(){if("function"==typeof oldOnload)
oldOnload();ekFlexMenu.private_startupAllSmartMenus();}}
ekFlexMenu_addLoadEvent();ekFlexMenu_unloadEventConfigured=false;function ekFlexMenu_addUnLoadEvent(){if(ekFlexMenu_unloadEventConfigured)
return;ekFlexMenu_unloadEventConfigured=true;var oldOnunload=window.onunload;window.onunload=function(){if("function"==typeof oldOnunload)
oldOnunload();ekFlexMenu.private_shutdownAllSmartMenus();}}
ekFlexMenu_addUnLoadEvent();function EkTbWebMenuPopUpWindow(url,hWind,nWidth,nHeight,nScroll,nResize){url=url.replace(/&amp;amp;/g,"&").replace(/&amp;/g,"&");if(nWidth>screen.width){nWidth=screen.width;}
if(nHeight>screen.height){nHeight=screen.height;}
var cToolBar='toolbar=0,location=0,directories=0,status='+nResize+',menubar=0,scrollbars='+nScroll+',resizable='+nResize+',width='+nWidth+',height='+nHeight;var popupwin=window.open(url,hWind,cToolBar);return popupwin;}
function ekFlexMenu_LogMsg(msg){var dt=new Date();msg=Date()+" - "+msg;if(window.console&&window.console.log){window.console.log(msg);}
else if(window.Debug&&window.Debug.writeln){window.Debug.writeln(msg);}
else{ekFlexMenu_DebugMsg(msg);}}
var g_ekFlexMenu_DebugWindow=null;function ekFlexMenu_DebugMsg(Msg){Msg='>>>'+Msg+' <br> ';if((g_ekFlexMenu_DebugWindow==null)||(g_ekFlexMenu_DebugWindow.closed)){g_ekFlexMenu_DebugWindow=window.open('Debug Notes','myWin','toolbar=no, directories=no, location=no, status=yes, menubar=no, resizable=yes, scrollbars=yes, width=500, height=300');}
g_ekFlexMenu_DebugWindow.document.writeln(Msg);g_ekFlexMenu_DebugWindow.scrollTo(0,10000000);}
