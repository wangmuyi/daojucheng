require.config({
	baseUrl:"module",
	paths:{
        ban:"banner",
        dis:"display",
        time:"time"

	}
})

require(["banner","display","time"],(t1,t2,t3)=>{
    
    new t1();
    new t2();
    new t3();
})
