$(document).ready(function() {
//	$.material.init();

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
	});

	$('#btnPqEconomizar').click(function() {
		$('#idHome').hide();
		$('#idPqEconomizar').show();
		$('#idComoEcon').hide();
		$('#idCalculeConsumo').hide();
	});

	$('#btnComoEcon').click(function() {
		$('#idHome').hide();
		$('#idPqEconomizar').hide();
		$('#idComoEcon').show();
		$('#idCalculeConsumo').hide();
	});

	$('#btnCalcule').click(function() {
		$('#idHome').hide();
		$('#idPqEconomizar').hide();
		$('#idComoEcon').hide();
		$('#idCalculeConsumo').show();
	});

	deixarDivsInvisiveis();
});

 function slidetoggle() {
      var slider = document.getElementById("nav-slide");
      slider.style.height = window.innerHeight - 60 + "px";
      if(slider.style.left == "0px") {
        slider.style.left = "-250px";
      }
      else {
        slider.style.left = "0px";
      }
    }