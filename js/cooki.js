//创建cookie
function setCookie(name,value,exp){
	//创建一个cookie需要有"name=value"名直对，还要有有效时间
	//document.cookie="name=value;expires=exp;"
	var myDate=new Date();
	myDate.setDate(myDate.getDate()+exp)
	var cookieText=encodeURIComponent(name)+"="+encodeURIComponent(value);
	cookieText+=";expires="+myDate;
	document.cookie=cookieText;
}
//读取cookie
function getCookie(name){
	var cookieText=decodeURIComponent(document.cookie);          
	var cookieArr=cookieText.split("; ");
	var cookieObj={};
	for (var i=0;i<cookieArr.length;i++) {
		var arr=cookieArr[i].split("=");
		cookieObj[arr[0]]=arr[1] 
	}
	return cookieObj[name];//把对象当做函数的返回值
}
//删除cookie
function delCookie(name){
	var exp=new Date();
	var cookie_val=getCookie(name);
	if(cookie_val[name]!=undefined){
		document.cookie=name+"="+cookie_val+";expires"+exp.toGMTString();
	}
}
