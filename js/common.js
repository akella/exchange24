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
	$('.top__selectdrop a').click(function(event) {
		event.preventDefault();
		$(this).closest('.top__select').removeClass('is-active');
		$(this).closest('.top__select').children('.top__selectvalue').text($(this).text());
	});

	$('.user').click(function(event) {
		$(this).toggleClass('is-active');
	});
	// $('.select').click(function(event) {
	// 	$(this).toggleClass('is-active');
	// });
	$('.js-payout .select__valuewrap').click(function(event) {
		$(this).parents('.select').toggleClass('is-active');
	});

	$('.js-payout li').click(function(event) {
		$(this)
			.closest('.select')
			.removeClass('is-active')
			.children('.select__valuewrap')
			.html($(this).html());
	});
	$(".js-genericselect select").change(function(event) {
		$(this).parents('.select').children('.select__value').text($(this).val());
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
	// @todo set input value
	// @todo hide dropdowns on blur
});