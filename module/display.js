define( ()=>{

    class dis{
        constructor(){
            this.url="http://localhost:81/lib/jj.json"
            this.boxb1=document.querySelector("#b1-lbox");
            this.boxb2=document.querySelector("#b2-lbox");


            this.load();
        }
        load(){
            var that =this;
            ajaxGet(this.url,function(res){
                that.res = JSON.parse(res);
                that.display();
            })

        }


        
       

        display(){
            let str1 =""
            for(var i=0;i<6;i++){
                str1 +=`
                <dl>
                            <dt><img src="${this.res[i].ximg}" /></dt>
                            <dd>
                                <p><b>[英雄联盟]</b>${this.res[i].name}</p>
                                <p>QB价 ：<span class="red">${this.res[i].price} QB</span></p>
                                <p>热卖推荐</p>
                                <a class="sale" href="shop.html?id=${this.res[i].num}">立即抢购</a>
                            </dd>
                        </dl>`
            }
            this.boxb1.innerHTML = str1;

            let str2 =""
            for(var j=5;j<10;j++){
                str2 += `
                <li>
                <img src="${this.res[j].ximg}"/>
                <a>
                <p class="name">[英雄联盟]</p>
                <p>
                ${this.res[j].name}</p>
                </a>
                <p class="pre">商城价:<span>${this.res[j].price} QB</span></p>
            </li>
                `
            }
            this.boxb2.innerHTML = str2;

        }



    }
    return dis;

})