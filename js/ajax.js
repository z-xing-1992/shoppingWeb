var ajax=function ajaxs(url,fn){
	var req = new XMLHttpRequest();  // 创建请求对象
	if(window.XMLHttpRequest){     //判断处理兼容问题
		req=new XMLHttpRequest();
	}else{
		req=new ActiveXObject("Microsoft.XMLHTTP");
	}
	req.open("GET",url,true);  //打开请求   （"请求方式"，"路径"，"异步"）
	req.onreadystatechange=function(){  //处理回调函数
		if(req.readyState===4&&req.status===200){
			fn(req.responseText);  //已经成功发送请求并且返回 数据
		}
	}
	req.send(); //发送请求
}
