$(document).ready(function(){
	
	$('.header_more').hover(f1,f2)
	
	function f1(){
			$(this).find('.menu_list').toggle(300)
			$(this).css('background','#FFF')
		}
	function f2(){
		$(this).css('background','#ECECEC')
		$(this).find('.menu_list').toggle(300)
	}
	
	$('.menu_list a').hover(function(){
		$(this).css('background','#ececec')
	},function(){
		$(this).css('background','#fff')
	})
	
	$('.paycar').hover(function(){
		$('.pay_logo').css('background-position','left -32px')
	},function(){
		$('.pay_logo').css('background-position','left top')
	})
	//========================================遮罩层=================
	
	$('.overDiv_close').click(function(){
		$('.overDiv').css('display','none')
		$('.mask').css('display','none')
	})
	$('.mask').click(function(){
		$('.overDiv').css('display','none')
		$(this).css('display','none')
	})
	//=============================固定着罩层位置==================
	$('#mask').click(function(){
		$('.overDiv').css({
			display:'block',
			top:($(window).height()-$('.overDiv').height())/2
		})
		$('.mask').css('display','block')
	})
	$('.li_on_hover').hover(function(){
		$(this).find('span').css('display','none')
		$(this).find('.li_on_div').css('display','block')
	},function(){
		$(this).find('span').css('display','block')
		$(this).find('.li_on_div').css('display','none')
	})
	//===============================右侧导航栏================
	$('.nav_right li').hover(function(){
		$(this).find('span').css('backgroundPositionX','-33px')
		$('#ewm').css('backgroundPositionX','0')
		$(this).find('.nav_login').css('display','block')
		$(this).find('.nav_a').css('background','#ED145B')
		$(this).find('.my_qianbao').css('display','block').animate({left:'-92px'},200)
		$(this).find('.nav_ewm_pic').css('display','block')
	},function(){
		$(this).find('.nav_login').css('display','none')
		$(this).find('span').css('backgroundPositionX','0')
		$(this).find('.nav_a').css('background','#444851')
		$(this).find('.my_qianbao').css('display','none').animate({left:'-122px'},200)
		$(this).find('.nav_ewm_pic').css('display','none')
	})
	$('.close').click(function(){
		$('.nav_login').css('display','none')
	})
	$('.nav_right_cart').click(function(){
		$('.buycart').css({
			
			right:'40px'
		})
		$('.buycart').toggle()
	})
	$('.car_close').click(function(){
		$('.buycart').css('display','none')
	})
	//返回顶部
	$(window).scroll(function(){
		if ($(window).scrollTop()!=0) {
			$('#toTop').css('visibility','visible')
		} else{
			$('#toTop').css('visibility','hidden')
		}
	})
	$('#toTop').click(function(){
		
		$('body,html').animate({scrollTop:0},100);
		return false;
	})
	//登录框hover
	$('.nav_btn a').hover(function(){
		$(this).css({
			borderColor:'pink',
			backgroundPositionY:'-388'
		})
	},function(){
		$(this).css({
			backgroundPositionY:'-408',
			borderColor:'#fff'
		})
	})
	
	//轮播图======================
	
	var n=0;
	var timer=null;
	function fn(){
		 timer=setInterval(function(){
			$('.slide_control a').removeClass('hover')
			$('.banner ul li').css('background','url(../imgs/focus'+(n+1)+'.jpg)');
			$('.slide_control a').eq(n).addClass('hover')
			
			n++;
			if (n>2) {
				n=0;
			}
		},2000)
	}
	fn()
	//两个左右切换按钮========================
	$('.banner strong').hover(function(){
		$(this).css('opacity','0.7')
	},function(){
		$(this).css('opacity','0.3')
	})
	
	$('.control_l').click(function(){//有问题==============================================切换第一个最后一个有问题
		if (n==0) {
			n=$('.banner li').length-1;
			$('.slide_control a').removeClass('hover')
			$('.slide_control a').eq(n).addClass('hover')
			$('.banner ul li').css('background','url(../imgs/focus'+(n+1)+'.jpg)');
		}else{
			n--;
			$('.slide_control a').removeClass('hover')
			$('.slide_control a').eq(n).addClass('hover')
			$('.banner ul li').css('background','url(../imgs/focus'+(n+1)+'.jpg)');
		}
	})
	$('.control_r').click(function(){
		if (n==($('.banner li').length-1)) {
			n=0;
			$('.slide_control a').removeClass('hover')
			$('.slide_control a').eq(n).addClass('hover')
			$('.banner ul li').css('background','url(../imgs/focus'+(n+1)+'.jpg)');
		}else{
			n++;
			$('.slide_control a').removeClass('hover')
			$('.slide_control a').eq(n).addClass('hover')
			$('.banner ul li').css('background','url(../imgs/focus'+(n+1)+'.jpg)');
			
		}
		
	})
	$('.banner').mouseover(function(){
		clearInterval(timer)
		timer=null;
	})
	$('.banner').mouseout(function(){
		fn()
	})
	//图片列表=========================
	for (var i=0;i<26;i++) {
		var $a=$('<a href="banner.html" target="_blank"></a>')
			
		var $img=$('<img />')
		$img.attr('src','../imgs/'+(i+1)+'.jpg')
		$img.appendTo($a)
		$a.appendTo($('.home_ad_list'))
	}
	
	for (var i=0;i<24;i++) {
		var $a=$('<a href="banner.html" target="_blank"></a>')
			
		var $img=$('<img />')
		$img.attr('src','../imgs/'+(116+i)+'.jpg')
		$img.appendTo($a)
		$a.appendTo($('.home_ad_list'))
	}
	for (var i=0;i<$('img').length;i++) {
		$(' .home_ad_list img').eq(i).hover(function(){
			$(this).css('opacity','0.8')	
		},function(){
			$(this).css('opacity','1')
		})
	}

	//服务背景图
	for (var i=0;i<$('.box_list a').length;i++) {
		$('.box_list a').eq(i).css('backgroundPositionX',274*i)
		
	}
	
	for (var i=0;i<$('.box_list a').length;i++) {
		$('.box_list a').eq(i).hover(function(){
			$(this).css('backgroundPositionY','-100px')
		},function(){
			$(this).css('backgroundPositionY','0')
		})
	}
	
	/*
	for (var i = 0; i < 10; i++) {
	
		$('body').append('<div class="new_detail"><div class="detail_left"><a href="javascript:;" class="detail_a"><img src="../imgs/detail1.jpg"/></a></div><div class="detail_right"><a href="javascript:;"><div class="detail_right_logo"><div class="detail_right_logo_l"><img src="../imgs/021_flag.jpg"/><ul><li>Korea</li><li>韩国品牌</li></ul></div><div class="detail_right_logo_r"><span>距结束还剩</span><span class="detail_time"><em>0</em>天<em>0</em>时<em>0</em>分<em>0</em>秒</span></div></div><p class="detail_right_p1"><span> 赫拉限量版粉色樱花季气垫bb</span></p><p class="detail_right_p2"> 2016HERA大事件来袭！即2015年的铅笔限量版之后，2016高调与NICHOLAS KIRKWOOD推出合作款！赫拉限量版蓝色樱花季气垫BB 2色可选，被誉为美的不可方物之作！专为春夏打造，SPF50+/PA+++的防晒值与-2°C降温效果轻松妆夏天；细密气孔打造薄而透明的烛光肤感~ </p></a><div class="detail_price"><div class="price_num"><strong><span>¥</span>299</strong></div><div class="detail_total"><span><em>993</em>人已购买</span></div></div></div><div class="detail_box"></div></div>')
	}
	
	for (var i=0;i<$('.new_detail').length;i++) {
		$('.new_detail').eq(i).hover(function(){
			$(this).css('box-shadow','3px 3px 10px 10px  #b5b5b5')
		},function(){
			$(this).css('box-shadow','1px 1px 4px #e3e3e3')
		} )
	}	*/
	
	
//	alert($.cookie("username"))
	
	
	
	
	
	
	
	
	
	
	
	
	
})