jQuery.extend(jQuery.validator.messages, {
	 required: "必填项目",
	 remote: "请修正该字段",
	 email: "请输入正确格式的电子邮件",
	 url: "请输入合法的网址",
	 date: "请输入合法的日期",
	 dateISO: "请输入合法的日期 (ISO).",
	 number: "请输入合法的数字",
	 digits: "只能输入整数",
	 creditcard: "请输入合法的信用卡号",
	 equalTo: "请再次输入相同的值",
	 accept: "请输入拥有合法后缀名的字符串",
	 maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 位的字符串"),
	 minlength: jQuery.validator.format("请输入一个长度最少是 {0} 位的字符串"),
	 rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
	 range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
	 max: jQuery.validator.format("请输入一个最大为 {0} 的值"),
	 min: jQuery.validator.format("请输入一个最小为 {0} 的值")
 });

//表单验证
//验证name属性,所有需要验证的控件都必须加入name属性,且name值等于roles参数里面设置的相对应值。
//message参数表示当验证不通过时，提示的错误信息.
//errorPlacement 表示自定义的错误信息显示位置(可修改错误提示的样式).

$().ready(function() {
	jQuery.validator.addMethod("passwordValidate", function(password, element) {
		var r = /^(?!^(\d+|[a-zA-Z]+)$)(?!.*[~@#]+.*).+$/;				
		return r.test(password);
	}, "密码必须由英文，数字或 _ 至少两种组成");
	$("#regist-form").validate({
		rules: {
			phone: {
				required: true,
				minlength: 11,
				maxlength: 11
			},
			password: {
				required: true,
				minlength: 6,
				maxlength: 20,
				passwordValidate:true
			},
			confirm_password: {
				required: true,
				minlength: 6,
				maxlength: 20,
				equalTo: "#password",
				passwordValidate:true
			},
			verify: {
				required: true,
				minlength: 6,
				maxlength: 6
			}
		},
		messages: {
			phone: {
				required: "手机号不能为空",
				minlength: "手机号不正确",
				maxlength: "手机号不正确"
			},
			password: {
				required: "密码不能为空",
				minlength: "密码长度6位以上"
			},
			confirm_password: {
				required: "确认密码不能为空",
				minlength: "密码长度6位以上",
				equalTo: "两次输入的密码不一致"
			},
			verify: {
				required: "验证码不能为空",
				minlength: "验证码为6位",
				maxlength: "验证码为6位"
			}
		}
	});

});
		


