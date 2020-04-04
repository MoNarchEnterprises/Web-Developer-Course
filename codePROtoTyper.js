$(".toggleButton").hover(function()
	{
		var b = $(this);
		if(b.hasClass("active")){
			b.addClass("activeHighlightedBtn");
		}
		else{
			b.addClass("highlightedBtn");
		}
	},
	function(){	
		var b = $(this);
		if(b.hasClass("active")){
			b.removeClass("activeHighlightedBtn");
		}
		else{
			b.removeClass("highlightedBtn");
		}
	})

$(".toggleButton").click(function(){
		var b = $(this);
		var id = b.attr("id");
		if(b.hasClass("activeHighlightedBtn")){
			b.removeClass("activeHighlightedBtn");
		}
		if(b.hasClass("highlightedBtn")){
			b.removeClass("highlightedBtn");
		}
		b.toggleClass("active");
		var pan = "#"+id+"Panel";
		$(pan).toggleClass("hidden");							
		updatePanels();	
	})

function updatePanels(){
	numActive = $(".toggleButton.active").length;
	panWt = ($(window).width()/numActive)*.925;
	$(".panel").width(panWt);
	$("textarea").on("change keyup paste", function(){
		$("iframe").contents().find("html").html("<html><head><style type='text/css'>"+
		$("#cssPanel").val()+"</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
		var ifrm = $("iframe")[0].contentWindow;
		ifrm.eval($("#jsPanel").val());
	});	
}

var panHt = $(window).height()-$("#topbar").height();
$(".panel").height(panHt);
updatePanels();
