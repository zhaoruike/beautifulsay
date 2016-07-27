$(function(){
	
	
	
	//数量加减
	
//	console.log(a);
	$('.plus_btn_l').click(function(){
		var a=parseInt($('.good_many').val())
		a--;
		if (a<1) {
			a=0;
		}
		$('.save_p2').html('省'+((parseInt( $('.price_past').html()) - parseInt($('.price_now').html()))*a ).toFixed(2))
		$('.money_total').html((parseInt($('.price_now').html())*a).toFixed(2))
		$('.good_many').val(a)
		$('.good_how_many').html(a)
	})
	$('.plus_btn_r').click(function(){
		var a=parseInt($('.good_many').val())
		a++;
		$('.save_p2').html('省'+((parseInt( $('.price_past').html()) - parseInt($('.price_now').html()))*a ).toFixed(2))
		$('.money_total').html('¥'+(parseInt($('.price_now').html())*a).toFixed(2))
		$('.good_many').val(a)
		$('.good_how_many').html(a)
	})
	
	
	
	//==============全选===========
	
	//删除
	$('.good_del_btn').click(function(){
		$('.shop_list').remove()
		
	})
	
	//清空所选商品
	$('.clear_all').click(function(){
		//$('.shop_list').remove()
		if ($('.check_list').prop('checked')==true) {
			$('.check_list').parent().parent().parent().remove()
		}
		
	})
	
	
	$('.all_check_all').click(function(){
		if ($('.check_box').prop('checked')==false) {
			$('.check_box').prop('checked',true)
		} else{
			$('.check_box').prop('checked',false)
		}
		//$('.check_box').prop('checked',true)
	})
	
	
	
	
	
	$('.good_del_btn').hover(function(){
		$(this).css('backgroundPositionX',-36)
	},function(){
		$(this).css('backgroundPositionX',-7)
	})
	
	
	//清空所选
	$('.all_hover').hover(function(){
		$(this).css({
			color:'#ed145b',
			textDecoration:'underline'
		})
	},function(){
		$(this).css({
			color:'#333',
			textDecoration:'none'
		})
	})
	
	
	
	
	
	
	
	
	
	
	
	$('#shop_footer').load('login_footer.html')
	
	
	
	
})