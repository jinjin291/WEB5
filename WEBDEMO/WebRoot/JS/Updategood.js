
	function sumbitCheck(){
		alert("ll");
		var CID=$("#CID").val();
		var CNAME=$("#CNAME").val().trim();
		var CMANUFACTURER=$("#CMANUFACTURER").val().trim();
		var CDEPICT=$("#CDEPICT").val().trim();
		var CPRICE=$("#CPRICE").val().trim();
		var CAPRICE=$("#CAPRICE").val().trim();
		var CAMOUNT=$("#CAMOUNT").val().trim();
		var CLEAVENUM=$("#CLEAVENUM").val().trim();
		var CSTARTIME=$("#CSTARTIME").val().trim();
		/*if(CNAME!=""&&CNAME!=null){
			$("#spanCNAME").html("true");	
			$("#spanCNAME").css("color","#fff");
		}
		else{		
			$("#spanCNAME").html("名称不能为空");
			$("#spanCNAME").css("color","red");
			return false;
		}
		if(email!=""&& email!=null&&checkEmail(email)){
			$("#spanemail").html("TRUE");
			$("#spanemail").css("color","#fff");
		}
		else if(!checkEmail(email)){	
			$("#spanemail").html("邮箱格式不正确");
			$("#spanemail").css("color","red");
			
			return false;
		}
		else{
			$("#spanemail").innerHTML="";
		}
		if(phone!=""&&phone!=null&&checkPhone(phone)){
			$("#spanphone").html("TRUE");
			$("#spanphone").css("color","#fff");
		}
		else if(!checkPhone(phone)){
			$("#spanphone").html("电话格式不正确");
			$("#spanphone").css("color","red");
			return false;
		}
		else{
			$("#spanPhone").html("");
		}*/
		Clear();
		 $.ajax({
             url: "Goods/Updategood",
             type: "POST",
             data: {
            	 CID:CID,CNAME:CNAME,CCID:CCID,CMANUFACTURER:CMANUFACTURER,CDEPICT:CDEPICT,CPRICE:CPRICE,CAPRICE:CAPRICE,CAMOUNT:CAMOUNT,CLEAVENUM:CLEAVENUM,CSTARTIME:CSTARTIME
             },
             dataType: "json",
             success: function (result) {
                 if (result.code == 1) { 
                	 Clear();     
                     noty({ text: "成功修改", type: 'information', layout: 'center', timeout: 2000 });  
                     setTimeout(function () { window.location='Goods/GoodsList.jsp?active=menupage6_2' ;}, 1000);
                   
                 }
                 else {
                     noty({ text: "修改失败", type: 'warning', layout: 'center', timeout: 2000 });
                 }
             },
             error: function () {
                 noty({ text: "检查网络设置", type: 'warning', layout: 'center', timeout: 2000 });
             }

         });
		return true;
		
	};
	//清空
	function Clear() {
		$(':input','#myform') 
		.not(':button, :reset, :hidden') 
		.val('') 
		.removeAttr('checked') 
		.removeAttr('selected');
	};
	 
	 