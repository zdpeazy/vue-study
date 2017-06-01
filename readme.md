vue 
1、渐进式的框架
2、两个特点
	响应数据绑定
	可组合的组件
3、虚拟dom
4、声明式渲染
5、虚拟dom
6、mvvm
7、内置的指令v-
v-bind : 动态绑定数据/属性 简写 :
v-on : 绑定事件监听 简写 @
v-text ： 更新数据，覆盖已有的结构
v-html ： 可以解析数据里面html结构
v-show ： 根据值得真假，切换元素的display属性
v-if ： 根据值得真假，切换元素会被销毁、重建
v-else-if ： 多条件判断，真则渲染
v-else ： 条件都不符合渲染
v-for ： 基于源数据多次渲染元素或者模板
v-model ： 在表单控件上创建双向数据绑定
v-pre ： 跳过元素和子元素的编译过程
v-once ： 只渲染一次，随后数据更新不在渲染
v-cloak ： 隐藏未编译的Mustache语法，css中设置[v-cloak]{display:none}

8、html模板 基于DOM
	插值：
	  -- 文本插值
	  -- 原生html（v-html）
	  -- 属性  （v-bind）
	  -- 简单JavaScript语法 在{{里面写表达式}} 
9、字符串模板 template
	  -- 只能有一个根节点
	  -- 字符串放到script标签里面<script type="x-template" id="temp"></script>
	  	  调用template: '#temp',（复用性不强）
	  -- es6 提供了一个超级字符串的写法 ~~
10、模板-render函数
	  -- render 选项对象的属性
	  -- render(标签名,[数据对象],子元素)
	  -- render里面的对象
	  	--class: {} //绑定class 和v-bind:class一样的api
	  	--style: {} //绑定class 和v-bind:style一样的api
	  	--attrs: {} //添加行间属性
	  	--domProps: {} //DOM元素属性
	  	--on: {} //绑定事件

	  	--nativeOn: {} //添加原生事件
	  	--deirectives: {} //自定义指令
	  	--scopedSlots: {} //slot作用域
	  	--slot: {} //定义slot名称
	  	--key: "key" //给元素添加唯一的标识
	  	--ref: {} //引用信息

10、class绑定判断
		--v-bind:class="{key:value}" //key是绑定的class名字，value值是数据判断
11、vue实现任务列表案例

12、列表渲染
	  -- v-for 指令 根据一组数组列表进行渲染
	     语法
	     value，key in items
	     value，key of items
13、vue的事件处理器
      -- v-on:eventName = "funciton"
      事件处理函数统一写在methods里面
14、事件修饰符
	事件处理函数只负责逻辑的判断不处理DOM事件的细节
	如：阻止冒泡、取消默认行为、判断按键
	--修饰符的位置
	v-on:eventName.修饰符
	--修饰符
	.stop  .prevent .capture .self .once
	--按键修饰符
	.enter .tab .delete .esc .space .up
	.down .left .right .ctrl .alt .shift .meta
	.键值
15、条件渲染
	-- v-show="表达式"
	元素会渲染到页面中，只是根据表达式来切换css

16、动态绑定class 
	-- v-bind:class="{className:表达式}"

17、变异方法
	-- .push() .splice() 是vue封装好的，只不过与原生的相同方法

18、自定义指令(进阶)
 	-- 选项对象的directives属性
 	{
 		directives:{}
 	}
 	钩子函数
 	update:被绑定的元素，可以用来直接操作dom
19、筛选
 	filter	数组方法 函数里面是筛选条件
20、计算属性
 	vue不推荐在模板里面写入逻辑
 	模板是为了描述视图的结构，模板中放入太多逻辑，导致模板重难以维护
 	在计算一个属性的时候，vue.js更新它的依赖列表并缓存结果，只有当其中的一个依赖发生变化，缓存的结果才无效
21、深度监控浅度监控
	
 	


