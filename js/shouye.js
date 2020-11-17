var lunbo_d=document.getElementsByClassName("lunbo")[0];
	var img=lunbo_d.getElementsByTagName("img")[0];
	var lunbo_d_list=document.getElementsByClassName("lunbo_d_list")[0];
	var sp=lunbo_d_list.getElementsByTagName("span");
	var num=0;  
	var arr=["http://images.sctvgo.com/market/201909/201909221541335996.jpg",
			"http://images.sctvgo.com/market/201909/201909221452534683.jpg",
			"http://images.sctvgo.com/market/201909/201909221412356831.jpg",
			"http://images.sctvgo.com/market/201909/201909221343581083.jpg",
			"http://images.sctvgo.com/market/201909/201909221251075301.jpg",
			"http://images.sctvgo.com/market/201907/201907111708101769.jpg",
			"http://images.sctvgo.com/market/201907/201907111708510138.jpg"	
	]	
for (var i=0;i<sp.length;i++) {
		sp[i].index=i;
		sp[i].onmouseover=function(){
			for (var j=0;j<sp.length;j++) {
					sp[j].className="";
				}
			sp[this.index].className="sp1"
			img.src=arr[this.index];
		}
}	
function autoplay(){
			num++;
			if(num>=arr.length){
				num=0;
			}
			img.src=arr[num];
			clearsp(num);
}
var time=setInterval("autoplay()",3000);
lunbo_d.onmouseover=function(){
	clearInterval(time);
}
lunbo_d.onmouseout=function(){
				time= setInterval("autoplay()",3000);		
}
function clearsp(num){
			for (var j=0;j<sp.length;j++) {
				sp[j].className="";
			}
			sp[num].className="sp1";
}
//-----------------------------------------------------------------------------------------上面是轮播
ajax("xingkong.json",function(data){
		var obj=JSON.parse(data);
		var dli=document.getElementsByClassName("dli")[0];
		var cate=obj["全部商品"]
		for (var i in cate) {
			var dli_list=document.createElement("li")
			dli_list.innerHTML="<h4>"+i+"</h4>"+"<span>"+"</span>"+"<span>"+"</span>"+"<span>"+"</span>"
			dli.appendChild(dli_list)
			var div=document.createElement("div");
			div.className="li_one"
			dli_list.appendChild(div);
			for (var j in cate[i]) {
				var a=document.createElement("a")				
				a.innerHTML=j
				div.appendChild(a)
				a.href="liebiao.html?"+"全部商品" +"#"+encodeURI(a.parentNode.parentNode.children[0].innerHTML)+"="+encodeURI(a.innerHTML)
			}
	}		
		var dli_span=dli.getElementsByTagName("span")
		var set=obj["set"];
		for (var i=0;i<dli_span.length;i++) {
			dli_span[i].innerText=set[i]
		}
//-----------------------------------------------------------------上面是列表选择渲染		
		var live_list=document.getElementsByClassName("live-list")[0];
		var zhibo=obj["今日直播"]				
		for (var i in zhibo){
			var div=document.createElement("div")
			div.className="item-w"
			live_list.appendChild(div);
			div.innerHTML="<img src='"+zhibo[i].imgsrc+"'/>"+
						"<h3>"+zhibo[i].name+"</h3>"+
						"<p class='live-price'>"+"<span >￥</span>"+
						"<span >"+zhibo[i].price+"</span>"+"</p>"	
		}
//--------------------------------------------------------------------上面是今日直播的渲染
		var hot_sale_main=document.getElementsByClassName("hot_sale_main")[0];
		var sichuan=obj["四川特色馆"]["四川"]["特色"]["product"]
		for (var i in sichuan){
			var div=document.createElement("div")
			div.className="hot-list-wrapper"
			hot_sale_main.appendChild(div)
			div.innerHTML="<img src='"+sichuan[i].imgsrc+"'/>"+
						 "<p>"+sichuan[i].name+"</p>"+"<span>"+sichuan[i].title+"</span>"+
			"<div class='hot-list-price'>"+"<span>￥</span>"+"<span>"+sichuan[i].price+"</span>"+"<span>立即抢购</span>"+"</div>"		 
		}
		
		var  hot_list_wrapper= hot_sale_main.getElementsByClassName("hot-list-wrapper")
		var hot_titles=document.getElementsByClassName("hot_titles")[0].innerText;				
		for (var i=0;i<hot_list_wrapper.length;i++) {
			hot_list_wrapper[i].index=i;
			hot_list_wrapper[i].onclick=function(){
				window.location.href="xiangqing.html?"+encodeURI(hot_titles)+"#"+"四川"+"="+"特色"+"/"+"0"+encodeURI(this.index+1);
			}
		}

//------------------------------------------------------------------------上面是四川特色馆	
		var hot_abort=document.getElementsByClassName("hot-abort")[0];
		var xingpin=obj["新品上架"];
		for (var i in xingpin) {
			var div=document.createElement("div");
			div.className="hot-list-abort"
			hot_abort.appendChild(div)
			div.innerHTML="<div class='hot-list-img'>"+"<img src='"+xingpin[i].imgsrc+"'/>"+"</div>"+
						"<p>"+xingpin[i].name+"</p>"+"<span >"+xingpin[i].title+"</span>"+"<div class='hot-abort-price'>"+"<span>￥</span>"+"<span>"	+xingpin[i].price+
						"</span>"+"<span>立即抢购</span>"+"</div>"+"<div class='hot-list-tag'>"+
						"<img src='http://www.sctvgo.com/themes/default/images/icon/new1.png'/>"+
						"</div>"+"</div>"			
		}
//-------------------------------------------------------------------------------上面是新品上架	
		var pro_class_main=document.getElementsByClassName("pro_class_main")[0];
		var shenghuo=obj["生活居家"]["生活"]["居家"]["product"];
		for (var i in shenghuo){
			var div=document.createElement("div");
			div.className="pro-list-wrapper"
			pro_class_main.appendChild(div);
			div.innerHTML="<div class='pro-list-img'>"+"<img src='"+shenghuo[i].imgsrc+"'/>"+"</div>"+"<p>"+shenghuo[i].name+"</p>"+
			"<div class='pro-list-price'>"+"<span>￥</span>"+"<span>"+shenghuo[i].price+
			"</span>"+"<span>立即抢购</span>"
		}
		 
		var  pro_list_img= pro_class_main.getElementsByClassName("pro-list-img")
		var  title=document.getElementsByClassName("new_title")[1].innerText;
		
		
		for (var i=0;i<pro_list_img.length;i++) {
			pro_list_img[i].index=i;
			pro_list_img[i].onclick=function(){
				window.location.href="xiangqing.html?"+encodeURI(title)+"#"+"生活"+"="+"居家"+"/"+"0"+encodeURI(this.index+1);
			}
		}
//-----------------------------------------------------------------------------上面是生活居家	
		var pro_class1_main=document.getElementsByClassName("pro_class1_main")[0];
		var shiping=obj["食品饮料"];
		for (var i in shiping){
			var div=document.createElement("div");
			div.className="pro-list-wrapper"
			pro_class1_main.appendChild(div);
			div.innerHTML="<div class='pro-list-img'>"+"<img src='"+shiping[i].imgsrc+"'/>"+"</div>"+"<p>"+shiping[i].name+"</p>"+
			"<div class='pro-list-price'>"+"<span>￥</span>"+"<span>"+shiping[i].price+
			"</span>"+"<span>立即抢购</span>"
		}
//----------------------------------------------------------------------------上面是食品饮料	
		var pro_class2_main=document.getElementsByClassName("pro_class2_main")[0];
		var liuxing=obj["流行精品"];
		for (var i in liuxing){
			var div=document.createElement("div");
			div.className="pro-list-wrapper"
			pro_class2_main.appendChild(div);
			div.innerHTML="<div class='pro-list-img'>"+"<img src='"+liuxing[i].imgsrc+"'/>"+"</div>"+"<p>"+liuxing[i].name+"</p>"+
			"<div class='pro-list-price'>"+"<span>￥</span>"+"<span>"+liuxing[i].price+
			"</span>"+"<span>立即抢购</span>"
		}
//----------------------------------------------------------------------------------------------------上面是流行精品
		var pro_class3_main=document.getElementsByClassName("pro_class3_main")[0];
		var meirong=obj["美容保健"];
		for (var i in meirong){
			var div=document.createElement("div");
			div.className="pro-list-wrapper";		
			pro_class3_main.appendChild(div);
			div.innerHTML="<div class='pro-list-img'>"+"<img src='"+meirong[i].imgsrc+"'/>"+"</div>"+"<p>"+meirong[i].name+"</p>"+
			"<div class='pro-list-price'>"+"<span>￥</span>"+"<span>"+meirong[i].price+
			"</span>"+"<span>立即抢购</span>"
		}
//--------------------------------------------------------------------------------------------------------上面是美容保健
		var pro_class4_main=document.getElementsByClassName("pro_class4_main")[0];
		var zhubao=obj["珠宝收藏"];
		for (var i in zhubao){
			var div=document.createElement("div");
			div.className="pro-list-wrapper";
			pro_class4_main.appendChild(div);
			div.innerHTML="<div class='pro-list-img'>"+"<img src='"+zhubao[i].imgsrc+"'/>"+"</div>"+"<p>"+zhubao[i].name+"</p>"+
			"<div class='pro-list-price'>"+"<span>￥</span>"+"<span>"+zhubao[i].price+
			"</span>"+"<span>立即抢购</span>"
		}
//---------------------------------------------------------------------------------------------------------上面是珠宝收藏
})
		
