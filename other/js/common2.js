//回到顶部
		document.getElementById('toTop').onclick=function (){
			document.body.scrollTop=0 
			document.documentElement.scrollTop=0
		}
	//回到顶部


	//加载更多	
		var html="",url="js/storeName.json",num=0;

		var msg=null;
		var i=0;
		var now=0;
		var j=0;
		$.ajax({
			url: url,
			type: 'get',
			dataType: 'json',
			beforeSend:function (){
				$(".list ul .loader").show();
				
			},
			success:function (data){
				$(".list ul .loader").hide();
				for(i=0;i<3;i++){
					html+="<li><div class='li-top'><em class='span1'>"+data["name"+(i+1)]+"</em><span class='span2'>好评</span><span class='span3'>差评</span></div><div class='li-bottom'><a href='javascript:;' class='model-btn'>评价</a></div></li>";
				}
				num=i
				$(".list ul").append(html);
				msg=data;
				//弹层1
					model1()
				//弹层1
				//弹层2
					model2()
				//弹层2
			}
		})

		$(".more").click(function (){
			num=i+3;
			now+=3;
			var addHTML=""
			for(i=now;i<num;i++){
				if(i<7){
					addHTML+="<li><div class='li-top'><em class='span1'>"+msg["name"+(i+1)]+"</em><span class='span2'>好评</span><span class='span3'>差评</span></div><div class='li-bottom'><a href='javascript:;' class='model-btn'>评价</a></div></li>";
				}else{
					$(".more a").text("没有更多了")
				} 
				}
			$(".list ul").append(addHTML);	

			//弹层1
			model1()
			//弹层1
			//弹层2
			model2()
			//弹层2
		})

	//加载更多	
	
	//弹层1方法
function model1(){
	$(".model-btn").each(function (i){

		$(this).click(function (){
			$(".model-bg").fadeIn("fast")
			$(".model-content1").fadeIn("fast")
			var txt=$(this).parent().prev().children("em").text();
			$(".p1 span").text(txt);
			
			$("html,body").css("overflow","hidden");
			$(".model-content .close,.p5 input").click(function (){
				$(".model-bg").fadeOut("fast");
				$(".model-content1").fadeOut("fast");
				$("html,body").css("overflow","auto");
			});
			$(".p3 textarea").val("")
		})
	})
	

	//判断是否超出文字个数
	
	$(".p3 textarea").keyup(function() {
		
		var i1=$(".p3 i").eq(0);
		var i2=Number($(".p3 i").eq(1).text());
		var len=$(".p3 textarea").val().length;

		if(len<i2){
			$(".model-content .p3 em span").fadeOut("fast");
			i1.text(len);
		}else if(len==i2){
			$(".model-content .p3 em span").show();
			i1.text(len);
		}else{
			var num=$(".p3 textarea").val().substring(0,i2-1);
			$(".p3 textarea").val(num);
			$(".model-content .p3 em span").show();
		}
		
	});
	
}
	//弹层1方法
		
	//弹层2方法

function model2(){
	var imgUrl=["img/good.jpg","img/bad.jpg"];
	var arrPJ=["好评","差评"];
	$(".list li").each(function (i){

	
		$(this).find("span").each(function (j){
			$(this).click(function (){
				var txt=$(this).siblings("em").text();
				$(".model-bg").slideDown("fast")
				$(".model-content2").fadeIn(500)
				$(".h3 img").attr("src",imgUrl[j]);
				$(".h4 em").text(arrPJ[j]);
				$(".h4 i").text(txt)
				$(".close,.p5").click(function (){
					$(".model-bg").slideUp("fast")
					$(".model-content2").fadeOut(500);
				});
			})
		})
	})
}


	//弹层2方法