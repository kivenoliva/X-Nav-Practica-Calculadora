jQuery(document).ready(function() {

//----------------------------------------------------------------------------------------------------------------------//
// Funciones y variables que llamo luego cuando se producen los eventos //
    var operando1;
    var operando2;
    var operacion;
    var acumulado = "";
 
    function guardarOperando1(str2){
        if (acumulado === ""){
            alert ("Debes introducir primer operando antes de pulsar operacion");
        }else{
            operando1 = parseInt(acumulado);
            operacion = str2;
            acumulado = acumulado + str2;
            $("#display p").html(acumulado);
        }
    };
    
    function igual(){
        if ((!operando1) && (operando1 != 0)){
            alert("No hay primer operando para hacer operacion");
        }else{
            switch (operacion){
                case "+": 
                    var num = acumulado.split("+");
                    operando2 = parseInt(num[1]);
                    if ((!operando2) && (operando2 != 0)){
                        alert("Introduce segundo operando para hacer operacion");
                    }else{
                        acumulado = operando1 + operando2;
                        $("#display p").html(acumulado);
                        //acumulado = "";
                        return;
                    }
                case "x":
                    var num = acumulado.split("x");
                    operando2 = parseInt(num[1]);
                    if ((!operando2) && (operando2 != 0)){
                        alert("Introduce segundo operando para hacer operacion");
                    }else{
                        acumulado = operando1 * operando2;
                        $("#display p").html(acumulado);
                        //acumulado = "";
                        return;
                    }
                case "/":
                    var num = acumulado.split("/");
                    operando2 = parseInt(num[1]);
                    if ((!operando2) && (operando2 != 0)){
                        alert("Introduce segundo operando para hacer operacion");
                    }else{
                        acumulado = operando1 / operando2;
                        $("#display p").html(acumulado);
                        //acumulado = "";
                        return;
                    }
                case "-":
                    var num = acumulado.split("-");
                    operando2 = parseInt(num[1]);
                    if ((!operando2) && (operando2 != 0)){
                        alert("Introduce segundo operando para hacer operacion");
                    }else{
                        acumulado = operando1 - operando2;
                        $("#display p").html(acumulado);
                        //acumulado = "";
                        return;
                    }
                default:
            }
        }
    };
    
    function anadirNumero(str2){
    
        acumulado = acumulado + str2;
        $("#display p").html(acumulado);
    
    };
    
    function organizarTeclas(keycode){
        if (keycode > 47 && keycode < 58){ 
            var numeroPulsado = keycode - 48;          
            var str2 = "";
            var str2 = str2 + numeroPulsado;
            anadirNumero(str2);
        }else if (keycode === 43){//suma
            guardarOperando1("+");
        }else if (keycode === 45){
            guardarOperando1("-");
        }else if (keycode === 120){
            guardarOperando1("x");
        }else if (keycode === 47){
            guardarOperando1("/");
        }else if (keycode === 61){
            igual();
        }else if (keycode === 99 || keycode === 67){
            acumulado = "";
            $("#display p").html(""); 
        }
    };
    
 
//--------------------------------------------------------------------------------------------------------------------------------//

// $$$$$$$$$$$$$$$$$$$$$$$$ Eventos con JQuery $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ //

    
    // Evento de que me pulsan cualquier boton con el raton
    $("#botones button").click(function() {   
        
	    var str2 = $(this).html();            //lo que he pulsado
	    console.log(acumulado.length);
	    
	    switch (str2){
	        case "+":
	            if ($("#display p").html() === "OFF"){
	                alert("Enciende la calculadora");	                
	            }else{
	                guardarOperando1(str2);  
	            }	
	            return;            
	        case "=":
	            if ($("#display p").html() === "OFF"){
	                alert("Enciende la calculadora");	                
	            }else{
	                igual();
                }
	            return;
            case "C":
                if ($("#display p").html() === "OFF"){
	                alert("Enciende la calculadora");	                
	            }else{
                    acumulado = "";
                    $("#display p").html("");
                }
                return;
            case "-":
                if ($("#display p").html() === "OFF"){
	                alert("Enciende la calculadora");	                
	            }else{
                    guardarOperando1(str2);
                }
                return;
            case "x":
                if ($("#display p").html() === "OFF"){
	                alert("Enciende la calculadora");	                
	            }else{
                    guardarOperando1(str2);
                }
                return;
            case "/": 
                if ($("#display p").html() === "OFF"){
	                alert("Enciende la calculadora");	                
	            }else{
                    guardarOperando1(str2);
                }
                return;
            case "OFF/ON":
                if ($("#display p").html() === "OFF"){
                    $("#display p").html("ON");
                }else{
                    acumulado = "";
                    $("#display p").html("OFF");
                }
                return;
	        default:
	            if ($("#display p").html() === "OFF"){
	                alert("Enciende la calculadora");	                
	            }else{
	                anadirNumero(str2);
	            }
	            return;      
	    }    
    });
    
    
    //Evento de que me pulsan alguna tecla
    $(window).keypress(function(tecla) {
        var keycode = tecla.which;//me devuelve el keycode
        
        if ($("#display p").html() === "OFF"){
            alert("Enciende la calculadora");	                
        }else{
            organizarTeclas(keycode);
        }
    });
    
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ //    
    
});
