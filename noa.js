$(function() {
	var array = [
	"bg/hutong.jpg",
	"bg/flower.jpg",
	"bg/courtyard.jpg",
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

$(function(){
	$(".basic-info").hide();
	$(".basic-info#work").show();
	$("span").click(function(){
	var show = $(this).attr("id");
	$(".basic-info").hide();
	$(".basic-info#"+show).show();
	});
});