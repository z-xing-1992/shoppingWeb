function hua(){
var spec_left=document.getElementsByClassName("spec-left")[0];
var spec_right=document.getElementsByClassName("spec-right")[0];
var spec_list_wrap=document.getElementsByClassName("spec-list-wrap")[0];
var uls=spec_list_wrap.getElementsByTagName("ul")[0];
var time;
var times;
function right(){
	uls.style.left=uls.offsetLeft-6+"px"
	if(uls.offsetLeft%72==0){
		clearInterval(time)
	}
}
function left(){
	uls.style.left=uls.offsetLeft+6+"px"
	if(uls.offsetLeft%72==0){
		clearInterval(times)
	}	
}
spec_right.onclick=function(){
	clearInterval(time)
	time=setInterval(right,10)
}
spec_left.onclick=function(){
	clearInterval(times)
	times=setInterval(left,10)
}
};
hua();
//---------------------------------------------------上面是滑动

function fangDa(){
var jqzoom=document.getElementsByClassName("jqzoom")[0];
var mask=document.getElementById("mask");
var zoomdiv=document.getElementsByClassName("zoomdiv")[0];
jqzoom.onmouseover=function(){
	mask.style.display="block"
	zoomdiv.style.display="block"
}
jqzoom.onmouseout=function(){
	mask.style.display="none"
	zoomdiv.style.display="none"
}
jqzoom.onmousemove=function(e){  //鼠标移动事件
	e=e||window.e   //兼容
	var x=e.pageX-this.offsetLeft; //得到鼠标的位置  这个是对他父元素来做的
	var y=e.pageY-this.offsetTop;
	var maskx=x-mask.offsetWidth/2;
	var masky=y-mask.offsetHeight/2; //盒子 x y 轴的位置
	var maxleft=jqzoom.offsetWidth-mask.offsetWidth;
	var maxtop=jqzoom.offsetHeight-mask.offsetHeight;
	//遮挡层不能溢出 jqzoom盒子 得到最大的x轴移动距离 y轴距离
	if(maskx<=0){//判断位置
		maskx=0  //赋值 不然出去
	}else if(maskx>maxleft){
		maskx=maxleft;
	}
	if(masky<=0){
		masky=0
	}else if(masky>maxtop){
		masky=maxtop;
	}
	mask.style.left=maskx+"px";
	mask.style.top=masky+"px";
	var bigImg=document.getElementsByClassName("bigImg")[0];//获取大图片的元素 
	var bigmax=bigImg.offsetWidth-zoomdiv.offsetWidth;//大图片的宽度-盒子的宽度 得到大图片的最大移动距离
	var bigx=maskx*bigmax/maxleft;
	var bigy=masky*bigmax/maxtop;
	bigImg.style.left=-bigx+"px";//重新给大图赋值
	bigImg.style.top=-bigy+"px";
	/**
	 * 大图片的移动距离=遮挡层的移动距离*大图最大的移动距离/遮挡层最大移动距离
	 */	
}
};
fangDa();
//-------------------------------------------------------------上面是放大镜
function jiaJian(){
  var pro_qty=document.getElementsByClassName("pro_qty")[0];
  var iptn=document.getElementById("iptn");
  var sp=pro_qty.getElementsByTagName("span");					 
	sp[1].onclick=function(){
		var iptn_val=parseInt(iptn.value) 
		iptn.value=iptn_val+1				
}	 
    sp[0].onclick=function(){
		var iptn_val=parseInt(iptn.value) 
		if (iptn_val<=1) {
				iptn.value=1
		}else{
			iptn.value=iptn_val-1
		}	 
}
};
jiaJian()
//--------------------------------------------------------------------加减
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
};

//------------------------------------------------------------------置顶
function zhiDing(){
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
 		
 	}
};
zhiDing()
//-------------------------------------------------------------------------
function cok(){
var user=getCookie("usName");
var zx=document.getElementsByClassName("zx")[0];
if(user==undefined){
	zx.innerText="您好，请登录"
}else{
	zx.innerText=user;
}	
}
cok();
//---------------------------------------------------------------------------
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
			}
	}		
		var dli_span=dli.getElementsByTagName("span")
		var set=obj["set"];
		for (var i=0;i<dli_span.length;i++) {
			dli_span[i].innerText=set[i]
		}
	
//-----------------------------------------------------------------------列表页的渲染
		var href=location.href;
		var dalei=href.split("?")
		var n1=dalei[1].split("#")
		var n2=n1[1].split("=")
		var n3=n2[1].split("/")
		
		var diyi=decodeURI(n1[0])
		var dier=decodeURI(n2[0])
		var disan=decodeURI(n3[0])
		var disi=decodeURI(n3[1])
		var shuju=obj[diyi][dier][disan]["product"][disi]               
 			console.log(shuju)
 //--------------------------------------------------------------------------------	下面是选择尺寸，容量等		
 		var  kts=shuju["cotch"][1]
		var pro_sku_text=document.getElementsByClassName("pro_sku_text")[0];
		var dd=pro_sku_text.getElementsByTagName("dd");
			for (var i=0;i<dd.length;i++) {	
				dd[i].onclick=function(){
				for (var j=0;j<dd.length;j++) {
					dd[j].className="";			
				}
				this.className="activv";
				kts=this.innerText
			}	
		}
