var host = '//populusdenver.com/';
var beg = '<a target="_blank" href="' + host;
var menu = '<li>' + beg + 'our-story/">OUR STORY</a><ul><li>' + beg + 'our-impact/">Our Impact</a></li><li>' + beg + 'our-news/">Our News</a></li><li>' + beg + 'design/">Design</a></li></ul></li><li>' + beg + 'offers/">OFFERS</a></li><li>' + beg + 'stay/">STAY</a></li><li>' + beg + 'gather/">GATHER</a><ul><li>' + beg + 'gather/weddings/">Weddings</a></li><li>' + beg + 'gather/spaces/">Event Spaces</a></li></ul></li><li>' + beg + 'experience/">EXPERIENCE</a><ul><li>' + beg + 'experience/neighborhood/">Neighborhood</a></li><li>' + beg + 'experience/collaborators/">Collaborators</a></li><li>' + beg + 'experience/events/">Events</a></li></ul></li><li>' + beg + 'contact-us/">CONTACT US</a><ul><li>' + beg + 'request-a-space/">Request A Space</a></li><li>' + beg + 'faq/">FAQ</a></li><li><a target="_blank" href="//www.aparium.com/careers/">Careers</a></li></ul></li>', css = '.ws-privacy-policy{background-color:#fff;color:#000}#ws-back .ws-nav-yin,.ws-results .ws-related-data h3{color:#000}.calMonth .calDays div.pointer:hover{background:#000 none repeat scroll 0 0 !important}.ws-results article.ws-open a h1:after{box-shadow:-75px 0 50px -35px #000 inset}.ws-results article.ws-open a,.ws-results article.ws-open a h1,.counter span.selected,.ws-select-options li.ws-current a,.ws-select,.ws-results article.ws-open a h3,.ws-msg-info{background-color:#000}.ws-results article.ws-open a:after{border-top:9px solid #000}.ws-results article.ws-open a h3:after,.ws-rooms .ws-results hgroup h3:after,.ws-add-ons .ws-results hgroup h3:after{display:none}.ws-element,.ws-heading,.ws-menu-bar:before,.ws-menu-bar:after,.ws-menu-bar li,.ws-menu-bar li.activeli,.ws-product-item,.ws-terms-conditions,.ws-product-item .ws-row-item,span.customSelect,fieldset,.ws-menu-bar li:first-child,.ws-related-data.ws-show-this{border-color:#000}.ws-msg-error,.ws-msg-modify{background-color:#747136}body:not(.ws-logged-in) .ws-button-small.ws-loyalty-public.ws-shouldlogin{border-color:#747136;background-color:#747136}p.ws-persuade,.ws-with-discount .ws-number,.ws-discount-total,.ws-property-item .ws-property-price .ws-number{color:#747136}.calMonth .calDays div span{color:#555}.ws-itinerary .ws-inner .ws-secondary,#buWsCartCont,.ws-results hgroup h3{background-color:#747136}.ws-cart-view2,#ws-main .ws-itinerary section .ws-inner{background-color:#555}#ws-calendar p.ws-close a,#ws-occupancy-select p.ws-close a,#ws-options-select p.ws-close a,.ws-cart-view2 .ws-related-data h3,#hdSaveForLater,#hdCallContinue,#hdCancel,.ws-cart-view2 .dvHotelAddon .ws-related-data .ws-close{color:#fff}@media screen and (max-width:700px){.ws-results .ws-related-data h3{font-size:1.143em}}@font-face{font-family:Apercu;font-style:normal;font-weight:400;font-display:auto;src:url(//populusdenver.com/wp-content/uploads/2024/01/apercu_light-webfont.woff2) format("woff2"),url(//populusdenver.com/wp-content/uploads/2024/01/apercu_light-webfont.woff) format("woff")}@font-face{font-family:Apercu;font-style:normal;font-weight:700;font-display:auto;src:url(' + WsVars.CrsMediaUrl + '/CrsMedia/C84/bbe/RadioCanada-Regular.woff) format("woff")}@font-face{font-family:Apercu;font-style:italic;font-weight:400;font-display:auto;src:local("Franklin Gothic Medium Italic"),local("GillSans-Italic"),local("Droid Sans")}@font-face{font-family:Apercu;font-style:italic;font-weight:700;font-display:auto;src:local("Franklin Gothic Heavy Italic"),local("GillSans-BoldItalic"),local("Droid Sans")}@media screen and (min-width:1025px){body,h1,.ws-button,.ws-cart-cancel,.ws-item-title h1,.ws-results hgroup h1,.ws-results hgroup h3,.ws-results .ws-related-data h3,#hdWsCart,.ws-full-details h3{font-family:Apercu,"MS Sans Serif",helvetica,sans-serif}h1,.ws-item-title h1,.ws-results hgroup h1,.ws-results hgroup h3,.ws-results .ws-related-data h3,#hdWsCart,.ws-full-details h3{font-weight:400}}@media print{header,.ws-nav-journey,.ws-cart-details .ws-open-close,#MyFooter_dvPrivacyPolicy,#MyFooter_dvPrivacyManage,#footerwrapper,#xrow a,#xrow br,#ap{display:none}fieldset{border:0 none}.print{display:block}}', img = '<img alt="" src="data:image/svg+xml;base64,', vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
	vars[key] = value;
});
function makeLogo(color) {
	return '<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 31" fill="none"><g><g><path d="M64.961 1.62527H62.0255V29.3653H64.961V1.62527Z" fill="' + color + '"/><path d="M89.9745 20.4923V1.62527H87.039V20.4923C87.039 25.9643 91.238 30.0018 95.9595 30.0018C96.4345 30.0018 96.9475 29.9638 97.4225 29.8783C93.3375 29.1658 89.9745 25.4798 89.9745 20.4923Z" fill="' + color + '"/><path d="M69.122 1.62527H67.26V1.66327C71.307 1.97677 74.708 4.51327 74.708 9.19677C74.708 13.8803 71.2975 16.3693 67.26 16.7303V16.7683H69.122C73.9575 16.7683 77.767 13.7568 77.767 9.19677C77.767 4.63677 73.9575 1.62527 69.122 1.62527Z" fill="' + color + '"/><path d="M39.3965 0.98877C38.8835 0.98877 38.323 1.02677 37.81 1.11227C44.1085 1.90077 49.5045 7.61027 49.5045 15.4953C49.5045 23.3803 44.1085 29.0898 37.81 29.8783C38.323 29.9543 38.8835 30.0018 39.3965 30.0018C46.3695 30.0018 52.6775 23.8173 52.6775 15.4953C52.6775 7.17327 46.3695 0.98877 39.3965 0.98877Z" fill="' + color + '"/><path d="M2.9355 1.62527H0V29.3653H2.9355V1.62527Z" fill="' + color + '"/><path d="M7.0965 1.62527H5.2345V1.66327C9.2815 1.97677 12.6825 4.51327 12.6825 9.19677C12.6825 13.8803 9.272 16.3693 5.2345 16.7303V16.7683H7.0965C11.932 16.7683 15.7415 13.7568 15.7415 9.19677C15.732 4.63677 11.932 1.62527 7.0965 1.62527Z" fill="' + color + '"/><path d="M26.1155 15.4953C26.1155 7.61027 31.502 1.90077 37.81 1.11227C37.297 1.03627 36.7365 0.98877 36.2235 0.98877C29.2505 0.98877 22.9425 7.17327 22.9425 15.4953C22.9425 23.8173 29.241 30.0018 36.2235 30.0018C36.7365 30.0018 37.297 29.9638 37.81 29.8783C31.5115 29.0898 26.1155 23.3803 26.1155 15.4953Z" fill="' + color + '"/><path d="M182.191 14.8588C181.716 14.8588 181.165 14.8968 180.68 15.0203C184.129 15.5713 186.979 18.2693 186.979 22.4303C186.979 26.5913 184.129 29.2513 180.68 29.8783C181.156 29.9543 181.669 30.0018 182.191 30.0018C186.276 30.0018 190 26.7528 190 22.4303C190 18.1078 186.276 14.8588 182.191 14.8588Z" fill="' + color + '"/><path d="M104.87 20.4923C104.87 25.4893 101.46 29.1753 97.4225 29.8878C97.8975 29.9638 98.3725 30.0113 98.8855 30.0113C103.559 30.0113 107.806 25.9643 107.806 20.5018V1.62527H104.87V20.4923Z" fill="' + color + '"/><path d="M186.352 7.68627H189.363C189.126 3.80077 185.839 0.98877 182.191 0.98877C181.678 0.98877 181.165 1.02677 180.68 1.15027C183.701 1.73927 186.152 4.07627 186.352 7.68627Z" fill="' + color + '"/><path d="M175.019 8.08527C175.019 4.19977 177.593 1.73927 180.69 1.15027C180.215 1.02677 179.702 0.98877 179.179 0.98877C175.417 0.98877 172.007 4.00027 172.007 8.08527C172.007 12.1703 175.417 15.1818 179.179 15.1818C179.692 15.1818 180.206 15.1438 180.69 15.0203C177.593 14.4598 175.019 11.9708 175.019 8.08527Z" fill="' + color + '"/><path d="M174.42 22.8293H171.37C171.608 26.9523 175.218 30.0018 179.179 30.0018C179.692 30.0018 180.206 29.9638 180.69 29.8783C177.355 29.2893 174.581 26.7148 174.42 22.8293Z" fill="' + color + '"/><path d="M121.714 1.62527H118.626V29.3653H134.349V28.6528H121.714V1.62527Z" fill="' + color + '"/><path d="M143.83 20.4923V1.62527H140.895V20.4923C140.895 25.9643 145.094 30.0018 149.815 30.0018C150.29 30.0018 150.803 29.9638 151.278 29.8783C147.193 29.1658 143.83 25.4798 143.83 20.4923Z" fill="' + color + '"/><path d="M158.726 20.4923C158.726 25.4893 155.316 29.1753 151.278 29.8878C151.753 29.9638 152.228 30.0113 152.741 30.0113C157.415 30.0113 161.661 25.9643 161.661 20.5018V1.62527H158.726V20.4923Z" fill="' + color + '"/></g></g></svg>';
}
$(document).ready(function () {
	$('head').append('<link rel="icon shortcut" href="' + WsVars.CrsMediaUrl + '/CrsMedia/P17398/bbe/favicon.png"/>');
	$('body').append('<style>' + css + '</style>');
	$('#dvSkipToContent').addClass('ws-reader-only');
	$('body').removeClass('ws-pagewidth-wide');
	var s; $('.ws-property-phone').each(function (index, elem) {
		s = $(this).html();
		$(this).html(s.substring(0, 9) + '-' + s.substring(9, 13));
	});
	if (vars['subchan'] === 'GOO' || vars['subchan'] === 'GDB' || vars['subchan'] === 'GO' || vars['subchan'] === 'WGH') {
		$('#buViewItem').click();
		$('#buMoEdit').click();
	}
	$('#ws-utility').after('<a href="#" id="trg"><span id="i1"></span><span id="i2"></span><span id="i3"></span></a>');
	$('#logo').html(img + btoa(makeLogo('#535435')) + '" width="190" height="31"/>');
	$('#menu,#mob').html(menu);
	$('footer').before('<div id="top"><div id="xrow"><div class="left">' + img + btoa(makeLogo('#808080')) + '" width="190" height="31" class="print"/><br/><br/>240 14TH STREET<br/>DENVER, CO 80202<br/>303-800-4240</div><div class="right">' + beg + 'faq/">FAQ</a><br/><a target="_blank" href="//www.aparium.com/careers/">CAREERS</a><br/>' + beg + 'terms-of-use/">TERMS OF USE</a><br/>' + beg + 'privacy-policy/">PRIVACY POLICY</a><br/>' + beg + 'privacy-policy/#">COOKIE SETTINGS</a><br/><br/><img src="' + WsVars.CrsMediaUrl + '/CrsMedia/P17398/bbe/ap.png" alt="" width="150" class="print" style="opacity:.5"/>&#169; 2024 POPULUS</div><div class="clear"></div></div></div>');
	$('footer').append('<a target="_blank" href="//www.aparium.com/" aria-label="link to aparium web site" id="ap"><img src="' + WsVars.CrsMediaUrl + '/CrsMedia/P17398/bbe/ap.png" alt="" width="150"/></a>');
	$('#trg').on('click', function () {
		$('header').toggleClass('open');
	});
});








