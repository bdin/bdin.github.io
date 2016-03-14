$(document).ready(function(){

	//main layout

	$('#about').click(function () {
        $('#about-info').slideToggle(300);
     });

	$('#clips').click(function () {
        $('#clips-info').slideToggle(300);
     });

	$('#resume').click(function () {
        $('#resume-info').slideToggle(300);
     });

	$('#contact').click(function () {
        $('#contact-info').slideToggle(300);
     });

	//portfolio

	$("#journo").fadeIn();
	$("#digital").hide();

		//fades

	$("#journolink").on("click",function(){
		$("#journo").fadeIn("slow");
		$("#digital").hide();
	});

	$("#digitallink").on("click",function(){
		$("#journo").hide();
		$("#digital").fadeIn("slow");
	});

		//click

	$(".boxy").click(function() {
	   $(".boxy").removeClass("active");  // remove active class from all
	   $(this).addClass("active");         // add active class to clicked
	});

});
