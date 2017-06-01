$(function(){
	$('.box').fullpage({
		sectionsColor: ['#00bFFF', '#4BBFC3', '#7BAABE', '#16A085'],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#menu',

		afterLoad:function(anchoLink,index){
			if(index==2){
                $('.section2').find('.son2Piao1').delay(500).animate({left:'0'},200,'easeOutExpo');
                $('.section2').find('.son2Piao2').delay(500).animate({left:'80'},400,'easeOutExpo');
                $('.section2').find('.son2Piao3').delay(500).animate({left:'160'},600,'easeOutExpo');
                $('.section2').find('.son2Piao4').delay(500).animate({left:'240'},800,'easeOutExpo');
                $('.section2').find('.son2Piao5').delay(500).animate({left:'320'},1000,'easeOutExpo')
			}
		},

		onLeave:function(index,direction){
            $('.section2').find('.son2Piao1').delay(500).animate({left:'-300%'},500,'easeOutExpo');
            $('.section2').find('.son2Piao2').delay(500).animate({left:'-300%'},500,'easeOutExpo');
            $('.section2').find('.son2Piao3').delay(500).animate({left:'-300%'},500,'easeOutExpo');
            $('.section2').find('.son2Piao4').delay(500).animate({left:'-300%'},500,'easeOutExpo');
            $('.section2').find('.son2Piao5').delay(500).animate({left:'-300%'},500,'easeOutExpo')
		}
	});

	$('.son-bottom .sonBoLeSon .son-bottomLe>a').hover(
		function(){
			$('.son-bottom .sonBoLeSon .son-bottomLe>a .sectioniMask').css('width','100%')
		},
    	function(){
            $('.son-bottom .sonBoLeSon .son-bottomLe>a .sectioniMask').css('width','0%')
    	})


});
