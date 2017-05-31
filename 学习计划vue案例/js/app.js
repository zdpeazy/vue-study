var list = [
	/*{
		title: '吃饭打豆豆',
		isChecked: false,
	},
	{
		title: '睡觉打豆豆',
		isChecked: true,
	},*/
];

new Vue({
	el: '.main',
	data: {
		list: list,
		todo: '',
	},
	computed: {
		noCheckedLength(){
			return this.list.filter(function(item){
                return !item.isChecked
            }).length;
		},
	},
	methods: {
		addTodo(data,ev){//添加任务
			/*
				1、向list中添加项
				2、{
					title: "input值"
				}
				3、事件处理函数中的this指向的是当前这个根实例
			*/
			//console.log(ev);
			this.list.push({
				/*title: ev.target.value//event.target可返回目标节点这一块操作dom了*/
				title: this.todo,
				isChecked: false,
				edit: false,
				extitle: this.todo,
			})
			this.todo = '';
		},
		deleteTodo(todo){//删除任务
			var index = this.list.indexOf(todo);
			this.list.splice(index,1)
		},
		editorTodo(todo){//编辑任务
			todo.edit = true;
		},
		finishEdit(todo){
			todo.extitle = todo.title;
			todo.edit = false;
		},
		cancelEdit(todo){
			todo.title = todo.extitle;
			todo.edit = false;
		}

	},
	directives: {
		"focus": {
			update(el,binding){
				if(!binding.value){
					el.focus();
				}
			}
		}
	}
})