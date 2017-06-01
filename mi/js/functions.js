function $(selector,ranger=document){
	let type=typeof selector;//判断类型
	if(type=='string'){//字符串类型
		let select=selector.trim();
		let first=select.charAt(0);
		if(first=='.'){
			return ranger.getElementsByClassName(select.substring(1));
		}else if(first=='#'){
			return document.getElementById(select.substring(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
			return ranger.getElementsByTagName(select);

		}
	}
	if(type=='function'){
		window.onload=function(){
			selector()
		}
	}
}
//浏览器兼容
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}else{
		return objcurrentStyle[attr];
	}
}

//设置或获取某一个元素的内容
//obj 指定的对象
//content 设置的内容
//没有 获取
//有 设置
function html(obj,content){
	if(content){
		//设置
		obj.innerHTML=content
	}else{
		//获取
		return obj.innerHTML
	}
}