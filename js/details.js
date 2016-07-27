$(function(){
	//引头部
	$('#detail_head').load('head.html')
	//套餐详细
	$('.price_clear').hover(function(){
		$('.price_list').toggle()
	},function(){
		$('.price_list').toggle()
	})
	//选择型号
	$('.section_con').click(function(event){
		 event.stopPropagation();
		$('.xuanze').toggle()
	})
	$(document).click(function(){
		
		$('.xuanze').css('display','none')
	})
	$('.xuanze li').hover(function(){
		$(this).css('background','#F2F2F2')
	},function(){
		$(this).css('background','#fff')
	})
	$('.l_info_list a').hover(function(){
		$(this).css('background','#f1185f')
	},function(){
		$(this).css('background','#fff')
	})
	$('.xuanze li').click(function(){
		$('.section_con').html($(this).html());
		
	})
	//==================service=======================
	$('.r_service_detail_s').hover(function(){
		$(this).find($('.service_de_1')).animate({top:'-80'})
	},function(){
		$(this).find($('.service_de_1')).animate({top:'0'})
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
	
	
	//加入购物车
	var num=0;
	$('.add_shopcar').click(function(){
		var offset=$('.time_count_img').offset()
		var endoffset=$('#shopping_num').offset()
		var $div=$('<div class="quan"></div>')
		$div.css({
			position:'absolute',
			top:offset.top,
			left:offset.left,
			zIndex:'9999',
			backgroundPosition:'center center'
		})
		$('body').append($div)
		$('.quan').stop(true).animate({'left':endoffset.left,'top':endoffset.top,'width':20,'height':20},1000,function(){
			
			$('.quan').remove()
			num++;
			
			$('#shopping_num').html(num)
		})
		
//	var	str=$('<tr class="shop_list"><td class="good_name"><div  class="on_check"><input type="checkbox"   class="check_box check_list" checked="checked"/></div><div class="good_con"><a href="javascript:;" class="good_logo"><img src="../imgs/shop/good_logo.jpg" /></a><p class="p1"><span>[极速免税]</span><a href="javascript:;">COSMOMONSTER小怪兽水漾防晒霜</a></p><p class="p2">   容量：<span>50ml</span></p></div></td><td class="good_price"><div><p class="price_now">59.00</p><p class="price_past">99.00</p></div></td><td class="good_count"><div class="plus_btn"><div><span class="plus_btn_l">-</span><input type="text"   class="good_many" value="0"/><span class="plus_btn_r">+</span></div></div></td><td class="good_save"><div class="save_money"><p class="money_total" ></p><p class="save_p2"><span class="save_total"></span></p></div></td><td class="good_del"><div><a href="javascript:;" class="good_del_btn"></a></div></td></tr>')
//		var past=$('.r_price_2 i').html();
//		var now=$('.r_price_1 i').html();
//		//console.log(past);
//		$.cookie('name','这是一个名字')
//		$.cookie('past_price',past)
//		$.cookie('now_price',now)
		
//		$.cookie('count',num)
		
		
		
		
	})
	
	
	
	//引底部
	$('#detail_footer').load('footer.html')
})
