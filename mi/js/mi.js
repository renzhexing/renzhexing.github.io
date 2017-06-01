window.onload=function(){
	let hLia=document.querySelectorAll('.headBox li>a');
	for(let i=0;i<hLia.length;i++){
		hLia[i].onmouseenter=function(){
			hLia[i].style.color='#F2FFDF';
		}
		hLia[i].onmouseleave=function(){
			hLia[i].style.color='#B0ACAC';
		}
	}
	let headRight=$('.head-right')[0];
	let headRightA=document.querySelectorAll('.headBox>.head-right>a');
	let headRightSon=document.querySelectorAll('.headBox>.head-right>.headRightSon');
	headRight.onmouseenter=function(){
		headRight.style.background='#FFFFFF';
		headRightA[0].style.color='#FF6700';
		headRightSon[0].style.height='98px';
	}
	headRight.onmouseleave=function(){
		headRight.style.background='#424242';
		headRightA[0].style.color='#A9A9A9';
		headRightSon[0].style.height='0';
	}
	
	// 状态底
	let sdsul=document.querySelector('.statusDownSonThree');
	let sds=document.querySelector('.statusD');
	let sdsli=document.querySelectorAll('.statusDownSonThree>li');
	console.log(sdsli)
	let sdston=document.querySelector('.sdstSon');
	let sdston2=document.querySelectorAll('.sdstSon .sdstSon-box');
	

	sdsul.onmouseenter=function(){
		sdston.style.height='230px';
		sds.style.borderBottom='1px solid #E0E0E0';
	}
	sdsul.onmouseleave=function(){
		sdston.style.height='0px';
		sds.style.border='none';
		for(let i=0;i<sdsli.length;i++){
			sdsli[i].style.color='#333333';
		}
	}
	for(let i=0;i<sdsli.length;i++){
		sdsli[i].onmouseenter=function(){
			for(let k=0;k<sdsli.length;k++){
				sdston2[k].style.borderTop='1px solid #E0E0E0';
				sdston2[k].style.display='none';
	 			sdsli[k].style.color='#333333';
				sdston2[i].style.display='block';
 				sdsli[i].style.color='#FF6700';
			}
		}
	}

	
	

	let headBtn=document.querySelectorAll('.statusDownSonFour>input');
	let headBtnSpan=document.querySelector('.statusDownSonFour>span');
	headBtn[0].onmouseenter=function(){
		headBtn[0].style.background='#FF6700';
		headBtnSpan.style.color=('#ffffff');
		headBtn[0].style.border='0';
	}
	headBtn[0].onmouseleave=function(){
		headBtn[0].style.background='#FFFFFF';
		headBtnSpan.style.color=('black')
		headBtn[0].style.border='1px solid #E0E0E0';
	}
	let headBtn2=document.querySelector('.statusDownSonFour>.sdsfButton>input');
	let headBtn3=document.querySelector('.statusDownSonFour>input[type="button"]');
	console.log(headBtn3)
	let headBtn2Word=document.querySelectorAll('.statusDownSonFour>.sdsfButton>.sdsfButton-word>a');
	let headBtn2Xiala=document.querySelector('.statusDownSonFour>.sdsfButton>.sdsfXiala');
	headBtn2.onmouseleave=function(){
		headBtn2Word[0].style.display='block';
		headBtn2Word[1].style.display='block';
	}
	headBtn2.onclick=function(){
		headBtn2Xiala.style.display='block';
		headBtn2.style.border='1px solid #FF6700';
		headBtn3.style.border='1px solid #FF6700';
		headBtn2Word[0].style.display='none';
		headBtn2Word[1].style.display='none';
	}
	headBtn2Word[0].onmouseenter=function(){
		headBtn2Word[0].style.background='#FF6700';
		headBtn2Word[0].style.color='#FFFFFF';
	}
	headBtn2Word[0].onmouseleave=function(){
		headBtn2Word[0].style.background='#EEEEEE';
		headBtn2Word[0].style.color='#808080';
	}
	headBtn2Word[1].onmouseenter=function(){
		headBtn2Word[1].style.background='#FF6700';
		headBtn2Word[1].style.color='#FFFFFF';
	}
	headBtn2Word[1].onmouseleave=function(){
		headBtn2Word[1].style.background='#EEEEEE';
		headBtn2Word[1].style.color='#808080';
	}
	headBtn2Xiala.onmouseleave=function(){
		headBtn2Xiala.style.display='none';
		headBtn2.style.border='1px solid #E0E0E0';
		headBtn3.style.border='1px solid #E0E0E0';
	}
	let headBtn2XialaWord=document.querySelectorAll('.statusDownSonFour>.sdsfButton>.sdsfXiala>ul>li');
	for(let i=0;i<headBtn2XialaWord.length;i++){
		headBtn2XialaWord[i].onmouseenter=function(){
			headBtn2XialaWord[i].style.background='#FAFAFA';
		}
		headBtn2XialaWord[i].onmouseleave=function(){
			headBtn2XialaWord[i].style.background='#FFFFFF';
		}
	}

	// banner
	let bannerBox=document.querySelectorAll('.banner-box');
	let bannerLi=document.querySelectorAll('.banner>ul>li');
	let banLeft=document.querySelector('.bannerLeft');
	let banRight=document.querySelector('.bannerRight');
	let index=0;
	bannerLi[index].className='bac';
	let t=setInterval(lunbo,3000);
	for(let i=0;i<bannerLi.length;i++){
		bannerBox[i].onmouseenter=function(){
			clearInterval(t);
		}
		bannerBox[i].onmouseleave=function(){
			t=setInterval(lunbo,3000);
		}
	}
	for(let i=0;i<bannerLi.length;i++){
		bannerLi[i].onclick=function(){
			for(let j=0;j<bannerLi.length;j++){
				bannerBox[j].style.opacity='0';
				bannerLi[j].className='';	
			}
			bannerBox[i].style.opacity='1';
			bannerLi[i].className='bac';
			index=i;
		}
	}
	function lunbo(){
		index++;
		if(index==bannerLi.length){
			index=0;
		}
		for(let i=0;i<bannerLi.length;i++){
			bannerBox[i].style.opacity='0';
			bannerLi[i].className='';	
		}
		bannerBox[index].style.opacity='1';
		bannerLi[index].className='bac';
	}


	banLeft.onmouseenter=function(){
		banLeft.style.background='rgba(0,0,0,0.6)';
		banLeft.style.color='#fff'
	}
	banLeft.onmouseleave=function(){
		banLeft.style.background='';
		banLeft.style.color=''
	}

	banRight.onmouseenter=function(){
		banRight.style.background='rgba(0,0,0,0.6)';
		banRight.style.color='#fff'
	}
	banRight.onmouseleave=function(){
		banRight.style.background='';
		banRight.style.color=''
	}


	banLeft.onclick=function(){
		index--;
		if(index<0){
			index=bannerLi.length-1;
		}
		for(let i=0;i<bannerLi.length;i++){
			bannerBox[i].style.opacity='0';
			bannerLi[i].className='';	
		}
		bannerBox[index].style.opacity='1';
		bannerLi[index].className='bac';
	}
	banRight.onclick=function(){
		index++;
		if(index==bannerLi.length){
			index=0;
		}
		for(let i=0;i<bannerLi.length;i++){
			bannerBox[i].style.opacity='0';
			bannerLi[i].className='';	
		}
		bannerBox[index].style.opacity='1';
		bannerLi[index].className='bac';
	}



	// 侧边
	let bALi=document.querySelectorAll('.bannerAside>ul>li');
	let bALixiala=document.querySelectorAll('.bannerAsideBox');
	for(let i=0;i<bALi.length;i++){
		bALi[i].onmouseenter=function(){
			bALi[i].style.background='#FF6700';
			bALixiala[i].style.display='block';
		}
		bALi[i].onmouseleave=function(){
			bALi[i].style.background='';
			bALixiala[i].style.display='none';
		}
	}
	let bALixialaLi=document.querySelectorAll('.bannerAsideBox>.babSon>ul>li>a');
	let bALixLRight=document.querySelectorAll('.babSon>ul>li>a>.babsRight');

	for(let i=0;i<bALixialaLi.length;i++){
		bALixialaLi[i].onmouseenter=function(){
			bALixialaLi[i].style.color='#FF6700';
		}
		bALixialaLi[i].onmouseleave=function(){
			bALixialaLi[i].style.color='#000000';
		}
	}
	for(let i=0;i<bALixLRight.length;i++){
		bALixLRight[i].onmouseenter=function(){
			bALixLRight[i].style.background='#FF6700';
			bALixLRight[i].style.color='#FFFFFF';
		}
		bALixLRight[i].onmouseleave=function(){
			bALixLRight[i].style.background='#FFFFFF';
			bALixLRight[i].style.color='#FF6700';
		}
	}

	// banner下
	let bDua=document.querySelectorAll('.baDownLeft>ul>li>a');
	for(let i=0;i<bDua.length;i++){
		bDua[i].onmouseenter=function(){
			bDua[i].style.color='#ffffff'
		}
		bDua[i].onmouseleave=function(){
			bDua[i].style.color='#CDCAC8'
		}
	}
	let bDRua=document.querySelectorAll('.baDRson');
	for(let i=0;i<bDRua.length;i++){
		bDRua[i].onmouseenter=function(){
			bDRua[i].style.boxShadow='3px 15px 10px 2px #d9d9d9';
		}
		bDRua[i].onmouseleave=function(){
			bDRua[i].style.boxShadow='3px 15px 10px 2px #ffffff';
		}
	}

	// 小米明星单品
	let StarD=document.querySelectorAll('.starDown>ul')[0];
	let StarBox=document.querySelectorAll('.starD-son .starD-sBox');
	StarBox[0].onmouseenter=function(){
		StarBox[0].style.color='#FF6E00';
	}
	StarBox[0].onmouseleave=function(){
		StarBox[0].style.color='#B0B0B2';
	}
	StarBox[1].onmouseenter=function(){
		StarBox[1].style.color='#FF6E00';
	}
	StarBox[1].onmouseleave=function(){
		StarBox[1].style.color='#B0B0B2';
	}

	// 左右移动
	let w=parseInt(getComputedStyle(StarD,null)['width']);
	let starlefts=0;
	let starT=setInterval(starmove,5000)
	// console.log(w)
	function starmove(){
		if(starlefts==0){
			starlefts=1;
			animate(StarD,{left:-w/2});
		}else{
			starlefts=0;
			animate(StarD,{left:0});	
		}
	}
	StarD.onmouseenter=function(){
		clearInterval(starT);
	}
	StarD.onmouseleave=function(){
		starT=setInterval(starmove,5000)
	}

	StarBox[0].onclick=function(){
		animate(StarD,{left:-w/2});
	}
	StarBox[1].onclick=function(){
		animate(StarD,{left:0});
	}

	// 智能硬件
	let zhi=document.querySelector('.zhiTop-son');
	let zhiLe=document.querySelector('.zhiTop-son>a>.zhiTop-sonLeft');
	let zhiRi=document.querySelector('.zhiTop-son>a>.zhiTop-sonRight');
	
	zhi.onmouseenter=function(){
		zhiLe.style.color='#FF6700';
		zhiRi.style.background='#FF6700';
	}
	zhi.onmouseleave=function(){
		zhiLe.style.color='#424242';
		zhiRi.style.background='#B0B0B0';
	}


	let zhiDLeft=document.querySelector('.zhiDown>.zhiDLeft');
	
	zhiDLeft.onmouseenter=function(){
		zhiDLeft.style.transform='translate(0,-3px)';
		zhiDLeft.style.boxShadow='1px 15px 10px 2px #d9d9d9';
	}
	zhiDLeft.onmouseleave=function(){
		zhiDLeft.style.transform='translate(0,3px)';
		zhiDLeft.style.boxShadow='1px 15px 10px 2px #F5F5F5';
	}

	let zhiDRli=document.querySelectorAll('.zhiDown>.zhiDRight>ul>li');
	for(let i=0;i<zhiDRli.length;i++){
		zhiDRli[i].onmouseenter=function(){
		zhiDRli[i].style.transform='translate(0,-3px)';
		zhiDRli[i].style.boxShadow='1px 13px 10px 2px #d9d9d9';
	}
	zhiDRli[i].onmouseleave=function(){
		zhiDRli[i].style.transform='translate(0,3px)';
		zhiDRli[i].style.boxShadow='1px 13px 10px 2px #F5F5F5';
	}
	}

	// 搭配
	// 左侧
	
	let dapei1=document.querySelectorAll('.daDRight>.daRSon1>li');
	let dapei2=document.querySelectorAll('.daDRight>.daRSon2');
	dapei1[1].style.border='0';
	dapei1[2].style.border='0';
	dapei1[3].style.border='0';
	dapei1[0].style.color='#FF6700'
	dapei2[1].style.display='none';
	dapei2[2].style.display='none';
	dapei2[3].style.display='none';
	for(let i=0;i<dapei1.length;i++){
		dapei1[i].onmouseenter=function(){
			for(let j=0;j<dapei2.length;j++){
				dapei2[j].style.display='none';
				dapei2[i].style.display='block';
				dapei1[j].style['border-bottom']='0'
				dapei1[j].style.color=''
				dapei1[i].style['border-bottom']='2px solid #FF6700'
				dapei1[i].style.color='#FF6700'
			}
		}
	}

	let dapei3=document.querySelectorAll('.daDRight>.daRSon2>li');
	for(let i=0;i<dapei3.length;i++){


		dapei3[i].onmouseenter=function(){
			dapei3[i].style.transform
			dapei3[i].style.boxShadow='1px 13px 10px 2px #d9d9d9';
			
		}
		dapei3[i].onmouseleave=function(){
			dapei3[i].style.transform='translate(0,2px)';
			dapei3[i].style.boxShadow='1px 13px 10px 2px #F5F5F5';
		}
	}
	let dapei2sl=document.querySelectorAll('.daDRight>.daRSon2>.shangla');
	let dapei2box=document.querySelectorAll('.daDRight>.daRSon2>li>a>.Rson2Box');
	for(let i=0;i<dapei2sl.length;i++){
		dapei2sl[i].onmouseenter=function(){
			dapei2box[i].style.transform='translate(0,-75px)';
			dapei2sl[i].style.boxShadow='1px 13px 10px 2px #d9d9d9';
		}
		dapei2sl[i].onmouseleave=function(){
			dapei2box[i].style.transform='translate(0,75px)';
			dapei2sl[i].style.boxShadow='1px 13px 10px 2px #F5F5F5';
		}
	}



	// 配件
	// 左侧
	
	let peipei1=document.querySelectorAll('.peiDRight>.peiRSon1>li');
	let peipei2=document.querySelectorAll('.peiDRight>.peiRSon2');
	peipei1[1].style.border='0';
	peipei1[2].style.border='0';
	peipei1[3].style.border='0';
	peipei1[0].style.color='#FF6700'
	peipei2[1].style.display='none';
	peipei2[2].style.display='none';
	peipei2[3].style.display='none';
	for(let i=0;i<peipei1.length;i++){
		peipei1[i].onmouseenter=function(){
			for(let j=0;j<peipei2.length;j++){
				peipei2[j].style.display='none';
				peipei2[i].style.display='block';
				peipei1[j].style['border-bottom']='0'
				peipei1[j].style.color=''
				peipei1[i].style['border-bottom']='2px solid #FF6700'
				peipei1[i].style.color='#FF6700'
			}
		}
	}

	let peipei3=document.querySelectorAll('.peiDRight>.peiRSon2>li');
	for(let i=0;i<peipei3.length;i++){


		peipei3[i].onmouseenter=function(){
			peipei3[i].style.transform
			peipei3[i].style.boxShadow='1px 13px 10px 2px #d9d9d9';
			
		}
		peipei3[i].onmouseleave=function(){
			peipei3[i].style.transform='translate(0,2px)';
			peipei3[i].style.boxShadow='1px 13px 10px 2px #F5F5F5';
		}
	}
	let peipei2sl=document.querySelectorAll('.peiDRight>.peiRSon2>.shangla');
	let peipei2box=document.querySelectorAll('.peiDRight>.peiRSon2>li>a>.Rson2Box');
	for(let i=0;i<peipei2sl.length;i++){
		peipei2sl[i].onmouseenter=function(){
			peipei2box[i].style.transform='translate(0,-75px)';
			peipei2sl[i].style.boxShadow='1px 13px 10px 2px #d9d9d9';
		}
		peipei2sl[i].onmouseleave=function(){
			peipei2box[i].style.transform='translate(0,75px)';
			peipei2sl[i].style.boxShadow='1px 13px 10px 2px #F5F5F5';
		}
	}


	// 周边
	let zhoupei1=document.querySelectorAll('.zhouDRight>.zhouRSon1>li');
	let zhoupei2=document.querySelectorAll('.zhouDRight>.zhouRSon2');
	zhoupei1[1].style.border='0';
	zhoupei1[2].style.border='0';
	zhoupei1[3].style.border='0';
	zhoupei1[4].style.border='0';
	zhoupei1[0].style.color='#FF6700'
	zhoupei2[1].style.display='none';
	zhoupei2[2].style.display='none';
	zhoupei2[3].style.display='none';
	zhoupei2[4].style.display='none';
	for(let i=0;i<zhoupei1.length;i++){
		zhoupei1[i].onmouseenter=function(){
			for(let j=0;j<zhoupei2.length;j++){
				zhoupei2[j].style.display='none';
				zhoupei2[i].style.display='block';
				zhoupei1[j].style['border-bottom']='0'
				zhoupei1[j].style.color=''
				zhoupei1[i].style['border-bottom']='2px solid #FF6700'
				zhoupei1[i].style.color='#FF6700'
			}
		}
	}

	let zhoupei3=document.querySelectorAll('.zhouDRight>.zhouRSon2>li');
	for(let i=0;i<zhoupei3.length;i++){


		zhoupei3[i].onmouseenter=function(){
			zhoupei3[i].style.transform
			zhoupei3[i].style.boxShadow='1px 13px 10px 2px #d9d9d9';
			
		}
		zhoupei3[i].onmouseleave=function(){
			zhoupei3[i].style.transform='translate(0,2px)';
			zhoupei3[i].style.boxShadow='1px 13px 10px 2px #F5F5F5';
		}
	}
	let zhoupei2sl=document.querySelectorAll('.zhouDRight>.zhouRSon2>.shangla');
	let zhoupei2box=document.querySelectorAll('.zhouDRight>.zhouRSon2>li>a>.Rson2Box');
	for(let i=0;i<zhoupei2sl.length;i++){
		zhoupei2sl[i].onmouseenter=function(){
			zhoupei2box[i].style.transform='translate(0,-75px)';
			zhoupei2sl[i].style.boxShadow='1px 13px 10px 2px #d9d9d9';
		}
		zhoupei2sl[i].onmouseleave=function(){
			zhoupei2box[i].style.transform='translate(0,75px)';
			zhoupei2sl[i].style.boxShadow='1px 13px 10px 2px #F5F5F5';
		}
	}

	// 热评产品
	let rcd=document.querySelectorAll('.rc-down1');

	for(let i=0;i<rcd.length;i++){
		rcd[i].onmouseenter=function(){
			rcd[i].style.transform='translate(0,-3px)';
			rcd[i].style.boxShadow='1px 13px 10px 2px #d9d9d9';
		}
		rcd[i].onmouseleave=function(){
			rcd[i].style.transform='translate(0,3px)';
			rcd[i].style.boxShadow='1px 13px 10px 2px #F5F5F5';
		}
	}

	//内容
	let nr=document.querySelectorAll('.nrDown-son1 .neirong>li');
	let an=document.querySelectorAll('.nrDown-son1 .anniu>li');
	let nrBtnL=document.querySelector('.nrDown-son1 .nr-left');
	let nrBtnR=document.querySelector('.nrDown-son1 .nr-right');
	let nrw=nr[0].offsetWidth;
	let current=0,next=0;

	for(let i=0;i<nr.length;i++){
    			if(i==0){
    				continue;
    			}
    			nr[i].style.left=nrw+'px';
    		}
     an[0].style.background='#FFF';
     an[0].style.border='2px solid #f40';
    
    //小圆点点击
    for(var i=0;i<an.length;i++){
    	an[i].index=i;
    	an[i].onclick=function(){
    		if(current==this.index){
    			return;
    		}
    		//点击当前 
    		if(current<this.index){
    			an[current].style.background='#B0B0B0';
	     		an[current].style.border='2px solid #fff'
	     		an[this.index].style.background='#FFF';
	     		an[this.index].style.border='2px solid #f40';
	    		nr[this.index].style.left=nrw+'px';
			    animate(nr[current],{left:-nrw});
			    animate(nr[this.index],{left:0});
			    current=next=this.index;
    		}else if(current>this.index){
    			an[current].style.background='#B0B0B0';
	     		an[current].style.border='2px solid #fff'
	     		an[this.index].style.background='#FFF';
	     		an[this.index].style.border='2px solid #f40';
    			nr[this.index].style.left=-nrw+'px';
		    	animate(nr[current],{left:nrw});
		    	animate(nr[this.index],{left:0});
		    	current=next=this.index;
    		}
    	}
    }
   // 右按钮
	nrBtnR.onclick=function(){
		next++;
		if(next>=nr.length){
			next=0;
		}
		
			an[current].style.background='#B0B0B0';
     		an[current].style.border='2px solid #fff'
     		an[next].style.background='#FFF';
     		an[next].style.border='2px solid #f40'
			nr[next].style.left= nrw+'px';
			animate(nr[current],{left:-nrw});
			animate(nr[next],{left:0})
			current=next;
	}

	// 左按钮
	nrBtnL.onclick=function(){
			next--;
			if(next<0){
	    		next=nr.length-1;
	    	}
			an[current].style.background='#B0B0B0';
     		an[current].style.border='2px solid #fff'
     		an[next].style.background='#FFF';
     		an[next].style.border='2px solid #f40'
			nr[next].style.left= -nrw+'px';
			animate(nr[current],{left:nrw});
			animate(nr[next],{left:0})
			current=next;
	}

	// 2
	let nr2=document.querySelectorAll('.nrDown-son2 .neirong>li');
	let an2=document.querySelectorAll('.nrDown-son2 .anniu>li');
	let nrBtnL2=document.querySelector('.nrDown-son2 .nr-left');
	let nrBtnR2=document.querySelector('.nrDown-son2 .nr-right');
	let nrw2=nr2[0].offsetWidth;
	let current2=0,next2=0;

	for(let i=0;i<nr2.length;i++){
    			if(i==0){
    				continue;
    			}
    			nr2[i].style.left=nrw2+'px';
    		}
     an2[0].style.background='#FFF';
     an2[0].style.border='2px solid #f40';
    
    //小圆点点击
    for(var i=0;i<an2.length;i++){
    	an2[i].index=i;
    	an2[i].onclick=function(){
    		if(current2==this.index){
    			return;
    		}
    		//点击当前 
    		if(current2<this.index){
    			an2[current2].style.background='#B0B0B0';
	     		an2[current2].style.border='2px solid #fff'
	     		an2[this.index].style.background='#FFF';
	     		an2[this.index].style.border='2px solid #f40';
	    		nr2[this.index].style.left=nrw2+'px';
			    animate(nr2[current2],{left:-nrw2});
			    animate(nr2[this.index],{left:0});
			    current2=next2=this.index;
    		}else if(current2>this.index){
    			an2[current2].style.background='#B0B0B0';
	     		an2[current2].style.border='2px solid #fff'
	     		an2[this.index].style.background='#FFF';
	     		an2[this.index].style.border='2px solid #f40';
    			nr2[this.index].style.left=-nrw2+'px';
		    	animate(nr2[current2],{left:nrw2});
		    	animate(nr2[this.index],{left:0});
		    	current2=next2=this.index;
    		}
    	}
    }
   // 右按钮
	nrBtnR2.onclick=function(){
		next2++;
		if(next2>=nr2.length){
			next2=0;
		}
		
			an2[current2].style.background='#B0B0B0';
     		an2[current2].style.border='2px solid #fff'
     		an2[next2].style.background='#FFF';
     		an2[next2].style.border='2px solid #f40'
			nr2[next2].style.left= nrw+'px';
			animate(nr2[current2],{left:-nrw});
			animate(nr2[next2],{left:0})
			current2=next2;
	}
	// 左按钮
	nrBtnL2.onclick=function(){
			next2--;
			if(next2<0){
	    		next2=nr.length-1;
	    	}
			an2[current2].style.background='#B0B0B0';
     		an2[current2].style.border='2px solid #fff'
     		an2[next2].style.background='#FFF';
     		an2[next2].style.border='2px solid #f40'
			nr2[next2].style.left= -nrw2+'px';
			animate(nr2[current2],{left:nrw2});
			animate(nr2[next2],{left:0})
			current2=next2;
	}

	// 3
	let nr3=document.querySelectorAll('.nrDown-son3 .neirong>li');
	let an3=document.querySelectorAll('.nrDown-son3 .anniu>li');
	let nrBtnL3=document.querySelector('.nrDown-son3 .nr-left');
	let nrBtnR3=document.querySelector('.nrDown-son3 .nr-right');
	let nrw3=nr3[0].offsetWidth;
	let current3=0,next3=0;

	for(let i=0;i<nr3.length;i++){
    			if(i==0){
    				continue;
    			}
    			nr3[i].style.left=nrw3+'px';
    		}
     an3[0].style.background='#FFF';
     an3[0].style.border='2px solid #f40';
    
    //小圆点点击
    for(var i=0;i<an3.length;i++){
    	an3[i].index=i;
    	an3[i].onclick=function(){
    		if(current3==this.index){
    			return;
    		}
    		//点击当前 
    		if(current3<this.index){
    			an3[current3].style.background='#B0B0B0';
	     		an3[current3].style.border='2px solid #fff'
	     		an3[this.index].style.background='#FFF';
	     		an3[this.index].style.border='2px solid #f40';
	    		nr3[this.index].style.left=nrw3+'px';
			    animate(nr3[current3],{left:-nrw3});
			    animate(nr3[this.index],{left:0});
			    current3=next3=this.index;
    		}else if(current3>this.index){
    			an3[current3].style.background='#B0B0B0';
	     		an3[current3].style.border='2px solid #fff'
	     		an3[this.index].style.background='#FFF';
	     		an3[this.index].style.border='2px solid #f40';
    			nr3[this.index].style.left=-nrw3+'px';
		    	animate(nr3[current3],{left:nrw3});
		    	animate(nr3[this.index],{left:0});
		    	current3=next3=this.index;
    		}
    	}
    }
   // 右按钮
	nrBtnR3.onclick=function(){
		next3++;
		if(next3>=nr3.length){
			next3=0;
		}
		
			an3[current3].style.background='#B0B0B0';
     		an3[current3].style.border='2px solid #fff'
     		an3[next3].style.background='#FFF';
     		an3[next3].style.border='2px solid #f40'
			nr3[next3].style.left= nrw+'px';
			animate(nr3[current3],{left:-nrw});
			animate(nr3[next3],{left:0})
			current3=next3;
	}
	// 左按钮
	nrBtnL3.onclick=function(){
			next3--;
			if(next3<0){
	    		next3=nr.length-1;
	    	}
			an3[current3].style.background='#B0B0B0';
     		an3[current3].style.border='2px solid #fff'
     		an3[next3].style.background='#FFF';
     		an3[next3].style.border='2px solid #f40'
			nr3[next3].style.left= -nrw3+'px';
			animate(nr3[current3],{left:nrw3});
			animate(nr3[next3],{left:0})
			current3=next3;
	}

	// 4
	let nr4=document.querySelectorAll('.nrDown-son4 .neirong>li');
	let an4=document.querySelectorAll('.nrDown-son4 .anniu>li');
	let nrBtnL4=document.querySelector('.nrDown-son4 .nr-left');
	let nrBtnR4=document.querySelector('.nrDown-son4 .nr-right');
	let nrw4=nr4[0].offsetWidth;
	let current4=0,next4=0;

	for(let i=0;i<nr4.length;i++){
    			if(i==0){
    				continue;
    			}
    			nr4[i].style.left=nrw4+'px';
    		}
     an4[0].style.background='#FFF';
     an4[0].style.border='2px solid #f40';
    
    //小圆点点击
    for(var i=0;i<an4.length;i++){
    	an4[i].index=i;
    	an4[i].onclick=function(){
    		if(current4==this.index){
    			return;
    		}
    		//点击当前 
    		if(current4<this.index){
    			an4[current4].style.background='#B0B0B0';
	     		an4[current4].style.border='2px solid #fff'
	     		an4[this.index].style.background='#FFF';
	     		an4[this.index].style.border='2px solid #f40';
	    		nr4[this.index].style.left=nrw4+'px';
			    animate(nr4[current4],{left:-nrw4});
			    animate(nr4[this.index],{left:0});
			    current4=next4=this.index;
    		}else if(current4>this.index){
    			an4[current4].style.background='#B0B0B0';
	     		an4[current4].style.border='2px solid #fff'
	     		an4[this.index].style.background='#FFF';
	     		an4[this.index].style.border='2px solid #f40';
    			nr4[this.index].style.left=-nrw4+'px';
		    	animate(nr4[current4],{left:nrw4});
		    	animate(nr4[this.index],{left:0});
		    	current4=next4=this.index;
    		}
    	}
    }
   // 右按钮
	nrBtnR4.onclick=function(){
		next4++;
		if(next4>=nr4.length){
			next4=0;
		}
		
			an4[current4].style.background='#B0B0B0';
     		an4[current4].style.border='2px solid #fff'
     		an4[next4].style.background='#FFF';
     		an4[next4].style.border='2px solid #f40'
			nr4[next4].style.left= nrw+'px';
			animate(nr4[current4],{left:-nrw});
			animate(nr4[next4],{left:0})
			current4=next4;
	}
	// 左按钮
	nrBtnL4.onclick=function(){
			next4--;
			if(next4<0){
	    		next4=nr.length-1;
	    	}
			an4[current4].style.background='#B0B0B0';
     		an4[current4].style.border='2px solid #fff'
     		an4[next4].style.background='#FFF';
     		an4[next4].style.border='2px solid #f40'
			nr4[next4].style.left= -nrw4+'px';
			animate(nr4[current4],{left:nrw4});
			animate(nr4[next4],{left:0})
			current4=next4;
	}

	// 为你推荐
	let weiniD=document.querySelectorAll('.weiniDown>ul')[0];
	let weiniBox=document.querySelectorAll('.weiniD-son .weiniD-sBox');
	weiniBox[0].onmouseenter=function(){
		weiniBox[0].style.color='#FF6E00';
	}
	weiniBox[0].onmouseleave=function(){
		weiniBox[0].style.color='#B0B0B2';
	}
	weiniBox[1].onmouseenter=function(){
		weiniBox[1].style.color='#FF6E00';
	}
	weiniBox[1].onmouseleave=function(){
		weiniBox[1].style.color='#B0B0B2';
	}

	// 左右移动
	let weiW=parseInt(getComputedStyle(weiniD,null)['width']);
	let Weinilefts=0;
	// let WeiniT=setInterval(Weinimove,5000)
	// console.log(w)
	function Weinimove(){
		if(Weinilefts==0){
			Weinilefts=1;
			animate(weiniD,{left:-weiW/2});
		}else{
			Weinilefts=0;
			animate(weiniD,{left:0});	
		}
	}
	// weiniD.onmouseenter=function(){
	// 	clearInterval(WeiniT);
	// }
	// weiniD.onmouseleave=function(){
	// 	WeiniT=setInterval(Weinimove,5000)
	// }

	weiniBox[0].onclick=function(){
		animate(weiniD,{left:-weiW/2});
	}
	weiniBox[1].onclick=function(){
		animate(weiniD,{left:0});
	}




}