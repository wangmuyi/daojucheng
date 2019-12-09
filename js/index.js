require.config({
	baseUrl:"module",
	paths:{
		ban:"banner"
	}
})

require(["ban"],(t1)=>{
	
    console.log("加载完成")
    
    t1();
})
