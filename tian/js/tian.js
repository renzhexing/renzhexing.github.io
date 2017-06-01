/**
 * Created by fu on 2017/5/10.
 */

window.onload=function () {
    // 顶部下拉
    let xia=document.querySelectorAll('.xiala');
    let wxia=document.querySelectorAll('.wxia');

        for(let i=0;i<xia.length;i++){
            xia[i].onmouseenter=function(){
                wxia[i].style.display='block';
            };
        }
    for(let i=0;i<xia.length;i++){
        xia[i].onmouseleave=function(){
            wxia[i].style.display='none';
        };
    }


    // nav
    let navLi=document.querySelectorAll('.nav-son>ul>li');
    let navImg=document.querySelectorAll('.nav-son>ul>li>a>img');

    for(let i=0;i<navLi.length;i++){
      navLi[i].onmouseenter=function(){
          navImg[i].style.top='-10px';
      }
    }
    for(let i=0;i<navLi.length;i++){
        navLi[i].onmouseleave=function(){
            navImg[i].style.top='0px';
        }
    }


    // banner
    let bannerImg=document.querySelectorAll('.banner-son>a>img');
    let bannerLi=document.querySelectorAll('.banner-son>ul>li');
    let banner=document.querySelector('.banner');

    let banCur=0,banNex=0;
    let flage=true;
    bannerImg[banCur].style.opacity='1';
    bannerLi[banCur].style.background='#FFF';
    banner.classList.add('bj'+banCur);
    let t=setInterval(banMove,3000);
    function banMove(){
        if(flage==true){
            banNex++;
            if(banNex>=bannerImg.length){
                banNex=0;
            }
            banner.classList.remove('bj'+banCur);
            banner.classList.add('bj'+banNex);
            bannerLi[banCur].style.background='';
            bannerLi[banNex].style.background='#FFF';
            bannerImg[banCur].style.opacity='0';
            bannerImg[banNex].style.opacity='1';
            banCur=banNex;
        }
        flage=true;
    }

    // 轮播点移入
   for(let i=0;i<bannerLi.length;i++){
        bannerLi[i].onmouseenter=function(){
            flage=false;
            for(let j=0;j<bannerLi.length;j++){
                banner.classList.remove('bj'+j);
                bannerLi[j].style.background='';
                bannerImg[j].style.opacity='0';
            }
            bannerLi[i].style.background='#FFF';
            bannerImg[i].style.opacity='1';
            banner.classList.add('bj'+i);
            banCur=banNex=i;
        };
       bannerLi[i].onmouseleave=function(){
           flage=true;
       }

        bannerImg[i].onmouseenter=function(){
            clearInterval(t);
        };
       bannerImg[i].onmouseleave=function(){
           t=setInterval(banMove,2000);
       }
   }


   // banner侧边栏
    let banLe=document.querySelector('.banLeft>ul');
    let banLeLi=document.querySelectorAll('.banLeft>.banL>li');
    let banXaLe=document.querySelector('.banAside');
    let banXaLeLi=document.querySelectorAll('.banAside>li');
    let banLeLiA=document.querySelectorAll('.banLeft>ul>li>a');

    banLe.onmouseenter=function(){
        banXaLe.style.display='block';
    };
    banLe.onmouseleave=function(){
        banXaLe.style.display='none';
        for(let j=0;j<banLeLi.length;j++){
            banLeLi[j].style.background='';
            banLeLiA[j].style.color='';
        }
    };
    for(let i=0;i<banLeLi.length;i++){
        banLeLi[i].onmouseenter=function(){
            for(let j=0;j<banLeLi.length;j++){
                banLeLi[j].style.background='';
                banXaLeLi[j].style.display='none';
            }
            banXaLeLi[i].style.display='block';
            banLeLi[i].style.background='#FFF';
        }
    }

    // 品牌街
    let pin=document.querySelectorAll('.pinpai');
    let pinZhe=document.querySelectorAll('.zhezhao');

    for(let i=0;i<pin.length;i++){
        pin[i].onmouseenter=function(){
            for(let j=0;j<pin.length;j++){
                pinZhe[j].style.opacity='0';
            }
            pinZhe[i].style.opacity='1';
        };
        pin[i].onmouseleave=function(){
            pinZhe[i].style.opacity='0';
        }
    }

    // 滚动轮
    let ch=window.innerHeight;
    let dingB=document.querySelector('.dingbu');
    let floor=document.querySelectorAll('.floor');
    let aside=document.querySelector('.asideLeft');
    let leA=document.querySelectorAll('.asideLeft>a');
    let pinpai=document.querySelector('.xuan');
    let paiTop=pinpai.offsetTop;
    let floorArr=[];
    let n=0;
    floor.forEach(function(value,index){
        floorArr.push(value.offsetTop)
    });


    //左侧边栏出现
    window.onscroll=function(){
        let tops=document.body.scrollTop;
        if(tops>=paiTop-100){
            aside.style.width='36px';
            aside.style.height='332px';
            aside.style.opacity='1';
        }else if(tops<paiTop-100){
            aside.style.width='0px';
            aside.style.height='0px';
            aside.style.opacity='0';
        }

        for(let i=0;i<leA.length;i++){
            if(tops + ch >floorArr[i]+500) {
                for(let j=0;j<leA.length;j++){
                    leA[j].style.background='rgba(0, 0, 0, 0.6)';
                    leA[j].classList.remove('hot'+j);
                }
                leA[i].style.background='';
                leA[i].classList.add('hot'+i);
            }
        }
    };
    // 左侧边点击
    for(let i=0;i<leA.length;i++){
        leA[i].onclick=function(){
            animate(document.body,{scrollTop:floorArr[i]-100})
        }
    }


    //顶部搜索栏
    window.addEventListener('scroll',function(){
        let tops=document.body.scrollTop;
        if(tops>=paiTop){
            dingB.style.height='50px';
        }else if(tops<720){
            dingB.style.height='0px';
        }
    });


};