var rightArrow=document.getElementById("rightArrow");
var floatDivBoxs=document.getElementById("floatDivBoxs");
var flag=true
 	rightArrow.addEventListener("click",function(){		
 		if(flag){
 		this.style.backgroundColor="rgb(255, 204, 51)";
		this.style.right="175px";
		floatDivBoxs.style.right="0px";
		flag=false;
 		}else{
 		this.style.backgroundColor=" rgb(102, 102, 102)";
		this.style.right="0px";
		floatDivBoxs.style.right="-175px";
		flag=true;
 		}
 	});
 //--------------------------------------------------------上面是右边隐藏
 	var bbtn=document.getElementById("xiding");
 	var xiding=document.getElementsByClassName("xiding")[0]
 	var scrollY=0;
 	window.onscroll=function(){
 		scrollY=document.body.scrollTop||document.documentElement.scrollTop;
 		if(scrollY>=500){
 			bbtn.style.display="block";
 		}else{
 			bbtn.style.display="none";
 		}
 		if(scrollY>=115){
 			xiding.style.position="fixed";
 			xiding.style.top="0"
 			xiding.style.zIndex="999"
 			xiding.style.backgroundColor="#DCDCDC"
 		}else{
 			xiding.style.zIndex="0"
 			xiding.style.backgroundColor="white"
 			xiding.style.position=""
 		}
 		
 	}	
 	var timess=null;
 	bbtn.onclick=function(){
 		timess=setInterval(function(){
 			window.scrollBy(0,-80);
 			if(scrollY==0){
 				clearInterval(timess);
 				bbtn.style.display="none"
 			}
 		},50)
 		
 	}
//---------------------------------------------------------------------上面是一键置顶 
var user=getCookie("usName");
var zx=document.getElementsByClassName("zx")[0];
if(user==undefined){
	zx.innerText="您好，请登录"
}else{
	zx.innerText=user;
}
