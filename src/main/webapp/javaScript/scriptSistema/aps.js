$(document).ready(function() {
	// $.material.init();

	function deixarDivsInvisiveis() {
		$('#idHome').toggle();
		$('#idPqEconomizar').toggle();
		$('#idComoEcon').toggle();
		$('#idCalculeConsumo').toggle();
	}

	$('#btnHome').click(function() {
		$('#idHome').show();
		$('#idPqEconomizar').hide();
		$('#idComoEcon').hide();
		$('#idCalculeConsumo').hide();
		$('#nav-slide').css('left', -250);
	});

	$('#btnPqEconomizar').click(function() {
		$('#idHome').hide();
		$('#idPqEconomizar').show();
		$('#idComoEcon').hide();
		$('#idCalculeConsumo').hide();
		$('#nav-slide').css('left', -250);
	});

	$('#btnComoEcon').click(function() {
		$('#idHome').hide();
		$('#idPqEconomizar').hide();
		$('#idComoEcon').show();
		$('#idCalculeConsumo').hide();
		$('#nav-slide').css('left', -250);
	});

	$('#btnCalcule').click(function() {
		$('#idHome').hide();
		$('#idPqEconomizar').hide();
		$('#idComoEcon').hide();
		$('#idCalculeConsumo').show();
		$('#nav-slide').css('left', -250);
	});

	$(document).click(function(event) {
		if (event.target.id != "nav-slide" && event.target.id != "nav-btn") {
			$('#nav-slide').css('left', -250);
		}
	});

	$('#nav-btn').click(function() {
		var slider = document.getElementById("nav-slide");
		slider.style.height = window.innerHeight - 60 + "px";
		if (slider.style.left == "0px") {
			slider.style.left = "-250px";
		} else {
			slider.style.left = "0px";
		}
	});

	deixarDivsInvisiveis();
});
