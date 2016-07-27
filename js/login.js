$(function(){
	
	/*if ($('#phone').checked==checked) {
		$('#easy').checked==false;
	}else{
		$('#phone').checked==false
	}*/
	
	//登录界面验证
	$('.phone_num').focus(function(){
		$(this).siblings('.ifError').css('display','block')
	})
	$('.phone_num').blur(function(){
		$(this).siblings('.ifError').css('display','none')
	})
	
	$('.putong_login').click(function(){
		$('.form_1L').css('display','none')
		$('.form_1R').css('display','block')
		$('.passwd_dad').css('display','block')
		//$('.move_num').css('display','none')
		$('.phone_lo').css('display','none')
		$('.main_right').css('height','583')
		$('.sign').css('height','583')
		$('.shouji_l').css('display','none')
		$('.putong_r').css('display','block')
		$('.log_l').css('display','none')
		$('.log_r').css('display','block')
		$('.check_word').css('display','block')
		$('.footer').css('padding-top','5')
	})
	$('.shouji_login').click(function(){
		$('.sign').css('height','418')
		$('.form_1L').css('display','block')
		$('.form_1R').css('display','none')
		$('.passwd_dad').css('display','none')
		$('.phone_lo').css('display','block')
		$('.main_right').css('height','420')
		$('.shouji_l').css('display','block')
		$('.putong_r').css('display','none')
		$('.log_l').css('display','block')
		$('.log_r').css('display','none')
		$('.check_word').css('display','none')
	})
	$('.check_con_1').hover(function(){
		$(this).css('backgroungPositionY','-92px')
	},function(){
		$(this).css('backgroungPositionY',0)
	})
	
	//验证码换一张
	$('.change').click(function(){
		var a=Math.ceil(Math.random()*6)
		$('.check_con_1').css('backgroundImage','url(../imgs/login/check_word'+a+'.gif)')
		$('.check_con_r').css('backgroundImage','url(../imgs/login/check_word'+a+'.gif)')
	})
	
	$('.check_con_r').click(function(){
		var a=Math.ceil(Math.random()*6)
		$('.check_con_1').css('backgroundImage','url(../imgs/login/check_word'+a+'.gif)')
		$('.check_con_r').css('backgroundImage','url(../imgs/login/check_word'+a+'.gif)')
	})
	
	
	
	
	
	
	
	
	
	
	
	
	 $("input[type=submit]").click(function(){
	 	
		   // alert("aaa");
		   var name= $('#user_info').val();
		   var pwd = $('#pwd_num').val();
		   // alert(name);
		   // alert(pwd)
		   $.ajax({
		     url:"http://bokanappapi.sinaapp.com/HQNews/user/userlogin.php",
			 data:{username:name,password:pwd},
			 dataType:"json",
			 success:function(msg){
			   if(msg.code==400){
			     alert(msg.data.msg);
			   }else if(msg.code==200){
			     alert("登录成功");
				 window.location="index.html";
			   }
			   
			 },
			 error:function(err){
			   //alert(err.code)
			   console.log(err);
			 }
		   });
		});
	
	
	//$.cookie("username",name)
	
	
	
	
	
	
})