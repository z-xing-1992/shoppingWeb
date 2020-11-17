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
//------------------------------------------
var cook=getCookie("usName");
var arr=JSON.parse(getCookie(cook));
console.log(arr)
var ul=document.getElementById("liebiaos")
for (var i=0;i<arr.length;i++){
			var li=document.createElement("li");
			li.innerHTML="<input type='checkbox' name='chek' class='chck' value='' />"+
	 			"<img src='"+arr[i].g_img+"'/>"
	 			+"<p>"+arr[i].g_name+"</p>"+"<p id='danjia'>"+arr[i].g_price+"</p>"+	 			
	 			"<p>"+
	 			"<span class='jian'>-</span>"+
				"<input type='text' name='' id='amount'"+ "value="+arr[i].num +">"
				+"<span class='jia'>+</span>"+
				"</p>"+"<p id='zongjia'>"+arr[i].g_price*arr[i].num+".00" +  "</p>"+"<p class='shan'  onclick='fun03(this.id)'  id='"+arr[i].g_ig+"'>删除</p>"
	 			ul.appendChild(li);	 						
}
//----------------------------------------------------------------------------------------------上面是获取cookie渲染
			function fun03(id){
				var flag=confirm("你确定要删除吗")
				if(flag){
					var shan=document.getElementById(id);
				shan.parentElement.remove();
				for (var i=0;i<arr.length;i++) {
					if(arr[i].g_ig==id){
						arr.splice(i,1)
					}
				}				
				var date=new Date();
				date.setDate(date.getDate()+10);
				setCookie(cook,JSON.stringify(arr),date.toGMTString());																
				}				
		}
//-------------------------------------------------------------------------------------------上面是删除重新建立cookie
		var jia=document.getElementsByClassName("jia")
		for (var i=0;i<jia.length;i++) {
		jia[i].onclick=function(){
			var price=this.parentNode.previousElementSibling.innerHTML
			var xiaoji=this.parentNode.nextElementSibling.innerHTML
			var pru=this.parentNode.previousElementSibling.previousElementSibling.innerHTML
			for (var j=0;j<arr.length;j++){
				if(arr[j].g_name==pru){
					arr[j].num++;
					var date=new Date();
					date.setDate(date.getDate()+10);
					setCookie(cook,JSON.stringify(arr),date.toGMTString());
					var tt=JSON.parse(getCookie(cook))
					this.previousElementSibling.value=tt[j].num
					this.parentNode.nextElementSibling.innerHTML=price*this.previousElementSibling.value+".00"
				}				
			}	
		}
	}
//---------------------------------------------------------------上面试加法	
	
	
		var jian=document.getElementsByClassName("jian")
		for (var i=0;i<jian.length;i++) {
		jian[i].onclick=function(){
			var price=this.parentNode.previousElementSibling.innerHTML
			var xiaoji=this.parentNode.nextElementSibling.innerHTML
			var pru=this.parentNode.previousElementSibling.previousElementSibling.innerHTML
			for (var j=0;j<arr.length;j++){
				if(arr[j].g_name==pru){
					if(arr[j].num<=1){
						alert("不能再减了")
					}else{
						arr[j].num--;
						var date=new Date();
						date.setDate(date.getDate()+10);
						setCookie(cook,JSON.stringify(arr),date.toGMTString());
						var tt=JSON.parse(getCookie(cook))
						this.nextElementSibling.value=tt[j].num
						this.parentNode.nextElementSibling.innerHTML=price*this.nextElementSibling.value+".00" 
					}
					
				}				
			}	
		}
	}
	
//------------------------------------------------------------------上面试减法	
		var spp=document.getElementById("pricee");
		var ckAll=document.getElementById("ckAll")
		var chck=document.getElementsByClassName("chck");

		function click(check){
			check.onclick=function(){
				if(check.checked==true){
				var money=0;
				for (var i=0;i<chck.length;i++) {
					chck[i].checked=true;
				money+=parseInt(arr[i].num*arr[i].g_price)
				}
				spp.innerHTML=money.toFixed(2);
			}else{
				for (var i=0;i<chck.length;i++) {
					chck[i].checked=false;
					spp.innerHTML="0.00"
				}
			}		
		}
								  
	}
click(ckAll);

			function checkst(){
				var chck=document.getElementsByClassName("chck");
				for (let  i=0;i<chck.length;i++) {
					chck[i].onclick=function(){
						if(chck[i].checked==true){
							var xiaoji=parseInt(arr[i].num*arr[i].g_price);
							var couts=spp.innerText;
							spp.innerHTML=xiaoji+Number(couts)+".00";
						}else{
							var xiaoji=parseInt(arr[i].num*arr[i].g_price);
							spp.innerHTML=Number(spp.innerHTML)-xiaoji+".00";
						}
						
					}
				}												
			}

checkst();

