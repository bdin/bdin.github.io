$(document).ready(function() {
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