body,h1,input,select,textarea,button,.ws-button,.ws-cart-cancel,.ws-item-title h1,.ws-results hgroup h1,.ws-results hgroup h3,.ws-results .ws-related-data h3,#hdWsCart,.ws-full-details h3{font-family:"Franklin Gothic Medium",helvetica,sans-serif}
.ws-primary{font-family:arial,sans-serif}
@font-face{font-family:OpenSans;font-style:normal;font-weight:normal;src:local("Franklin Gothic Medium"),local("Apple SD Gothic Neo"),local("Droid Sans")}

.ws-journey .ws-complete .ws-nav-yin{border-bottom-color:#000;border-top-color:#000}
.ws-journey .ws-active-step .ws-nav-yin{border-color:#000}
.ws-journey .ws-inactive-step .ws-nav-yin{border-color:#555;color:#fff}
a:link,a:visited,h1,.ws-full-details h3,.ws-property-item .ws-property-price .ws-number,.ws-itinerary .ws-element label,.ws-itinerary .ws-element-wrapper label,.ws-mod-dates .ws-element label,h2.emphasis{color:#000}
.ws-primary,a.ws-primary,span.ws-primary{background-color:#535435;border-color:#535435;color:#fff}
.tit{font-weight:700;font-size:25px}
#ws-utility a{font-size:16px;padding:12px 24px;color:#000;border:2px solid #000;border-radius:3px;position:relative;z-index:99}

#header,#ws-utility,#footer,#footercontent{border:0 none;width:100%;margin:0 auto;padding:0 20px}
#ws-utility{position:absolute}
#ws-header .ws-inner{max-width:100%}
#xrow{max-width:1140px;margin:0 auto;padding:30px 0}
.col{width:49%;text-align:center;vertical-align:top;display:inline-block}
#logo img{width:100%;max-width:384px}

@media screen{
#print{display:none}
body{background-color:#fbf8f5}
header{padding:30px 0}
#xrow{color:#000;font-size:16px}
#xrow a{color:#62707c;text-decoration:underline}
.b{font-weight:700;margin:20px}
footer{background-color:#000}
#footercontent{color:#fff;padding:20px 0;font-weight:700}
#footercontent a{color:#8a99a3}
#footer .right{text-align:right}
}

@media screen and (max-width:960px){
#ws-utility{position:static;margin-bottom:20px}
}

@media screen and (max-width:450px){
.col,#footer .left,#footer .right{width:100%;display:block;float:none;text-align:center}
}

@media screen and (min-width:1025px){
body,h1,.ws-button,.ws-cart-cancel,.ws-item-title h1,.ws-results hgroup h1,.ws-results hgroup h3,.ws-results .ws-related-data h3,#hdWsCart,.ws-full-details h3{font-family:Apercu,"MS Sans Serif",helvetica,sans-serif}
}

@media print{#ws-utility,.ws-nav-journey,.ws-cart-details .ws-open-close,#MyFooter_dvPrivacyPolicy,#MyFooter_dvPrivacyManage,#footer a{display:none}fieldset{border:0 none}}







body,input,select,textarea,button,.ws-button,.ws-cart-cancel{font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",thonburi,sans-serif;}
h1,.ws-results hgroup h1,.ws-item-title h1,.ws-results hgroup h3,.ws-results .ws-related-data h3,#hdWsCart,.ws-full-details h3{font-family:cochin,century,serif;font-weight:400;}
a{transition:all .17s ease-in-out 0s;}
.ws-journey .ws-complete .ws-nav-yin{border-bottom-color:#263b36;border-top-color:#263b36;}
.ws-journey .ws-active-step .ws-nav-yin,.ws-related-data.ws-show-this{border-color:#263b36;}
.ws-journey .ws-inactive-step .ws-nav-yin{border-color:#555;color:#fff;}
a:link,a:visited,h1,.ws-results .ws-related-data h3,.ws-full-details h3,.ws-property-item .ws-property-price .ws-number,.ws-with-discount .ws-number,p.ws-persuade,.ws-itinerary .ws-element label,.ws-itinerary .ws-element-wrapper label,.ws-mod-dates .ws-element label{color:#263b36;}
.ws-primary,a.ws-primary,span.ws-primary{background-color:rgb(169,97,50);border:2px solid rgb(169,97,50);color:#fff;border-radius:0;}
span.ws-primary{background-color:transparent;color:rgb(169,97,50);border-left:0 none;border-right:0 none;}
.ws-results a:hover span.ws-primary{background-color:rgb(169,97,50);border-color:rgb(169,97,50);color:#fff;}
.ws-related-data .ws-secondary{background-color:transparent;border-top:2px solid rgb(169,97,50);border-bottom:2px solid rgb(169,97,50);border-radius:0;font-weight:700;}
.ws-rooms .ws-results hgroup h3:after{display:none;}
.calMonth .calDays div.pointer:hover{background:rgb(169,97,50) none repeat scroll 0 0!important;}.ws-results article.ws-open a h1::after{box-shadow:-75px 0 50px -35px rgb(169,97,50) inset;}.ws-results article.ws-open a,.ws-results article.ws-open a h1,.counter span.selected,.ws-select-options li.ws-current a,.ws-select,.ws-component .ws-inner .ws-primary{background-color:rgb(169,97,50);}
.ws-results article.ws-open a::after{border-top:9px solid rgb(169,97,50);}
.ws-heading,.ws-outline::before,.ws-product-item,.ws-product-item .ws-row-item,fieldset,.ws-terms-conditions,.ws-menu-bar::before, .ws-menu-bar::after,.ws-menu-bar li,.ws-menu-bar li.activeli{border-color:rgb(169,97,50);}
.ws-inactive-menu li:first-child,.ws-menu-bar li:first-child{border-left-color:rgb(169,97,50);}
.ws-msg-error{background-color:rgb(169,97,50);}
.ws-results hgroup h3{background-color:#263b36;}
#ws-utility b{font-weight:500;}
#ws-utility a,#left a{font-size:14px;text-transform:uppercase;font-weight:500;display:inline-block;margin:0 20px;color:#000;letter-spacing:2px;}
#ws-utility,#footer,#footercontent{border:0 none;}
#ws-utility{margin-left:70px;}
#left{margin-left:-650px;}
#ws-utility,#left{z-index:10010;position:absolute;left:50%;top:30px;}
#ws-utility:hover a{opacity:.5;}
#ws-utility a:hover,#ws-utility:hover a.left{opacity:1;}
#ws-utility .ws-item{margin:0;}
footer .right{text-align:center;}
#header,#footer{width:100%;}
#header,#ws-header .ws-inner{width:100%;max-width:1300px;}
#menu a{display:block;font-size:0;color:#000;font-weight:500;}
#trig{font-size:0;font-family:wsicons;position:absolute;left:20px;}
#menu{text-align:left;}
.ws-add-ons .ws-results hgroup h3:after{display:none;}
@media screen{
#ws-main section.ws-component .ws-inner,.ws-related-data,article .ws-wrap{background-color:#fffbf4;}
#fmSaved section.ws-component .ws-inner{background-color:#000;}
#ap{margin-bottom:50px;display:block;fill:#fff;}
#ap:hover{fill:#b98323;}
#gift{font-size:12px;margin-top:12px;}
#gift a{text-decoration:underline;font-size:12px;}
body{background-color:#fef9ef;}
#header{padding:20px;}
#footer{background-color:rgb(39,60,54);margin:0 auto;}
#footercontent,#footercontent a{color:#fef9ef;font-size:14px;z-index:10010;position:relative;}
footer .left{font-weight:700;}
#bottom{font-weight:600;background-color:rgb(46,71,64);clear:both;text-align:center;letter-spacing:1px;padding:34px;font-size:12px;color:#fef9ef;}
footer .left a,#bottom a{border-bottom:1px solid transparent;}
#bottom a{margin-right:60px;color:#fef9ef;font-size:12px;}
#bottom a:hover{border-color:#fff;}
#soc{margin:30px 0;}
#soc a{color:rgb(136,163,154);margin:0 9px;border:0 none;}
footer .left,footer .right{margin:90px 50px;}
#footer:before,#footer:after {
    position: absolute;
    content: '';
    display: block;
    height: 500px;
    width: 23px;
    background: #2E4741;
bottom:0;
}
#footer:before {
    left: 25.5%;
}
#footer:after {
    -ms-transform: rotate(-22deg);
    transform: rotate(-22deg);
    right: 25%;
}
#cushun{background-color:#fef9ef;height:99px;width:100%;z-index:10010;position:relative;}
.ws-filter-sort-items a.ws-tag{background-color:transparent;}
}
#soc a{font-family:FontAwesome5Brands;font-size:28px;font-weight:400;}
#footercontent .left a:hover{color:#b98323;border-color:#b98323;}
@media screen and (max-width:1312px){#ws-utility a,#left a{margin:0 9px;}#left{margin-left:-560px;}}
@media screen and (max-width:1200px){
#left a,#ws-utility .con{font-size:0;}
#left{margin:0;}
#menu.open a{font-size:16px;}
#ws-utility{position:static;margin:0;}
#ws-header .ws-inner{padding:0;}
#ws-utility a, #left a{margin:0 20px;}
#trig{font-size:32px;font-size:20px;}
}
@media screen and (max-width:450px){footer .left,footer .right{float:none;}}
@media screen and (min-width:1025px){h1,.ws-results hgroup h1,.ws-item-title h1,.ws-results hgroup h3,.ws-results .ws-related-data h3,#hdWsCart,.ws-full-details h3{font-family:"Schnyder L",Judson,century,serif;}}
@media print{#left,#ws-utility,#bottom{display:none;}}
@font-face{font-family:"Schnyder L";src:url(//hotelhaya.com/wp-content/themes/hotel-haya/static/fonts/SchnyderL-Demi-Web.woff2) format("woff2"),url(//hotelhaya.com/wp-content/themes/hotel-haya/static/fonts/SchnyderL-Demi-Web.woff) format("woff");font-style:normal;font-weight:400;}
@font-face{font-family:FontAwesome5Brands;src:url(//cdn.shrglobal.com/CrsMedia/P15175/bbe/facebookInstagramTwitter.woff) format("woff"),url(//cdn.shrglobal.com/CrsMedia/P15175/bbe/facebookInstagramTwitter.ttf) format("truetype");font-weight:400;font-style:normal;}

.WsIbeDetails #MyViewGrp_txMoreNoTabber{display:none;}



<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-WB4H4G8C" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<a id="logo" class="left" href="//crossroadshotelkc.com/"></a>
<a href="#" id="trig"><span></span><span></span><span></span></a>
<ul class="right">
<li><a href="//crossroadshotelkc.com/offers/">OFFERS</a></li>
<li><a href="//crossroadshotelkc.com/rooms/">STAY</a></li>
<li><a href="//crossroadshotelkc.com/meetings-and-spaces/">GATHER</a></li>
<li><a href="//crossroadshotelkc.com/food-and-drink/">DINING</a></li>
<li><a href="//crossroadshotelkc.com/explore/">EXPLORE</a></li>
<li><a href="//crossroadshotelkc.com/contact-2/">CONTACT</a></li>
<li id="res"></li>
<li id="cart"></li>
</ul>
<div class="clear"></div>

