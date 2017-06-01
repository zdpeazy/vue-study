//存取localStorage中的数据
var store = {
	save(key, value){
		localStorage.setItem(key,JSON.stringify(value));
	},
	fetch(key){
		return JSON.parse(localStorage.getItem(key)) || [];
	}
}

var list = store.fetch('vueKey');

//过滤有三种情况 all unfinished finished
var filter = {
	all: function(list){
		return list;
	},
	finished: function(list){
		return list.filter(function(item){
            return item.isChecked;
        })
	},
	unfinished: function(list){
		return list.filter(function(item){
            return !item.isChecked;
        })
	}
}

var vm = new Vue({
	el: '.main',
	data: {
		list: list,
		todo: '',
		visibility: 'all',//通过这个属性值变化筛选数据
	},
	watch: {
		//浅监控
		/*list: function(){//监控list数据，当这个属性对应的值发生变化时候就会执行函数
			store.save('vueKey', this.list);
		}*/
		//深度监控
		list: {
			handler: function(){
				store.save('vueKey', this.list);
			},
			deep: true
		}
	},
	computed: {
		noCheckedLength(){
			return this.list.filter(function(item){
                return !item.isChecked;
            }).length;
		},
		filteredList: function(){
			//找到了过滤函数如果有则为函数返回值如果没有则是list
			store.save('vueKey', this.list);//过滤时重新获取一遍localStorage
			return filter[this.visibility] ? filter[this.visibility](list) : list;

		}
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

function watchHashChange(){
	var hash = window.location.hash.slice(1);
	vm.visibility = hash;
}
watchHashChange();
window.addEventListener('hashchange', watchHashChange);
