$(document).ready(function() {
//	$.material.init();

	$(function() {
		$(".btn-toggle").click(function(e) {
			e.preventDefault();
			el = $(this).data('element');
			$(el).toggle();
		});
	});

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
