head.ready(function() {

	$('.js-menu').on("click", function(){
		$('body').toggleClass('is-sidenav is-notsidenav');
	});

	$('.js-toggle').click(function(event) {
		$('#'+$(this).data('toggle')).toggle();
	});

	$('.top__selectvalue').click(function(event) {
		$(this).parent().toggleClass('is-active');
	});
	$(document).click(function(event) { 
	    if(!$(event.target).closest('.top__select').length) {
	        if($('.top__select').hasClass("is-active")) {
	            $('.top__select').toggleClass('is-active');
	        }
	    }        
	})

	$('.top__selectdrop a').click(function(event) {
		event.preventDefault();
		$(this).closest('.top__select').removeClass('is-active');
		$(this).closest('.top__select').children('.top__selectvalue').text($(this).text());
	});

	$('.user').click(function(event) {
		$(this).toggleClass('is-active');
	});
	$(document).click(function(event) { 
	    if(!$(event.target).closest('.user').length) {
	        if($('.user').hasClass("is-active")) {
	            $('.user').toggleClass('is-active');
	        }
	    }        
	})
	// $('.select').click(function(event) {
	// 	$(this).toggleClass('is-active');
	// });
	$('.js-payout .select__valuewrap').click(function(event) {
		$(this).parents('.select').toggleClass('is-active');
	});

	$(document).click(function(event) { 
	    if(!$(event.target).closest('.js-payout').length) {
	        if($('.js-payout').hasClass("is-active")) {
	            $('.js-payout').toggleClass('is-active');
	        }
	    }        
	})

	$('.js-payout li').click(function(event) {
		$(this)
			.closest('.select')
			.removeClass('is-active')
			.children('.select__valuewrap')
			.html($(this).html());
		// this sets hidden input value
		if($(this).closest('.select').find('input').length){
			$(this).closest('.select').find('input').val($(this).html());
		}
	});
	$(".js-genericselect select").change(function(event) {
		$(this).parents('.select').children('.select__value').text($(this).val());
		// this optionally sets input, if there is one
		if($(this).parents('.select').find('input').length){
			$(this).parents('.select').find('input').val($(this).val());
		}
	});
	$('.js-toggledate').change(function(event) {
		if($(this).val()=='Custom'){
			$('.input-date').css('display','inline-block');
		}
		else{
			$('.input-date').hide();
		}
	});
	$('.js-togglerow').click(function(event) {
		$(this).parent().next().toggle();
	});
});