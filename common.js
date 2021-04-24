/**
 * 时间戳转换日期格式
 * 第一种
 * +new Date()相当于调用 Date.prototype.valueOf() 方法，new Date().valueOf()
 * type yyyy-mm-dd hh:mm:ss 2018-10-10 10:10:10
 * type yyyy-mm-dd 2018-10-10 
 */
const format_date = function(date, type) {
	let res;
	res = (new Date(+new Date(parseInt(date)) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, ''));
	if (type == 'yyyy-mm-dd') {
		res = res.substring(0, 10);
	}
	return res;
}

/**
 * 时间戳转换日期格式
 * 第二种
 * timestamp
 */
function add0(m) {
	return m < 10 ? '0' + m : m
}
const timestampToTime = timestamp => {
	var time = new Date(parseInt(timestamp));
	var y = time.getFullYear();
	var m = time.getMonth() + 1;
	var d = time.getDate();
	var h = time.getHours();
	var mm = time.getMinutes();
	var s = time.getSeconds();
	return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}

// android和ios识别时间格式统一用“/”，ios用“:”会导致时间显示为NaN。

// js精度丢失解决办法
// 0.1 + 0.2 = 0.30000000000000004 转化为 (0.1*10 + 0.2*10)/10 = 0.3

// js 自执行函数写法
// 写法一
(function T() {
	alert(1);
})();

// 写法二
var T1 = function() {
	alert(1);
}();

// js 传值
var para1 = {
	a: 1,
	b: 2,
	c: 'Ok'
}
var T1 = function(obj) {
	alert(obj.a)
}(para1);

// 如果不用自执行方式，就得调用
function T() {
	alert(1)
};
T(); // 调用

// ES6 模块
var a = "My name is Tom!";
export default a; // 仅有一个
export default var c = "error"; // error，default 已经是对应的导出变量，不能跟着变量声明语句
 
import b from "./xxx.js"; // 不需要加{}，使用任意变量接收，b变量是只读的，b对象的属性可以进行赋值等操作
import 命令的特点：
import 命令会提升到整个模块的头部，首先执行。
// 只读属性：不允许在加载模块的脚本里面，改写接口的引用指向，即可以改写 import 变量类型为对象的属性值，不能改写 import 变量类型为基本类型的值。
// 单例模式：多次重复执行同一句 import 语句，那么只会执行一次，而不会执行多次。import 同一模块，声明不同接口引用，会声明对应变量，但只执行一次 import 。
// 静态执行特性：import 是静态执行，所以不能使用表达式和变量。
