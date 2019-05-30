$(function() {
  var categories = ".pp, .tool, .fin, .out";
	var sections = ".startText, .tutorial, .tools, .finance, .other";

	//INITIAL BEHAVIOR
	$(sections).hide();
	$(".startText").show();

	//CHANGERS
  $(".pp").click(function(){
		$(sections).hide();
		$(".tutorial").show();
		$(categories).removeClass("active");
		$(this).addClass("active");
	});

  $(".tool").click(function(){
		$(sections).hide();
		$(".tools").show();
		$(categories).removeClass("active");
		$(this).addClass("active");
	});

	$(".fin").click(function(){
		$(sections).hide();
		$(".finance").show();
		$(categories).removeClass("active");
		$(this).addClass("active");
	});

	$(".out").click(function(){
		$(sections).hide();
		$(".other").show();
		$(categories).removeClass("active");
		$(this).addClass("active");
	});
});

function querySearch() {
	var input, filter, ul, li, a, i, welcome;
	input = document.getElementById('searchBox');
	filter = input.value.toUpperCase();
	welcome = document.getElementById('welcome'); //mensagem inicial
	ul = document.getElementById('myUL');
	li = ul.getElementsByTagName("li");

	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		console.log(input.value);
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1 && input.value != "") {
			li[i].style.display = "";
		} else if(a.innerHTML.toUpperCase().indexOf(filter) > -1 && input.value == ""){
        $('.pp').removeClass('active');
        $('.tool').removeClass('active');
		    $('.fin').removeClass('active');
		    $('.out').removeClass('active');
		    $('.tools').hide();
        $('.tutorial').hide();
		    $('.finance').hide();
		    $('.other').hide();
		    $('.startText').show();
		} else {
			li[i].style.display = "none";
		}
	}
}
