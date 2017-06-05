

$(function() {
	var array = [
	"bg/hutong/hutong0.jpg",
	"bg/trail/trail0.jpg",
	"bg/courtyard/courtyard0.jpg",
	"bg/firstavenue/firstavenue0.jpg",
	"bg/klekovaca/klekovaca0.jpg",
	"bg/unplaza/unplaza0.jpg",
	"bg/ninthavenue/ninthavenue0.jpg",
	"bg/flower/flower0.jpg",
	"bg/hotel-hester/hotel-hester0.jpg",
	"bg/bicity/bicity0.jpg",
	"bg/cluster/cluster0.jpg",
	"bg/courtyardhousing/courtyardhousing0.jpg",
	"bg/terrace/terrace0.jpg",
	"bg/science-city/science-city0.jpg",
	"bg/trail/trail0.jpg",
	"bg/west-hotel/west-hotel0.jpg",
	"bg/science-island/science-island0.jpg",
	"bg/museo-lima/museo-lima0.jpg",
	"bg/allegheny/allegheny0.jpg",
	"bg/dorigny/dorigny0.jpg",
	"bg/helsinki/helsinki0.jpg",
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


/*
$(function(){
	$('#top, #top1').click(function(){
	var bglink = $(this).attr("href");
	$("div#randomimg2").css("background-image","url("+bglink+")");
	 return false;
	});
});
*/

$(function(){
	var count = -1;
	var temp = "bg/courtyard/courtyard0.jpg"
	$('#top, #top1').click(function(){
	var bglink = $(this).attr("href");
	if(bglink != temp){count = -1; temp = bglink;}
	var use = bglink.replace(/[^0-9]/ig,"");
	var number = use + 1;
	count = count + 1;
	if(count > use){count = 0;}
	//count = count%number;
	bglink = bglink.replace(use,count);
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


