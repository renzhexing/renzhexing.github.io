
window.onload=function(){
    let ale=document.querySelector('.ale');
    let zhe=document.querySelector('.zhe');
    let re=document.querySelector('.re');
    let cu=document.querySelector('.cu');
    let aleP=document.querySelector('.ale>p');
  let canvas=document.querySelector('canvas');
  let ctx=canvas.getContext('2d');
  let flag=true;
  let drops={};
    /*
    * '0-0' blue
    * '1-1' red
    *
    * */

    //画线
    drawLine();
    //下棋
    canvas.onclick=function(e){
        //点击位置
        let ox = Math.floor(e.offsetX/40), oy = Math.floor(e.offsetY/40);
        if(drops[m(ox,oy)]){
            return ;
        }
        if(flag){
            drawChress(ox,oy,'red');
            if(check(ox,oy,'red') == 5){
                aleP.innerText='红方胜';
                aleP.style.cssText=`color:red`
                zhe.style.display='block';
                ale.addEventListener('click',function(e){
                    let obj=e.target;
                    if(obj.className=='re'){
                        zhe.style.display='none';
                        drops={};
                        ctx.clearRect(0,0,800,800);
                        drawLine();
                    }else if(obj.className=='cu'){
                        window.close();
                    }
                })
            }
        }else{
            drawChress(ox,oy,'blue');
            if(check(ox,oy,'blue') == 5){
                aleP.innerText='蓝方胜';
                aleP.style.cssText=`color:blue`;
                zhe.style.display='block';
                ale.addEventListener('click',function(e){
                    let obj=e.target;
                    if(obj.className=='re'){
                        zhe.style.display='none';
                        drops={};
                        ctx.clearRect(0,0,800,800);
                        drawLine();
                    }else if(obj.className=='cu'){
                        window.close();
                    }
                })
            }
        }
    };
    function drawLine(){
      //清空 保存 画线
      ctx.clearRect(0,0,800,800);
      ctx.save();
      ctx.beginPath();
      for(let i=0;i<20;i++){
          //水平
            ctx.moveTo(line(0),line(i));
            ctx.lineTo(line(19),line(i));
            //垂直
            ctx.moveTo(line(i),line(0));
            ctx.lineTo(line(i),line(19));
      }
      ctx.closePath();
      ctx.stroke();

      circle(line(10),line(10));
      circle(line(5),line(5));
      circle(line(15),line(5));
      circle(line(5),line(15));
      circle(line(15),line(15));

  }
  function line(x){
      return 40*x+20;
  }
  function circle(x,y){
      ctx.save();
      ctx.translate(x,y);
      ctx.beginPath();
      ctx.arc(0,0,5,0,Math.PI*2);
      ctx.fill();
      ctx.restore();
  }
  //画棋子
    function drawChress(x,y,color){
        ctx.save();
        ctx.translate(line(x),line(y));
        ctx.beginPath();
        ctx.fillStyle=color;
        ctx.arc(0,0,20,0,Math.PI*2);
        ctx.fill();
        ctx.restore();
        flag=!flag;
        drops[m(x,y)]=color;
        // console.log(drops[m(x,y)])
    }


    function m(x,y){
        return `${x}_${y}`;
    }


    function check(x,y,color){
        //行
        let row=1;
        let i=1;
        while(drops[m((x+i),y)] == color){
            row++;
            i++;
        }
        i=1;
        while(drops[m((x-i),y)] == color){
            row++;
            i++;
        }
        //列
        let cols=1;
        i=1;
        while(drops[m(x,(y+i))] == color){
            row++;
            i++;
        }
        i=1;
        while(drops[m(x,(y-i))] == color){
            row++;
            i++;
        }
        //左斜
        let zx=1;
            i=1;
        while(drops[m((x+i),(y+i))] == color){
            zx++;
            i++;
        }
        i=1;
        while(drops[m((x+i),(y-i))] == color){
            zx++;
            i++;
        }
        //右斜
        let yx=1;
            i=1;
        while(drops[m((x-i),(y+i))] == color){
            yx++;
            i++;
        }
        i=1;
        while(drops[m((x-i),(y-i))] == color){
            yx++;
            i++;
        }
        return Math.max(row,cols,zx,yx);
    }
    // button.onclick=function(){
    //     box.classList.toggle('son');
    //     let img=drawImage(0,0,800,800);
    //     son.innerHTML=img;
    //
    // }



};
