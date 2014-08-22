head.ready(function() {

	$('.js-menu').on("click", function(){
		$('body').toggleClass('is-sidenav is-notsidenav');
	});

	$('.js-toggle').click(function(event) {
		$('#'+$(this).data('toggle')).slideToggle();
	});
	$('.top__select').click(function(event) {
		$(this).toggleClass('is-active');
	});

	$('.user').click(function(event) {
		$(this).toggleClass('is-active');
	});
});