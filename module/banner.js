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
        this.left=document.querySelector(".bleft");
        this.right=document.querySelector(".bright");
        this.box=document.querySelector("#ban-js")
        this.index = 0;
        this.iPrev = this.aimg.length-1;
        this.addEvent();
        this.init();
    }
    init(){
        let that = this;
        this.t = setInterval(()=>{
            this.mright();
        },3000)
        this.box.onmouseover=()=>{
            clearInterval(that.t)
        }
        this.box.onmouseout=()=>{
            that.t = setInterval(()=>{
                that.mright();
            },3000)
        }
    }
        addEvent(){
            let that=this;

            this.mleft=function(){
                that.addleft();
            }
            this.mright=function(){
                that.addright();
            }
            this.left.addEventListener("click",this.mleft);
            this.right.addEventListener("click",this.mright);
        }

        addleft(){
            if(this.index==0){
                this.index = this.aimg.length-1;
                this.iPrev = 0;
            }else{
                this.index--;
                this.iPrev = this.index+1;
            }
            this.move(1);
        }
        addright(){
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
    return ban
})