var form=document.getElementsByClassName("myform")[0];
form.onsubmit=function(){
	var mobile=document.getElementById("iphone");
	var pass=document.getElementById("pass");
	var passwords=document.getElementById("rpass")
	var num=document.getElementById("num");
	var nums=document.getElementById("ipnum");
	var ppp4=document.getElementsByClassName("ppp4")[0];
	var ppp5=document.getElementsByClassName("ppp5")[0];
	var reg=/^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/;
	var reg1=/^[a-z,A-Z,0-9]{4,10}$/;
	if(reg.test(mobile.value)==false){
		document.getElementsByClassName("ppp1")[0].innerHTML="输入错误,请输入11位数字"
		return false
	}else if(reg1.test(pass.value)==false){
		document.getElementsByClassName("ppp2")[0].innerHTML="输入有误，请输入4-10位数字和英文";
		return false
	}else if(pass.value!=passwords.value){
		document.getElementsByClassName("ppp3")[0].innerHTML="两次密码不一致";
		return false
	}else if(num.value!=ppp4.innerText){
		document.getElementsByClassName("ppp6")[0].innerHTML="输入错误";
		return false
	}else if(nums.value!=ppp5.innerText){
		document.getElementsByClassName("ppp7")[0].innerHTML="输入错误";
		return false
	}else if(localStorage.getItem(mobile.value)){
		alert("该用户名已被注册")
		return false
	}else{
		var arr = {                          
					"usName": mobile.value,			      
					"passWord": pass.value
				   }
		localStorage.setItem(arr["usName"],JSON.stringify(arr))
		alert("注册成功")
	}
}	



//-------------------------------------------------------下面是单个判断市区焦点事件
function  checkmobile() {
		var mobile=document.getElementById("iphone");
		var reg=/^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/;	
		mobile.onblur=function(){
			if(reg.test(mobile.value)==false){
				document.getElementsByClassName("ppp1")[0].innerHTML="输入错误,请输入11位数字"
				return false;
			}else{
				document.getElementsByClassName("ppp1")[0].innerHTML=""
			}
		}
		
	}
	checkmobile();
function checkpass1(){
	var pass=document.getElementById("pass");
	var reg=/^[a-z,A-Z,0-9]{4,10}$/;
	pass.onblur=function(){
	if(reg.test(pass.value)==false){
		document.getElementsByClassName("ppp2")[0].innerHTML="输入有误，请输入4-10位数字和英文";
		return false;
		}else{
				document.getElementsByClassName("ppp2")[0].innerHTML=""
		}
	}
}
	checkpass1();
function checkpasswords(){
	var pass=document.getElementById("pass");
	var passwords=document.getElementById("rpass");
	passwords.onblur=function(){			
	if(pass.value!=passwords.value){
		document.getElementsByClassName("ppp3")[0].innerHTML="两次密码不一致";
		return false;
		}else{
				document.getElementsByClassName("ppp3")[0].innerHTML=""
		}
	}	
}
checkpasswords();
function number(){
	var num=document.getElementById("num");
	var ppp4=document.getElementsByClassName("ppp4")[0];
	ppp4.onclick=function(){
		var x= Math.floor(Math.random()*10000)
		ppp4.innerHTML=x
	}
	num.onblur=function(){
		if(num.value!=ppp4.innerText){
			document.getElementsByClassName("ppp6")[0].innerHTML="输入错误";
			return false;
		}else{
				document.getElementsByClassName("ppp6")[0].innerHTML=""
		}
	}
}
number();
function ipnumber(){
	var num=document.getElementById("ipnum");
	var ppp5=document.getElementsByClassName("ppp5")[0];
	ppp5.onclick=function(){
		var x= Math.floor(Math.random()*10000)
		ppp5.innerHTML=x
	}
	num.onblur=function(){
		if(num.value!=ppp5.innerText){
			document.getElementsByClassName("ppp7")[0].innerHTML="输入错误";
			return false;
		}else{
				document.getElementsByClassName("ppp7")[0].innerHTML=""
		}
	}
}
ipnumber();

	
	

	
	
	
	  
	







