window.onload=function () {
	//MVVM，面向M层开发，面向数据层开发
	var dataList = {
		list:[],
		inputValue:''
	};
	new Vue({
		el: '#app',
		data: dataList,
		methods:{
			handleBtnClick:function(){
				this.list.push(this.inputValue);
				this.inputValue=''
			}
		}
	});
}


