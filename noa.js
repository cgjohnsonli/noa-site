$(function() {
	var array = [
	"Menu/noa_orange.png",
	"Menu/contact_orange.png",
	];
	var l = array.length;
	var r = Math.floor(Math.random()*l);
	var bgimgurl = array[r];
	$("div#randomimg2").css('background-image',('url("'+bgimgurl+'")'));
});




$(function(){
	$('#top, #top1').click(function(){
	var bglink = $(this).attr("href");
	$("div#randomimg2").css("background-image","url("+bglink+")");
	 return false;
	});
});