/**
 * Created by fu on 2017/5/18.
 */
window.onload=function(){


    let xinJian=document.querySelector('.xinJian');
    let Save=document.querySelector('.Save');
    let clear=document.querySelector('.clear');
    let clea=document.querySelector('.clea');
    let eraser=document.querySelector('.eraser');
    let rubber=document.querySelector('.rubber');
    let wenzi=document.querySelector('.wenzi');

    let labelTools=document.querySelectorAll('.bottom>.left>.tools>label');
    let labelStyle=document.querySelectorAll('.bottom>.left>.yangSi>label');
    let labelTop=document.querySelectorAll('.top label');
    let pencial=document.querySelector('.pencial');
    let zLine=document.querySelector('.zhiLine');
    let xLine=document.querySelector('.xuLine');
    let cXiao=document.querySelector('.ceXiao');
    let circle=document.querySelector('.circle');
    let juXing=document.querySelector('.juXing');
    let cirJu=document.querySelector('.cirJu');
    let duoBian=document.querySelector('.duoBian');
    let duojiao=document.querySelector('.duojiao');
    let hua=document.querySelector('.hua');
    let caiBox=document.querySelector('.caiBox');

    let palette=new Palette();
    palette.TianMiao();

    //新建
    xinJian.onclick=function(){
        for(let j=0;j<labelTools.length;j++){
            labelTools[j].style.background='';
        }
        palette.newJian(hua);

    };
    //直线
    zLine.onclick=function(){
        palette.zhiLine();
    };
    //虚线
    xLine.onclick=function(){
        palette.xuLine();
    };
    //铅笔
    pencial.onclick=function(){
        palette.Pencial();
    };
    //圆
    circle.onclick=function(){
        palette.Circle();
    };
    //矩形
    juXing.onclick=function(){
        palette.JuXing();
    };
    //圆角
    cirJu.onclick=function(){
        palette.YuanJiao();
    };
    //多边形
    duoBian.onclick=function(){
        palette.DuoBian();
    };
    //多角形
    duojiao.onclick=function(){
        palette.DuoJiao();
    };
    //撤销
    cXiao.onclick=function(){
        palette.SuCeXiao();
    };
    //保存
    Save.addEventListener('click',function(){
        palette.savE();
    });
    //清空
    clear.onclick=function(){
        palette.Clear();
    };
    //裁剪
    clea.onclick=function(){
        palette.Clea(caiBox);
    };
    //橡皮
    rubber.onclick=function(){
        palette.Rubber(eraser);
    };
    //文字
    wenzi.onclick=function(){
        palette.WenZi();
    };






    for(let i=0;i<labelTools.length;i++){
        labelTools[i].addEventListener('click',function(){
            for(let j=0;j<labelTools.length;j++){
                labelTools[j].style.background='';
            }
            labelTools[i].style.background='#fff'
        })
    }

    for(let i=0;i<labelStyle.length;i++){
        labelStyle[0].style.background='#fff';
        labelStyle[i].addEventListener('click',function(){
            for(let j=0;j<labelStyle.length;j++){
                labelStyle[j].style.background='';
            }
            labelStyle[i].style.background='#fff';
        })
    }

    for(let i=0;i<labelTop.length;i++){
        labelTop[i].addEventListener('click',function(){
            for(let j=0;j<labelTop.length;j++){
                labelTop[j].style.background='';
            }
            labelTop[i].style.background='#fff'
        });
        labelTop[i].onmouseout=function(){
                labelTop[i].style.background='';
        }
    }


};
