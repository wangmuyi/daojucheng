define( ()=>{
    
    function move(ele,data,cb){
        clearInterval(ele.t)
        ele.t = setInterval(function(){
            var onoff = true;
            for(var i in data){
                var iNow = parseInt(getStyle(ele,i));
                var speed = (data[i] - iNow)/10;
                speed = speed<0 ? Math.floor(speed) : Math.ceil(speed);
                if(iNow != data[i]){
                    onoff = false;
                }
                ele.style[i] = iNow + speed + "px";
            }
            if(onoff){
                clearInterval(ele.t);
                cb && cb();
            }
        },30)
    }
    
    //获取样式的功能
    function getStyle(ele,attr){
        if(getComputedStyle){
            return getComputedStyle(ele,false)[attr];
        }else{
            return ele.currentStyle[attr];
        }
    }

    class ban{
    constructor(){
        this.aimg =document.querySelectorAll("#ban-js img");
        this.left=document.querySelector("#b-t-c .bleft");
        this.right=document.querySelector("#b-t-c .bright");
        this.box=document.querySelector("#ban-js")
        this.index = 0;
        this.iPrev = this.aimg.length-1;
        this.addEvent();
        this.init();
    }
    

}



    return ban;
})

    class Banner{
        constructor(){
            this.aimg = document.querySelectorAll('#banner a');
            this.left = document.querySelector('#banner .btnl');
            this.right = document.querySelector('#banner .btnr');
            this.banner = document.querySelector('#banner .banner');
            this.index = 0;
            this.iPrev = this.aimg.length-1;
            this.addEvent();
            this.init();
        }
        init(){
            let that = this;
            this.t = setInterval(()=>{
                this.mRight();
            },3000)
            this.banner.onmouseover = ()=>{
                clearInterval(that.t)
            }
            this.banner.onmouseout = ()=>{
                that.t = setInterval(()=>{
                    that.mRight();
                },3000)
            }
        }
        addEvent(){
            let that = this;
            this.mLeft = function(){
                that.creatIndexLeft();
            }
            this.mRight = function(){
                that.creatIndexRight();
            }
            this.left.addEventListener("click",this.mLeft);
            this.right.addEventListener("click",this.mRight);
     
        }
        creatIndexLeft(){
            if(this.index == 0){
                this.index = this.aimg.length-1;
                this.iPrev = 0;
            }else{
                this.index--;
                this.iPrev = this.index+1;
            }
            this.move(1);
        }
        creatIndexRight(){
            if(this.index == this.aimg.length-1){
                this.index = 0;
                this.iPrev = this.aimg.length-1;
            }else{
                this.index++;
                this.iPrev = this.index-1;
            }
            this.move(-1);
        }
        move(type){
            this.aimg[this.index].style.left = -this.aimg[0].offsetWidth*type+"px";
            move(this.aimg[this.index],{
                left:0
            })
            this.aimg[this.iPrev].style.left = 0;
            move(this.aimg[this.iPrev],{
                left:this.aimg[0].offsetWidth*type
            })
            
        }
    }

    return Banner;
})

