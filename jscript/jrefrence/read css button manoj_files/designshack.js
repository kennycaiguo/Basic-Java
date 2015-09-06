$(document).ready(function() {
	

	$('#loadbranding').click(function() {
		$('#loadbranding').addClass('current');
		$('#loadweb').removeClass('current');
		$('#loadinterface').removeClass('current');
		$('#screenshot_container_web').hide();
		$('#screenshot_container_interface').hide();
		$('#screenshot_container_branding').fadeIn(500);
		return false;
	});
	
	$('#loadweb').click(function() {
		$('#loadweb').addClass('current');
		$('#loadbranding').removeClass('current');
		$('#loadinterface').removeClass('current');
		$('#screenshot_container_branding').hide();
		$('#screenshot_container_interface').hide();
		$('#screenshot_container_web').fadeIn(500);
		return false;
	});
	
	$('#loadinterface').click(function() {
		$('#loadinterface').addClass('current');
		$('#loadweb').removeClass('current');
		$('#loadbranding').removeClass('current');
		$('#screenshot_container_web').hide();
		$('#screenshot_container_branding').hide();
		$('#screenshot_container_interface').fadeIn(500);
		return false;
	});
	
	
	$('#loadcritique').click(function() {
		$('#loadcritique').addClass('current');
		$('#loadanalysis').removeClass('current');
		$('#loadbespoke').removeClass('current');
		$('#consultancy_container_analysis').hide();
		$('#consultancy_container_bespoke').hide();
		$('#consultancy_container_critique').fadeIn(500);
		return false;
	});


	$('#loadanalysis').click(function() {
		$('#loadcritique').removeClass('current');
		$('#loadanalysis').addClass('current');
		$('#loadbespoke').removeClass('current');
		$('#consultancy_container_analysis').fadeIn(500);
		$('#consultancy_container_bespoke').hide();
		$('#consultancy_container_critique').hide();
		return false;
	});
	

	$('#loadbespoke').click(function() {
		$('#loadcritique').removeClass('current');
		$('#loadanalysis').removeClass('current');
		$('#loadbespoke').addClass('current');
		$('#consultancy_container_analysis').hide();
		$('#consultancy_container_bespoke').fadeIn(500);
		$('#consultancy_container_critique').hide();
		return false;
	});


	
	
	
	$('#loadcritique_2').click(function() {
		$('#loadcritique').addClass('current');
		$('#loadanalysis').removeClass('current');
		$('#loadbespoke').removeClass('current');
		$('#consultancy_container_analysis').hide();
		$('#consultancy_container_bespoke').hide();
		$('#consultancy_container_critique').fadeIn(500);
		return false;
	});


	$('#loadanalysis_2').click(function() {
		$('#loadcritique').removeClass('current');
		$('#loadanalysis').addClass('current');
		$('#loadbespoke').removeClass('current');
		$('#consultancy_container_analysis').fadeIn(500);
		$('#consultancy_container_bespoke').hide();
		$('#consultancy_container_critique').hide();
		return false;
	});
	
	


	$('#loadanalysis_3').click(function() {
		$('#loadcritique').removeClass('current');
		$('#loadanalysis').addClass('current');
		$('#loadbespoke').removeClass('current');
		$('#consultancy_container_analysis').fadeIn(500);
		$('#consultancy_container_bespoke').hide();
		$('#consultancy_container_critique').hide();
		return false;
	});
	

	$('#loadbespoke_2').click(function() {
		$('#loadcritique').removeClass('current');
		$('#loadanalysis').removeClass('current');
		$('#loadbespoke').addClass('current');
		$('#consultancy_container_analysis').hide();
		$('#consultancy_container_bespoke').fadeIn(500);
		$('#consultancy_container_critique').hide();
		return false;
	});

	
	$("#pickcategory").change(onSelectCatChange);
	
	function onSelectCatChange(){
		var selected = $("#pickcategory option:selected");	
		window.location = selected.val();
	}
	

	
	
	
	$(document).ready(function()
	{
	    $(".defaultText").focus(function(srcc)
	    {
	        if ($(this).val() == $(this)[0].title)
	        {
	            $(this).removeClass("defaultTextActive");
	            $(this).val("");
	        }
	    });

	    $(".defaultText").blur(function()
	    {
	        if ($(this).val() == "")
	        {
	            $(this).addClass("defaultTextActive");
	            $(this).val($(this)[0].title);
	        }
	    });

	    $(".defaultText").blur();        
	});
	
	
	jQuery(document).ready(function($) {
	  $('a[rel*=facebox]').facebox() 
	});
	
	
	
});