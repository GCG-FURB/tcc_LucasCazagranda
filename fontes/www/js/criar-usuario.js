﻿$(document).ready(function() {

	$(".cad-usu").click(function() {
		// Insere o novo usuario com a senha e perfil informados
		var dados = {
			"usuario" : $(".usuario").val(),
			"senha"   : $(".senha").val(),
			"perfil"  : $("select[name=perfil]").val(),
		};    
		$.ajax({
		    type     : "post",
		    url      : "scripts/criar-usuario.php",
		    data     : dados,
		    dataType : "json",
		    success  : function(ret) {
		    	$("body").removeClass("loading");
		   		if (ret.erro) {
			    	alert(ret.msg);
			    }
			    else {
			    	location.href = "index.html";
				}			    	
		    },
		    error    : function(ret) {
		    	$("body").removeClass("loading");
		   		alert("Erro no servidor (TIMEOUT)!");
		    },
		    beforeSend: function() {
		      	$("body").addClass("loading");
		    },
        	complete: function() { 
				$("body").removeClass("loading");
        	}
		});
	});

});
