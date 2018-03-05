	var w = new Vue({
		el: "#wrapper",
		data: {
			show:true,
			hide:false,
			toggle:true,
			StoreActive:0,
			static: "",
			listLength:[],
			doc:"",
			lis: [
				{
					name:1
				},
				{
					name:2
				}
			]
		},
		methods:{
			/*选中与取消*/
			 togglefn :function(key){
				 this.listLength[key].open = !this.listLength[key].open
			},
			/*可用不可用的tab切换*/
			tab(tabNum){
				this.StoreActive = tabNum
			}
		},
		beforeMount:function(){
			var that = this ;
			length();
			function length(){
				for(let i=0;i< that.lis.length ;i++ ){
					that.listLength.push({"open":1});
				}
			}
		}
	})