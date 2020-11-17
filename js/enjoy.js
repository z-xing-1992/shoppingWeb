var form=document.getElementsByClassName("form")[0];
form.onsubmit=function(){
	var  ipt=document.getElementById("int");
	var  pas=document.getElementById("pas");
	if(localStorage.getItem(ipt.value)){
		var ar=JSON.parse(localStorage.getItem(ipt.value))
		if(ar["usName"]==ipt.value&&ar["passWord"]==pas.value){
			alert("登陆成功")
			setCookie("usName",ipt.value)
			
		}else{
				alert("帐号或者密码错误")
				return false;
		}
	}else{
			alert("帐号未注册")
			return false
	}	
}
	

	