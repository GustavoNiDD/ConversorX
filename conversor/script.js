function converter() {
    var valor = document.getElementById("valor").value;
    var baseSelecionada = document.getElementById("base").value;

    var decimal;
    var binario;
    var hexadecimal;

    if (baseSelecionada === "decimal") {
      decimal = parseInt(valor, 10);
      binario = decimal.toString(2);
      hexadecimal = decimal.toString(16).toUpperCase();
    } else if (baseSelecionada === "binario") {
      decimal = parseInt(valor, 2);
      binario = valor;
      hexadecimal = decimal.toString(16).toUpperCase();
    } else if (baseSelecionada === "hexadecimal") {
      decimal = parseInt(valor, 16);
      binario = decimal.toString(2);
      hexadecimal = valor.toUpperCase();
    }

    document.getElementById("decimal").value = decimal;
    document.getElementById("binario").value = binario;
    document.getElementById("hexadecimal").value = hexadecimal;
  }

  function efeito() {
    document.getElementById("timeSonic").style.width = "120px";
    document.getElementById("timeSonic").style.transform = "scaleX(-1)";

      document.getElementById("timeSonic").src = "img/sonic-dancing.gif"

    const testando3 = setInterval(() => {
        document.getElementById("timeSonic").src = "img/sonicTimegif.gif";
        document.getElementById("timeSonic").style.transform = "scaleX(1)";
        document.getElementById("timeSonic").style.width = "100px";
        clearInterval(testando3);
  
    }, 6000);

    
    
  }