//--------------------------------------------------------------------------------			
		var jqzoomss=document.getElementsByClassName("jqzoomss")[0];
		var bigImg=document.getElementsByClassName("bigImg")[0]
		jqzoomss.src=shuju.imgsrc;
		bigImg.src=shuju.imgsrc;
		var spec_list_wrap=document.getElementsByClassName("spec-list-wrap")[0];
		var uls=spec_list_wrap.getElementsByTagName("ul")[0];
		for (var i=0;i<shuju.detail.length;i++ ) {
			var li=document.createElement("li")
			uls.appendChild(li);
			li.innerHTML="<img src='"+shuju.detail[i]+"'/>"
		}
		var lisk=uls.getElementsByTagName("li");
		for (var j=0;j<lisk.length;j++) {
			lisk[j].index=j
			lisk[j].onclick=function(){
				jqzoomss.src=shuju.detail[this.index];
				bigImg.src=shuju.detail[this.index];				
			}
		}
		var pro_name_h=document.getElementsByClassName("pro_name_h")[0];
		var pro_code_name=document.getElementsByClassName("pro_code_name")[0];
		var pricess1=document.getElementsByClassName("pricess1")[0];
		var pro_hot_l_content=document.getElementsByClassName("pro_hot_l_content")[0];
		var pro_note=document.getElementsByClassName("pro_note")[0];
		var pro_sku_tt=document.getElementsByClassName("pro_sku_tt")[0];
		var dt=pro_sku_tt.getElementsByTagName("dt")[0]
		var dd=pro_sku_tt.getElementsByTagName("dd");
		pro_name_h.innerHTML=shuju.name;
		pro_code_name.innerHTML=shuju.code;
		pricess1.innerHTML=shuju.price;
		pro_note.innerHTML=shuju.present;
		dt.innerHTML=shuju.cotch[0]
		dd[0].innerHTML=shuju.cotch[1]+"<i></i>"
		dd[1].innerHTML=shuju.cotch[2]+"<i></i>"
		dd[2].innerHTML=shuju.cotch[3]+"<i></i>"
		dd[3].innerHTML=shuju.cotch[4]+"<i></i>"
		var  hotsale=shuju.hotsale;
		for (var i in hotsale){
			var li=document.createElement("li");
			pro_hot_l_content.appendChild(li)
			li.innerHTML="<p>"+"<img src='"+hotsale[i].imgsrc+"'/>"+"</p>"+
						 "<p>"+hotsale[i].name+"</p>"+"<p>"+hotsale[i].price+"</p>"
			
		}
//--------------------------------------------------------------------------------------		
		var con_two_1=document.getElementsByClassName("con_two_1")[0];
		var  cct1=shuju["contwo1"];
		for (var i=0;i<cct1.length;i++) {
			var span=document.createElement("span")
			con_two_1.appendChild(span);
			span.innerHTML=cct1[i]
		}
		var con_two_2=document.getElementsByClassName("con_two_2")[0];
		var con_two_2_ul=con_two_2.getElementsByTagName("ul")[0];
		var  cct2=shuju["contwo2"];
		for (var i=0;i<cct2.length;i++) {
			var li=document.createElement("li");
			con_two_2_ul.appendChild(li)
			for (var j=0;j<cct2[i].length;j++ ) {
				var span=document.createElement("span")
				span.innerHTML=cct2[i][j]
				li.appendChild(span)
			}
		}
		var con_two_3=document.getElementsByClassName("con_two_3")[0];
		var  cct3=shuju.contwo3;
		for (var i in cct3 ) {
			var span=document.createElement("span")
			span.innerHTML=cct3[i];
			con_two_3.appendChild(span)
		}
		var  cct4=shuju.contwo4;
		var con_two_4=document.getElementsByClassName("con_two_4")[0];
		var spp=document.createElement("span")
		con_two_4.appendChild(spp)
		spp.innerHTML=cct4[0]+"</br>"+cct4[1]+"</br>"+cct4[2]
		var  cct5=shuju.contwo5;
		var con_two_5=document.getElementsByClassName("con_two_5")[0];
		var spp1=document.createElement("span")
		con_two_5.appendChild(spp1)
		spp1.innerHTML=cct5[0]					
//-----------------------------------------------------------------------------------		
	function shopping(){
	var go=document.getElementById("go");
	var g_img=document.getElementsByClassName("jqzoomss")[0].src	
	var g_name=document.getElementsByClassName("pro_name_h")[0].innerText;	
	var g_price=document.getElementsByClassName("pricess1")[0].innerHTML;	
	var us=getCookie("usName");
	go.onclick=function(){
	var arr=getCookie(us)?JSON.parse(getCookie(us)):[];
for (i=0;i<arr.length;i++) {
		if(arr[i].g_name==g_name+kts){
		arr[i].num++;
		alert("商品已存在，数量增加")
		break;   
	}
}	
if(i==arr.length){ 
	var goods={
	"g_ig":kts,
	"g_img":g_img, 
	"g_name":g_name+kts,
	"g_price":g_price,
	"num":1
	}
	arr.push(goods);
	alert("商品添加成功")
}
var d=new Date();   
	d.setDate(d.getDate()+10);
	setCookie(us,JSON.stringify(arr),d.toGMTString());
}
}
shopping();
});	
//-----------------------------------------------------------------------------------
function qieHuang(){
var prodetail_top=document.getElementsByClassName("prodetail_top")[0];
var prodetailli=prodetail_top.getElementsByTagName("li");
var prodetail_box=document.getElementsByClassName("prodetail_box")[0];
var prodetaildiv=prodetail_box.getElementsByTagName("div")
	for (var i=0;i<prodetailli.length;i++) {
		prodetailli[i].index=i;
		prodetailli[i].onclick=function(){
			for (var j=0;j<prodetailli.length;j++) {
				prodetailli[j].className="";
				prodetaildiv[j].style.display="none";
			}
			prodetailli[this.index].className="hove";
			prodetaildiv[this.index].style.display="block";
		}
	}
};
qieHuang()




