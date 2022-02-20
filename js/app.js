$(document).foundation();
$(document).ready(function() {

	$("#hamburguer").click(function() {
		$("#hamburguer-buttons").slideToggle('fast');
	});

	$(window).scroll(function(){
		$('.button-next').addClass('hide', $(this).scrollTop() > 100);
	});

	$(".button-next").hover(
		function () {
			$(this).removeClass("jump");
			$(this).addClass("bold");
		},
		function () {
			$(this).addClass("jump");
			$(this).removeClass("bold");
		}
		);
});
