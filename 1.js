	var name=prompt("请输入邮箱")
	console.log('邮箱账号为: '+ name)
    var oText= document.getElementsByName("email_addr");
        oText[0].value=name;
        var a = document.getElementsByClassName("btn_s02")
        a[0].click()
     var harf=prompt("请输入注册页面")
     alert(typeof harf)
       window.location.href= harf
        document.getElementById("userid").value="zone9844"
        document.getElementById("passwd").value="123456789"
        document.getElementById("passwd_con").value="123456789"
        document.getElementById("agree").checked=true
        document.getElementById("join_button").click()
		
		
		
		    var oText= document.getElementsByName("email_addr");
        oText[0].value=name;
        var a = document.getElementsByClassName("btn_s02")
        a[0].click(function(){
            var harf=prompt("请输入注册页面")
            window.location.href= harf
            document.getElementById("userid").value="zone9844"
            document.getElementById("passwd").value="123456789"
            document.getElementById("passwd_con").value="123456789"
            document.getElementById("agree").checked=true
            document.getElementById("join_button").click(function(){alert("注册成功")})
        })
		ocument.getElementsByClassName("btn_submit")[0].click
		
		https://jp.mnet.com/mobileweb/member/login.m