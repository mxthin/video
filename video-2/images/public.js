$(function(){
	var $win = $(window),
		$doc = $(document),
		$body = $("body");
	var publicRender = {
		init:function(){
			this.showVideo();
		},
		showVideo:function(){
			// 弹出视频
			var $videoBtn = $(".show-video-btn"),
				$videoCloseBtn = $(".video-close-btn"),
				$videoPlay = $(".video-play");
			$videoBtn.on("click",function(e){
				e.stopPropagation()
				var $this = $(this),
					embed = $this.closest(".video-tag").find(".video-cur").html();
				$(embed).appendTo($body);
				$("html,body").addClass("overflow-y");
				$(".video-mask").css({
					width:$(document).width(),
					height:$(document).height()
				}).removeClass("hide");
				$(".video-play").removeClass("hide").animate({
					top:65 + $(document).scrollTop()
				},400)
			})
			$videoCloseBtn.add(document).on("click",function(){
				$(".video-play").animate({
					top:-(700 + $(document).scrollTop())
				},400,function(){
					$("html,body").removeClass("overflow-y");
					$(".video-mask").addClass("hide");
					$(this).find("embed").remove()
				})
			})
		},

	}
	// init
	publicRender.init()
})