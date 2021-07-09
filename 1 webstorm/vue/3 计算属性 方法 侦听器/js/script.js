window.onload=function () {
	var dataList = {
		firstName: "World",
		lastName:"Bill",
		age:45
	};

	var vm =new Vue({
		el: '#app',
		data: dataList,
		methods:{
			fullName:function(){
				console.log("计算了一次");
				return this.firstName+" "+this.lastName;
			}
		},
		computed:{
			fullName:function(){
				console.log("计算了一次");
			    return this.firstName+" "+this.lastName;
			}
		}
	});
}


