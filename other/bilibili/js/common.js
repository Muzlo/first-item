define(["lazyload","bootstrap"],function (){




var common={
	bstp:function (){
		//bstp点击下拉菜单禁止
		if($(window).width()>768){
			$(document).ready(function(){
			    $(document).off('click.bs.dropdown.data-api');
			});
		}
	},
	appIndex:function (){
		//首页下载app 显示隐藏
		$("#bs-example-navbar-collapse-1 .app").hover(function (){
			$(this).find(".appewmbg").fadeIn(200);
		},function (){
			$(this).find(".appewmbg").fadeOut(200);
		})
	},

	imglazy:function (){
		//图片延迟加载
	    $(function () {
            $("img.lazy").lazyload({
            	placeholder : 'img/load.png'
            });
        });
	},

	slickIndex:function (id){
		//1楼图片轮播
		$(id+' .slick').slick({
			accessibility:true,
	  		autoplay: true,
	  		autoplaySpeed: 4000,
	  		dots:true,
	  		cssEase: 'ease',
	  		arrows:false
		});
	},

	slickFloor3:function (id){
		//3楼 5楼 切换
		$(id+' .slick').slick({
			accessibility:true,
	  		autoplay: false,
	  		autoplaySpeed: 3000,
	  		dots: true,
	  		cssEase: 'ease',
	  		arrows:false,
	  		draggable:false
	  		
		});

		
		$(".hdfloor3r div").each(function (i,elem){
			$(elem).on('click',function (){
				setTimeout(late,200)
				function late(){
					$(elem).addClass('smalllight').siblings().removeClass('smalllight');
					$(".floor3 .slick-dots li").eq(i).find("button").trigger("click");
				}
			})

		});

	},
	MoveSilde:function (id){
		$(id+' .slick').on('swipe',function (){
			$(this).find(".con").each(function (i,e){
				if( $(e).hasClass("slick-current slick-active") ){
					//console.log(i)
					$(id+" .hdfloor3r div").eq(i-1).addClass('smalllight').siblings().removeClass('smalllight');

				}
			})
		});
	},


	//三楼右侧第三个轮播
	fl3Sarousel:function (id){
		
		var i=0;
		var timer=null;
		var html=$(id+" .sarousel ul li.li").eq(0).clone();
		$(id+" .sarousel ul").append(html)
		var len=$(id+" .sarousel ul.clearfix > .li").length/2;
		$(id+" .sarousel ul").width(260*len);
		function Move(){
			i--;
			if(i<-3){
				i=-1;
				$(id+" .sarousel ul").css("left","0")
			}
			$(id+" .sarousel ul").animate({"left":260*i+"px"})
		}

		function Move2(){
			i++;
			if(i>0){
				i=-2;
				$(id+" .sarousel ul").css("left",-260*(len-1)+"px")//
			}
			$(id+" .sarousel ul").animate({"left":260*i+"px"})
		}

		$(".arrowsLeft").on('click',function (){
			Move()
		})

		$(".arrowsRight").on('click',function (){
			Move2()
		})



		timer=setInterval(Move,5000)
		$(".sarousel").hover(function (){
			clearInterval(timer)
		},function (){
			timer=setInterval(Move,5000)
		})
		
	},
	//三楼右侧第一个	
	tooltip:function (elem){
			$(elem).eq(0).find("li").each(function (i,elem){
				var txtcontent=$(this).find("a").text();
				$(this).find("a").attr("rel",'popover')
				$(this).find("a").attr("data-original-title","第"+(i+1)+"名")
				$(this).find("a").popover({
					container:'body',
					trigger:'hover',
					placement:'top',
					html:'true',
					content:'<h5 style="color:red">'+txtcontent+'</h5><p>在线'+(i+1)+'&nbsp;&nbsp;&nbsp;&nbsp;订阅数'+i+'</p>',
					delay:{ show: 200, hide: 50 }
				}); 
			})
	},

	//五楼卡通选项切换
	cartoonAjax:function (id){ //#floor5,

		cartoonTab(0);
		$(id+" .smnew").each(function (index,elem){
			var j=index;
			$(this).click(function (){
				cartoonTab(j);
				$(this).addClass('active').siblings().removeClass('active')
			})
		})

		function cartoonTab(j) {
			$(id+" .cartoon").empty();
			var str=Math.random();

			$.ajax({
				url: 'js/cartoonInfo.txt?'+str,
				type: 'GET',
				dataType: 'txt'
			})
			.done(function(data) {
				var len=data["page"+j].length;
				var str="";
				for(var i=0;i<len;i++){
					str+="<div class='col-xs-6 col-sm-4 col-md-3'>";
					str+="<a target='_blank' href="+data["page"+j][i]["img"]+" class='thumbnail'>";
					str+="<i>"
					str+="<img class='lazy' src="+data["page"+j][i]["img"]+" />";
					str+="<div class='mask'>";
					str+="<span class='touxiangicon'>";
					str+="<img src="+data["page"+j][i]["touxiang"]+" />";
					str+="<em class='live'><span class='raduis-icon'></span>Live</em>";
					str+="</span>";
					str+="</div>";
					str+="</i>"
					str+="<p>"+data["page"+j][i]["title"]+"</p>"
					str+="</a>";
					str+="<div class='f3_totel'>";
					str+="<div class='col-md-6'><i class='icon-user'></i>"+data["page"+j][i]["user"]+"</div>";
					str+="<div class='col-md-6'><i class='icon-eye-open'></i>"+data["page"+j][i]["onlinePeople"]+"</div>";
					str+="</div>"
					str+="</div>"
				
				}
				$(id+" .cartoon").append(str)

			})
			
			
		}

	},
	bilibiliMoe:function (){

		$(".again").click(function (){
			var str=Math.random();
			$.ajax({
				url: 'js/cartoonInfo.txt?'+str,
				type: 'GET',
				dataType: 'txt'
			})
			.done(function(data) {
				$("#bilibiliMoe").empty();
				var j=Math.round(Math.random());
				var len=data["page"+j].length;
				var str="";
				for(var i=0;i<4;i++){
					str+="<div class='col-xs-6 col-sm-4 col-md-3'>";
					str+="<a href='#'' class='thumbnail'>";
					str+="<i>"
					str+="<img class='lazy' src="+data["page"+j][i]["img"]+" />";
					str+="</i>"
					str+="<p>"+data["page"+j][i]["title"]+"</p>"
					str+="</a>";
					str+="</div>"
				}
				$("#bilibiliMoe").append(str)

			})
			
		})
	},
	weekList:function (){
		$(".weekList span").each(function (i,elem){
			var txt=$(elem).find("strong").text();
			var _this=$(this);

			_this.on("click",function (){

				if(_this.find("em")){
					_this.find("em").remove("em");
				}

				_this.find("strong").before("<em>周</em>");
				_this.siblings('span').find('em').remove()
				_this.addClass('on').siblings("span").removeClass('on');
			})	

		})
	}


}


var fanjuList={



	fanjuListAjax:function (){

	var xhr=null;

	(function initial(){
				var str="";
				$(".fanjuList").empty();
				str="";

				$.ajax({
					url: 'js/week.txt',
					type: 'GET',
					dataType: 'txt'
				})
				.done(function(data) {
					var len=data["info"].length; //22
					for(var i=0;i<9;i++){
						
						if(i<len){
							
							str+="<div class='col-xs-12 col-md-4'>";
							str+="<div class='col-xs-5 col-md-5'>";
							str+="<a href='http://www.baidu.com'>";
							str+="<img src="+data["info"][i]["img"]+" />";
							str+="</a>";
							str+="</div>";
							str+="<div class='col-xs-6 col-md-6'>";
							str+="<p class='p1'><a>"+data["info"][i]["p1"]+"</a></p>";
							str+="<p class='p2'>更新至<em>"+data["info"][i]["p2"]+"</em></p>";
							str+="</div></div>"

						}
					}
			
					$(".fanjuList").append(str)
					
				})
			})()


	$("#floor6 .weekList span").each(function (i,e){
				

//////////////aaaaaa
			function aa(){
				///
				$(".fanjuList").empty();
				var str="";
				var now=i*5;
				var j=now+5;
				var url="js/week.txt";

				xhr=$.ajax({
					url: url,
					type: 'GET',
					dataType: 'txt'
				})
				.done(function(data) {
					var len=data["info"].length; //22

					for(var i=now;i<j;i++){
						
						if(i<len){
							
							str+="<div class='col-xs-12 col-md-4'>";
							str+="<div class='col-xs-5 col-md-5'>";
							str+="<a href='http://www.baidu.com'>";
							str+="<img src="+data["info"][i]["img"]+" />";
							str+="</a>";
							str+="</div>";
							str+="<div class='col-xs-6 col-md-6'>";
							str+="<p class='p1'><a>"+data["info"][i]["p1"]+"</a></p>";
							str+="<p class='p2'>更新至<em>"+data["info"][i]["p2"]+"</em></p>";
							str+="</div></div>"

						}
					}
			
					$(".fanjuList").append(str);
					$(e).addClass('on2').siblings().removeClass('on2')
					
				})
			}	
//////////////aaaaaa



			$("#floor6 .weekList span").eq(i).on("click",function (){
				if($(e).hasClass('on2')){
					//取消请求
					xhr.abort()
				}else{
					aa();
				}
			})
				

			////
			
			



	})
			




	}
}


var fixedNav={

	createNav:function (){
		var arr=['热门','推广','直播','Moe','动画','番剧','娱乐','推荐']
		$("<div id='fixedBar'><ul class='navbarul'></ul></div>").appendTo($("body"));
		for(var i=0;i<8;i++){
			$("<li class='hidden-xs'><a>"+arr[i]+"</a></li>").appendTo($(".navbarul"))
		}
		$(".navbarul li").each(function (i,e){
			$(e).find("a").attr("href","#floor"+(i+1))
		})
		$(".navbarul li").eq(0).find("a").addClass('light')

		function fixAdd(){
			for(var i=0;i<8;i++){
				if( $(window).scrollTop()>$("#floor"+(i+1)).offset().top-100 ){
					$(".navbarul li").find("a").removeClass('light')
					$(".navbarul li").eq(i).find("a").addClass('light')
				}
			}
		}
		
		//$(window).scroll(fixAdd)

		///节流
	    $(window).scroll(function (){
	        throttle(fixAdd,window);
	    })

		function throttle(method,context){
		    clearTimeout(method.tId);
		    method.tId=setTimeout(function(){
		        method.call(context);
		    },500);
		}




		$("<li class='toTop'><a class='glyphicon glyphicon-chevron-up'></a></li>").appendTo($(".navbarul"))
		$(".glyphicon-chevron-up").on("click",function (){
			$('body,html').animate({"scrollTop":0})
			
		})
	}
}


	fixedNav.createNav();//右侧导航栏
	if($(window).width()>768)common.bstp(); //bootstrop 默认点击禁止 （导航鼠标）
	common.appIndex(); //app二维码
	common.imglazy(); //图片懒加载
	common.slickIndex("#floor1");  //一楼 banner轮播
	common.slickIndex("#floor6"); //6楼 banner轮播
	common.slickFloor3("#floor3"); //三楼 右侧排行榜
	common.slickFloor3("#floor5"); //五楼 右侧排行榜
	common.fl3Sarousel("#floor3"); //三楼 右侧排行榜 第三个
    common.fl3Sarousel("#floor5"); //五楼 右侧排行榜 第三个
	common.tooltip(".f3r .tooltipfade"); //三楼 右侧排行榜 第一个 提示气泡
	common.tooltip(".f5r .tooltipfade"); //五楼 右侧排行榜 第一个 提示气泡
    common.cartoonAjax("#floor5"); //5楼卡通切换
    common.cartoonAjax("#floor7"); //7楼卡通切换
    common.slickFloor3("#floor7"); //7楼 右侧排行榜
    common.tooltip(".f7r .tooltipfade"); //五楼 右侧排行榜 第一个 提示气泡
    common.fl3Sarousel("#floor7"); //五楼 右侧排行榜 第三个
    common.bilibiliMoe();
    common.weekList();
    fanjuList.fanjuListAjax();
    common.MoveSilde("#floor3");
    common.MoveSilde("#floor5");
    common.MoveSilde("#floor7");
    
})