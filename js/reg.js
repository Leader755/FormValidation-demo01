$(function(){
	//使用插件
	$(".reg-form").validate({
			errorClass:"error", // 设置报错时容器的类名,默认为error
			
			errorElement:"span", //指定错误提示显示的容器
/**************************设置验证失败的样式与内容的显示位置**************************/			
			errorPlacement:function(error,element){ //定义错误显示的位置与样式 ,error 提示内容 ，element 验证的表单元素
			//1.获取提示内容
			var err = $(error[0]).text();
			console.log(err);
			//2.将报错内容写入到span中
			$(element).next().html(err);
			//3.设置报错的样式
			$(element).parent().removeClass("success").addClass("error");
				},	
/**************************设置验证成功的样式与内容的显示位置**************************/					
			success:function(error,element){//验证成功
					console.log(error,element)
				//1.添加验证成功的提示内容
				$(element).next().html("验证通过！");	
				//2.改变样式
				$(element).parent().removeClass("error").addClass("success");
				},	
/**********************************配置验证规则****************************************/				
			rules:{//需要验证的规则
				nick:{//指定验证的昵称项， nick 为input元素的name 属性
					required:true,   //必填字段
					rangelength:[8,10]  //输入的字符长度在 6- 10之间
					},
				psw:{
					required:true,
					rangelength:[6,16]
					},
				psw1:{
					required:true,
					rangelength:[6,16],
					equalTo:"#psw"
					},
				tel:{
					required:true,
					isMobile:true  // 使用自定义验证规则
					}			
				
				},
/**************************************配置验证提示消息**************************************/				
			messages:{//验证提示消息
				nick:{
					required:"昵称必须要填写！",
					rangelength:jQuery.validator.format("请输入{0}到{1}位的昵称！")
					},
				psw:{
					required:"请输入您的密码!",
					rangelength:jQuery.validator.format("请输入{0}到{1}位的密码！")
					},
				psw1:{
					required:"请输入确认密码",
					rangelength:jQuery.validator.format("请输入{0}到{1}位的密码！"),
					equalTo:"两次密码输入不一致！"
					},	
				tel:{
					required:"请输入您的手机号码"
					}		
				}		
		});
})


/**************************自定义验证手机号码规则******************************/
jQuery.validator.addMethod("isMobile",function(value,element){//value 验证的输入值,element验证的元素
	var reg = /^1[34578]\d{9}$/g; //手机的正则
	return reg.test(value);
	},"请输入中国大陆合法的手机号码！");