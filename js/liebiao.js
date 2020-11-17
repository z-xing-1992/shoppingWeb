var marginTop=0;//记录第一个元素距离顶端的位置
var flag=false;//鼠标悬浮暂停 否则继续
setInterval(function(){
			if(flag) return;
			marginTop--;
			var firstLi=$("#express li:first")	
			 var h=firstLi.height();//得到li的高度
			 //每60毫秒移动一个li 如果移动的位置等于li高度重新赋值
			 if(-marginTop==h){
			 	firstLi.css("margin-top",0);
			 	marginTop=0;//第一个li 还有
			 	$("#express").append(firstLi)
			 }else{
			 	firstLi.css("margin-top",marginTop)
			 }
		},70);		
		//鼠标悬浮
		$("#express").hover(
			function(){flag=true;},
			function(){flag=false})
		
//--------------------------------------------------------------------------------------------------------------//上面是顶部文字的轮动			
function kk(){
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
}
 kk()

//-----------------------------------------------------上面是左右隐藏置顶 
	var bbtn=document.getElementById("xiding");
 	var scrollY=0;
 	window.onscroll=function(){
 		scrollY=document.body.scrollTop||document.documentElement.scrollTop;
 		if(scrollY>=500){
 			bbtn.style.display="block";
 		}else{
 			bbtn.style.display="none";
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
 	};
 //--------------------------------------------------------------------------------上面是置顶
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
				a.className="add"
				div.appendChild(a)				
			}
	}		
		var dli_span=dli.getElementsByTagName("span")
		var set=obj["set"];
		for (var i=0;i<dli_span.length;i++) {
			dli_span[i].innerText=set[i]
		}
//----------------------------------------------------------------------------------下面是列表页选择变化		
		var add=document.getElementsByClassName("add")
		for (var i=0;i<add.length;i++) {
			add[i].onclick=function(){
				window.location.reload()
				window.location.href="liebiao.html?"+"全部商品" +"#"+encodeURI(this.parentNode.parentNode.children[0].innerHTML)+"="+encodeURI(this.innerHTML)
				window.location.reload()
			}
		}
		
//------------------------------------------------------------------		
		var loc = location.href;
		var n1=loc.split("?")		
		var n2=n1[1].split("#")    
		var n3=n2[1].split("=")		
		var locts=document.getElementById('locts')
		var loct=document.getElementById("loct")
		var selectiontitle=document.getElementsByClassName("selectiontitle")[0];
		locts.innerHTML=decodeURI(n3[0]);
		selectiontitle.children[0].innerHTML=decodeURI(n3[0]);
		loct.innerHTML=decodeURI(n3[1]);
		var lei=cate[decodeURI(n3[0])];
		var pai=lei[decodeURI(n3[1])];
		console.log(pai)
		var filter_lists=document.getElementsByClassName("filter-lists")[0];
		for (var i in pai["brand"]) {
			console.log(i)
			var li=document.createElement("li");
			li.className="list_f2";
			filter_lists.appendChild(li)
			li.innerHTML="<span>"+i+"：</span>"
			for (var j=0;j<pai["brand"][i].length;j++) {
				var a=document.createElement("a");
				li.appendChild(a);
				a.innerHTML=pai["brand"][i][j];
			}
		}
		var pro_list_main=document.getElementsByClassName("pro_list_main")[0];
		for (var i in pai["product"]) {
			var div=document.createElement("div");
			div.className="pro_list_link"
			pro_list_main.appendChild(div);
			div.innerHTML="<a href=''>"+"<img src='"+pai["product"][i].imgsrc+"'/>"+"</a>"+"<div class='pro_price'>"+"<span>"+"￥"+"<b>"+pai["product"][i].price+"</b>"+
			"</span>"+"</div>"+"<div class='pro-name-desc'>"+"<span>"+pai["product"][i].name+"</span>"+"</div>"+"<div class='pro-vendor'>"+"<span style='background: url(http://www.sctvgo.com/themes/default/images/logo/star-logo.png) no-repeat;'></span>"
			+"星空自营"+"</div>"+"<div class='pro_list_cart'>"+"<div class='pro_list_cart_left'>"+"加入购物车"+"</div>"+"	<div class='pro_list_cart_right'>"+
			"加入收藏"+"</div>"+	"</div>"			
		}
		
		
		var  pro_list_links=document.getElementsByClassName("pro_list_link")
		for (var i=0;i<pro_list_links.length;i++){
			pro_list_links[i].index=i
			pro_list_links[i].onclick=function(){
				window.location.href="xiangqing.html?"+n2[0]+"#"+n3[0]+"="+n3[1]+"/"+"0"+encodeURI(this.index+1)
			}
		}
//---------------------------------------------------------------------------------下面是排序		
		var coundt=document.getElementById("counds");
		var pro_list_main=document.getElementsByClassName("pro_list_main")[0];
		var product_list=pro_list_main.children;
		console.log(product_list.length)
		function jiage(){
			var arr_product=[];
			for (var i=0;i<product_list.length;i++) {
				arr_product.push(product_list[i]);
			}
			arr_product.sort(paixu);
			function paixu(x,y){
				return x.getElementsByTagName("b")[0].innerText-y.getElementsByTagName("b")[0].innerText;
			}
			for(var j=0;j<arr_product.length;j++){
			pro_list_main.appendChild(arr_product[j]);
		}

	}
		coundt.onclick=function(){
			jiage();
		}
	})
 
//-----------------------------------------------------------------------------------------------------------
var user=getCookie("usName");
console.log(user)
var zx=document.getElementsByClassName("zx")[0];
if(user==undefined){
	zx.innerText="您好，请登录"
}else{
	zx.innerText=user;
}