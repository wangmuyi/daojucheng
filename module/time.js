define( ()=>{

    class  settime{
     
        constructor(){
            this.tday=document.querySelector(".time1");
            this.thour=document.querySelector(".time2");
            this.tmin=document.querySelector(".time3");
            this.tsec=document.querySelector(".time4");


            this.load();
        }
        load(){
     
            var that=this;
            var time2 = new Date(2019,11,15,0,0,0)

            function shijian(t1, t2) {
              var t = parseInt(Math.abs(t1.getTime() - t2.getTime()) / 1000)
              var day = parseInt(t / (60 * 60 * 24))
              var subDay = t - day * 60 * 60 * 24
              var hours = parseInt(subDay / (60 * 60))
              var subMinute = subDay - hours * 60 * 60
              var minutes = parseInt(subMinute / 60)
              var seconds = t % 60
              that.timetxt=[day,hours,minutes,seconds];
    
            }

            setInterval(()=> {
                var time1 = new Date()
                var res = shijian(time1, time2)
                
                this.tday.innerHTML=this.timetxt[0];
                this.thour.innerHTML=this.timetxt[1];
                this.tmin.innerHTML=this.timetxt[2];
                this.tsec.innerHTML=this.timetxt[3];
                
              }, 1000 )

             }


    }

    return settime;

})