(function($){
	
	
	$(function(){
	
	
	//NOT FOUND STYLING
	

	var sidebarWidth = $('ul#sidebar').css('width');

	
	
	//Top Menu Bar	
	
	$.fn.underMenuOut = function() { 
		//height of drop down menu
	    return $(this).animate({ height: '200px'}, {queue: false, duration: 300}).show().removeClass('closed').addClass('open');
	}
	$.fn.underMenuIn = function() { 
	    return $(this).animate({ height: '0px'}, {queue: false, duration: 300}).fadeOut(300).removeClass('open').addClass('closed');
	}
	
		$('#firstMenuBtn p a').click(
			function () {	
					$('#secondMenuBtn p a, #thirdMenuBtn p a, #fourthMenuBtn p a').removeClass();
					$('#UnderMenu2, #UnderMenu3, #UnderMenu4').underMenuIn();
					$('#UnderMenu2 div, #UnderMenu3 div, #UnderMenu4 div').fadeOut({queue: false, duration: 300});
				
				if ($('#UnderMenu1').hasClass('closed')){
					$('#UnderMenu1').underMenuOut();
					$(this).removeClass('closed').addClass('open');
					$('#UnderMenu1 div').fadeIn({queue: false, duration: 500});
				}	
				else if ($('#UnderMenu1').hasClass('open')){
			    	$('#UnderMenu1').underMenuIn();
					$(this).removeClass('open').addClass('closed');
					$('#UnderMenu1 div').fadeOut({queue: false, duration: 300});
				}

		    });
		$('#secondMenuBtn p a').click(
			function () {	
					$('#firstMenuBtn p a, #thirdMenuBtn p a, #fourthMenuBtn p a').removeClass();
					$('#UnderMenu1, #UnderMenu3, #UnderMenu4').underMenuIn();
					$('#UnderMenu1 div, #UnderMenu3 div, #UnderMenu4 div').fadeOut({queue: false, duration: 300});
				
				if ($('#UnderMenu2').hasClass('closed')){
					$('#UnderMenu2').underMenuOut();
					$(this).removeClass('closed').addClass('open');
					$('#UnderMenu2 div').fadeIn({queue: false, duration: 500});
				}	
				else if ($('#UnderMenu2').hasClass('open')){
			    	$('#UnderMenu2').underMenuIn();
					$(this).removeClass('open').addClass('closed');
					$('#UnderMenu2 div').fadeOut({queue: false, duration: 300});
				}

		    });
		$('#thirdMenuBtn p a').click(
			function () {	
					$('#firstMenuBtn p a, #secondMenuBtn p a, #fourthMenuBtn p a').removeClass();
					$('#UnderMenu2, #UnderMenu1, #UnderMenu4').underMenuIn();
					$('#UnderMenu2 div, #UnderMenu1 div, #UnderMenu4 div').fadeOut({queue: false, duration: 300});
				
				if ($('#UnderMenu3').hasClass('closed')){
					$('#UnderMenu3').underMenuOut();
					$(this).removeClass('closed').addClass('open');
					$('#UnderMenu3 div').fadeIn({queue: false, duration: 500});
				}	
				else if ($('#UnderMenu3').hasClass('open')){
			    	$('#UnderMenu3').underMenuIn();
					$(this).removeClass('open').addClass('closed');
					$('#UnderMenu3 div').fadeOut({queue: false, duration: 300});
				}

		    });
		$('#fourthMenuBtn p a').click(
			function () {
					$('#firstMenuBtn p a, #secondMenuBtn p a, #thirdMenuBtn p a').removeClass();
					$('#UnderMenu2, #UnderMenu3, #UnderMenu1').underMenuIn();
					$('#UnderMenu2 div, #UnderMenu3 div, #UnderMenu1 div').fadeOut({queue: false, duration: 300});
				
				if ($('#UnderMenu4').hasClass('closed')){
					$('#UnderMenu4').underMenuOut();
					$(this).removeClass('closed').addClass('open');
					$('#UnderMenu4 div').fadeIn({queue: false, duration: 500});
				}	
				else if ($('#UnderMenu4').hasClass('open')){
			    	$('#UnderMenu4').underMenuIn();
					$(this).removeClass('open').addClass('closed');
					$('#UnderMenu4 div').fadeOut({queue: false, duration: 300});
				}
		    });
		
		$('#searchSticky, #search-zone').hover(
					  function () {
					    $('#search-zone').show();
						$('#search-zone form div input').focus();
					  }, 
					  function () {

							$('#search-zone').hide();
							$('#search-zone form div input').blur();

					  }
		);
			
	//	Footer Menus	
			
			$('#sidebar2 li.widget#notTag ul a').hover(
					  function () {
					    $(this).animate({ left: '10px' }, {queue: false, duration: 150});
						$(this).css({ borderLeft: '5px solid #a4a4a4'});
					  }, 
					  function () {
					    $(this).animate({ left: '0px' }, {queue: false, duration: 150});
						$(this).css({ borderLeft: '5px solid #333'});
					  }
			);
			$('#sidebar2 li.widget#tag-cloud ul a').hover(
					  function () {
					    $(this).animate({ marginLeft: '10px' }, {queue: false, duration: 150});
						$(this).css({ borderLeft: '5px solid #a4a4a4'});
					  }, 
					  function () {
					    $(this).animate({ marginLeft: '0px' }, {queue: false, duration: 150});
						$(this).css({ borderLeft: '5px solid #333'});
					  }
			);
	
	// UnderMenu
			
			$('#UnderMenu1 a, #UnderMenu2 a, #UnderMenu3 a, #UnderMenu4 a').hover(
					  function () {
					    $(this).animate({ marginLeft: '10px' }, {queue: false, duration: 150});
						$(this).css({ borderLeft: '5px solid #a4a4a4', backgroundColor: '#595959', textShadow: '1px 1px 1px #222', color: '#85BD17'});
					  }, 
					  function () {
					    $(this).animate({ marginLeft: '0px' }, {queue: false, duration: 150});
						$(this).css({ borderLeft: '5px solid #555', background: 'none', textShadow: '1px 1px 1px #999', color: '#222'});
					  }
			);
	
			
	//COMMENTS SECTION
	var barHeight = 0;
			
			// comment spacing corrections
	if ($(window).width() < 1255){
		barHeight = 120;
		$('.sorry').css('width', '20px');
		$('#LeftColumnSingle, .download-btn, img.main_image').css('width', '600px');
		$('.download-btn a').css({ float: 'left', marginTop: '0' });
		$('.download-btn a.demo').css({ marginLeft: '20px' });
		$('.margLeft').css({marginLeft: '5px'});
		$('.margLeft:first').css({clear: 'both'});
		$('.clearRight textarea').css({width: '350px', maxWidth: '350px'});
		$('.grid-sticky#adSticky').css({height: '445px'});  //Homepage ad resize
		$('#sidebar2 li.widget').css({width: '290px'});
		$('#contactUs').css({width: '910px'});
	}
	else{	
		barHeight = 0;	
		$('.sorry').css('width', sidebarWidth);
		$('#LeftColumnSingle, img.main_image').css('width', '910px');
		$('.download-btn').css({ width: '290px'});
		$('.download-btn a').css({ float: 'none', marginTop: '20px' });
		$('.download-btn a.demo').css({ marginLeft: '0' });
		$('.margLeft').css({marginLeft: '20px'});
		$('.margLeft:first').css({clear: 'none'});
		$('.clearRight textarea').css({width: '455px', maxWidth: '455px'});
		$('#sidebar2 li.widget').css({width: '390px'});
		$('#sidebar2 li.widget#notTag').css({marginRight: '25px'});
	}
				
	$(window).resize(function() {
		if ($(window).width() < 1240){
			barHeight = 120;
			$('.sorry').css('width', '20px');
			$('#LeftColumnSingle, .download-btn, img.main_image').css('width', '600px');
			$('.download-btn a').css({ float: 'left', marginTop: '0' });
			$('.download-btn a.demo').css({ marginLeft: '20px' });
			$('.margLeft').css({marginLeft: '5px'});
			$('.margLeft:first').css({clear: 'both'});
			$('.grid-sticky#adSticky').css({height: '445px'});  //Homepage ad resize
			$('#sidebar2 li.widget').css({width: '290px'});
			$('#contactUs').css({width: '910px'});
				if ($('#respond').hasClass('replying')){
				}
				else{
					$('.clearRight textarea').css({width: '350px', maxWidth: '350px'});
				}	
		}
		else{
			barHeight = 0;
			$('.sorry').css('width', sidebarWidth);
			$('#LeftColumnSingle, img.main_image').css('width', '910px');
			$('.download-btn').css({ width: '290px'});
			$('.download-btn a').css({ float: 'none', marginTop: '20px' });
			$('.download-btn a.demo').css({ marginLeft: '0' });
			$('.margLeft').css({marginLeft: '20px'});
			$('.margLeft:first').css({clear: 'none'});
			$('.grid-sticky#adSticky').css({height: '565px'});  //Homepage ad resize
			$('#sidebar2 li.widget').css({width: '390px'});
			$('#sidebar2 li.widget#notTag').css({marginRight: '25px'});
			$('#contactUs').css({width: '1220px'});
				if ($('#respond').hasClass('replying')){
					
				}
				else{
					$('.clearRight textarea').css({width: '455px', maxWidth: '455px'});
				}
		}
	});

	
	$(window).scroll(function() {
		
		var thisHeight = $(".social-media-wrapper").height();
		var parentHeight = $("#single-wrapper").height();
		var parent = $("#single-wrapper").offset();
		var offsetBottom = parent.top + parentHeight + barHeight - thisHeight - 150;
		
		if ($(document).scrollTop() > parent.top + barHeight) {
	        if ($(document).scrollTop() > offsetBottom - barHeight) { //delete googAd when using BSA
	          $(".social-media-wrapper").css({position: "relative", top: offsetBottom - 174 - 2*barHeight, float: "right", right: "0"});
	        }
			else{
		      $(".social-media-wrapper").css({position: "fixed", top: "10px", float: "none", right: "auto"});		
			}
        }
        else{
          $(".social-media-wrapper").css({position: "relative", top: "0", float: "right", right: "0"});
        }
	});
	

	//comment form styling
	$('.comment-form input').focus(function() {
	  if (this.value == this.defaultValue) this.value = '';
	});
	$('.comment-form input').blur(function() {
	  if (this.value == '') this.value = (this.defaultValue ? this.defaultValue : '');
	});
	
	$('.comment-list li.comment .reply .comment-reply-link').click(function () {	
			$('#respond').css({width: '96%', borderLeft:'solid 1px #C9C9C9', borderRight: 'solid 1px #777', borderBottom:'solid 1px #777'}).addClass('replying');
			var commentWidth = $('#respond').width();
			if ($(window).width() < 1255){
				$('p.clearRight textarea').css({width: commentWidth - 250 + 'px'});
			}
			else{		
				$('p.clearRight textarea').css({width: commentWidth - 475 + 'px'});
			}
	    });
	$('#cancel-comment-reply #cancel-comment-reply-link').click(function () {	
				if ($(window).width() < 1255){
					$('.clearRight textarea').css({width: '350px', maxWidth: '350px'});
				}
				else{		
					$('.clearRight textarea').css({width: '455px', maxWidth: '455px'});
				}
			$('#respond').css({width: '100%', borderLeft:'none', borderRight: 'none', borderBottom:'solid 1px #242424'}).removeClass('replying');
	    });
	
	
	//Social Media
	$('#social-media').hover(
			  function () {
			    $(this).animate({ height: '100px' }, {queue: false, duration: 150});
			  }, 
			  function () {
			    $(this).animate({ height: '63px' }, {queue: false, duration: 150});
			  }
	);
	$('#social-media a').hover(
			  function () {			
					$('#social-media .socialTitle').show();
					if ($(this).hasClass('twitter')){
							$('#social-media .socialTitle p.twitter').show();
					}
					else if ($(this).hasClass('digg')){
								$('#social-media .socialTitle p.digg').show();
					}
					else if ($(this).hasClass('stumble')){
								$('#social-media .socialTitle p.stumble').show();
					}
					else if ($(this).hasClass('delicious')){
								$('#social-media .socialTitle p.delicious').show();
					}
					else if ($(this).hasClass('designbump')){
								$('#social-media .socialTitle p.designbump').show();
					}
			  }, 
			  function () {
					$('#social-media .socialTitle').hide();
					$('#social-media .socialTitle p.twitter').hide();
					$('#social-media .socialTitle p.digg').hide();
					$('#social-media .socialTitle p.stumble').hide();
					$('#social-media .socialTitle p.delicious').hide();
					$('#social-media .socialTitle p.designbump').hide();
			  }
	);
	
	
	}); // end of document ready
})(jQuery); // end of jQuery name space