$(document).ready(function() {
	// $.material.init();

	var maquinaLavar = $('#maquinaLavar');
	var tanque = $('#tanque');
	var descarga = $('#descarga');
	var piaBanheiro = $('#piaBanheiro');
	var chuveiro = $('#chuveiro');
	var piaCozinha = $('#piaCozinha');
	var lavaLouca = $('#lavaLoucas');
	
	function deixarDivsInvisiveis() {
		$('#idHome').toggle();
		$('#idPqEconomizar').toggle();
		$('#idComoEcon').toggle();
		$('#idCalculeConsumo').toggle();
		$('#idCuriosidade').toggle();
		$('#idVazamento').toggle();
	}

	$('#btnHome').click(function() {
		$('#idHome').show();
		$('#idPqEconomizar').hide();
		$('#idComoEcon').hide();
		$('#idCalculeConsumo').hide();
		$('#idCuriosidade').hide();
		$('#idVazamento').hide();
		$('#nav-slide').css('left', -250);
	});

	$('#btnPqEconomizar').click(function() {
		$('#idHome').hide();
		$('#idPqEconomizar').show();
		$('#idComoEcon').hide();
		$('#idCalculeConsumo').hide();
		$('#idCuriosidade').hide();
		$('#idVazamento').hide();
		$('#nav-slide').css('left', -250);
	});

	$('#btnComoEcon').click(function() {
		$('#idHome').hide();
		$('#idPqEconomizar').hide();
		$('#idComoEcon').show();
		$('#idCalculeConsumo').hide();
		$('#idCuriosidade').hide();
		$('#idVazamento').hide();
		$('#nav-slide').css('left', -250);
	});

	$('#btnCalcule').click(function() {
		$('#idHome').hide();
		$('#idPqEconomizar').hide();
		$('#idComoEcon').hide();
		$('#idCalculeConsumo').show();
		$('#idCuriosidade').hide();
		$('#idVazamento').hide();
		$('#nav-slide').css('left', -250);
	});
		$('#btnCuriosidade').click(function() {
		$('#idHome').hide();
		$('#idPqEconomizar').hide();
		$('#idComoEcon').hide();
		$('#idCalculeConsumo').hide();
		$('#idCuriosidade').show();
		$('#idVazamento').hide();
		$('#nav-slide').css('left', -250);
	});
		$('#btnVazamentos').click(function() {
		$('#idHome').hide();
		$('#idPqEconomizar').hide();
		$('#idComoEcon').hide();
		$('#idCalculeConsumo').hide();
		$('#idCuriosidade').hide();
		$('#idVazamento').show();
		$('#nav-slide').css('left', -250);
	});


	$(document).click(function(event) {
		if (event.target.id != "nav-slide" && event.target.id != "nav-btn" && event.target.id != "btnMenu") {
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
	
	$('#calcular').click(function() {
		var soma = 0;
		
		if(maquinaLavar.val() != null) {
			soma += maquinaLavar.val() * 19;
		}
		
		if(tanque.val() != null) {
			soma += tanque.val() * 15;
		}
		
		if(descarga.val() != null) {
			soma += descarga.val() * 6;
		}
		
		if(piaBanheiro.val() != null) {
			soma += piaBanheiro.val() * 15;
		}
		
		if(chuveiro.val() != null) {
			soma += chuveiro.val() * 12;
		}
		
		if(piaCozinha.val() != null) {
			soma += piaCozinha.val() * 15;
		}
		
		if(lavaLouca.val() != null) {
			soma += lavaLouca.val() * 2;
		}
		
		/**
		 *  resultado da soma esta aperecendo em um alert
		 */
		
		alert(soma);
	});
	
	$('#limpar').click(function() {
		maquinaLavar.val('');
		tanque.val('');
		descarga.val('');
		piaBanheiro.val('');
		chuveiro.val('');
		piaCozinha.val('');
		lavaLouca.val('');
	});

	deixarDivsInvisiveis();
});

