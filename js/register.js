$(function(){
	//引用头部
	$('#re_header').load('login_header.html')
	
	$('.onfocus').focus(function(){
		$(this).siblings().css('display','block')
	})
	$('.onfocus').blur(function(){
		$(this).siblings().css('display','none')
	})
	//===================用户名手机验证
	$('.blur').blur(function(){
		$(this).siblings().css('color','red')
	})
	$('.blur').focus(function(){
		$(this).siblings().css('color','#999')
	})
	$('#user_log').blur(function(){
		var phone =$('#user_log').val()
	    if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){ 
			$(this).siblings().css('display','block')
			$(this).siblings().html('手机号码有误，请重填')
	        return false; 
	    } 
	})
	$('#user_log').focus(function(){
		$(this).siblings().css('display','block')
		$(this).siblings().html('请输入11位手机号码')
	})
	
	//==============6位数字验证码
	$('#check_num').blur(function(){
		var phone =$('#check_num').val()
		 if(!(/^\d{6}$/.test(phone))){ 
			$(this).siblings().css('display','block')
			$(this).siblings().html('验证码错误，请重填')
	        return false; 
	    } 
	})
	$('#check_num').focus(function(){
		$(this).siblings().css('display','block')
		$(this).siblings().html('请输入6位数字验证码')
	})
	//================密码验证
	$('#user_pwd').blur(function(){
		var phone =$('#user_pwd').val()
		 if(!(/^[a-z0-9]{6,16}$/.test(phone))){ 
			$(this).siblings().css('display','block')
			$(this).siblings().html('请输入6~16位字母加数字或符号组合的密码')
	        return false; 
	    } 
	})
	$('#user_pwd').focus(function(){
		$(this).siblings().css('display','block')
		$(this).siblings().html('6-16个字符，建议使用字母加数字或符号组合')
	})
	
	//密码再次验证
	$('#pwd_check').blur(function(){
		var phone=$('#pwd_check').val()
		var phone2 =$('#user_pwd').val()
		if (phone!==phone2) {
			$(this).siblings().css('display','block')
			$(this).siblings().html('两次输入密码不一致！')
		}
	})
	$('#pwd_check').focus(function(){
			$(this).siblings().css('display','block')
			$(this).siblings().html('请再次输入密码')
	})
	
	
	
	
	$('.re_usertips').hover(function(){
		$(this).css('text-decoration','underline')
	},function(){
		$(this).css('text-decoration','none')
	})
	$('.re_submit_btn input').hover(function(){
		$(this).css('background','#F1185F')
	},function(){
		$(this).css('background','#F8296D')
	})
	
	//引用底部
	$('#re_footer').load('login_footer.html')
	
	
	 $("input[type=submit]").click(function(){
		   // alert("aaa");
		   var name= $('.user_name').val();
		   var pwd = $('.user_passwd').val();
		   // alert(name);
		   // alert(pwd)
		   $.ajax({
		     url:"http://bokanappapi.sinaapp.com/HQNews/user/userregister.php",
			 data:{username:name,password:pwd},
			 dataType:"json",
			 success:function(msg){
			   if(msg.code==400){
			     alert(msg.data.msg);
			   }else if(msg.code==200){
			     alert("注册成功");
				 window.location="login.html";
			   }
			   
			 },
			 error:function(err){
			   //alert(err.code)
			   console.log(err);
			 }
		   });
		});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})