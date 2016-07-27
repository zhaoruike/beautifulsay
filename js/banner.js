$(document).ready(function(){
	//引入头部
	$('#banner_head').load('head.html')
//	var json={text:'兰蔻 (Lancome）UV防晒CC霜30ml，清透自然无暇美肌，从此诞生！',}
//	var price={price:'329'}
	var arrText=['兰蔻 (Lancome）UV防晒CC霜30ml，清透自然无暇美肌，从此诞生！','水宝宝水嫩防晒乳SPF30+ 2支，保湿+均衡肤色，出门一瓶搞定！','水宝宝(Coppertone)水嫩便携两件套，给你每天高倍防护！','高倍数防晒，独特的喷雾设计，让你轻松开启变白大门！','香蕉船(Banana Boat)运动型防晒霜 8oz ，一瓶搞定上班、健身、出游！','无惧烈日，享受夏日阳光！水宝宝(Coppertone)透气防晒乳SPF30++ 8oz。','兰蔻（Lancome)轻呼吸防晒清爽乳霜10ml，给肌肤带来防护效果。','兰嘉丝汀隔离霜SPF30+，隔离紫外线，给肌肤一个隐形防护面罩！']
	console.log(arrText.length);
	var arrPrice=[329,69.9,55,89.9,79.9,99,49.9,159]
	var tem='';
	var a,b;
	for (var i = 0; i < 95; i++) {
		a=Math.floor(Math.random()*(arrText.length));
		b=Math.floor(Math.random()*(arrPrice.length));
		tem='<li><div class="img_logo"></div><a href="details.html"target="_blank" class="img_con"><img src="../imgs/banner_img/img'+(i+2)+'.jpg"</a><div class="img_div"><div class="img_div_list"><a href="javascript:;">'+arrText[a]+'</a></div><div class="img_div_price"><span><strong>¥</strong>'+arrPrice[b]+'</span><a href="javascript:;" class="goTosee"></a></div></div></li>'
		$(".img_ul").append(tem);
	}
	
	$('.img_ul li').hover(function(){
		$(this).css('border','1px solid red')
	},function(){
		$(this).css('border','1px solid #f1f1f1')
	})
	
	//引入底部
	$('#banner_foot').load('footer.html')
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})