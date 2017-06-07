

$(function() {
	var mode = 1;
	var array = [
	"bg/hutong/hutong0.jpg",
	"bg/courtyard/courtyard0.jpg",
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
	"bg/firstavenue/firstavenue0.jpg",
	"bg/museo-lima/museo-lima0.jpg",
	"bg/allegheny/allegheny0.jpg",
	"bg/dorigny/dorigny0.jpg",
	"bg/helsinki/helsinki0.jpg",
	"bg/taichung/taichung0.jpg",
	"bg/lesoliver/lesoliver0.jpg",
	"bg/busan/busan0.jpg",
	"bg/aalto/aalto0.jpg",
	"bg/sola-radhus/sola-radhus0.jpg",
	"bg/notpark/notpark0.jpg",
	"bg/lowwet/lowwet0.jpg",
	"bg/highline/highline0.jpg",
	
	];
	var l = array.length;
	var r = Math.floor(Math.random()*l);
	var bgimgurl = array[0];
	$("div#randomimg2").css('background-image',('url("'+bgimgurl+'")'));
	
		$("#header-title").click(function(){
			mode = 1;
		r = Math.floor(Math.random()*l);
		bgimgurl = array[r];
		$("div#randomimg2").css('background-image',('url("'+bgimgurl+'")'));
		$(before).css("color","#FFFFFF")
		return false;
		})



/*
$(function(){
	$('#top, #top1').click(function(){
	var bglink = $(this).attr("href");
	$("div#randomimg2").css("background-image","url("+bglink+")");
	 return false;
	});
});
*/


	var count = 0;
	var use = 0;
	var temp = "bg/courtyard/courtyard0.jpg"
	var before;
	$('#top, #top1').click(function(){
		mode = -1;
	var bglink = $(this).attr("href");
	if(bglink != temp){
		use = bglink.replace(/[^0-9]/ig,"");
		count = 0; 
		temp = bglink;}
	else{count = count + 1;}
	if(count > use){count = 0;}
	bglink = bglink.replace(use,count);
	$("div#randomimg2").css("background-image","url("+bglink+")");
	$(before).css("color"," ");
	$(this).css("color","#FF3A05");
	before = this;
	 return false;
	});
	
	$(document).keydown(function(event){
	var keynum = event.which;
	var bglink = temp;
	if(mode == -1){
	if(keynum==37){count = count - 1;if(count<0){count = use;}}
	if(keynum==39){count = count + 1;if(count>use){count = 0;}}
	bglink = bglink.replace(use,count);
	$("div#randomimg2").css("background-image","url("+bglink+")");
	 return false;
	}
	else{
	if (keynum==37){r = r - 1;if(r<0){r = l-1;}}
	if (keynum==39){r = r + 1;if(r>(l-1)){r = 0;}}
		bgimgurl = array[r];
		$("div#randomimg2").css('background-image',('url("'+bgimgurl+'")'));
		return false;
	}
	});
	
	$('#left, #right').click(function(){
		if(mode == -1){
	var direct = $(this).attr("id");
	var bglink = temp;
	if (direct == "left"){count = count - 1;if(count<0){count = use;}}
	if (direct == "right"){count = count + 1;if(count>use){count = 0;}}
	bglink = bglink.replace(use,count);
	$("div#randomimg2").css("background-image","url("+bglink+")");
	 return false;
		}
		else{
	var direct = $(this).attr("id");
	if (direct == "left"){r = r - 1;if(r<0){r = l-1;}}
	if (direct == "right"){r = r + 1;if(r>(l-1)){r = 0;}}
		bgimgurl = array[r];
		$("div#randomimg2").css('background-image',('url("'+bgimgurl+'")'));
		return false;
			
		}
	});
});

$(function(){
	$(".basic-info").hide();
	$(".basic-info#work").show();
	$(".basic-info#foot").show();
	$('a#work, a#news, a#about').click(function(){
	var show = $(this).attr("id");
	$(".basic-info").hide();
	$(".basic-info#"+show).show();
	$(".basic-info#foot").show();
	});
});

