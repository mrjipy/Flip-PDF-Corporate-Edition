	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#1F2232";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#618819";bookConfig.totalPageCount=38;bookConfig.largePageWidth=1024;bookConfig.largePageHeight=1325;;bookConfig.securityType="1";bookConfig.CreatedTime ="200413053730";bookConfig.bookTitle="Magazine Patro N01";bookConfig.bookmarkCR="378fa1898b343a06dd2d2a27512ac6774c0c13bd";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"202013235415214","alpha":"1","spType":"null","fillStyle":"None","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.7","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.07679738562091504","y":"0.3383838383838384","width":"0.22712418300653595","height":"0.11994949494949494","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"2"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"20201323541955","alpha":"1","spType":"null","fillStyle":"None","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.7","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.07679738562091504","y":"0.48484848484848486","width":"0.22712418300653595","height":"0.08188131313131312","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"4"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"202013235413447","alpha":"1","spType":"null","fillStyle":"None","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.7","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape2","x":"0.07352941176470588","y":"0.5934343434343434","width":"0.2973856209150327","height":"0.10353535353535354","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"5"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"202013235417926","alpha":"1","spType":"null","fillStyle":"None","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.7","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape3","x":"0.6715686274509803","y":"0.3472222222222222","width":"0.25","height":"0.08585858585858586","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"16"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"202013235414526","alpha":"1","spType":"null","fillStyle":"None","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.7","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape4","x":"0.6830065359477124","y":"0.46464646464646464","width":"0.24232026143790852","height":"0.10176767676767676","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"26"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"202013235418938","alpha":"1","spType":"null","fillStyle":"None","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.7","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape5","x":"0.6633986928104575","y":"0.5871212121212122","width":"0.2581699346405229","height":"0.08712121212121213","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"30"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202013235413315","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0.9650859999999999","y":"0.6648639999999999","width":"-0.017173","height":"-0.092232","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.amelieisabelle.com","linkTarget":"Blank"}}],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202013235412784","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"1.668725","y":"0.876364","width":"0.15163400000000002","height":"0.081818","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://youtu.be/Oc3YGNnbRAI","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202013235418534","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"1.374118","y":"0.54","width":"0.531765","height":"0.289545","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792"}],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202013235413413","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0.568683","y":"0.21059","width":"0.47853799999999996","height":"-0.018786999999999998","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://wooloo.ca/2018/04/03/recette-de-fluffy-slime-borax-marche/","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202013235416356","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0.581069","y":"0.7767479999999999","width":"0.056365","height":"-0.018109","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://Wooloo.ca","linkTarget":"Blank"}}],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"20201323541508","alpha":"1","location":{"tannoName":"button2","x":"0.6715686274509803","y":"0.8724747474747475","width":"0.13398692810457516","height":"0.08131313131313132","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/6260efc8fc9a9002669d2f4ad9956cc0.jpg","buttonCaption":"","captionY":"35","HRate":"0.005051","Format":{"font":"Tahoma","size":"18","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://youtu.be/Oc3YGNnbRAI","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202013235412461","alpha":"1","moviePlayTriggerEvt":"EVT_PageViewed","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube1","x":"0.33986928104575165","y":"0.5454545454545454","width":"0.5931372549019608","height":"0.2878787878787879","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"Oc3YGNnbRAI","playerParameters":"autoplay=0&loop=0"}],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}