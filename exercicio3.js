function calcular() {
  const comprimento = parseFloat(document.getElementById("comprimento").value);
  const dc = parseFloat(document.getElementById("dc").value);
  const largura = parseFloat(document.getElementById("largura").value);
  const dl = parseFloat(document.getElementById("dl").value);

  const ncp = comprimento/dl + 1;
  const ncj = largura/dc + 1;

  document.getElementById("ncp").innerText = ncp.toFixed(2);
  document.getElementById("ncj").innerText = ncj.toFixed(2);
}
