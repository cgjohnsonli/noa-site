

$(function() {
	var array = [
	"bg/hutong.jpg",
	"bg/trail.jpg",
	"bg/courtyard.jpg",
	"bg/firstavenue.jpg",
	];
	var l = array.length;
	var r = Math.floor(Math.random()*l);
	var bgimgurl = array[2];
	$("div#randomimg2").css('background-image',('url("'+bgimgurl+'")'));
	
		$("#header-title").click(function(){
		r = Math.floor(Math.random()*l);
		bgimgurl = array[r];
		$("div#randomimg2").css('background-image',('url("'+bgimgurl+'")'));
		return false;
		})
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
	$(".basic-info#foot").show();
	$('#work, #news, #about').click(function(){
	var show = $(this).attr("id");
	$(".basic-info").hide();
	$(".basic-info#"+show).show();
	$(".basic-info#foot").show();
	});
});


