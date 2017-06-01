/**
 * Created by fu on 2017/5/18.
 */
/*
*
* 线 铅笔 矩形 多边形 多角形 圆 虚线 圆角矩形
*
* 填充 描边 填充样式 描边样式
*
* 橡皮 文字 裁切
*
* 新建画布 保存 下载
*x
*
* */

function Palette(){
    this.obj=document.querySelector('canvas');
    this.ctx=this.obj.getContext('2d');
    this.bInput=document.querySelector('.binput');
    this.miaoColor=document.querySelector('.miaoColor');
    this.tianColor=document.querySelector('.tianColor');
    this.Tian=document.querySelector('.tain');
    this.Miao=document.querySelector('.miao');
    this.aa;
    this.bb;
    this.num;
    this.flag=true;
    this.flag1=true;

    // 默认样式
    this.fillStyle='#000000';
    this.strokeStyle='#000000';
    this.lineWidth='5';
    this.width='1199';
    this.height='700';
    // 填充 描边类型
    this.type='fill';
    //历史记录
    this.history=[];
    this.width=this.obj.width;
    this.height=this.obj.height;

    this.cx=1;
    this.cy=1;

}

Palette.prototype={
    init:function(){
        this.fillStyle='#000000';
        this.strokeStyle='#000000';
        // this.type='stroke';
        this.lineWidth='5';
        this.TianMiao();
    },
    //填充
    TianMiao:function(){
        let self=this;
        self.Tian.onclick=function(){
            self.type='fill';
        };
        self.Miao.onclick=function(){
            //描边
            self.type='stroke';
        }
    },
   //直线
    zhiLine:function(){
        let self=this;
        self.init();
        self.obj.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.obj.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                self.ctx.beginPath();
                self.ctx.strokeStyle=self.miaoColor.value;
                self.ctx.moveTo(ox,oy);
                self.ctx.setLineDash([0,0]);
                self.ctx.lineTo(mx,my);
                self.ctx.closePath();
                self.ctx.stroke();
            };
            self.obj.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.obj.onmousemove=null;
                self.obj.onmouseup=null;
            }
        };
    },
    //虚线
    xuLine:function(){
        let self=this;
        self.init();
        self.obj.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.obj.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                self.ctx.beginPath();
                self.ctx.strokeStyle=self.miaoColor.value;
                self.ctx.moveTo(ox,oy);
                self.ctx.setLineDash([self.lineWidth,10]);
                self.ctx.lineTo(mx,my);
                self.ctx.closePath();
                self.ctx.stroke();
            };
            self.obj.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.obj.onmousemove=null;
                self.obj.onmouseup=null;
            }
        }
    },
    //铅笔
    Pencial:function(){
        let self=this;
        self.init();
        self.obj.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.ctx.clearRect(0,0,self.width,self.height);
            if(self.history.length>0){
                self.ctx.putImageData(self.history[self.history.length-1],0,0);
            }
            self.ctx.beginPath();
            self.ctx.strokeStyle=self.miaoColor.value;
            self.ctx.moveTo(ox,oy);
            self.ctx.setLineDash([0,0]);
            self.obj.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.ctx.lineTo(mx,my);
                self.ctx.stroke();
            };
            self.obj.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.obj.onmousemove=null;
                self.obj.onmouseup=null;
            }
        };
    },
    //圆
    Circle:function(){
        let self=this;
        self.init();
        self.obj.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            if(self.history.length>0){
                self.ctx.putImageData(self.history[self.history.length-1],0,0);
            }
            self.obj.onmousemove=function(e){
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                let mx=e.offsetX,my=e.offsetY;
                let cX=(mx-ox)/2>=0?(mx-ox):(ox-mx);
                let cY=(my-oy)/2>=0?(my-oy):(oy-my);
                self.ctx.beginPath();
                self.ctx.strokeStyle=self.miaoColor.value;
                self.ctx.fillStyle=self.tianColor.value;
                self.ctx.setLineDash([0,0]);
                self.ctx.arc(ox,oy,cX,0,(Math.PI*2));
                self.ctx.closePath();
                self.ctx[self.type]();
            };
            self.obj.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.obj.onmousemove=null;
                self.obj.onmouseup=null;
            }
        }
    },
    //矩形
    JuXing:function(){
        let self=this;
        self.init();
        self.obj.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            if(self.history.length>0){
                self.ctx.putImageData(self.history[self.history.length-1],0,0);
            }
            self.obj.onmousemove=function(e){
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                let mx=e.offsetX,my=e.offsetY;
                self.ctx.beginPath();
                self.ctx.strokeStyle=self.miaoColor.value;
                self.ctx.fillStyle=self.tianColor.value;
                self.ctx.moveTo(ox,oy);
                self.ctx.setLineDash([0,0]);
                self.ctx.lineTo(mx,oy);
                self.ctx.lineTo(mx,my);
                self.ctx.lineTo(ox,my);
                self.ctx.closePath();
                self.ctx[self.type]();
            };
            self.obj.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.obj.onmousemove=null;
                self.obj.onmouseup=null;
            }
        };
    },
    //圆角矩形
    YuanJiao:function(){
        let self=this;
        self.init();
        self.obj.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            if(self.history.length>0){
                self.ctx.putImageData(self.history[self.history.length-1],0,0);
            }
            self.obj.onmousemove=function(e){
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                let mx=e.offsetX,my=e.offsetY;
                let largeX=10;
                let largeY=10;
                if (mx < ox) {
                    largeX *= -1;
                }
                if (my < oy) {
                    largeY *= -1;
                }
                self.ctx.beginPath();
                self.ctx.strokeStyle=self.miaoColor.value;
                self.ctx.fillStyle=self.tianColor.value;
                self.ctx.moveTo(ox+largeX,oy);
                self.ctx.setLineDash([0,0]);
                self.ctx.lineTo(mx-largeX,oy);
                self.ctx.quadraticCurveTo(mx,oy,mx,oy+largeY);
                self.ctx.lineTo(mx,my-largeY);
                self.ctx.quadraticCurveTo(mx,my,mx-largeX,my);
                self.ctx.lineTo(ox+largeX,my);
                self.ctx.quadraticCurveTo(ox,my,ox,my-largeY);
                self.ctx.lineTo(ox,oy+largeY);
                self.ctx.quadraticCurveTo(ox,oy,ox+largeX   ,oy);
                self.ctx[self.type]();
            };
            self.obj.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.obj.onmousemove=null;
                self.obj.onmouseup=null;
            }
        }
    },
    //多边形
    DuoBian:function(){
        let self=this;
        self.init();
        self.obj.onmousedown=function(e){
            self.num = self.bInput.value?self.bInput.value:3;
            let ox=e.offsetX,oy=e.offsetY;
            let angle=(360/self.num)*(Math.PI/180);
            self.obj.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                let cX=(mx-ox)/2;
                let cY=(my-oy)/2;
                let R=Math.abs(mx-ox);
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                self.ctx.beginPath();
                self.ctx.strokeStyle=self.miaoColor.value;
                self.ctx.fillStyle=self.tianColor.value;
                self.ctx.moveTo(ox+cX+R*Math.cos(45+angle*0),oy+cY+R*Math.sin(45+angle*0));
                self.ctx.setLineDash([0,0]);
                for(let j=1;j<self.num;j++){
                    self.ctx.lineTo(ox+cX+R*Math.cos(45+angle*j),oy+cY+R*Math.sin(45+angle*j));
                }
                self.ctx.closePath();
                self.ctx[self.type]();

            };
            self.obj.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.obj.onmousemove=null;
                self.obj.onmouseup=null;
            }
        };
    },
    //多角形
    DuoJiao:function(){
        let self=this;
        self.init();
        self.obj.onmousedown=function(e){
            self.num = self.bInput.value?self.bInput.value:3;
            let ox=e.offsetX,oy=e.offsetY;
            let angle=(360/(self.num*2))*(Math.PI/180);
            self.obj.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                let cX=(mx-ox)/2;
                let cY=(my-oy)/2;
                let R=Math.abs(mx-ox);
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                self.ctx.beginPath();
                self.ctx.strokeStyle=self.miaoColor.value;
                self.ctx.fillStyle=self.tianColor.value;
                self.ctx.moveTo(ox+cX+R*Math.cos(45+angle*0),oy+cY+R*Math.sin(45+angle*0));
                self.ctx.setLineDash([0,0]);
                for(let j=1;j<(self.num*2);j++){
                    if(j % 2 ==1){
                        self.ctx.lineTo(ox+cX+R/3*Math.cos(45+angle*j),oy+cY+R/3*Math.sin(45+angle*j));
                    }
                    if(j % 2 ==0 ){
                        self.ctx.lineTo(ox+cX+R*Math.cos(45+angle*j),oy+cY+R*Math.sin(45+angle*j));
                    }

                }
                self.ctx.closePath();
                self.ctx[self.type]();
            };
            self.obj.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.obj.onmousemove=null;
                self.obj.onmouseup=null;
            }
        };
    },
    //文字
    WenZi:function () {
        let self=this;
        let flag=true;
        self.obj.onmousedown=function (e) {
            if(!flag){
                return;
            }
            flag=false;
            let ox=e.clientX,oy=e.clientY;
            let ax=e.offsetX,ay=e.offsetY;
            let arr1=[];
            self.obj.onmousemove=function (e) {
                let cx=e.clientX,cy=e.clientY;
                if(arr1.length>0){
                    document.body.removeChild(arr1.pop());
                }
                let divs=document.createElement('div');
                divs.style.cssText=`width:${cx-ox}px;height:${cy-oy}px;position:absolute;left:${ox}px;top:${oy}px;border:1px solid #000000;font-size:16px`;
                document.body.appendChild(divs);
                divs.setAttribute('contenteditable','true');
                arr1.push(divs);
                divs.focus();
                arr1[0].onmousedown=function (e) {
                    let ox=e.offsetX,oy=e.offsetY;
                    arr1[0].onmousemove=function (e) {
                        let cx=e.clientX,cy=e.clientY;
                        let left=cx-ox,top=cy-oy;
                        ax=left-130;
                        ay=top-47;
                        this.style.left=left+'px';
                        this.style.top=top+'px';
                    };
                    arr1[0].onmouseup=function () {
                        arr1[0].onmousemove=null;
                        arr1[0].onmouseup=null;
                    }
                }
            };
            self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
            document.body.onmouseup=function () {
                self.obj.onmousemove=null;
                if(arr1.length>0){
                    arr1[0].onblur=function () {
                        flag=true;
                        this.onblur=null;
                        self.ctx.font=`20px black`;
                        document.body.removeChild(this);
                        self.ctx.fillText(this.innerText,ax,ay);
                    }
                }else {
                    flag=true;
                }
                document.onmouseup=null;
            }
        };
    },
    //橡皮擦
    Rubber:function(eraser){
        let self=this;
        self.obj.onmousedown=function(){
            if(self.history.length>0){
                self.ctx.putImageData(self.history[self.history.length-1],0,0);
            }
            self.obj.onmousemove=function(e){
                let mx=e.offsetX-10,my=e.offsetY-10;
                // eraser.style.display='block';
                eraser.style.left=mx+'px';
                eraser.style.top=my+'px';
                self.ctx.clearRect(mx,my,20,20);
            };
            document.onmouseup=function(){
                eraser.style.display='none';
                self.obj.onmousemove=null;
                self.obj.onmouseup=null;
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
            }
        };
    },
    //鼠标点击撤销
    SuCeXiao:function(){
        let self=this;
        document.body.onkeydown=function(e){
            if(e.ctrlKey && e.keyCode==90){
                if(self.history.length>0){
                    let last=self.history.pop();
                    self.ctx.putImageData(last,0,0);
                }else if(self.history.length==0){
                    self.ctx.clearRect(0,0,self.width,self.height);
                }
            }
        };
        if(self.history.length>0){
            let last=self.history.pop();
            self.ctx.putImageData(last,0,0);
        }else if(self.history.length==0){
            self.ctx.clearRect(0,0,self.width,self.height);
        }
    },
    //保存图片
    savE:function(){
        let data=this.obj.toDataURL('image/png').replace('data:image/png','data:image/png');
        location.href=data;
    },
    //清空
    Clear:function(){
        this.ctx.clearRect(0,0,this.width,this.height);
        this.history=[];
    },
    //新建
    newJian:function(hua){
        hua.removeChild(this.obj);
      let can=document.createElement('canvas');
      can.style.cssText=`width:1199;height:700;border:1px solid red;position: absolute;top:0;left:0`;
      hua.appendChild(can);
      this.obj = can;
      this.obj.width=1097;
      this.obj.height=498;
      this.history = [];
      this.ctx=this.obj.getContext('2d');
    },
    //裁剪
    Clea: function (caiBox) {
        let self = this;
        let ox,oy,ax,ay,width,height;
        self.obj.onmousedown = function (e) {
            ox = e.clientX; oy = e.clientY;
            ax = e.offsetX; ay = e.offsetY;
            width=ox-ax;
            height=oy-ay;
            document.onmousemove = function (e) {
                caiBox.style.display = 'block';
                caiBox.style.left = `${ox}px`;
                caiBox.style.top = `${oy}px`;
                let cx = e.clientX, cy = e.clientY;
                self.cx=cx-ox;
                self.cy=cy-oy;
                caiBox.style.width = self.cx + 'px';
                caiBox.style.height = self.cy + 'px';
                caiBox.onmousedown = function (e) {
                    let ox = e.offsetX,oy = e.offsetY;
                    caiBox.onmousemove = function (e) {
                        let cx = e.clientX, cy = e.clientY;
                        let left = cx - ox, top = cy - oy;
                        if(left<width){
                            left=width;
                        }
                        if(left>width+self.width-self.cx){
                            left=width+self.width-self.cx;
                        }
                        if(top<height){
                            top=height;
                        }
                        if(top>height+self.height-self.cy){
                            top=height+self.height-self.cy;
                        }
                        ax = left-width;
                        ay = top-height;
                        this.style.left = left + 'px';
                        this.style.top = top + 'px';
                        self.ctx.clearRect(0,0,self.width,self.height);
                        self.ctx.putImageData(self.bb,0,0);
                        self.ctx.putImageData(self.aa,ax,ay);

                    };
                    caiBox.onmouseup = function () {
                        caiBox.onmousemove = null;
                        caiBox.onmouseup = null;
                    };
                    self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                };
                if(self.flag1){
                    document.onmousedown=function (e) {
                        let dx=e.clientX-width,dy=e.clientY-height;
                        if(dx>ax&&dx<ax+self.cx&&dy>ay&&dy<ay+self.cy){
                            return;
                        }
                        caiBox.style.display='none';
                        self.flag=true;
                        self.flag1=false;
                    }
                }
            };
            document.onmouseup= function () {
                document.onmousemove = null;
                if(self.flag){
                    self.flag=false;
                    self.aa=self.ctx.getImageData(ax,ay,self.cx,self.cy);
                    self.ctx.clearRect(ax,ay,self.cx,self.cy);
                    self.bb=self.ctx.getImageData(0,0,self.width,self.height);
                    self.ctx.putImageData(self.aa,ax,ay);
                }
                document.onmouseup = null;
            };
            self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));

        }
    },
};


