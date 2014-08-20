head.ready(function() {

	$('.js-menu').on("click", function(){
		$('body').toggleClass('is-sidenav is-notsidenav');
	});

	$('.js-toggle').click(function(event) {
		$('#'+$(this).data('toggle')).slideToggle();
	});

});