function calcular() {
      const comprimento = parseFloat(document.getElementById("comprimento").value);
      const diametro = parseFloat(document.getElementById("diametro").value);
      const resistividade = parseFloat(document.getElementById("resistividade").value);
    const fatorReducao = parseFloat(document.getElementById("fatorReducao").value) || 1;

     const modelo = document.getElementById("modelo").value;

      // Exemplo de uso dos valores
      console.log("Comprimento:", comprimento);
      console.log("Diâmetro:", diametro);
      console.log("Modelo:", modelo);
      
     const resistividadeParcial = (resistividade/(2*Math.PI*comprimento)) * Math.log((4*comprimento)/(diametro*0.0254))
     
     const resultado = resistividadeParcial * fatorReducao;
     

      document.getElementById("resultado").innerText =
        `Resultado: ${resultado.toFixed(2)}`;
    }

function mudarModelo() {
  const modelo = document.getElementById("modelo").value;
  console.log(modelo);
  if(modelo === 'RT simples'){
     document.getElementById("fatorReducaoLabel").style.display = 'none'
  } else {
    document.getElementById("fatorReducaoLabel").style.display = 'block'
  }
}
