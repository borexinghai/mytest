window.onload=function () {
	var dataList = {
		content: 'hello world'
	};
	setTimeout(function () {
		dataList.content='bye'
	},2000);

	new Vue({
		el: '#app',
		data: dataList
	});
}


