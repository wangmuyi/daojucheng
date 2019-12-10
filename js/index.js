require.config({
	baseUrl:"module",
	paths:{
        ban:"banner",
        dis:"display"     
	}
})

require(["banner","display"],(t1,t2)=>{
	
    new t1();
    new t2();
})
